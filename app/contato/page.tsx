import type { Metadata } from "next";
import { SITE, FAQ, waUrl } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Clínica Veterinária Casa do Snoopy. Atendimento 24h em Ceilândia, DF.",
};

const PIN = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx={12} cy={10} r={3}/></svg>;
const TEL = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const CLK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><circle cx={12} cy={12} r={10}/><polyline points="12 6 12 12 16 14"/></svg>;
const CRD = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><rect x={1} y={4} width={22} height={16} rx={2} ry={2}/><line x1={1} y1={10} x2={23} y2={10}/></svg>;

export default function ContatoPage() {
  const mapSrc = `https://maps.google.com/maps?q=${SITE.addressMap}&t=m&z=15&output=embed&iwloc=near`;

  return (
    <>
      <PageHero
        title="Entre em Contato"
        subtitle="Disponíveis 24 horas por dia para cuidar do seu pet com carinho e responsabilidade."
        crumb="Contato"
      />

      {/* MAP + CONTACT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-5">Nos encontre</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-8">Localização e informações</h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: PIN, label: "Endereço", content: SITE.address },
                  { icon: TEL, label: "Telefone / WhatsApp", content: SITE.phone, href: `tel:${SITE.phoneTel}` },
                  { icon: CLK, label: "Horário de Funcionamento", content: "Segunda a Domingo — 24 horas" },
                  { icon: CRD, label: "Convênios Aceitos", content: "Petlove & Dog Life" },
                ].map(({ icon, label, content, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-[var(--green-lt)] rounded-xl flex items-center justify-center text-[var(--green)] flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">{label}</h4>
                      {href ? (
                        <a href={href} className="text-sm text-[var(--green)] font-semibold">{content}</a>
                      ) : (
                        <p className="text-sm text-[var(--bark-md)]">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] hover:-translate-y-0.5 transition-all duration-150">
                Falar pelo WhatsApp
              </a>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[var(--green-lt)]">
              <iframe
                src={mapSrc}
                title="Localização da Clínica"
                className="w-full h-[420px] block border-none"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--green)] bg-[var(--green-lt)] px-4 py-1.5 rounded-full mb-4">Dúvidas</span>
              <h2 className="font-display font-bold text-4xl leading-tight mb-4">Perguntas frequentes</h2>
              <p className="text-[var(--bark-md)] text-sm leading-relaxed mb-6">
                Não encontrou o que procura? Fale diretamente com nossa equipe pelo WhatsApp.
              </p>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-full bg-[var(--green)] text-white font-semibold text-sm hover:bg-[var(--green-md)] transition-all duration-150">
                Falar agora
              </a>
            </div>
            <div className="lg:col-span-2">
              <FaqAccordion items={FAQ} />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Emergência? Estamos prontos agora."
        subtitle="Ligue ou mande mensagem — nossa equipe responde imediatamente, 24 horas."
        tag="Atendimento imediato"
      />
    </>
  );
}
