import Link from "next/link";
import { activeTours } from "@/lib/travelToursData";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-amber-400">
          Active Tours
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
          Destinations We’re Currently Proceeding
        </h1>
        <p className="mt-3 text-slate-300 font-light leading-relaxed">
          These are the tours currently open and running. Pick one to proceed, or build a custom package tailored to your needs.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/travel-tours/customize"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-slate-900 font-semibold hover:bg-amber-600 transition-colors"
          >
            Customize Package
          </Link>
          <Link
            href="/travel-tours/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition-colors"
          >
            Talk to an Agent
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activeTours.map((tour) => (
          <div
            key={tour.id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-black/30 transition-all"
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-amber-400 font-semibold">
                    {tour.region}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-white leading-snug">
                    {tour.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    {tour.destination}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-full bg-amber-500/15 text-amber-300 px-3 py-1 text-xs font-semibold border border-amber-500/25">
                    Proceeding
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Dates</div>
                  <div className="mt-1 text-white font-medium">
                    {formatDate(tour.startDateISO)} – {formatDate(tour.endDateISO)}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Departure</div>
                  <div className="mt-1 text-white font-medium">{tour.departureCity}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Duration</div>
                  <div className="mt-1 text-white font-medium">{tour.durationDays} days</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/10 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Seats left</div>
                  <div className="mt-1 text-white font-medium">{tour.seatsLeft}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                  Highlights
                </div>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/travel-tours/customize?tour=${encodeURIComponent(tour.id)}`}
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-slate-900 font-semibold hover:bg-amber-600 transition-colors"
                >
                  Book This Tour
                </Link>
                <Link
                  href="/travel-tours/customize"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white hover:bg-white/10 transition-colors"
                >
                  Customize
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
