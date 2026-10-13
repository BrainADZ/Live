export default function CmsNotice({ unavailable, kind }: { unavailable: boolean; kind: string }) {
  return <div role="status" className="mx-auto max-w-450 rounded-xl border border-[#dfe6f1] bg-[#f8faff] p-8 text-center text-[#616161]">
    {unavailable ? `${kind} are temporarily unavailable. Please try again shortly.` : `New ${kind.toLowerCase()} will appear here once published.`}
  </div>;
}
