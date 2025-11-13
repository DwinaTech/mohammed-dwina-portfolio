import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohammed Dwina | About" },
    {
      name: "description",
      content: "Learn about Mohammed Dwina's education and career background.",
    },
  ];
}

export default function About() {
  return (
    <div
      className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f9f9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <main className="flex flex-col flex-grow px-6 py-12">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            Senior Frontend Engineer focused on scalable and maintainable
            systems. BSc (Hons) Computing & IT student at The Open University.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              BSc (Hons) Computing & IT — Software Development, The Open
              University
            </li>
            <li>Certifications: AWS, Node.js, Real-time Web</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
