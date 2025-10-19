"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Application } from "pixi.js";
import { Application as PixiApplication, Container, Graphics } from "pixi.js";

type Tile = {
  x: number;
  y: number;
};

type Hotspot = {
  id: string;
  position: Tile;
};

interface PrototypeStageProps {
  gridDimensions: { cols: number; rows: number };
  walkableTiles: Tile[];
  hotspots: Hotspot[];
  onHotspotChange: (projectId: string | null) => void;
  tileSize?: number;
}

const DEFAULT_TILE_SIZE = 64;

const tileKey = (tile: Tile) => `${tile.x},${tile.y}`;

export default function PrototypeStage({
  gridDimensions,
  walkableTiles,
  hotspots,
  onHotspotChange,
  tileSize = DEFAULT_TILE_SIZE,
}: PrototypeStageProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const heroRef = useRef<Graphics | null>(null);
  const heroPosition = useRef({ x: 0, y: 0 });
  const heroTarget = useRef({ x: 0, y: 0 });
  const initialTileRef = useRef<Tile>(walkableTiles[0] ?? { x: 0, y: 0 });

  const [heroTile, setHeroTile] = useState<Tile>(
    () => walkableTiles[0] ?? { x: 0, y: 0 },
  );
  const [isFocused, setIsFocused] = useState(false);

  const walkableSet = useMemo(
    () => new Set(walkableTiles.map(tileKey)),
    [walkableTiles],
  );

  const hotspotMap = useMemo(() => {
    const map = new Map<string, string>();
    hotspots.forEach((hotspot) => {
      map.set(tileKey(hotspot.position), hotspot.id);
    });
    return map;
  }, [hotspots]);

  const stageWidth = gridDimensions.cols * tileSize;
  const stageHeight = gridDimensions.rows * tileSize;

  const walkableSignature = useMemo(
    () => walkableTiles.map(tileKey).join("|"),
    [walkableTiles],
  );

  const hotspotSignature = useMemo(
    () =>
      hotspots
        .map((hotspot) => `${tileKey(hotspot.position)}:${hotspot.id}`)
        .join("|"),
    [hotspots],
  );

  useEffect(() => {
    initialTileRef.current = heroTile;
  }, [heroTile]);

  useEffect(() => {
    const currentKey = tileKey(heroTile);
    if (!walkableSet.has(currentKey)) {
      const fallback = walkableTiles[0] ?? { x: 0, y: 0 };
      setHeroTile(fallback);
      initialTileRef.current = fallback;
    }
  }, [heroTile, walkableSet, walkableTiles]);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      if (!canvasRef.current) {
        return;
      }

      const app = new PixiApplication();
      await app.init({
        backgroundAlpha: 0,
        width: stageWidth,
        height: stageHeight,
        antialias: false,
      });

      if (cancelled) {
        app.destroy(true);
        return;
      }

      canvasRef.current.innerHTML = "";
      canvasRef.current.appendChild(app.canvas);
      app.canvas.style.width = "100%";
      app.canvas.style.height = "100%";

      appRef.current = app;
      const stage = app.stage;
      stage.removeChildren();

      const tileLayer = new Container();
      const walkwayColor = 0x1f2a78;
      const backgroundColor = 0x0f102a;

      for (let y = 0; y < gridDimensions.rows; y += 1) {
        for (let x = 0; x < gridDimensions.cols; x += 1) {
          const key = tileKey({ x, y });
          const isWalkable = walkableSet.has(key);

          const tile = new Graphics();
          tile.rect(0, 0, tileSize, tileSize);
          tile.fill({
            color: isWalkable ? walkwayColor : backgroundColor,
            alpha: isWalkable ? 0.9 : 0.45,
          });
          tile.stroke({ color: 0x12143a, width: 1, alpha: 0.7 });
          tile.position.set(x * tileSize, y * tileSize);
          tileLayer.addChild(tile);
        }
      }

      stage.addChild(tileLayer);

      hotspots.forEach((hotspot) => {
        const marker = new Graphics();
        const radius = tileSize / 4;
        marker.circle(tileSize / 2, tileSize / 2, radius);
        marker.fill({ color: 0xf4d03f, alpha: 0.85 });
        marker.stroke({ color: 0xffffff, width: 2, alpha: 0.6 });
        marker.position.set(
          hotspot.position.x * tileSize,
          hotspot.position.y * tileSize,
        );
        stage.addChild(marker);
      });

      const hero = new Graphics();
      hero.circle(tileSize / 2, tileSize / 2, tileSize / 3.2);
      hero.fill({ color: 0xf8f6f2 });
      hero.stroke({ color: 0xf4d03f, width: 3 });
      const initialTile = initialTileRef.current;
      hero.position.set(initialTile.x * tileSize, initialTile.y * tileSize);
      stage.addChild(hero);

      heroRef.current = hero;
      heroPosition.current = { x: hero.x, y: hero.y };
      heroTarget.current = { x: hero.x, y: hero.y };

      app.ticker.add(() => {
        if (!heroRef.current) {
          return;
        }

        const deltaX = heroTarget.current.x - heroPosition.current.x;
        const deltaY = heroTarget.current.y - heroPosition.current.y;
        const easing = 0.18;

        if (Math.abs(deltaX) < 0.1 && Math.abs(deltaY) < 0.1) {
          heroPosition.current.x = heroTarget.current.x;
          heroPosition.current.y = heroTarget.current.y;
        } else {
          heroPosition.current.x += deltaX * easing;
          heroPosition.current.y += deltaY * easing;
        }

        heroRef.current.position.set(
          heroPosition.current.x,
          heroPosition.current.y,
        );
      });
    };

    void init();

    return () => {
      cancelled = true;
      heroRef.current = null;
      heroPosition.current = { x: 0, y: 0 };
      heroTarget.current = { x: 0, y: 0 };
      if (appRef.current) {
        appRef.current.destroy(true);
        appRef.current = null;
      }
    };
  }, [
    gridDimensions.cols,
    gridDimensions.rows,
    stageHeight,
    stageWidth,
    tileSize,
    walkableSignature,
    hotspotSignature,
    walkableSet,
    hotspots,
  ]);

  useEffect(() => {
    heroTarget.current = {
      x: heroTile.x * tileSize,
      y: heroTile.y * tileSize,
    };
  }, [heroTile, tileSize]);

  useEffect(() => {
    const key = tileKey(heroTile);
    onHotspotChange(hotspotMap.get(key) ?? null);
  }, [heroTile, hotspotMap, onHotspotChange]);

  const moveHero = useCallback(
    (delta: Tile) => {
      const nextTile = {
        x: heroTile.x + delta.x,
        y: heroTile.y + delta.y,
      };
      const key = tileKey(nextTile);
      if (walkableSet.has(key)) {
        setHeroTile(nextTile);
      }
    },
    [heroTile, walkableSet],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const key = event.key.toLowerCase();
      let handled = true;

      switch (key) {
        case "arrowup":
        case "w":
          moveHero({ x: 0, y: -1 });
          break;
        case "arrowdown":
        case "s":
          moveHero({ x: 0, y: 1 });
          break;
        case "arrowleft":
        case "a":
          moveHero({ x: -1, y: 0 });
          break;
        case "arrowright":
        case "d":
          moveHero({ x: 1, y: 0 });
          break;
        default:
          handled = false;
      }

      if (handled) {
        event.preventDefault();
      }
    },
    [moveHero],
  );

  const handleMoveButton = useCallback(
    (delta: Tile) => () => moveHero(delta),
    [moveHero],
  );

  return (
    <div className="prototype-stage flex flex-col gap-4">
      <div
        ref={focusRef}
        role="application"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label="Interactive project prototype map"
        className={`relative w-full overflow-hidden rounded-lg border border-gold/40 bg-[rgba(15,16,42,0.6)] ${
          isFocused ? "ring-2 ring-gold ring-offset-2 ring-offset-[rgba(15,16,42,0.8)]" : ""
        }`}
        style={{
          aspectRatio: `${stageWidth} / ${stageHeight}`,
        }}
      >
        <div
          ref={canvasRef}
          className="absolute inset-0"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute left-4 top-4 rounded-md border border-gold/30 bg-[rgba(20,24,60,0.72)] px-3 py-2 text-xs text-foreground/70 shadow-[0_0_12px_rgba(10,14,40,0.35)]">
          Use the arrow keys or on-screen buttons to move the marker.
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
        <span>Controls</span>
        <div className="grid grid-cols-3 gap-2">
          <div />
          <button
            type="button"
            onClick={handleMoveButton({ x: 0, y: -1 })}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-[rgba(15,16,42,0.6)] text-foreground hover:border-gold/70"
            aria-label="Move marker up"
          >
            ↑
          </button>
          <div />
          <button
            type="button"
            onClick={handleMoveButton({ x: -1, y: 0 })}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-[rgba(15,16,42,0.6)] text-foreground hover:border-gold/70"
            aria-label="Move marker left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleMoveButton({ x: 0, y: 1 })}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-[rgba(15,16,42,0.6)] text-foreground hover:border-gold/70"
            aria-label="Move marker down"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={handleMoveButton({ x: 1, y: 0 })}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-[rgba(15,16,42,0.6)] text-foreground hover:border-gold/70"
            aria-label="Move marker right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
