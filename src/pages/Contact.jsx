import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    // For demo, just show modal/thank you — replace with API call.
    setSent(true);
    setForm({name:"", email:"", message:""});
    setTimeout(()=> setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-14 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-scblue pt-6">Contact Us</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-semibold">Contact Details</h2>
          <p className="mt-2 text-gray-700">Shivapuri Secondary School and College, Maharajganj, Thirbam Sadak, Kathmandu</p>
          <p className="mt-2 text-sm text-gray-700">Email: shivapuri@enet.com.np</p>
          <p className="mt-1 text-sm text-gray-700">Admin: +977-1-4410877 | +977-1-4422877</p>
          <div className="mt-4 text-sm text-gray-500">
            PO Box: 4789, Kathmandu 44600
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-semibold">Send a message</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input className="w-full px-3 py-2 border rounded" placeholder="Your name" value={form.name}
                   onChange={(e)=> setForm({...form, name:e.target.value})} />
            <input className="w-full px-3 py-2 border rounded" placeholder="Your email" value={form.email}
                   onChange={(e)=> setForm({...form, email:e.target.value})} />
            <textarea className="w-full px-3 py-2 border rounded" rows="4" placeholder="Message" value={form.message}
                      onChange={(e)=> setForm({...form, message:e.target.value})} />
            {error && <div className="text-sm text-red-600">{error}</div>}
            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 bg-scblue text-white rounded">Send</button>
              {sent && <div className="text-green-600">Thank you! Your message has been sent.</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
