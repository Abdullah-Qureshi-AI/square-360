import { redirectIfAdminAuthenticated } from "@/lib/admin/guard";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function getMessage(searchParams: Record<string, string | string[] | undefined>) {
  const error = typeof searchParams.error === "string" ? searchParams.error : null;
  const success = typeof searchParams.success === "string" ? searchParams.success : null;

  if (error === "invalid_credentials") {
    return {
      tone: "error" as const,
      text: "Invalid username or password.",
    };
  }

  if (error === "session_failed") {
    return {
      tone: "error" as const,
      text: "Unable to create an admin session. Please try again.",
    };
  }

  if (success === "signed_out") {
    return {
      tone: "success" as const,
      text: "You have been signed out.",
    };
  }

  return null;
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await redirectIfAdminAuthenticated();
  const resolvedSearchParams = await searchParams;
  const message = getMessage(resolvedSearchParams);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="text-xs uppercase tracking-[0.25em] text-amber-400">Square 360</div>
        <h1 className="mt-4 text-3xl font-semibold text-white">Admin Login</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Use your local admin credentials to access the dashboard and manage travel content.
        </p>

        {message && (
          <div
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
              message.tone === "error"
                ? "border-red-500/30 bg-red-500/10 text-red-100"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
            }`}
          >
            {message.text}
          </div>
        )}

        <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-200">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500/40"
              placeholder="admin"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-500/40"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Local fallback credentials are available for development if environment variables are not
          configured.
        </p>
      </div>
    </div>
  );
}
