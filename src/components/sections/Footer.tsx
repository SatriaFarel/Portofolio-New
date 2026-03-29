import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-blue-400 font-medium">Satria Farel</span>. All rights reserved.
        </p>
        
        {/* <div className="flex items-center gap-6">
          <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
        </div> */}

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900 border border-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
