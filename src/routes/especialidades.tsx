import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import cirurgiaImage from "@/assets/especialidades-cirurgia.jpg";
import consultorioImage from "@/assets/especialidades-consultorio.jpg";
import examesImage from "@/assets/especialidades-exames.jpg";

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Especialidades | Cheila Panizzi Veterinária" },
      {
        name: "description",
        content:
          "Conheça as especialidades da Cheila Panizzi Veterinária: consultas, exames diagnósticos e cirurgias com acompanhamento cuidadoso.",
      },
      { property: "og:title", content: "Especialidades | Cheila Panizzi Veterinária" },
      {
        property: "og:description",
        content: "Consultas, exames e cirurgias com cuidado veterinário completo e acolhedor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpecialtiesPage,
});

const specialties = [
  {
    title: "Consultas veterinárias",
    text: "Avaliação completa, escuta atenta e orientação clara para acompanhar a saúde do seu pet em todas as fases.",
    image: consultorioImage,
    imageAlt: "Consultório veterinário da clínica Cheila Panizzi",
    icon: <Stethoscope />,
    bullets: ["Consultas de rotina e prevenção", "Avaliação individualizada", "Orientações para o cuidado em casa"],
  },
  {
    title: "Exames diagnósticos",
    text: "Recursos de diagnóstico para investigar sintomas, acompanhar tratamentos e apoiar decisões clínicas com segurança.",
    image: examesImage,
    imageAlt: "Veterinária Cheila Panizzi examinando um filhote na clínica",
    icon: <FlaskConical />,
    bullets: ["Exames laboratoriais", "Exames de imagem", "Explicação clara dos resultados"],
  },
  {
    title: "Cirurgias",
    text: "Planejamento cuidadoso, monitoramento durante o procedimento e atenção próxima durante a recuperação.",
    image: cirurgiaImage,
    imageAlt: "Sala cirúrgica veterinária equipada da clínica",
    icon: <HeartPulse />,
    bullets: ["Avaliação pré-operatória", "Monitoramento do paciente", "Acompanhamento pós-operatório"],
  },
] as const;

function SpecialtiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Especialidades</span>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Cuidado veterinário para cada necessidade
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
              Da consulta preventiva aos procedimentos mais delicados, cada atendimento é conduzido com técnica, calma e atenção ao bem-estar do seu pet.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <article key={specialty.title} className="overflow-hidden rounded-3xl bg-card ring-1 ring-border backdrop-blur-md">
              <img src={specialty.image} alt={specialty.imageAlt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6 sm:p-7">
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15 [&_svg]:size-5">
                  {specialty.icon}
                </div>
                <h2 className="font-display text-3xl font-medium">{specialty.title}</h2>
                <p className="mt-4 leading-relaxed text-foreground/70">{specialty.text}</p>
                <ul className="mt-6 space-y-3">
                  {specialty.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/75">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
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
