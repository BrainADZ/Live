import type { Metadata } from "next";

const apkUrl = "/BrainAdz-Cloud-Player-v3.1.6.apk";

export const metadata: Metadata = {
  title: "Download BrainAdz Cloud Player",
  description: "Download the latest BrainAdz Cloud Player app for Android.",
};

export default function ApkDownloadPage() {
  return (
    <main className="flex min-h-[72vh] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-20">
      <section className="w-full max-w-xl text-center">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <svg
              aria-hidden="true"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M5 19.5h14"
              />
            </svg>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Android Application
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            BrainAdz Cloud Player
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
            Download the latest version of BrainAdz Cloud Player for your
            Android device.
          </p>

          <a
            href={apkUrl}
            download="BrainAdz-Cloud-Player-v3.1.6.apk"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
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
            Download APK
          </a>

          <p className="mt-5 text-sm text-slate-500">
            Version 3.1.6 <span aria-hidden="true">&bull;</span> Android APK
          </p>
        </div>
      </section>
    </main>
  );
}
