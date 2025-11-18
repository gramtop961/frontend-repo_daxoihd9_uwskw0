import { Zap, FileText, Users, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant drafts",
    desc: "Go from idea to structured PRD with user stories, acceptance criteria, and success metrics in seconds.",
  },
  {
    icon: FileText,
    title: "Crystal clarity",
    desc: "Auto-generate scope, non-goals, edge cases, and dependencies so nothing falls through the cracks.",
  },
  {
    icon: Users,
    title: "Stakeholder alignment",
    desc: "Share, comment, and version PRDs. Keep product, eng, and design on the same page.",
  },
  {
    icon: Settings,
    title: "Custom templates",
    desc: "Bring your team's format. Our AI adapts to your voice, terminology, and standards.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-200/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
