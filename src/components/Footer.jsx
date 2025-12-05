export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-scblue font-bold text-xl">Shivapuri College</h3>
          <p className="text-sm text-gray-300 mt-2">
            Maharajganj, Thirbam Sadak, Kathmandu, Nepal. PO Box: 4789
          </p>
          <p className="text-sm mt-2">Email: shivapuri@enet.com.np</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/staff" className="hover:text-white">Staff</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm">Administrative Dept: +977-1-4410877</p>
          <p className="mt-1 text-sm">Admission: +977-1-4422877</p>
          <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} Shivapuri College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
