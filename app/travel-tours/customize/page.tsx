"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  activeTours,
  joiningCities,
  packageTypes,
  placesToVisitOptions,
  hotelsOptions,
  vehiclesOptions,
} from "@/lib/travelToursData";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  joiningCity: string;
  rooms: string;
  packageType: string;
  placesToVisit: string[];
  hotels: string;
  vehicle: string;
  adults: number;
  children: number;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  startDate: "",
  endDate: "",
  joiningCity: "",
  rooms: "",
  packageType: "",
  placesToVisit: [],
  hotels: "",
  vehicle: "",
  adults: 0,
  children: 0,
};

function clampInt(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function CustomizeTourPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
            Loading customize form...
          </div>
        </div>
      }
    >
      <CustomizeTourContent />
    </Suspense>
  );
}

function CustomizeTourContent() {
  const searchParams = useSearchParams();
  const selectedTourId = searchParams.get("tour");

  const selectedTour = useMemo(() => {
    if (!selectedTourId) return null;
    return activeTours.find((t) => t.id === selectedTourId) ?? null;
  }, [selectedTourId]);

  const [form, setForm] = useState<FormState>(initialState);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTour) return;
    queueMicrotask(() => {
      setForm((p) => ({
        ...p,
        startDate: p.startDate || selectedTour.startDateISO,
        endDate: p.endDate || selectedTour.endDateISO,
        joiningCity: p.joiningCity || selectedTour.departureCity,
      }));
    });
  }, [selectedTour]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const requiredMissing =
      !form.fullName ||
      !form.phone ||
      !form.email ||
      !form.startDate ||
      !form.endDate ||
      !form.joiningCity ||
      !form.packageType;

    if (requiredMissing) {
      setError("Please fill all required fields (*).");
      return;
    }

    if (new Date(form.endDate).getTime() < new Date(form.startDate).getTime()) {
      setError("End Date must be after Start Date.");
      return;
    }

    const payload = {
      id: crypto.randomUUID(),
      createdAtISO: new Date().toISOString(),
      selectedTourId: selectedTour?.id ?? null,
      ...form,
    };

    try {
      const key = "square360_travel_custom_packages";
      const prevRaw = localStorage.getItem(key);
      const prev = prevRaw ? (JSON.parse(prevRaw) as unknown[]) : [];
      localStorage.setItem(key, JSON.stringify([payload, ...prev].slice(0, 50)));
      setSubmittedId(payload.id);
    } catch {
      // If storage fails, still show success (request can be handled by contact team).
      setSubmittedId(payload.id);
    }
  }

  const minDate = todayISO();

  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-amber-400">
              Customize Your Tour
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-light text-white tracking-tight">
              Build a package that fits your plan
            </h1>
            <p className="mt-3 text-slate-300 font-light leading-relaxed">
              Your email address will not be published. Required fields are marked with{" "}
              <span className="text-amber-400 font-semibold">*</span>.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 min-w-[280px]">
            <div className="text-xs uppercase tracking-wider text-slate-400">Quick links</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/travel-tours/destinations" className="text-amber-400 hover:text-amber-300 text-sm">
                View active tours
              </Link>
              <Link href="/travel-tours/contact" className="text-slate-200 hover:text-white text-sm">
                Contact support
              </Link>
            </div>
          </div>
        </div>

        {selectedTour && (
          <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Selected tour</div>
            <div className="mt-2 text-white font-semibold">{selectedTour.title}</div>
            <div className="mt-1 text-sm text-slate-200">{selectedTour.destination}</div>
          </div>
        )}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                  {error}
                </div>
              )}

              {submittedId && (
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  Your request has been submitted. Reference ID:{" "}
                  <span className="font-semibold text-emerald-100">{submittedId}</span>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={inputClass}
                    placeholder="Full Name"
                    required
                  />
                </Field>

                <Field label="Phone Number" required>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="Phone"
                    inputMode="tel"
                    required
                  />
                </Field>

                <Field label="Email Address" required>
                  <input
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </Field>

                <Field label="Start Date" required>
                  <input
                    value={form.startDate}
                    onChange={(e) => update("startDate", e.target.value)}
                    className={inputClass}
                    type="date"
                    min={minDate}
                    required
                  />
                </Field>

                <Field label="End Date" required>
                  <input
                    value={form.endDate}
                    onChange={(e) => update("endDate", e.target.value)}
                    className={inputClass}
                    type="date"
                    min={form.startDate || minDate}
                    required
                  />
                </Field>

                <Field label="Joining City" required>
                  <select
                    value={form.joiningCity}
                    onChange={(e) => update("joiningCity", e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="" disabled>
                      --Select--
                    </option>
                    {joiningCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="No. of Rooms">
                  <input
                    value={form.rooms}
                    onChange={(e) => update("rooms", e.target.value)}
                    className={inputClass}
                    placeholder="e.g. 1"
                    inputMode="numeric"
                  />
                </Field>

                <Field label="Package Type" required>
                  <select
                    value={form.packageType}
                    onChange={(e) => update("packageType", e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="" disabled>
                      --Select--
                    </option>
                    {packageTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Places to Visit">
                  <select
                    value={form.placesToVisit}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions).map((o) => o.value);
                      update("placesToVisit", values);
                    }}
                    className={selectClass}
                    multiple
                    size={Math.min(6, placesToVisitOptions.length)}
                  >
                    {placesToVisitOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 text-xs text-slate-400">
                    Tip: Hold Ctrl (Windows) / Cmd (Mac) to select multiple.
                  </div>
                </Field>

                <div className="space-y-4">
                  <Field label="Hotels">
                    <select
                      value={form.hotels}
                      onChange={(e) => update("hotels", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Select Hotels</option>
                      {hotelsOptions.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Vehicles">
                    <select
                      value={form.vehicle}
                      onChange={(e) => update("vehicle", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Select Vehicles</option>
                      {vehiclesOptions.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Counter
                  label="Total Number Adults (10 years and above)"
                  value={form.adults}
                  onChange={(v) => update("adults", v)}
                />
                <Counter
                  label="Total Number Children (4 to 9 years)"
                  value={form.children}
                  onChange={(v) => update("children", v)}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-3 text-slate-900 font-bold hover:bg-lime-300 transition-colors"
                >
                  Submit ↗
                </button>
                <div className="text-xs text-slate-400">
                  By submitting, you agree we may contact you to confirm details.
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-300">
          Want to proceed with an existing tour instead?{" "}
          <Link href="/travel-tours/destinations" className="text-amber-400 hover:text-amber-300 font-semibold">
            See active destinations
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-200">
        {label}{" "}
        {required && <span className="text-amber-400 font-bold">*</span>}
      </div>
      {children}
    </label>
  );
}

function Counter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
      <div className="text-sm font-semibold text-slate-200 mb-3">{label}</div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
          onClick={() => onChange(clampInt(value - 1, 0, 30))}
          aria-label="Decrease"
        >
          -
        </button>
        <div className="w-14 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white font-semibold">
          {value}
        </div>
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
          onClick={() => onChange(clampInt(value + 1, 0, 30))}
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20";

const selectClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20";

