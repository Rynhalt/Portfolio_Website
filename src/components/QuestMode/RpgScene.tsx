import HeroSprite from "./HeroSprite";

export default function RpgScene() {
  return (
    <section
      className="relative mx-auto flex h-[480px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl border border-accent/40 bg-royal-blue/80 shadow-[0_0_40px_rgba(31,45,128,0.35)]"
      aria-label="Interactive prototype overview"
    >
      <HeroSprite />
      {/* TODO: integrate tile map, interaction triggers, and overlays */}
      <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-lg border-2 border-gold bg-parchment/95 p-4 text-center text-sm text-ink-black shadow-pixel">
        Prototype mode is in progress. Soon you&apos;ll be able to walk through a
        pixel scene and open project highlights as you explore.
      </div>
    </section>
  );
}
