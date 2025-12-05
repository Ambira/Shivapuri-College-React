import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Facilities from "../components/Facilities";
import useReveal from "../hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <Stats />
      <Facilities />
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-scblue text-center">Why Shivapuri College?</h2>
        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
          Shivapuri College provides a high-quality management education with experienced faculty,
          modern facilities and strong industry connections — preparing students for the professional world.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="reveal p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Quality Teaching</h3>
            <p className="mt-2 text-sm text-gray-600">Experienced lecturers, blended teaching methods and project-based learning.</p>
          </div>
          <div className="reveal p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Industry Links</h3>
            <p className="mt-2 text-sm text-gray-600">Strong ties with businesses for internships and placements.</p>
          </div>
          <div className="reveal p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Student Support</h3>
            <p className="mt-2 text-sm text-gray-600">Counseling, scholarships and career guidance.</p>
          </div>
        </div>
      </section>
    </>
  );
}
