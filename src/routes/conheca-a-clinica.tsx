import { createFileRoute } from "@tanstack/react-router";
import { Building2, Play } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banhoImage from "@/assets/sala-banho.jpg";
import cirurgiaImage from "@/assets/cirurgia-clinica.jpg";
import consultorioImage from "@/assets/especialidades-consultorio.jpg";
import crecheImage from "@/assets/creche-clinica.jpg";
import examesImage from "@/assets/especialidades-exames.jpg";
import ofuroImage from "@/assets/ofuro-clinica.jpg";
import frenteClinicaImage from "@/assets/frente-clinica.jpg";
import salaPrincipalImage from "@/assets/sala-principal.jpg";

export const Route = createFileRoute("/conheca-a-clinica")({
  head: () => ({
    meta: [
      { title: "Conheça a Clínica | Cheila Panizzi Veterinária" },
      {
        name: "description",
        content:
          "Conheça os ambientes da Cheila Panizzi Veterinária em Canoas: consultório, exames, cirurgia, banho e tosa, ofurô e creche.",
      },
      { property: "og:title", content: "Conheça a Clínica | Cheila Panizzi Veterinária" },
      {
        property: "og:description",
        content: "Um espaço acolhedor e preparado para cuidar da saúde e do bem-estar do seu pet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClinicPage,
});

const clinicVideo: { url: string; poster?: string } | null = null;

const spaces = [
  {
    title: "Consultório",
    description: "Um ambiente tranquilo para consultas, avaliações e conversas com atenção.",
    image: consultorioImage,
    imageAlt: "Consultório da clínica Cheila Panizzi Veterinária",
  },
  {
    title: "Exames",
    description: "Estrutura para investigar e acompanhar a saúde de cada pet.",
    image: examesImage,
    imageAlt: "Atendimento de exames na clínica Cheila Panizzi Veterinária",
  },
  {
    title: "Centro cirúrgico",
    description: "Sala equipada para procedimentos planejados com segurança.",
    image: cirurgiaImage,
    imageAlt: "Centro cirúrgico veterinário equipado",
  },
  {
    title: "Banho e tosa",
    description: "Espaço amplo e organizado para higiene e cuidados com a pelagem.",
    image: banhoImage,
    imageAlt: "Sala de banho e tosa da clínica",
  },
  {
    title: "Creche",
    description: "Um espaço preparado para brincar, socializar e descansar.",
    image: crecheImage,
    imageAlt: "Espaço interno da creche para pets",
  },
  {
    title: "Ofurô",
    description: "Cuidado relaxante em um ambiente pensado para o conforto do pet.",
    image: ofuroImage,
    imageAlt: "Ofurô de madeira na área de banho da clínica",
  },
] as const;

function ClinicPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-3xl rise">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Nossa estrutura</span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Conheça a Clínica
            </h1>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-foreground/70">
              Cada ambiente foi preparado para oferecer conforto, segurança e cuidado, reunindo saúde e bem-estar em um só lugar.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full relative rise [animation-delay:100ms]"
          >
            <CarouselContent>
              {[
                { src: frenteClinicaImage, alt: "Frente da clínica Cheila Panizzi Veterinária" },
                { src: salaPrincipalImage, alt: "Sala principal da clínica Cheila Panizzi Veterinária" },
              ].map((img, index) => (
                <CarouselItem key={index}>
                  <figure className="relative overflow-hidden rounded-3xl ring-1 ring-border">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1600}
                      height={900}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-none shadow-md" />
            <CarouselNext className="right-4 bg-background/80 hover:bg-background border-none shadow-md" />
          </Carousel>
        </div>
      </section>

      {clinicVideo ? (
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-end gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/15"><Play className="size-5" /></span>
              <div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Passeio pela clínica</span><h2 className="mt-2 font-display text-4xl font-medium">Veja nosso espaço de perto</h2></div>
            </div>
            <video controls preload="metadata" poster={clinicVideo.poster} className="aspect-video w-full rounded-3xl bg-foreground ring-1 ring-border">
              <source src={clinicVideo.url} />
            </video>
          </div>
        </section>
      ) : null}

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-accent">Por dentro da clínica</span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">Ambientes pensados para cuidar</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {spaces.map((space) => (
              <figure key={space.title} className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border">
                <img src={space.image} alt={space.imageAlt} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-transparent px-5 pb-5 pt-16 text-background">
                  <h3 className="font-display text-2xl font-medium">{space.title}</h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-background/85">{space.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand px-5 py-16 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="font-display text-4xl font-medium leading-tight">Venha conhecer nosso cuidado</h2><p className="mt-3 max-w-2xl text-primary-foreground/75">Fale com a equipe para tirar dúvidas ou agendar um horário para seu pet.</p></div>
          <WhatsAppButton label="Conversar no WhatsApp" light />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}