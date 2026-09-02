import type { Metadata } from "next";

const androidApps = [
  {
    id: "cloud-player",
    label: "Cloud-managed player",
    name: "BrainAdz Cloud Player",
    description:
      "Install this player on your display device and manage its signage content through the BrainAdz cloud platform.",
    installOn: "Android signage device",
    controlledWith: "BrainAdz cloud platform",
    icon: "player",
    apk: {
      href: "/BrainAdz-Cloud-Player-v3.1.6.apk",
      fileName: "BrainAdz-Cloud-Player-v3.1.6.apk",
      version: "3.1.6",
      buttonLabel: "Download Cloud Player",
    },
  },
  {
    id: "mobile-player",
    label: "Mobile-controlled player",
    name: "BrainAdz Player",
    description:
      "Install this player on your display device, then pair it with Live Remote to control content from your mobile.",
    installOn: "Android signage device",
    controlledWith: "Live Remote mobile app",
    icon: "controller",
    apk: {
      href: "/BrainAdz-Player-v2.4.12.apk",
      fileName: "BrainAdz-Player-v2.4.12.apk",
      version: "2.4.12",
      buttonLabel: "Download Mobile Player",
    },
  },
] as const;

export const metadata: Metadata = {
  title: "Download BrainAdz Android Apps",
  description:
    "Download the cloud-managed or mobile-controlled BrainAdz Player app for Android.",
};

function AppIcon({ type }: { type: "player" | "controller" }) {
  if (type === "controller") {
    return (
      <svg
        aria-hidden="true"
        className="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2.5" y="5" width="13" height="11" rx="1.75" />
        <path strokeLinecap="round" d="M6.5 19h5m-2.5-3v3" />
        <rect x="16.5" y="3" width="5" height="15" rx="1.25" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14 8.5 2-2m0 0-2-.25M16 6.5l-.25 2"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-9 w-9"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path strokeLinecap="round" d="M8 21h8m-4-4v4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 8 5 2.5-5 2.5V8Z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
      />
    </svg>
  );
}

export default function ApkDownloadPage() {
  return (
    <main className="flex min-h-[72vh] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-16 sm:py-20">
      <section className="w-full max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Android Applications
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Choose how you want to control your screen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Use Cloud Player for cloud-managed signage, or choose the
            mobile-controlled Player for local control from your phone.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {androidApps.map((app) => {
            return (
              <article
                key={app.id}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${
                      app.icon === "player"
                        ? "bg-blue-600 shadow-blue-200"
                        : "bg-violet-600 shadow-violet-200"
                    }`}
                  >
                    <AppIcon type={app.icon} />
                  </div>
                  <span
                    className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                  >
                    Available now
                  </span>
                </div>

                <p
                  className={`mt-7 text-sm font-semibold uppercase tracking-[0.16em] ${
                    app.icon === "player" ? "text-blue-600" : "text-violet-600"
                  }`}
                >
                  {app.label}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {app.name}
                </h2>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {app.description}
                </p>

                <div className="mt-7 grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Install on
                    </p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {app.installOn}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Controlled with
                    </p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {app.controlledWith}
                    </p>
                  </div>
                </div>

                <a
                  href={app.apk.href}
                  download={app.apk.fileName}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg focus:outline-none focus:ring-4 ${
                    app.icon === "player"
                      ? "bg-blue-600 shadow-blue-200 hover:bg-blue-700 focus:ring-blue-200"
                      : "bg-violet-600 shadow-violet-200 hover:bg-violet-700 focus:ring-violet-200"
                  }`}
                >
                  <DownloadIcon />
                  {app.apk.buttonLabel}
                </a>

                <p className="mt-4 text-center text-sm text-slate-500">
                  Version {app.apk.version}{" "}
                  <span aria-hidden="true">&bull;</span> Android APK
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
