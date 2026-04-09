import Image from 'next/image';

const items = [
  ['https://integrafin.tax/images/team-1.png', '" IntegraFin has been instrumental in helping our business stay compliant and financially healthy."', 'John D - Small Business Owner'],
  ['https://integrafin.tax/images/team-2.png', '"The team at IntegraFin helped me navigate complex tax regulations with ease. Their knowledge and professionalism gave me peace of mind during tax season."', 'Sarah M - Independent Consultant'],
  ['https://integrafin.tax/images/team-3.png', '"I highly recommend IntegraFin for their personalized and efficient bookkeeping services. They truly understand the needs of small businesses and provide excellent financial guidance."', 'David L - Startup Founder'],
  ['https://integrafin.tax/images/team-4.png', '"Exceptional service! The team handled my tax filings seamlessly, ensuring compliance while optimizing my returns. I’ll definitely continue using their services."', 'Emily R - Real Estate Investor'],
] as const;

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#13212d] text-white">
      <div className="container-wide">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map(([img, quote, author]) => (
            <article key={author} className="rounded-md bg-white/10 p-6 border border-white/15">
              <div className="flex gap-4 items-start">
                <Image src={img} width={80} height={80} alt={author} className="rounded-full bg-white/70" />
                <div>
                  <p className="leading-7 mb-2">{quote}</p>
                  <p className="font-semibold text-brand">{author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
