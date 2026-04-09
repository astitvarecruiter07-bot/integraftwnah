import Image from 'next/image';

const nav = ['Home', 'ABOUT', 'Services', 'Industries', 'Careers', 'Client Portal', 'Contact'];

export default function Header() {
  return (
    <header>
      <div className="topbar py-2">
        <div className="container-wide flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-4 text-xs opacity-90">
            <span>contact@integrafin.tax</span>
            <span>+1-832-647-1819</span>
          </div>
          <p className="text-xs">IntegraFin LLC, 2039 N Mason Rd Suite 604, Katy TX 77449, USA</p>
        </div>
      </div>
      <div className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container-wide flex h-24 items-center justify-between gap-4">
          <Image src="https://integrafin.tax/images/logo.png" width={270} height={80} alt="IntegraFin" />
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-slate-800">
            {nav.map((item) => (
              <a href="#" key={item} className="hover:text-brand transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
