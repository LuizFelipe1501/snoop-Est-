import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TEAM, waUrl } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os profissionais apaixonados por animais da Clínica Casa do Snoopy.",
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        title="Nossa Equipe"
        subtitle="Profissionais qualificados, licenciados e apaixonados pelo bem-estar animal."
        crumb="Equipe"
      />

      {/* TEAM CARDS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Quem cuida do seu pet</span>
            <h2 className="font-display font-bold text-4xl leading-tight">Cada membro foi escolhido com critério e cuidado</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden border border-[var(--green-lt)] group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200">
                <div className="overflow-hidden">
                  <Image src={m.img} alt={m.name} width={300} height={260} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[var(--green)]">{m.role}</div>
                  <div className="font-display font-bold text-lg mt-1 mb-2">{m.name}</div>
                  <p className="text-sm text-[var(--bark-md)] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK WITH US */}
      <section className="bg-[var(--green)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/15 px-4 py-1.5 rounded-full mb-4">Trabalhe conosco</span>
              <h2 className="font-display font-bold text-4xl text-white leading-tight mb-5">Faz parte do seu sonho cuidar de animais?</h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Estamos sempre em busca de profissionais apaixonados e comprometidos com a saúde e bem-estar animal. Se você compartilha dos nossos valores, entre em contato.
              </p>
              <a href={waUrl("Olá, gostaria de enviar meu currículo para a Clínica Casa do Snoopy.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--bark)] font-semibold text-sm hover:-translate-y-0.5 transition-all duration-150">
                Enviar currículo pelo WhatsApp
              </a>
            </div>
            <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl p-8">
              <ul className="flex flex-col gap-4">
                {[
                  "Ambiente de trabalho acolhedor e ético",
                  "Equipe colaborativa e comprometida",
                  "Atualização e treinamento constante",
                  "Salários e benefícios competitivos",
                  "Paixão pelos animais como valor central",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-center text-sm text-white/80">
                    <span className="w-5 h-5 rounded-full bg-[var(--green-md)] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Pronto para conhecer nossa equipe?"
        subtitle="Agende uma visita e veja de perto o cuidado que oferecemos ao seu pet."
        tag="Agende agora"
      />
    </>
  );
}
