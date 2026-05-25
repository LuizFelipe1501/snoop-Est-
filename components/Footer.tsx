import Link from "next/link";
import Image from "next/image";
import { NAV, SERVICES, SITE, waUrl } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--bark)] text-white/80 pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Image
              src={SITE.logoUrl}
              alt={SITE.name}
              width={160}
              height={64}
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              A melhor Clínica Veterinária e Hotel para Cachorro do Distrito Federal e entorno.
            </p>
            <div className="flex gap-2 mt-4">
              {["Fb", "Ig", "Wa"].map((s) => (
                <a
                  key={s}
                  href={s === "Wa" ? waUrl() : "#"}
                  target={s === "Wa" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white/60 hover:bg-[var(--green)] hover:text-white transition-colors duration-150"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4">Serviços</h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/servicos"
                    className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-150"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4">Páginas</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-4">Contato</h4>
            <p className="text-sm text-white/50 leading-relaxed mb-2">{SITE.address}</p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-150 block mb-4"
            >
              {SITE.phone}
            </a>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full bg-[var(--green)] text-white text-sm font-semibold hover:bg-[var(--green-md)] hover:-translate-y-px transition-all duration-150"
            >
              WhatsApp 24h
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.07] py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© 2025 {SITE.name}. Todos os direitos reservados.</span>
          <span>Ceilândia — Brasília — DF</span>
        </div>
      </div>
    </footer>
  );
}
