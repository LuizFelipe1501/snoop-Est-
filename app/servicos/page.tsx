import type { Metadata } from "next";
import Image from "next/image";
import { SERVICES, HOURS, waUrl } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Consultas, cirurgias, vacinas, hotel e creche para pets em Ceilândia, DF.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Nossos Serviços"
        subtitle="Atendimento veterinário completo para cães e gatos, com estrutura moderna e equipe especializada."
        crumb="Serviços"
      />

      {/* CARDS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">O que oferecemos</span>
            <h2 className="font-display font-bold text-4xl leading-tight">Serviços completos para cada necessidade</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.slug} className="bg-white rounded-2xl overflow-hidden border border-[var(--green-lt)] group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 relative">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--green)] to-[var(--gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="overflow-hidden">
                  <Image src={svc.img} alt={svc.title} width={400} height={200} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
                  <p className="text-sm text-[var(--bark-md)] leading-relaxed mb-4">{svc.desc}</p>
                  <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-[var(--green)] hover:underline">
                    Agendar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="bg-[var(--cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[var(--green)] rounded-3xl p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display text-[16rem] font-black text-white/[0.04] leading-none pointer-events-none select-none">24h</div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/15 px-4 py-1.5 rounded-full mb-4">Disponibilidade</span>
            <h2 className="font-display font-bold text-4xl text-white mb-2">Funcionamos 24 horas por dia</h2>
            <p className="text-white/60 mb-10">Atendemos emergências e consultas a qualquer hora, todos os dias.</p>
            <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto">
              {HOURS.map((h) => (
                <div key={h.day} className="bg-white/10 border border-white/15 rounded-xl py-4 px-1">
                  <div className="text-[0.6rem] font-bold tracking-wider uppercase text-white/50">{h.day}</div>
                  <div className="font-bold text-sm text-[var(--gold)] mt-1.5">{h.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONVENIOS */}
      <section className="bg-[var(--green)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/15 px-4 py-1.5 rounded-full mb-4">Convênios</span>
            <h2 className="font-display font-bold text-4xl text-white mb-3">Aceitamos os principais convênios</h2>
            <p className="text-white/60 leading-relaxed">Para facilitar o acesso ao melhor atendimento, aceitamos os convênios Petlove e Dog Life. Entre em contato para confirmar coberturas.</p>
          </div>
          <div className="flex gap-5 flex-wrap mb-8">
            {["Petlove", "Dog Life"].map((c) => (
              <div key={c} className="bg-white/[0.12] border border-white/20 rounded-2xl px-8 py-5 text-xl font-bold text-white">{c}</div>
            ))}
          </div>
          <a href={waUrl()} target="_blank" rel="noopener noreferrer"
            className="inline-flex px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--bark)] font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
            Verificar cobertura pelo WhatsApp
          </a>
        </div>
      </section>

      <CtaSection title="Pronto para cuidar do seu pet?" subtitle="Fale conosco pelo WhatsApp e agende seu horário agora mesmo." />
    </>
  );
}
