import { getTravelContent } from "@/lib/content/repository";

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
      <p className="mt-2 text-sm text-slate-400">{helper}</p>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const content = await getTravelContent();
  const activeTours = content.tours.filter((tour) => tour.status === "active").length;
  const featuredTours = content.tours.filter((tour) => tour.isFeatured).length;

  return (
    <div className="space-y-8">
      <section>
        <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Overview</div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Admin Dashboard</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          This is the new local-first admin foundation. Tours are already wired to the shared
          repository, and the next modules can now build on the same shell and storage layer.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Tours" value={String(content.tours.length)} helper="All tours in local storage." />
        <StatCard label="Active" value={String(activeTours)} helper="Currently proceeding tours." />
        <StatCard label="Featured" value={String(featuredTours)} helper="Shown on the homepage package section." />
        <StatCard label="Inquiries" value={String(content.inquiries.length)} helper="Placeholder module for the next phase." />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400">Current focus</div>
            <h2 className="mt-2 text-xl font-semibold text-white">Tours are now the source of truth</h2>
          </div>
          <div className="text-sm text-slate-400">Data file: `data/travel-content.json`</div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.tours.slice(0, 4).map((tour) => (
            <div key={tour.id} className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-amber-400">{tour.region}</div>
                  <div className="mt-2 text-base font-semibold text-white">{tour.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{tour.destination}</div>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {tour.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
