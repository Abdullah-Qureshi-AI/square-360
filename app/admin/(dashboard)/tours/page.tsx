import Link from "next/link";
import { getAllTours } from "@/lib/content/repository";
import type { TravelTour } from "@/lib/content/types";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-500/40";

const labelClass = "mb-2 block text-sm font-medium text-slate-200";

function getFirstValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}

function toCommaList(values: string[]) {
  return values.join(", ");
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function getTourAction(tour: TravelTour | null) {
  if (!tour) {
    return {
      title: "Create tour",
      description: "Add a new departure or featured package to the shared travel repository.",
      action: "/api/admin/tours",
      submitLabel: "Create Tour",
    };
  }

  return {
    title: "Edit tour",
    description: "Update the selected tour and save changes back into local admin storage.",
    action: `/api/admin/tours/${tour.id}`,
    submitLabel: "Save Changes",
  };
}

export default async function AdminToursPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const tours = await getAllTours();
  const resolvedSearchParams = await searchParams;
  const editId = getFirstValue(resolvedSearchParams.edit);
  const success = getFirstValue(resolvedSearchParams.success);
  const error = getFirstValue(resolvedSearchParams.error);
  const selectedTour = editId ? tours.find((tour) => tour.id === editId) ?? null : null;
  const action = getTourAction(selectedTour);

  const sortedTours = [...tours].sort((a, b) => a.startDateISO.localeCompare(b.startDateISO));

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Working module</div>
          <h1 className="mt-3 text-3xl font-semibold text-white">Tours</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            This is the first fully working admin CRUD area. Changes made here update the shared
            local content store used by the public travel pages.
          </p>
        </div>
        {selectedTour && (
          <Link
            href="/admin/tours"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-amber-500/30 hover:text-white"
          >
            Clear edit mode
          </Link>
        )}
      </section>

      {success && (
        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          Tour {success}.
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-400">{action.title}</div>
          <h2 className="mt-2 text-xl font-semibold text-white">{selectedTour ? selectedTour.title : "New tour"}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{action.description}</p>

          <form action={action.action} method="post" className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div>
                <label htmlFor="title" className={labelClass}>Title</label>
                <input id="title" name="title" defaultValue={selectedTour?.title ?? ""} required className={inputClass} />
              </div>

              <div>
                <label htmlFor="slug" className={labelClass}>Slug</label>
                <input id="slug" name="slug" defaultValue={selectedTour?.slug ?? ""} className={inputClass} />
              </div>

              <div>
                <label htmlFor="region" className={labelClass}>Region</label>
                <input id="region" name="region" defaultValue={selectedTour?.region ?? ""} required className={inputClass} />
              </div>

              <div>
                <label htmlFor="departureCity" className={labelClass}>Departure city</label>
                <input
                  id="departureCity"
                  name="departureCity"
                  defaultValue={selectedTour?.departureCity ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2 xl:col-span-1">
                <label htmlFor="destination" className={labelClass}>Destination</label>
                <input
                  id="destination"
                  name="destination"
                  defaultValue={selectedTour?.destination ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="status" className={labelClass}>Status</label>
                <select id="status" name="status" defaultValue={selectedTour?.status ?? "active"} className={inputClass}>
                  <option value="active">active</option>
                  <option value="upcoming">upcoming</option>
                  <option value="paused">paused</option>
                </select>
              </div>

              <div>
                <label htmlFor="isFeatured" className={labelClass}>Homepage featured</label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">
                  <input type="checkbox" id="isFeatured" name="isFeatured" defaultChecked={selectedTour?.isFeatured ?? true} />
                  Show this tour in featured packages
                </label>
              </div>

              <div>
                <label htmlFor="durationDays" className={labelClass}>Duration (days)</label>
                <input
                  id="durationDays"
                  name="durationDays"
                  type="number"
                  min="1"
                  defaultValue={selectedTour?.durationDays ?? 1}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="seatsLeft" className={labelClass}>Seats left</label>
                <input
                  id="seatsLeft"
                  name="seatsLeft"
                  type="number"
                  min="0"
                  defaultValue={selectedTour?.seatsLeft ?? 0}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="startDateISO" className={labelClass}>Start date</label>
                <input
                  id="startDateISO"
                  name="startDateISO"
                  type="date"
                  defaultValue={selectedTour?.startDateISO ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="endDateISO" className={labelClass}>End date</label>
                <input
                  id="endDateISO"
                  name="endDateISO"
                  type="date"
                  defaultValue={selectedTour?.endDateISO ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="price" className={labelClass}>Price</label>
                <input id="price" name="price" defaultValue={selectedTour?.price ?? ""} required className={inputClass} />
              </div>

              <div>
                <label htmlFor="originalPrice" className={labelClass}>Original price</label>
                <input
                  id="originalPrice"
                  name="originalPrice"
                  defaultValue={selectedTour?.originalPrice ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="rating" className={labelClass}>Rating</label>
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  defaultValue={selectedTour?.rating ?? 0}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="reviews" className={labelClass}>Reviews</label>
                <input
                  id="reviews"
                  name="reviews"
                  type="number"
                  min="0"
                  defaultValue={selectedTour?.reviews ?? 0}
                  required
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2 xl:col-span-1">
                <label htmlFor="discount" className={labelClass}>Discount label</label>
                <input
                  id="discount"
                  name="discount"
                  defaultValue={selectedTour?.discount ?? ""}
                  required
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2 xl:col-span-1">
                <label htmlFor="image" className={labelClass}>Image URL</label>
                <input id="image" name="image" defaultValue={selectedTour?.image ?? ""} required className={inputClass} />
              </div>

              <div className="md:col-span-2 xl:col-span-1">
                <label htmlFor="highlights" className={labelClass}>Highlights</label>
                <textarea
                  id="highlights"
                  name="highlights"
                  defaultValue={selectedTour ? toCommaList(selectedTour.highlights) : ""}
                  rows={3}
                  className={`${inputClass} resize-y`}
                  placeholder="Comma separated values"
                />
              </div>

              <div className="md:col-span-2 xl:col-span-1">
                <label htmlFor="features" className={labelClass}>Included features</label>
                <textarea
                  id="features"
                  name="features"
                  defaultValue={selectedTour ? toCommaList(selectedTour.features) : ""}
                  rows={3}
                  className={`${inputClass} resize-y`}
                  placeholder="Comma separated values"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              {action.submitLabel}
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-amber-400">Repository data</div>
              <h2 className="mt-2 text-xl font-semibold text-white">Existing tours</h2>
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
              {sortedTours.length}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {sortedTours.map((tour) => (
              <div key={tour.id} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-300">
                        {tour.region}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                        {tour.status}
                      </span>
                      {tour.isFeatured && (
                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                          featured
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{tour.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{tour.destination}</p>
                    <div className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                      <div>Dates: {formatDate(tour.startDateISO)} - {formatDate(tour.endDateISO)}</div>
                      <div>Departure: {tour.departureCity}</div>
                      <div>Price: {tour.price}</div>
                      <div>Seats left: {tour.seatsLeft}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                    <Link
                      href={`/admin/tours?edit=${tour.id}`}
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-amber-500/30 hover:text-white"
                    >
                      Edit
                    </Link>
                    <form action={`/api/admin/tours/${tour.id}`} method="post">
                      <input type="hidden" name="_intent" value="delete" />
                      <button
                        type="submit"
                        className="w-full rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-100 transition hover:bg-red-500/20"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
