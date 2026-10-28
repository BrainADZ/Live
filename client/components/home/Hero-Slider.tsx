export default function HeroSlider() {
  return (
    <section className="relative aspect-2/1 w-full overflow-hidden bg-black text-white md:aspect-auto md:h-[min(90vh,920px)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="BrainADZ Live banner video"
      >
        <source src="/hero/Hero.webm" type="video/webm" />
      </video>
    </section>
  );
}
