import HeroSprite from "./HeroSprite";

export default function RpgScene() {
  return (
    <section
      id="quest"
      className="relative mx-auto flex h-[480px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl border border-accent/40 bg-royal-blue/80 shadow-[0_0_40px_rgba(31,45,128,0.35)]"
      aria-label="Quest Mode overview"
    >
      <HeroSprite />
      {/* TODO: wire up tile map, quest triggers, and dialogue overlays */}
      <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-lg border-2 border-gold bg-parchment/95 p-4 text-center text-sm text-ink-black shadow-pixel">
        Quest Mode coming soon — guide the hero across the realm to discover
        projects as legendary quests.
      </div>
    </section>
  );
}
