export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="font-heading text-xl">Rynhalt</div>
      <ul className="flex items-center gap-6 text-sm uppercase tracking-wide">
        <li>
          <a href="#quest" className="hover:text-accent transition-colors">
            Quest Mode
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
