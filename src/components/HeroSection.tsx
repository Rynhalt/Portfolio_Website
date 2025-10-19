export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-6 px-6 py-24 text-center md:text-left"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-accent">
        Welcome to the Realm
      </span>
      <h1 className="font-heading text-4xl md:text-6xl leading-tight">
        Marcus Izumi — Systems Engineer on a Quest for Delightful UX
      </h1>
      <p className="max-w-2xl text-base md:text-lg text-foreground/80">
        This portfolio blends modern engineering rigor with retro RPG charm.
        Toggle between Modern and Quest modes to explore projects, experience,
        and craft.
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <a className="pixel-button" href="#projects">
          Enter Modern Mode
        </a>
        <a className="pixel-button pixel-button--ghost" href="#quest">
          Begin Quest Mode
        </a>
      </div>
    </section>
  );
}
