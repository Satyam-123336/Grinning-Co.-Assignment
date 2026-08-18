export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <div className="mb-8">
          <span className="font-cormorant text-2xl text-white tracking-widest uppercase">
            N.A.S.A. <span className="italic text-amber-500">Noir</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {["Shop", "Our Story", "Sustainability", "Contact", "Store Locator"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-spaceGrotesk text-xs uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-center w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-spaceGrotesk text-xs text-slate-600">
            © {new Date().getFullYear()} N.A.S.A. Noir. All rights reserved.
          </p>
          <p className="font-spaceGrotesk text-[10px] uppercase tracking-widest text-slate-700">
            For Assignment Purposes Only. Not affiliated with the real NASA.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
