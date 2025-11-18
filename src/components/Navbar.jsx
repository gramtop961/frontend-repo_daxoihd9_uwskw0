import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 p-[2px] shadow-lg shadow-fuchsia-500/20">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <Sparkles className="h-5 w-5 text-fuchsia-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight">AuraPRD</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-slate-300 hover:text-white transition-colors hidden sm:inline">Log in</button>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10 backdrop-blur-md transition-colors">
            Get started
          </a>
          <button className="md:hidden text-slate-300 hover:text-white" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
