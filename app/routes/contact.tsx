import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mohammed Dwina | Contact" },
    {
      name: "description",
      content: "Contact Mohammed Dwina via email or social media.",
    },
  ];
}

export default function Contact() {
  const accentColor = "#10b981";
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-4">
        Reach me via email or connect on social media.
      </p>
      <p className="mb-4">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:dwinatech@hotmail.com"
          className="text-[color:var(--accent)]"
          style={{ color: accentColor }}
        >
          dwinatech@hotmail.com
        </a>
      </p>
      <div className="flex gap-4">
        <a
          target="blanket"
          href="https://github.com/dwinatech"
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          GitHub
        </a>
        <a
          target="blanket"
          href="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
