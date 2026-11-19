export default function HeroVideo() {
  return (
    <section
      className="w-full overflow-hidden xl:h-[calc(100svh-84px)]"
      aria-label="BrainADZ Live hero"
    >
      <video
        className="block h-auto w-full xl:h-full xl:object-fill"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="BrainADZ Live banner video"
      >
        <source src="/hero/Hero.webm" type="video/webm" />
      </video>
    </section>
  );
}
