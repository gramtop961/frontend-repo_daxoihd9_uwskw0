export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-slate-200/80">Start free. Upgrade when you’re ready.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-slate-200/80">For individuals and small teams</p>
            <div className="mt-4 text-4xl font-bold text-white">$0<span className="text-base text-slate-300">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
              <li>• Unlimited drafts</li>
              <li>• Basic templates</li>
              <li>• Export to Markdown</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium">Get started free</a>
          </div>

          <div className="relative rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
            <div className="absolute -top-3 right-6 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-medium text-white">Popular</div>
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-slate-200/80">For fast-moving teams</p>
            <div className="mt-4 text-4xl font-bold text-white">$29<span className="text-base text-slate-300">/user/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
              <li>• Everything in Starter</li>
              <li>• Custom templates</li>
              <li>• Commenting & versions</li>
              <li>• Jira & Linear sync</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl bg-fuchsia-500 text-white px-5 py-3 font-medium shadow-[0_10px_40px_-12px_rgba(236,72,153,0.5)] hover:shadow-[0_16px_50px_-12px_rgba(236,72,153,0.6)] transition-shadow">Start 14‑day trial</a>
          </div>
        </div>
      </div>
    </section>
  );
}
