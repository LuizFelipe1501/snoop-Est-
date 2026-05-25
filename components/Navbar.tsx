"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV, SITE, waUrl } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[var(--green)] text-white text-xs font-medium py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
          <span>{SITE.address}</span>
          <span>
            <a href={`tel:${SITE.phoneTel}`} className="opacity-90 hover:opacity-100">
              {SITE.phone}
            </a>
            <span className="ml-2 bg-[var(--gold)] text-[var(--bark)] font-bold text-[0.7rem] px-2.5 py-0.5 rounded-full">
              24h
            </span>
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav
        className={`bg-white sticky top-0 z-50 border-b border-[var(--green-lt)] transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-3 gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={SITE.logoUrl}
                alt={SITE.name}
                width={160}
                height={60}
                className="h-14 w-auto object-contain object-center"
                priority
              />
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-1 list-none">
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        active
                          ? "bg-[var(--green-lt)] text-[var(--green)]"
                          : "text-[var(--bark)] hover:bg-[var(--green-lt)] hover:text-[var(--green)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--green)] text-white text-sm font-semibold shadow hover:bg-[var(--green-md)] hover:-translate-y-px transition-all duration-150"
            >
              Agendar Consulta
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Abrir menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--bark)] rounded transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--bark)] rounded transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--bark)] rounded transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-[var(--green-lt)] pb-4 flex flex-col">
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-3 border-b border-[var(--green-lt)] text-sm font-medium ${
                      active ? "text-[var(--green)] font-semibold" : "text-[var(--bark)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={waUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 text-center py-3 rounded-full bg-[var(--green)] text-white text-sm font-semibold"
              >
                WhatsApp — Agendar
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
