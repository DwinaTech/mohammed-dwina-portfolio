import type { Route } from "./+types/home";
import data from "../assets/data/experienceData";
import InfoCard from "~/components/InfoCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohammed Dwina | Experience" },
    {
      name: "description",
      content: "Explore Mohammed Dwina's professional experience and roles.",
    },
  ];
}

export default function Experience() {
  return (
    <div
      className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f9f9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <main className="flex flex-col flex-grow px-6 py-12">
        <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Experience
          </h1>

          <div className="space-y-8">
            {data.map((exp, index) => (
              <InfoCard key={index} {...exp} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
