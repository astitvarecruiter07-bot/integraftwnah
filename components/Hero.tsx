export default function Hero() {
  return (
    <section
      className="relative min-h-[650px] bg-cover bg-center"
      style={{ backgroundImage: "url('https://integrafin.tax/images/anews-cons.jpg')" }}
    >
      <div className="hero-overlay absolute inset-0" />
      <div className="container-wide relative py-24 text-white">
        <p className="text-lg font-semibold mb-2">Successful & Professional</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight mb-5">Professional Tax & Accounting Services in Katy, TX</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-100 mb-10">
          IntegraFin provides trusted tax and business advisory services, Simplifying your finances with expert
          accounting, tax filing, and business advisory services. Get hassle-free solutions tailored to your need
        </p>
        <a href="#contact" className="btn-brand">Contact Us</a>
      </div>
    </section>
  );
}
