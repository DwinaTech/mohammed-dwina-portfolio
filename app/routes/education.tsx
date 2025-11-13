import InfoCard from "../components/InfoCard";
import data from "../assets/data/educationData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  return (
    <div
      className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f9f9]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <main className="flex flex-col flex-grow px-6 py-12">
        <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Education
          </h1>

          <div className="space-y-8">
            {data.map((edu) => (
              <InfoCard key={edu.id} {...edu} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
