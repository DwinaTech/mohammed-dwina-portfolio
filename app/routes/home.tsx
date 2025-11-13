import { Link } from "react-router";
import { Info, Mail, Briefcase, GraduationCap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function meta() {
  return [
    { title: "Mohammed Dwina | Home" },
    {
      name: "description",
      content:
        "Welcome to Mohammed Dwina's portfolio — Senior Frontend Software Engineer.",
    },
  ];
}

export default function Home() {
  const navItems = [
    {
      label: "About",
      path: "/about",
      icon: <Info size={26} />,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <Mail size={26} />,
    },
    {
      label: "Education",
      path: "/education",
      icon: <GraduationCap size={26} />,
    },
    {
      label: "Experience",
      path: "/experience",
      icon: <Briefcase size={26} />,
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f9f9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/26422326?v=4"
          alt="Mohammed Dwina"
          className="rounded-full w-52 h-52 object-cover mb-8 shadow-md"
        />
        <h2 className="text-5xl font-extrabold mb-6">Hello</h2>

        <div className="flex flex-wrap justify-center gap-6 mt-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex flex-col items-center justify-center w-28 h-28 rounded-full shadow-md transition-transform hover:scale-105 text-white"
              style={{ backgroundColor: "#06b6d4" }}
            >
              {item.icon}
              <span className="mt-1 text-sm font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
