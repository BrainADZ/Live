export default function HeroSlider() {
  return (
    <section
      className="h-[calc(100svh-84px)] w-full overflow-hidden"
      aria-label="BrainADZ Live hero"
    >
      <video
        className="block h-full w-full object-fill"
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
