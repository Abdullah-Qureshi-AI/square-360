import { getSiteSettings } from "@/lib/content/repository";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="space-y-6">
      <section>
        <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Placeholder</div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Settings</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          This page is intentionally read-only for now. The shared site settings are already moved
          into the repository so the next step can make them editable from this screen.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Promo bar</div>
          <p className="mt-3 text-sm text-slate-200">{settings.promoBarText}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Primary contact</div>
          <p className="mt-3 text-sm text-slate-200">{settings.phone}</p>
          <p className="mt-1 text-sm text-slate-400">{settings.email}</p>
          <p className="mt-1 text-sm text-slate-400">{settings.supportHours}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Footer description</div>
          <p className="mt-3 text-sm text-slate-300">{settings.footerDescription}</p>
        </div>
      </section>
    </div>
  );
}
