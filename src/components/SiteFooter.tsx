export default function SiteFooter() {
  return (
    <footer className="px-6 pb-10 text-center text-xs text-foreground/60 md:px-12 lg:px-24">
      Crafted with curiosity &amp; nostalgia — © {new Date().getFullYear()} Marcus
      Izumi.
    </footer>
  );
}
