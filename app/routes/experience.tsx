import type { Route } from "./+types/home";
import data from "../assets/data/experienceData";

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
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {data.map((job) => (
          <div className="p-4 border rounded">
            <h3 className="font-semibold">
              {job.role} — {job.company}
            </h3>
            <p className="text-gray-600 text-sm">{job.date}</p>
            <p className="text-gray-700 mt-2">{job.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
