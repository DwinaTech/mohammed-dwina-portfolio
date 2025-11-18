import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Download, User, Briefcase, Layers, Phone } from "lucide-react";

import cv from "../assets/data/MohammedCV.pdf";

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

export default function About() {
  const accent = "#06b6d4";

  const buttons = [
    { to: "/about", icon: User, label: "About" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/education", icon: Layers, label: "Education" },
    { to: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f9f9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <main className="flex flex-col flex-grow py-3">
        <div className="flex flex-col items-center text-center px-6 py-12 space-y-10">
          <img
            src="https://avatars.githubusercontent.com/u/26422326?v=4"
            alt="Mohammed Dwina"
            className="w-50 h-50 rounded-full shadow-lg object-cover"
          />

          <h1 className="text-4xl font-bold">Mohammed Dwina</h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Senior Frontend Engineer focused on scalable and maintainable
            systems.
          </p>

          {/* Download CV */}
          <a
            href={cv}
            download
            className="mt-4 inline-flex items-center gap-2 bg-[--accent] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
            style={{ backgroundColor: accent }}
          >
            <Download size={20} />
            Download CV
          </a>

          {/* Navigation Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {buttons.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="nav_link flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 shadow-md hover:shadow-lg transition text-gray-700"
                style={{ borderColor: accent }}
              >
                <Icon size={36} color={accent} />
                <span className="mt-2 text-md font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
