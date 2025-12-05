const items = [
  {name:"Cafeteria", desc:"Clean & affordable food."},
  {name:"Library", desc:"Extensive resources & quiet zones."},
  {name:"Sports", desc:"Facilities for football, cricket & more."},
  {name:"Science Lab", desc:"Modern lab equipment."},
  {name:"Conference Hall", desc:"For seminars & events."},
  {name:"Multimedia", desc:"Projectors & audio systems."},
  {name:"Parking", desc:"Secure campus parking."},
  {name:"Counseling", desc:"Career & personal counseling."},
  {name:"Scholarships", desc:"Merit and need-based."}
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-scblue">Infrastructure / Facilities</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.name} className="reveal p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{i.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
