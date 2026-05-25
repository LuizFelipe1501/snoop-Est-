"use client";
import { useState } from "react";

interface Item { q: string; a: string }

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl border-[1.5px] overflow-hidden transition-colors duration-200 ${
            open === i ? "border-[var(--green)]" : "border-[rgba(45,122,79,0.12)]"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left font-semibold text-sm cursor-pointer"
          >
            <span>{item.q}</span>
            <span
              className={`text-2xl font-light text-[var(--green)] transition-transform duration-300 flex-shrink-0 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-[var(--bark-md)] leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
