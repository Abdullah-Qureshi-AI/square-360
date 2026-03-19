import { getTravelContent } from "@/lib/content/repository";

export default async function AdminInquiriesPage() {
  const content = await getTravelContent();

  return (
    <div className="space-y-6">
      <section>
        <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Placeholder</div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Inquiries</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          Inquiry management is reserved for the next phase. This page is already connected to the
          shared content store so contact and custom package submissions can be surfaced here later.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Current state</div>
            <div className="mt-2 text-xl font-semibold text-white">Stored inquiries</div>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
            {content.inquiries.length}
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          The current public customize flow still stores requests locally in the browser. The next
          dynamic phase should move contact and customize submissions into this shared store or a
          real backend.
        </p>
      </section>
    </div>
  );
}
