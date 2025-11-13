import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  const active = "text-[#10b981] font-semibold";

  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <Link to="/">
        <h1 className="text-lg font-semibold tracking-tight">Mohammed Dwina</h1>
      </Link>

      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? active : "hover:text-[#10b981]"
          }
        >
          About
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? active : "hover:text-[#10b981]"
          }
        >
          Contact
        </Link>
        <Link
          to="/education"
          className={
            location.pathname === "/education" ? active : "hover:text-[#10b981]"
          }
        >
          Education
        </Link>
        <Link
          to="/experience"
          className={
            location.pathname === "/experience"
              ? active
              : "hover:text-[#10b981]"
          }
        >
          Experience
        </Link>
      </nav>
    </header>
  );
}
