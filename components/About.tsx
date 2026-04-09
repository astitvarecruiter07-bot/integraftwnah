import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
        <Image src="https://integrafin.tax/images/abouts.jpg" width={600} height={393} alt="About" className="rounded-md" />
        <div>
          <h3 className="section-title mb-4">About Us - IntegraFin</h3>
          <p className="leading-8 mb-6">
            IntegraFin is a trusted provider of comprehensive tax, accounting, and business advisory services. With a
            team of experienced Certified Public Accountants (CPAs), Chartered Accountants (CAs), and financial
            experts, we are committed to delivering high-quality, reliable, and secure financial solutions tailored to
            businesses and individuals.
          </p>
          <a href="#" className="btn-brand">Know More</a>
        </div>
      </div>
    </section>
  );
}
