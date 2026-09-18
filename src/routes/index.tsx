import { createFileRoute } from "@tanstack/react-router";
import {
  Bath,
  Clock3,
  Dog,
  FlaskConical,
  HeartPulse,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Waves,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import cirurgiaImage from "@/assets/cirurgia-clinica.jpg";
import crecheImage from "@/assets/creche-clinica.jpg";
import examesImage from "@/assets/exames-cheila.jpg";
import heroImage from "@/assets/cheila-clinica.jpg";
import ofuroImage from "@/assets/ofuro-clinica.jpg";
import salaBanhoImage from "@/assets/sala-banho.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheila Panizzi Veterinária | Clínica e Pet Care em Canoas" },
      {
        name: "description",
        content:
          "Banho e tosa, creche, exames e cirurgias com cuidado veterinário acolhedor em Canoas. Fale com a Cheila Panizzi Veterinária pelo WhatsApp.",
      },
      { property: "og:title", content: "Cheila Panizzi Veterinária | Clínica e Pet Care em Canoas" },
      {
        property: "og:description",
        content: "Cuidado completo para seu pet, do banho aos exames e cirurgias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});


function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />

      <section id="inicio" className="scroll-mt-28 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-brand/15 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand" /> Cuidado veterinário com carinho
            </span>
            <h1 className="mt-6 max-w-2xl font-display text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
              Cuidado completo para quem faz parte da família
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-foreground/70">
              Da rotina de bem-estar aos cuidados mais delicados, reunimos estrutura, técnica e acolhimento para o seu pet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton label="Falar no WhatsApp" />
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-card px-6 shadow-none">
                <a href="#banho-e-tosa">Conhecer serviços</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/60">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-warm-accent" />Equipe cuidadosa</span>
              <span className="inline-flex items-center gap-2"><FlaskConical className="size-4 text-warm-accent" />Exames específicos</span>
              <span className="inline-flex items-center gap-2"><Dog className="size-4 text-warm-accent" />Bem-estar diário</span>
            </div>
          </div>

          <div className="rise relative [animation-delay:100ms]">
            <div className="overflow-hidden rounded-3xl ring-1 ring-border">
              <img
                src={heroImage}
                alt="Veterinária Cheila Panizzi acolhendo um filhote na clínica"
                width={1200}
                height={1500}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-card/95 p-4 shadow-lg ring-1 ring-border backdrop-blur-xl sm:-left-7">
              <span className="grid size-10 place-items-center rounded-full bg-brand text-primary-foreground"><HeartPulse className="size-5" /></span>
              <div><p className="text-sm font-semibold">Cuidado em cada etapa</p><p className="text-xs text-foreground/60">prevenção, saúde e bem-estar</p></div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="border-t border-border" />
      </div>

      <ServiceSection
        id="banho-e-tosa"
        eyebrow="Banho e Tosa"
        title="Higiene com calma, técnica e muito carinho"
        text="Banhos cuidadosos, tosa higiênica e estética em um ambiente tranquilo, com atenção ao perfil e às necessidades de cada pet."
        bullets={["Produtos adequados para pele e pelagem", "Manejo gentil e atendimento individual", "Acabamento feito com atenção aos detalhes"]}
        image={salaBanhoImage}
        imageAlt="Sala de banho e tosa da clínica Cheila Panizzi"
        icon={<Bath />}
      />
      <ServiceSection
        id="creche"
        eyebrow="Creche"
        title="Um dia leve, ativo e cheio de companhia"
        text="Uma rotina pensada para socialização, brincadeiras e descanso, sempre com supervisão e respeito ao ritmo de cada cão."
        bullets={["Atividades e enriquecimento ambiental", "Convívio seguro e supervisionado", "Espaços para brincar e relaxar"]}
        image={crecheImage}
        imageAlt="Espaço interno da creche preparado para os pets"
        icon={<Dog />}
        reverse
      />
      <ServiceSection
        id="ofuro"
        eyebrow="Ofurô"
        title="Relaxamento e bem-estar em um banho especial"
        text="Um momento de cuidado pensado para aliviar tensões e proporcionar conforto, com água morna e acompanhamento atento durante toda a experiência."
        bullets={["Banho relaxante com água em temperatura agradável", "Manejo gentil e acompanhamento individual", "Conforto e tranquilidade para o seu pet"]}
        image={ofuroImage}
        imageAlt="Ofurô de madeira na área de banho da clínica"
        icon={<Waves />}
      />
      <ServiceSection
        id="exames"
        eyebrow="Exames"
        title="Respostas precisas para cuidar melhor"
        text="Realizamos exames laboratoriais e diagnósticos específicos para apoiar decisões clínicas com mais rapidez e segurança."
        bullets={["Análises clínicas e hemograma", "Ultrassonografia e exames de imagem", "Orientação clara sobre cada resultado"]}
        image={examesImage}
        imageAlt="Veterinária Cheila Panizzi examinando um cão com estetoscópio"
        icon={<FlaskConical />}
        reverse
      />
      <ServiceSection
        id="cirurgia"
        eyebrow="Cirurgia"
        title="Segurança antes, durante e depois"
        text="Cada procedimento é planejado de forma individual, com avaliação pré-operatória, monitoramento e acompanhamento atento na recuperação."
        bullets={["Avaliação pré-operatória completa", "Monitoramento durante o procedimento", "Orientação e suporte no pós-operatório"]}
        image={cirurgiaImage}
        imageAlt="Sala cirúrgica veterinária equipada da clínica Cheila Panizzi"
        icon={<HeartPulse />}
      />

      <section id="contato" className="scroll-mt-28 bg-brand px-5 py-20 text-primary-foreground sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Contato</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Vamos cuidar do seu melhor amigo?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
              Tire suas dúvidas, consulte horários ou solicite um atendimento diretamente pelo WhatsApp.
            </p>
            <div className="mt-8"><WhatsAppButton label="Conversar no WhatsApp" light /></div>
          </div>
          <div className="space-y-5 border-t border-primary-foreground/20 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0" /><div><p className="font-medium">Onde estamos</p><p className="mt-1 text-sm text-primary-foreground/70">Rua Duque de Caxias, 170 · Canoas/RS</p></div></div>
            <div className="flex gap-3"><Clock3 className="mt-0.5 size-5 shrink-0" /><div><p className="font-medium">Horários</p><p className="mt-1 text-sm text-primary-foreground/70">Segunda a sexta · 9h às 18h<br />Sábado · 9h às 12h</p></div></div>
            <div className="flex gap-3"><MessageCircle className="mt-0.5 size-5 shrink-0" /><div><p className="font-medium">Telefone e WhatsApp</p><p className="mt-1 text-sm text-primary-foreground/70">(51) 3478-1426</p></div></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

type ServiceSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  reverse?: boolean;
};

function ServiceSection({ id, eyebrow, title, text, bullets, image, imageAlt, icon, reverse = false }: ServiceSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="mb-5 flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15 [&_svg]:size-5">
              {icon}
            </div>
            <span className="text-xl font-semibold uppercase tracking-wider text-warm-accent">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">{text}</p>
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/75">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />{bullet}
              </li>
            ))}
          </ul>

        </div>
        <div className={`overflow-hidden rounded-2xl ring-1 ring-border ${reverse ? "lg:order-1" : ""}`}>
          <img src={image} alt={imageAlt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.02]" />
        </div>
      </div>
    </section>
  );
}