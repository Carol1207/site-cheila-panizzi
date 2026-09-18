import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, HeartPulse, MessageCircle, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import heroImage from "@/assets/cheila-quem-somos.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Cheila Panizzi Veterinária" },
      {
        name: "description",
        content:
          "Conheça a Cheila Panizzi Veterinária, clínica dedicada ao cuidado acolhedor, seguro e humano dos pets em Canoas.",
      },
      { property: "og:title", content: "Quem Somos | Cheila Panizzi Veterinária" },
      {
        property: "og:description",
        content: "Uma clínica veterinária dedicada ao cuidado acolhedor, seguro e humano dos pets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Acolhimento",
    text: "Cada pet é recebido com calma, respeito e atenção ao seu próprio ritmo.",
    icon: <HandHeart />,
  },
  {
    title: "Segurança",
    text: "Cuidados e procedimentos conduzidos com técnica, planejamento e monitoramento.",
    icon: <ShieldCheck />,
  },
  {
    title: "Clareza",
    text: "Orientações objetivas para que cada decisão sobre a saúde do pet seja mais tranquila.",
    icon: <MessageCircle />,
  },
] as const;

function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Quem somos</span>
            <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Uma clínica feita de cuidado, técnica e afeto
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-foreground/70">
               A Cheila Panizzi Veterinária oferece um atendimento próximo e humano, em um ambiente pensado para reduzir o estresse e acolher cada pet com atenção individual.
            </p>
            <p className="mt-4 max-w-[58ch] leading-relaxed text-foreground/70">
              Reunimos serviços de saúde, higiene e bem-estar para acompanhar os pets em diferentes momentos, sempre com comunicação clara e respeito à relação entre cada animal e sua família.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-border">
              <img
                src={heroImage}
                alt="Cheila Panizzi sorrindo e acolhendo um cão na clínica"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-card/95 p-4 shadow-lg ring-1 ring-border backdrop-blur-xl sm:-left-7">
              <span className="grid size-10 place-items-center rounded-full bg-brand text-primary-foreground">
                <HeartPulse className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Cuidado com presença</p>
                <p className="text-xs text-foreground/60">atenção em cada detalhe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Nosso jeito de cuidar</span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              O que guia cada atendimento
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl bg-card p-6 ring-1 ring-border backdrop-blur-md sm:p-7">
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15 [&_svg]:size-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand px-5 py-16 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight">Conheça nosso atendimento</h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/75">
              Fale pelo WhatsApp para tirar dúvidas ou agendar um horário para seu pet.
            </p>
          </div>
          <WhatsAppButton label="Conversar no WhatsApp" light />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
