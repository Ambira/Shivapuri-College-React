import { useState } from "react";

const TEACHING = [
  {name:"Ajit KC", position:"Lecturer", contact:"9849185233"},
  {name:"Bhim Karki", position:"Lecturer", contact:"9851081451"},
  {name:"Bikram Shrestha", position:"Lecturer", contact:"9851183022"},
  {name:"Bishal Lamichhane", position:"Lecturer", contact:"9851059023"},
  {name:"Dibakar Durdarshi", position:"Lecturer", contact:"9841264440"},
  {name:"Doleshwor Paudel", position:"Lecturer", contact:"9843013299"},
  {name:"Dr. Boj Bahadur Budhathoki", position:"Lecturer", contact:"9841563085"},
  {name:"Shambhu Nepal", position:"Lecturer", contact:"9851098158"},
  {name:"Sharad Chandra Pandey", position:"Lecturer", contact:"9841910387"},
  {name:"Sindhu Tuladhar", position:"Lecturer", contact:"9841503045"},
  {name:"Sujan Sitaula", position:"Lecturer", contact:"9841281497"}
];

export default function Staff() {
  const [q, setQ] = useState("");

  const filtered = TEACHING.filter(t =>
    (t.name + " " + t.position + " " + t.contact).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section className="py-14 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-scblue pt-6">Teaching Staff</h1>

      <div className="mt-4">
        <input
          className="px-4 py-2 border rounded w-full md:w-1/3"
          placeholder="Search staff..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full table-auto bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.name} className="border-t">
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.position}</td>
                <td className="px-4 py-3">{s.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="mt-4 text-gray-600">No results.</p>}
      </div>
    </section>
  );
}
