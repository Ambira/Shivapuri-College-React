export default function Programs() {
  return (
    <section className="py-14 max-w-5xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-scblue pt-6">Offered Programs</h1>

      <div className="mt-6 grid gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Bachelor of Business Studies (BBS)</h2>
          <p className="mt-2 text-gray-700">
            Four-year undergraduate degree affiliated with Tribhuvan University. The BBS program focuses on management,
            accounting, finance, marketing and business law to prepare students for industry roles and entrepreneurship.
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            <li>Duration: 4 years</li>
            <li>Eligibility: +2 or equivalent</li>
            <li>Career Paths: Managerial, Banking, Accounting, Entrepreneurship</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Additional Programs (Planned)</h2>
          <p className="mt-2 text-gray-700">Hotel Management, Travel & Tourism Management, Information Technology (coming soon).</p>
        </div>
      </div>
    </section>
  );
}
