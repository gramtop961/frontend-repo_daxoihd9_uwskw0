import { Workflow, PencilLine, Share2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              Workflow
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">From idea to alignment in 3 steps</h2>
            <p className="mt-3 text-slate-200/80 max-w-xl">
              Skip the blank page. Let the AI draft, then you edit and share. Everyone gets clarity faster.
            </p>

            <ol className="mt-6 space-y-6">
              <li className="flex gap-4">
                <div className="h-9 w-9 shrink-0 rounded-xl bg-white/10 grid place-items-center text-white">1</div>
                <div>
                  <h3 className="text-white font-medium">Describe your product idea</h3>
                  <p className="text-slate-200/80 text-sm">Share goals, audience, and constraints. Bring an existing doc or start fresh.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-9 w-9 shrink-0 rounded-xl bg-white/10 grid place-items-center text-white">2</div>
                <div>
                  <h3 className="text-white font-medium">Generate a complete PRD</h3>
                  <p className="text-slate-200/80 text-sm">User stories, flows, edge cases, KPIs—instantly drafted with your voice.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-9 w-9 shrink-0 rounded-xl bg-white/10 grid place-items-center text-white">3</div>
                <div>
                  <h3 className="text-white font-medium">Edit, share, and align</h3>
                  <p className="text-slate-200/80 text-sm">Comment, version, and export. Keep product, design, and engineering in sync.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20" />
            <p className="mt-4 text-sm text-slate-200/80">
              Lightning-fast drafting paired with human control. You’re always in the driver’s seat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
