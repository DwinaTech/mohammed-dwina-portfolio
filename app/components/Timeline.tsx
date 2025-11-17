export default function Timeline({ items }: { items: any[] }) {
  const accent = "#06b6d4";

  return (
    <div className="relative pl-8 mt-8">
      {/* Vertical Line */}
      <div
        className="absolute inset-y-0 left-4 w-1 rounded-full"
        style={{ background: accent, opacity: 0.3 }}
      />

      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div
              className="absolute -left-1 top-2 w-4 h-4 rounded-full border-4"
              style={{ borderColor: accent, background: "white" }}
            />

            {/* Content */}
            <div className="ml-6">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.period}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
