import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0e1822] text-white pt-16 pb-8">
      <div className="container-wide grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <Image src="https://integrafin.tax/images/ftr-logo.png" width={260} height={57} alt="IntegraFin" className="mb-4" />
          <h4 className="font-bold mb-3">ABOUT US</h4>
          <p className="text-slate-300 leading-7">IntegraFin is a trusted provider of comprehensive tax, accounting, and business advisory services. With a team of experienced Certified Public Accountants (CPAs), Chartered Accountants (CAs), and financial experts.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">USEFUL LINKS</h4>
          <ul className="space-y-2 text-slate-300">
            <li>Home</li><li>Business - Tax & Accounting Services</li><li>Individual Tax Services</li><li>Tax Resolution Services</li><li>Additional Services</li><li>Industries We Serve</li><li>Consultation</li><li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">CONTACT DETAILS</h4>
          <p className="text-slate-300">contact@integrafin.tax</p>
          <p className="text-slate-300 mt-3">2039 N Mason Rd, Suite 604 Katy, TX 77449, USA</p>
          <p className="text-slate-300 mt-2">+1-832-647-1819</p>
        </div>
      </div>
      <div className="container-wide border-t border-white/10 pt-5 text-slate-400 text-sm">© IntegraFin</div>
    </footer>
  );
}
