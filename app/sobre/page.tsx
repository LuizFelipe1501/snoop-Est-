import type { Metadata } from "next";
import Image from "next/image";
import { SITE, CHECKLIST, SPECIALTIES, waUrl } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a história, valores e estrutura da Clínica Veterinária Casa do Snoopy.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre a Clínica<br/>Casa do Snoopy"
        subtitle="Cuidado veterinário com excelência, comprometimento e amor pelos animais há mais de uma década."
        crumb="Sobre"
      />

      {/* HISTORIA */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex flex-col items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl w-full">
                <Image src={SITE.aboutImg} alt="Clínica" width={700} height={500} className="w-full h-[500px] object-cover object-center" />
              </div>
              <div className="absolute -top-5 -right-5 bg-[var(--gold)] text-[var(--bark)] rounded-2xl px-5 py-4 text-center shadow-lg hidden md:block">
                <strong className="block font-display text-3xl font-bold leading-none">+10</strong>
                <span className="text-xs font-medium opacity-80">anos de<br />experiência</span>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Nossa história</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-5">Nascemos da paixão pelos animais</h2>
              <p className="text-[var(--bark-md)] leading-relaxed mb-4">
                A <strong>Clínica Veterinária Casa do Snoopy</strong> nasceu do desejo de oferecer um atendimento veterinário que une técnica e afeto. Desde a fundação, temos como missão cuidar de cada pet como se fosse único — porque para o seu tutor, ele é.
              </p>
              <p className="text-[var(--bark-md)] leading-relaxed mb-6">
                Com duas unidades no Distrito Federal, estrutura moderna e equipe altamente qualificada, somos referência em saúde animal na região de Ceilândia e entorno.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {[...CHECKLIST, "Duas unidades no Distrito Federal"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm">
                    <span className="w-6 h-6 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[var(--green-lt)] text-[var(--green)] border border-[var(--green)]/20 rounded-xl px-4 py-2 text-sm font-semibold">Convênio Petlove</span>
                <span className="bg-[var(--green-lt)] text-[var(--green)] border border-[var(--green)]/20 rounded-xl px-4 py-2 text-sm font-semibold">Convênio Dog Life</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="bg-[var(--green)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/15 px-4 py-1.5 rounded-full mb-4">Especialidades</span>
            <h2 className="font-display font-bold text-4xl text-white leading-tight mb-3">Cuidado completo em cada fase da vida</h2>
            <p className="text-white/60">Atendemos do filhote ao geriátrico com atenção especializada.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPECIALTIES.map((sp) => (
              <div key={sp.num} className="bg-white/[0.08] border border-white/[0.12] rounded-2xl p-6 flex gap-4 hover:bg-white/[0.14] transition-colors duration-200">
                <div className="font-display text-2xl font-bold text-[var(--gold)] opacity-65 flex-shrink-0 leading-none">{sp.num}</div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-sm">{sp.title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed">{sp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Nossos valores</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-6">Por que escolher a Casa do Snoopy?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  ["Profissionais experientes", "Veterinários licenciados e em constante atualização."],
                  ["Ambiente seguro", "Estrutura pensada para o conforto e segurança dos animais."],
                  ["Tecnologia de ponta", "Equipamentos modernos para diagnóstico e tratamento precisos."],
                  ["Atendimento humanizado", "Cuidamos do seu pet com o carinho que ele merece."],
                  ["Disponibilidade total", "24 horas por dia, todos os dias do ano."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-sm font-semibold mb-0.5">{title}</strong>
                      <span className="text-sm text-[var(--bark-md)]">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] hover:-translate-y-0.5 transition-all duration-150">
                Agendar consulta
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image src={SITE.aboutImg2} alt="Cuidados veterinários" width={700} height={600} className="w-full h-[520px] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <CtaSection title="Venha nos visitar" subtitle="Traga seu pet para uma avaliação completa com nossa equipe de especialistas." tag="Venha nos visitar" />
    </>
  );
}
