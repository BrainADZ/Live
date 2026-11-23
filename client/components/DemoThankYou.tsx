/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";
import ErpMetaPixel from "@/components/ErpMetaPixel";

export default function DemoThankYou({
  erpLanding = false,
  enquiryLanding = false,
  returnHref = "/",
  productName,
}: {
  erpLanding?: boolean;
  enquiryLanding?: boolean;
  returnHref?: string;
  productName?: string;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      {erpLanding && <ErpMetaPixel thankYou />}
      {enquiryLanding && (
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <img src="/logos/logo--22.png" alt="BrainADZ Live" width={160} height={104} className="h-12 w-auto sm:h-14" />
            <Link href={`${returnHref}#enquire`} className="rounded-full bg-[#193175] px-5 py-3 text-sm font-semibold text-white">Contact Us</Link>
          </div>
        </header>
      )}
      <div className="flex w-full flex-1 items-center justify-center px-5 py-14">
      <section className="w-full max-w-2xl rounded-3xl border border-[#dfe5ef] bg-white px-6 py-12 text-center shadow-sm md:px-14">
        <CheckCircle2
          className="mx-auto mb-6 text-[#193175]"
          size={64}
          strokeWidth={1.4}
          aria-hidden="true"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#193175]">
          {enquiryLanding ? "Enquiry received" : "Demo request received"}
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#17243b] md:text-5xl">
          Thank you!
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          {enquiryLanding
            ? `Thanks for your interest${productName ? ` in ${productName}` : ""}. Our team will review your requirements and contact you soon.`
            : "Your demo access details have been sent to the email address you provided."}
        </p>
        {!enquiryLanding && <div className="mt-8 rounded-2xl bg-[#f0f4fb] p-5 text-left">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#193175]">
            <Mail size={19} aria-hidden="true" /> Please note
          </div>
          <p className="text-sm leading-7 text-slate-600">
            Check your inbox and spam or junk folder. If a new account was
            created for you, the email includes your login ID and password. Use
            the link in that email to access your demo.
          </p>
        </div>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Link
            href={erpLanding ? "/smart-erp#request-demo" : returnHref}
            className="rounded-full bg-[#193175] px-7 py-3 text-sm font-semibold text-white"
          >
            {erpLanding ? "Back to ERP" : enquiryLanding ? "Back to product" : "Back to home"}
          </Link>
          {!erpLanding && !enquiryLanding && (
            <Link
              href="/contact-us"
              className="text-sm font-semibold text-[#193175] underline underline-offset-4"
            >
              Contact our team
            </Link>
          )}
        </div>
      </section>
      </div>
    </main>
  );
}
