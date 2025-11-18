export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 p-8 sm:p-10 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to outpace Wix and the rest?</h2>
              <p className="mt-2 text-slate-200/85 max-w-xl">Join teams shipping faster with AI‑powered PRDs. Start free—upgrade when you’re scaling.</p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
              <button type="submit" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium">Join the waitlist</button>
              <p className="sm:col-span-2 text-xs text-white/70">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
