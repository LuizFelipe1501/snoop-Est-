import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  crumb: string;
}

export default function PageHero({ title, subtitle, crumb }: Props) {
  return (
    <section className="bg-gradient-to-br from-[var(--green)] to-[#1a5c38] text-white py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex gap-2 items-center text-xs text-white/50 mb-4">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <span>/</span>
          <span className="text-white/80">{crumb}</span>
        </div>
        <h1
          className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-white/75 text-lg max-w-xl">{subtitle}</p>
      </div>
    </section>
  );
}
