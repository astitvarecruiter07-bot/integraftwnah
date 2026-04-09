export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container-wide grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="section-title mb-4">Request a Call Back</h2>
          <p className="mb-6">Find an advisor. Our staff can help work out what is right for you.</p>
          <form className="space-y-4">
            <input className="w-full border border-slate-300 rounded px-4 py-3" placeholder="Name" />
            <input className="w-full border border-slate-300 rounded px-4 py-3" placeholder="Email" />
            <select className="w-full border border-slate-300 rounded px-4 py-3">
              <option>Enquiry Type</option>
              <option>Individual Taxes</option>
              <option>Business Bookkeeping and Taxes</option>
              <option>New Business CPA Bookkeeping Outsourcing</option>
              <option>Other Business enquiry</option>
              <option>Other enquiry</option>
            </select>
            <textarea className="w-full border border-slate-300 rounded px-4 py-3 min-h-32" placeholder="Message" />
            <button className="btn-brand" type="button">Submit</button>
          </form>
        </div>
        <aside className="bg-[#13212d] text-white rounded-md p-10">
          <h3 className="text-2xl font-bold mb-4">Got any questions?</h3>
          <p className="leading-8 mb-8">We're here to help! Whether you need expert guidance on tax planning, accounting solutions, or business compliance, our team at COATC is ready to assist you.</p>
          <p className="text-slate-300">Speak to Customer Services</p>
          <p className="text-3xl font-bold text-brand">+1-832-647-1819</p>
        </aside>
      </div>
    </section>
  );
}
