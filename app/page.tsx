import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, STATS, CHECKLIST, SERVICES, TEAM, HOURS, FAQ, waUrl } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Clínica Veterinária 24h em Ceilândia",
  description: "Atendimento veterinário completo 24h em Ceilândia, DF. Consultas, cirurgias, vacinas, hotel e creche para pets.",
};

const STRIP = [
  { title: "Clínica Veterinária", desc: "Consultas, exames e cirurgias", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
  { title: "Hotel para Pets", desc: "Hospedagem supervisionada", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { title: "Creche para Cães", desc: "Atividades e cuidados diários", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><circle cx={12} cy={12} r={10}/><polyline points="12 6 12 12 16 14"/></svg> },
  { title: "Emergências 24h", desc: "Pronto-atendimento imediato", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--green)] to-[#1a5c38] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 flex-wrap mb-6">
                {["Aberto 24 horas", "Ceilândia · DF", "Convênios aceitos"].map((b) => (
                  <span key={b} className="text-xs font-semibold tracking-wide bg-white/15 border border-white/25 px-3.5 py-1.5 rounded-full">{b}</span>
                ))}
              </div>
              <h1 className="font-display font-black text-5xl md:text-6xl leading-[1.1] mb-5">
                Melhor Clínica<br />
                <em className="italic text-[var(--gold)]">Veterinária</em>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Na Casa do Snoopy, cada pet recebe atenção veterinária completa — consultas, cirurgias, vacinas e emergências, todos os dias, a qualquer hora.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--bark)] font-semibold shadow hover:-translate-y-0.5 transition-all duration-150">
                  Agendar pelo WhatsApp
                </a>
                <Link href="/servicos" className="px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all duration-150">
                  Ver Serviços
                </Link>
              </div>
              <div className="flex gap-10 flex-wrap">
                {STATS.map((s) => (
                  <div key={s.value}> 1
                    <strong className="block font-display text-4xl font-black text-[var(--gold)] leading-none">{s.value}</strong>
                    <span className="text-xs text-white/60 font-medium mt-1 block">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src={SITE.heroImg} alt="Clínica" width={900} height={480} className="w-full h-[460px] object-cover object-center" priority />
              <div className="absolute bottom-5 left-5 bg-white text-[var(--green)] rounded-2xl px-5 py-3.5 flex items-center gap-3 font-semibold text-sm shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                Atendendo agora
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="bg-white border-b border-[var(--green-lt)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STRIP.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 py-8 px-5 hover:bg-[var(--green-lt)] transition-colors duration-200 rounded-2xl">
                <div className="w-14 h-14 bg-[var(--green-lt)] rounded-2xl flex items-center justify-center text-[var(--green)]">{s.icon}</div>
                <h3 className="font-semibold text-sm text-[var(--bark)]">{s.title}</h3>
                <p className="text-xs text-[var(--bark-md)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex flex-col items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl w-full">
                <Image src={SITE.aboutImg} alt="Equipe" width={700} height={500} className="w-full h-[500px] object-cover object-center" />
              </div>
              <div className="absolute -top-5 -right-5 bg-[var(--gold)] text-[var(--bark)] rounded-2xl px-5 py-4 text-center shadow-lg hidden md:block">
                <strong className="block font-display text-3xl font-bold leading-none">+10</strong>
                <span className="text-xs font-medium opacity-80">anos de<br/>experiência</span>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Quem somos</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-5">Referência em saúde animal no Distrito Federal</h2>
              <p className="text-[var(--bark-md)] leading-relaxed mb-6">
                A <strong>Clínica Veterinária Casa do Snoopy</strong> é referência em cuidados com excelência, comprometimento e amor pelos animais. Atendemos cães e gatos com estrutura moderna e profissionais licenciados.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm">
                    <span className="w-6 h-6 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap mb-6">
                <span className="bg-[var(--green-lt)] text-[var(--green)] border border-[var(--green)]/20 rounded-xl px-4 py-2 text-sm font-semibold">Convênio Petlove</span>
                <span className="bg-[var(--green-lt)] text-[var(--green)] border border-[var(--green)]/20 rounded-xl px-4 py-2 text-sm font-semibold">Convênio Dog Life</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/sobre" className="px-6 py-3 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] hover:-translate-y-0.5 transition-all duration-150">Conhecer a clínica</Link>
                <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border-2 border-[var(--green)] text-[var(--green)] font-semibold text-sm hover:bg-[var(--green-lt)] transition-all duration-150">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">O que fazemos</span>
            <h2 className="font-display font-bold text-4xl leading-tight">Serviços completos para a saúde do seu pet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((svc) => (
              <div key={svc.slug} className="bg-white rounded-2xl overflow-hidden border border-[var(--green-lt)] group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 relative">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--green)] to-[var(--gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="w-full h-44 overflow-hidden flex items-center justify-center bg-[var(--green-lt)]">
                  <Image src={svc.img} alt={svc.title} width={400} height={200} className="w-full h-44 object-cover object-center" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-base mb-2">{svc.title}</h3>
                  <p className="text-sm text-[var(--bark-md)] leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicos" className="px-7 py-3.5 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] hover:-translate-y-0.5 transition-all duration-150">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[var(--green)] rounded-3xl p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display text-[16rem] font-black text-white/[0.04] leading-none pointer-events-none select-none">24h</div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 bg-white/15 px-4 py-1.5 rounded-full mb-4">Disponibilidade</span>
            <h2 className="font-display font-bold text-4xl text-white mb-2">Estamos sempre aqui para você</h2>
            <p className="text-white/60 mb-10">Sua emergência não tem horário — nossa equipe também não.</p>
            <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto">
              {HOURS.map((h) => (
                <div key={h.day} className="bg-white/10 border border-white/15 rounded-xl py-4 px-1 backdrop-blur-sm">
                  <div className="text-[0.6rem] font-bold tracking-wider uppercase text-white/50">{h.day}</div>
                  <div className="font-bold text-sm text-[var(--gold)] mt-1.5">{h.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Nossos profissionais</span>
            <h2 className="font-display font-bold text-4xl leading-tight">Equipe preparada com amor pelos animais</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden border border-[var(--green-lt)] group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200">
                <div className="overflow-hidden flex items-center justify-center">
                  <Image src={m.img} alt={m.name} width={300} height={260} className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[var(--green)]">{m.role}</div>
                  <div className="font-display font-bold text-lg mt-1">{m.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/equipe" className="px-7 py-3.5 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] hover:-translate-y-0.5 transition-all duration-150">
              Conhecer a equipe
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Dúvidas</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-4">Perguntas frequentes</h2>
              <p className="text-[var(--bark-md)] text-sm leading-relaxed mb-6">Não encontrou o que procura? Fale diretamente com nossa equipe.</p>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] transition-all duration-150">
                Falar pelo WhatsApp
              </a>
            </div>
            <div className="lg:col-span-2">
              <FaqAccordion items={FAQ.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Seu pet merece o melhor cuidado"
        subtitle="Entre em contato pelo WhatsApp — respondemos imediatamente, 24 horas por dia."
      />
    </>
  );
}
