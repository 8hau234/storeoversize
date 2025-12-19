"use client";

import React, { useState } from "react";

type Category = "Arizona" | "Boston" | "Gizeh" | "Madrid" | "Mayari";

const BIRKEN_ITEMS = [
  {
    name: "Boston Suede",
    color: "Taupe",
    fit: "Regular fit",
    condition: "New / Boxed",
    img: "/birkens1.jpg",
    price: 159.99,
    category: "Boston",
    description:
      "Iconic closed-toe Boston in soft taupe suede. The ultimate everyday comfort clog.",
  },
  {
    name: "Arizona Suede",
    color: "Soft Beige",
    fit: "Regular fit",
    condition: "Lightly used",
    img: "/birkens2.jpg",
    price: 129.99,
    category: "Arizona",
    description:
      "The classic two-strap Arizona in suede. Timeless, comfortable, and essential.",
  },
  {
    name: "Arizona EVA",
    color: "Triple Black",
    fit: "Narrow fit",
    condition: "New / No box",
    img: "/birkens3.jpg",
    price: 49.99,
    category: "Arizona",
    description:
      "Water-friendly Arizona EVA. Perfect for the beach, gym, or backyard.",
  },
  {
    name: "Boston Leather",
    color: "Mocha",
    fit: "Regular fit",
    condition: "Pre-loved",
    img: "/birkens4.jpg",
    price: 139.99,
    category: "Boston",
    description:
      "Smooth leather Boston in rich mocha. Sophisticated enough for work, comfortable enough for home.",
  },
  {
    name: "Gizeh Birko-Flor",
    color: "Pearl White",
    fit: "Regular fit",
    condition: "New / Tag",
    img: "/birkens2.jpg", // Reusing image as placeholder
    price: 99.99,
    category: "Gizeh",
    description:
      "The elegant thong sandal. Combines optimum hold with a minimalist, fashionable design.",
  },
  {
    name: "Madrid Big Buckle",
    color: "Cognac",
    fit: "Narrow fit",
    condition: "New / Boxed",
    img: "/birkens1.jpg", // Reusing image as placeholder
    price: 119.99,
    category: "Madrid",
    description:
      "The oldest member of the model family. A purist design updated with a large, elegant buckle.",
  },
  {
    name: "Mayari Oiled Leather",
    color: "Habana",
    fit: "Regular fit",
    condition: "New / Tag",
    img: "/birkens3.jpg", // Reusing image as placeholder
    price: 124.99,
    category: "Mayari",
    description:
      "An elegant cross-strap sandal with a toe loop. Distinctive style and exceptional comfort.",
  },
];

const CATEGORIES: Category[] = [
  "Arizona",
  "Boston",
  "Gizeh",
  "Madrid",
  "Mayari",
];

export default function BirkenstockPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredItems = selectedCategory
    ? BIRKEN_ITEMS.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="/" className="text-2xl md:text-3xl tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </a>

          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Home
            </a>

            <span className="uppercase tracking-[0.18em] text-[#0f0f0f] font-medium">
              Birkenstock
            </span>

            <a
              href="/crocs"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Crocs
            </a>

            <a
              href="/size"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Size
            </a>

            <a
              href="/authenticity"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Authenticity
            </a>

            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Contact
            </a>
          </nav>

          <div className="text-xs uppercase tracking-[0.18em] text-[#4a4a4a]">
            Display only
          </div>
        </div>
      </header>

      <main className="pb-16">
        {/* HERO */}
        <section className="relative flex min-h-[50vh] w-full items-end justify-start overflow-hidden">
          <img
            src="/birkens1.jpg"
            alt="Birkenstock lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* dark overlay for readable WHITE text, matched to Crocs style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.35),_transparent_60%)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 pb-16 pt-24 text-center">
            <h1 className="text-4xl font-light leading-tight md:text-6xl text-white">
              Birkenstock Classics
            </h1>

            <p className="max-w-lg text-sm md:text-base text-white/90">
              Tradition since 1774. Select your preferred silhouette below.
            </p>

            {/* CATEGORY BUTTONS */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  // Uses white buttons on dark background since it's on the Hero image overlay
                  className={`min-w-[180px] rounded-full px-10 py-4 text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 
                    ${selectedCategory === cat
                      ? "bg-white text-[#0f0f0f] shadow-xl scale-110"
                      : "bg-black/40 border border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-[#0f0f0f] hover:border-white hover:-translate-y-1 hover:shadow-md"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GRID OF AVAILABLE PAIRS */}
        {selectedCategory && (
          <section className="mx-auto mt-10 max-w-6xl px-4 animate-fadeIn">
            <div className="mb-6 flex items-baseline justify-between border-b border-[#e5e5e0] pb-4">
              <h2 className="text-xl md:text-2xl uppercase tracking-[0.25em] text-[#0f0f0f]">
                {selectedCategory}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs uppercase tracking-[0.2em] text-[#6a6a6a] hover:text-[#0f0f0f]"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, idx) => (
                <article
                  key={item.category + item.color + idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white transition-transform duration-200 hover:-translate-y-1 hover:border-[#0f0f0f]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] border border-[#e5e5e0]">
                      {item.condition}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                    <div className="flex justify-between items-start">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-[#4a4a4a]">
                        {item.color}
                      </div>
                      <div className="font-medium text-[#0f0f0f]">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <h3 className="text-base font-light md:text-lg text-[#0f0f0f]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[12px] leading-relaxed text-[#4a4a4a]">
                      {item.description}
                    </p>

                    <div className="mt-3 flex gap-2">
                      <span className="inline-block w-fit rounded-full border border-[#e5e5e0] bg-[#fafaf8] px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-[#0f0f0f]">
                        {item.fit}
                      </span>
                    </div>

                    <p className="mt-3 text-[11px] text-[#6a6a6a]">
                      DM to reserve.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
