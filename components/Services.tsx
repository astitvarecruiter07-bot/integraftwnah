import Image from 'next/image';

const core = [
  {
    title: 'Worry-Free Tax and Accounting Services',
    icon: 'https://integrafin.tax/images/cor-se-1.png',
    hover: 'https://integrafin.tax/images/cor-se-11.png',
    desc: 'Managing taxes and accounting can be stressful, but we make it easy. Our experts handle everything from bookkeeping to tax preparation, ensuring accuracy and compliance. Focus on growing your business while we take care of your financials.',
  },
  {
    title: 'Get the Highest Refund',
    icon: 'https://integrafin.tax/images/cor-se-2.png',
    hover: 'https://integrafin.tax/images/cor-se-22.png',
    desc: 'Maximize your tax refund with our expert filing services. We analyze every deduction and credit available to ensure you get the best possible return.',
  },
  {
    title: 'Free Tax Filing Estimates',
    icon: 'https://integrafin.tax/images/cor-se-3.png',
    hover: 'https://integrafin.tax/images/cor-se-33.png',
    desc: 'Know what to expect before you file. We provide free, no-obligation tax filing estimates so you can plan ahead.',
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <h2 className="section-title text-center mb-12">Core Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-7">
          {core.map((item) => (
            <article key={item.title} className="card-hover transition-all rounded-md border border-slate-200 p-7 shadow-card">
              <Image src={item.icon} width={78} height={78} alt="" className="mb-5" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="leading-8">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
