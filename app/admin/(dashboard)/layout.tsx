import Link from "next/link";
import { requireAdminSession } from "@/lib/admin/guard";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/tours", label: "Tours" },
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/inquiries", label: "Inquiries" },
];

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await requireAdminSession();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        <aside className="w-full border-b border-white/10 bg-slate-900/60 p-6 md:w-72 md:border-b-0 md:border-r">
          <div className="rounded-2xl border border-amber-500/20 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Square 360</div>
            <h1 className="mt-3 text-2xl font-semibold text-white">Admin Panel</h1>
            <p className="mt-2 text-sm text-slate-400">
              Signed in as <span className="text-slate-200">{session.username}</span>
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            {adminLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-amber-500/30 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <form action="/api/admin/logout" method="post" className="mt-6">
            <button
              type="submit"
              className="w-full rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100 transition hover:bg-red-500/20"
            >
              Sign out
            </button>
          </form>
        </aside>

        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
