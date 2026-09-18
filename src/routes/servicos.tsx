import { createFileRoute } from "@tanstack/react-router";
import { Bath, Dog, FlaskConical, HeartPulse, Scissors, Stethoscope } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Cheila Panizzi Veterinária" },
      { name: "description", content: "Conheça os serviços da Cheila Panizzi Veterinária em Canoas: banho, tosa, creche, consultas, exames e cirurgias." },
      { property: "og:title", content: "Serviços | Cheila Panizzi Veterinária" },
      { property: "og:description", content: "Cuidados veterinários, higiene e bem-estar para seu pet em Canoas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Banho", text: "Higiene cuidadosa com produtos adequados e atenção às necessidades de cada pet.", icon: <Bath /> },
  { title: "Tosa", text: "Tosa higiênica e estética com manejo gentil, conforto e acabamento cuidadoso.", icon: <Scissors /> },
  { title: "Creche", text: "Brincadeiras, socialização e descanso em uma rotina segura e supervisionada.", icon: <Dog /> },
  { title: "Consultas e vacinas", text: "Avaliação cuidadosa e acompanhamento da saúde em todas as fases da vida.", icon: <Stethoscope /> },
  { title: "Exames", text: "Exames laboratoriais e de imagem para decisões mais seguras, incluindo radiografia, endoscopia e ultrassonografia.", icon: <FlaskConical /> },
  { title: "Cirurgias", text: "Planejamento, monitoramento e acompanhamento atento em cada procedimento.", icon: <HeartPulse /> },
] as const;

function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Serviços</span>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">Tudo o que seu pet precisa em um só lugar</h1>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70">Saúde, higiene e bem-estar reunidos em um atendimento próximo, cuidadoso e adaptado a cada pet.</p>
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl bg-card p-6 ring-1 ring-border backdrop-blur-md sm:p-7">
              <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15 [&_svg]:size-5">{service.icon}</div>
              <h2 className="font-display text-3xl font-medium">{service.title}</h2>
              <p className="mt-3 leading-relaxed text-foreground/70">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-brand px-5 py-16 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="font-display text-4xl font-medium leading-tight">Vamos cuidar do seu pet?</h2><p className="mt-3 text-primary-foreground/75">Fale conosco para tirar dúvidas ou consultar horários.</p></div>
          <WhatsAppButton label="Falar no WhatsApp" light />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}