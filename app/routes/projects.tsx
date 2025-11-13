import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohammed Dwina | Projects" },
    {
      name: "description",
      content: "Explore Mohammed Dwina's software development projects.",
    },
  ];
}

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded shadow hover:shadow-lg transition p-4"
          >
            <div className="h-40 bg-gray-100 mb-4 flex items-center justify-center">
              Project {i + 1} image
            </div>
            <h3 className="font-semibold mb-1">Project {i + 1}</h3>
            <p className="text-gray-600 text-sm">
              Short description of the project.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
