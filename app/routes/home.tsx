import type { Route } from "./+types/home";
import { User, Info, Briefcase, Folder, Mail } from "lucide-react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohammed Dwina | Home" },
    {
      name: "description",
      content:
        "Welcome to Mohammed Dwina's personal portfolio. Senior Frontend Software Engineer at SAS.",
    },
  ];
}

export default function Home() {
  const accentColor = "#10b981";

  const navItems = [
    { label: "About", icon: <Info size={32} />, path: "/about" },
    { label: "Experience", icon: <Briefcase size={32} />, path: "/experience" },
    // { label: "Projects", icon: <Folder size={32} />, path: "/projects" },
    { label: "Contact", icon: <Mail size={32} />, path: "/contact" },
    { label: "Profile", icon: <User size={32} />, path: "/about" },
  ];

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 font-sans"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/26422326?v=4"
        alt="Mohammed Dwina"
        className="rounded-full w-40 h-40 mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Mohammed Dwina</h1>
      <p className="text-xl text-gray-700 mb-8">
        Senior Frontend Software Engineer
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-lg transition-transform transform hover:scale-105"
            style={{ backgroundColor: accentColor, color: "white" }}
          >
            {item.icon}
            <span className="mt-2 font-semibold text-center">{item.label}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
