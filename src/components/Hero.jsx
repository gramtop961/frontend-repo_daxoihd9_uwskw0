import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Live AI PRD assistant
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-white">
            Ship world‑class PRDs in minutes, not weeks.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            Describe your product idea. Our AI co-pilot drafts crisp, actionable product requirement documents, aligns stakeholders, and keeps you ahead of the competition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_40px_-12px_rgba(236,72,153,0.4)] hover:shadow-[0_16px_50px_-12px_rgba(236,72,153,0.5)] transition-shadow">Start free</a>
            <a href="#how" className="inline-flex justify-center items-center rounded-xl bg-white/10 text-white px-5 py-3 border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">See how it works</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.15),rgba(251,146,60,0.1),transparent_70%)] blur-3xl" />
      </div>
    </section>
  );
}
