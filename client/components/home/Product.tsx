"use client";

/* eslint-disable @next/next/no-img-element */

const products = [
  {
    title: "A Type Standee",
    href: "/digital-signage-products/a-type-standee",
    image: "/products/A.png",
  },
  {
    title: "D Type Standee",
    href: "/digital-signage-products/d-type-standee",
    image: "/products/D.png",
  },
  {
    title: "Wall Mounted",
    href: "/digital-signage-products/wall-mounted-standee",
    image: "/products/wall.png",
  },
  {
    title: "Floor Mounted",
    href: "/digital-signage-products/floor-mounted-standee",
    image: "/products/Floor.png",
  },
  {
    title: "Self Ordering Kiosk",
    href: "/digital-signage-products/self-ordering-kiosk",
    image: "/products/Selforder.png",
  },
  {
    title: "LFD Wall",
    href: "/digital-signage-products/lfd-display",
    image: "/products/lfd.png",
  },
  {
    title: "LED Wall",
    href: "/digital-signage-products/led-display",
    image: "/products/Led.png",
  },
  {
    title: "Interactive Teaching & Conf.",
    href: "/digital-signage-products/interactive-teaching-display",
    image: "/products/Teaching.png",
  },
];

export default function ProductSection() {
  return (
    <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* TOP HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[14px] font-normal uppercase tracking-[2px] text-[#3c5b9b]">
              Our Products
            </p>

            <h2 className="max-w-180 text-[42px] font-light leading-[1.08] tracking-[-2px] text-[#161616] md:text-[54px] lg:text-[62px]">
              Smart display products built for modern businesses
            </h2>
          </div>

          <p
            className="max-w-190 text-[18px] font-light leading-[1.6] tracking-[-0.2px] text-[#393939] md:text-[21px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Explore BrainADZ Live hardware solutions designed for advertising,
            automation, information display, and customer interaction.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <a
              key={product.title}
              href={product.href}
              data-aos="card-reveal"
              data-aos-delay={(index % 4) * 100}
              data-aos-duration="520"
              className="product-card group relative flex overflow-hidden rounded-md border border-[#d0d0d0] bg-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#f4f6fa] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <div className="flex w-full flex-col">
                {/* SQUARE IMAGE AREA */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f4]">
                  {/* FALLBACK TEXT */}
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-[15px] font-light text-[#8d8d8d]">
                    Product image will appear here
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* IMAGE HOVER OVERLAY */}
                  <div className="absolute inset-0 z-20 bg-[#3c5b9b]/0 transition-all duration-500 group-hover:bg-[#3c5b9b]/10" />
                </div>

                {/* CONTENT AREA */}
                <div className="relative flex min-h-37.5 flex-1 flex-col justify-between p-6">
                  <h3 className="max-w-72.5 text-[24px] font-light leading-[1.2] tracking-[-0.6px] text-[#161616] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[#3c5b9b] md:text-[26px]">
                    {product.title}
                  </h3>

                  <div className="mt-9 flex items-center justify-between">
                    <span className="text-[15px] font-normal text-[#3c5b9b] transition-all duration-500 group-hover:translate-x-1">
                      Explore product
                    </span>

                    <span className="flex h-10.5 w-10.5 items-center justify-center rounded-full border border-[#3c5b9b]/30 text-[30px] font-light leading-none text-[#3c5b9b] transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#3c5b9b] group-hover:bg-[#3c5b9b] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* ANIMATED BORDER */}
              <span className="product-border product-border-top" />
              <span className="product-border product-border-right" />
              <span className="product-border product-border-bottom" />
              <span className="product-border product-border-left" />

              {/* BOTTOM LINE */}
              <span className="absolute bottom-0 left-0 z-30 h-0.75 w-0 bg-[#3c5b9b] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .product-border {
          position: absolute;
          z-index: 30;
          background: #3c5b9b;
          pointer-events: none;
        }

        .product-border-top {
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
        }

        .product-border-right {
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.22s ease 0.1s;
        }

        .product-border-bottom {
          right: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.22s ease 0.2s;
        }

        .product-border-left {
          bottom: 0;
          left: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.22s ease 0.3s;
        }

        .product-card:hover .product-border-top {
          transform: scaleX(1);
        }

        .product-card:hover .product-border-right {
          transform: scaleY(1);
        }

        .product-card:hover .product-border-bottom {
          transform: scaleX(1);
        }

        .product-card:hover .product-border-left {
          transform: scaleY(1);
        }
      `}</style>
    </section>
  );
}