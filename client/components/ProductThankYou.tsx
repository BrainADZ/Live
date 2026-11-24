/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brainadz-live/", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/brainadz.live/", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/brainadzlive", Icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@BrainADZLive", Icon: FaYoutube },
];

export default function ProductThankYou({ returnHref, productName }: { returnHref: string; productName: string }) {
  return <main className="flex min-h-dvh flex-col bg-[radial-gradient(circle_at_50%_100%,#eef5ff_0%,#fff_60%)] text-center text-[#17243b]">
    <header className="w-full shrink-0 border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"><img src="/logos/logo--22.png" alt="BrainADZ Live" width={160} height={104} className="h-12 w-auto sm:h-14" /><Link href={`${returnHref}#enquire`} className="rounded-full bg-[#193175] px-5 py-3 text-sm font-semibold text-white">Contact Us</Link></div></header>
    <div className="flex flex-1 items-center justify-center px-5 py-4">
    <div className="mx-auto w-full max-w-5xl">
      <p className="text-lg leading-snug sm:text-[25px]">Your <strong className="font-bold">submission</strong> has been <strong className="font-bold">received.</strong></p>
      <div className="relative mx-auto mt-2 w-fit max-w-full">
        <img src="/thank-you-illustration.png" alt="" aria-hidden="true" className="h-[clamp(190px,40dvh,360px)] max-w-full object-contain" />
        <h1 className="absolute inset-0 flex flex-col items-center justify-center pb-[3%] text-[clamp(2.5rem,8dvh,6rem)] font-black leading-[0.85] tracking-[-0.07em] text-[#193175] drop-shadow-[0_2px_0_rgba(255,255,255,0.9)]">
          <span>THANK</span><span>YOU</span>
        </h1>
      </div>
      <p className="mt-1 text-base font-medium text-[#3b4557] sm:text-lg">Thanks for your interest in {productName}.</p>
      <p className="mt-2 text-xl font-semibold leading-tight text-[#3b4557] sm:text-[27px]">We&apos;ll get back to you<br /><em className="font-bold text-[#193175]">shortly!</em></p>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 sm:text-lg sm:leading-7">In the meantime,<br />feel free to explore more on our <Link href="/" className="font-bold text-[#193175] underline underline-offset-2">website</Link> or connect with us on <strong className="font-bold">social media.</strong></p>
      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
        {socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#193175] text-white transition hover:bg-[#ed2027] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193175] sm:h-12 sm:w-12"><Icon size={23} aria-hidden="true" /></a>)}
      </div>
    </div>
    </div>
  </main>;
}
