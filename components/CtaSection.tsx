import { SITE, waUrl } from "@/lib/data";

interface Props {
  title: string;
  subtitle: string;
  tag?: string;
}

export default function CtaSection({ title, subtitle, tag = "Agende agora" }: Props) {
  return (
    <section className="bg-[var(--bark)] text-white py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/10 px-4 py-1.5 rounded-full mb-5">
          {tag}
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">{title}</h2>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={waUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--bark)] font-semibold shadow hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-150"
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
