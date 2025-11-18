import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "About – Mohammed Dwina" },
    {
      name: "description",
      content: "Profile, skills, and background of Mohammed Dwina.",
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
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        {/* Page Title */}
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        {/* Profile Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="leading-relaxed text-lg text-gray-700 mb-6">
            <strong>
              Senior Frontend Engineer focused on scalable and maintainable
              systems. BSc (Hons) Computing &amp; IT student at The Open
              University.
            </strong>
          </p>

          <p className="leading-relaxed text-lg text-gray-700">
            I am fascinated by software development. I am enthusiastic,
            responsible and keen to learn. As a junior developer, I enjoy
            learning new skills and responsibilities in both frontend and
            backend roles. I like working with design libraries for the web,
            such as Material-UI and Bootstrap, extending them to create unique,
            responsive layouts and animated UIs.
            <br />
            <br />I spend my free time with family and friends, playing
            football, going to the cinema, shopping and watching TV. My
            experiences in self-directed learning have made me confident when
            given tasks. My experience in the classroom has taught me to listen
            well to instructions, pay attention to details, and work well in a
            team.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Skills:</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Languages:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Node.js</li>
                <li>JavaScript (ES6)</li>
              </ul>
            </div>

            {/* Libraries */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Libraries:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Knex.js</li>
                <li>Bootstrap</li>
                <li>Express.js</li>
                <li>Material-UI</li>
                <li>Objection.js</li>
                <li>React.js (Hooks)</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Tools:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Eslint</li>
                <li>Webpack</li>
                <li>Chrome DevTools</li>
                <li>Git &amp; Github</li>
              </ul>
            </div>

            {/* Unit Testing */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Unit Test:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Jest</li>
                <li>Enzyme</li>
                <li>React Testing Library</li>
                <li>SuperTest</li>
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Databases:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>SQLite (v3)</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
