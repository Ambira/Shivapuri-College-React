export default function Stats() {
  const stats = [
    { label: "Students", value: "1700+" },
    { label: "BBS Students", value: "700+" },
    { label: "Employment Rate", value: "97%" },
    { label: "Teaching Staff", value: "75+" }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="reveal p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-scblue">{s.value}</div>
            <div className="mt-2 text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
