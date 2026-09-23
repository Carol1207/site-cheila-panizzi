import { createFileRoute } from "@tanstack/react-router";
import {
  Apple,
  Bone,
  Droplets,
  Eye,
  HeartPulse,
  Ribbon,
  ScanLine,
  Smile,
  Sparkles,
  Syringe,
  TreePine,
  Wind,
} from "lucide-react";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Especialidades | Cheila Panizzi Veterinária" },
      {
        name: "description",
        content:
          "Conheça as especialidades da Cheila Panizzi Veterinária: cardiologia, dermatologia, oftalmologia, odontologia, endocrinologia, ortopedia, oncologia, nefrologia, gastroenterologia, diagnóstico por imagem e animais silvestres.",
      },
      { property: "og:title", content: "Especialidades | Cheila Panizzi Veterinária" },
      {
        property: "og:description",
        content: "Especialidades veterinárias com cuidado completo e acolhedor para o seu pet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpecialtiesPage,
});

const specialties: { title: string; text: string; icon: ReactNode; badge?: string }[] = [
  {
    title: "Cardiologia",
    text: "Diagnóstico e acompanhamento de doenças cardíacas com exames especializados e monitoramento contínuo.",
    icon: <HeartPulse />,
  },
  {
    title: "Dermatologia",
    text: "Cuidado de alergias, infecções cutâneas e doenças de pele com investigação detalhada e tratamento personalizado.",
    icon: <Sparkles />,
  },
  {
    title: "Oftalmologia",
    text: "Avaliação e tratamento de condições oculares para preservar a visão e o conforto do seu pet.",
    icon: <Eye />,
  },
  {
    title: "Odontologia",
    text: "Saúde bucal completa com limpeza, extrações e orientações preventivas para manter dentes e gengivas saudáveis.",
    icon: <Smile />,
  },
  {
    title: "Pneumologia",
    text: "Investigação e tratamento de doenças respiratórias com avaliação cuidadosa e acompanhamento dedicado.",
    icon: <Wind />,
  },
  {
    title: "Endocrinologia",
    text: "Diagnóstico e controle de distúrbios hormonais como diabetes, hipotireoidismo e hiperadrenocorticismo.",
    icon: <Syringe />,
  },
  {
    title: "Ortopedia",
    text: "Diagnóstico e tratamento de fraturas, lesões articulares, artroses e problemas locomotores para devolver a mobilidade do seu pet.",
    icon: <Bone />,
  },
  {
    title: "Oncologia",
    text: "Diagnóstico precoce, estadiamento e tratamentos oncológicos personalizados com foco no bem-estar e na qualidade de vida.",
    icon: <Ribbon />,
  },
  {
    title: "Nefrologia",
    text: "Prevenção, diagnóstico e acompanhamento de doenças renais e distúrbios urinários para proteger a saúde e o equilíbrio do pet.",
    icon: <Droplets />,
  },
  {
    title: "Gastroenterologia",
    text: "Investigação e tratamento de distúrbios digestivos, intolerâncias alimentares e doenças gastrointestinais com conduta individualizada.",
    icon: <Apple />,
  },
  {
    title: "Diagnóstico por imagem",
    text: "Exames de imagem para investigação precisa, apoiando diagnósticos e decisões clínicas com segurança.",
    icon: <ScanLine />,
  },
  {
    title: "Animais silvestres e exóticos",
    text: "Atendimento dedicado a espécies silvestres e exóticas com manejo cuidadoso e conhecimento especializado.",
    icon: <TreePine />,
  },
];

function SpecialtiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Especialidades</span>
          <div className="mt-4">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Cuidado veterinário para cada necessidade
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
              Da consulta preventiva aos procedimentos mais delicados, cada atendimento é conduzido com técnica, calma e atenção ao bem-estar do seu pet.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <article
              key={specialty.title}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-border backdrop-blur-md transition-shadow duration-300 hover:shadow-lg hover:shadow-brand/5 sm:p-7"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15 transition-transform duration-300 group-hover:scale-110 [&_svg]:size-5">
                {specialty.icon}
              </div>
              <h2 className="font-display text-2xl font-medium">{specialty.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{specialty.text}</p>
              {specialty.badge && (
                <span className="mt-4 inline-block rounded-full bg-warm-accent/10 px-3 py-1 text-xs font-medium text-warm-accent ring-1 ring-warm-accent/20">
                  {specialty.badge}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand px-5 py-16 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight">Quer saber qual cuidado é ideal?</h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/75">
              Fale com a equipe pelo WhatsApp e conte o que seu pet precisa.
            </p>
          </div>
          <WhatsAppButton label="Falar no WhatsApp" light />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
