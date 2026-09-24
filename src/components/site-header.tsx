import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { whatsappUrl } from "@/lib/site";
import logoAsset from "@/assets/cheila-panizzi-logo.svg";

export function PawMark({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset}
      alt=""
      aria-hidden="true"
      className={compact ? "h-10 w-auto" : "h-14 w-auto sm:h-16"}
    />
  );
}

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const linkClass = "transition-colors hover:text-brand";
  const activeClass = "font-semibold text-brand";

  return (
    <nav
      aria-label={mobile ? "Navegação móvel" : "Navegação principal"}
      className={
        mobile
          ? "mx-auto flex max-w-full gap-5 overflow-x-auto px-5 pb-3 text-sm text-foreground/70 lg:hidden"
          : "hidden items-center gap-6 text-sm text-foreground/70 lg:flex"
      }
    >
      <Link
        to="/"
        activeOptions={{ exact: true }}
        activeProps={{ className: activeClass }}
        className={mobile ? `shrink-0 ${linkClass}` : linkClass}
      >
        Início
      </Link>
      <Link
        to="/servicos"
        activeProps={{ className: activeClass }}
        className={mobile ? `shrink-0 ${linkClass}` : linkClass}
      >
        Serviços
      </Link>
      <Link
        to="/especialidades"
        activeProps={{ className: activeClass }}
        className={mobile ? `shrink-0 ${linkClass}` : linkClass}
      >
        Especialidades
      </Link>
      <Link
        to="/conheca-a-clinica"
        activeProps={{ className: activeClass }}
        className={mobile ? `shrink-0 ${linkClass}` : linkClass}
      >
        Conheça a Clínica
      </Link>
      <Link
        to="/quem-somos"
        activeProps={{ className: activeClass }}
        className={mobile ? `shrink-0 ${linkClass}` : linkClass}
      >
        Quem Somos
      </Link>
    </nav>
  );
}

function MobileNavigation() {
  const links = [
    { to: "/", label: "Início", exact: true },
    { to: "/servicos", label: "Serviços" },
    { to: "/especialidades", label: "Especialidades" },
    { to: "/conheca-a-clinica", label: "Conheça a Clínica" },
    { to: "/quem-somos", label: "Quem Somos" },
  ] as const;

  return (
    <nav
      aria-label="Navegação móvel"
      className="mt-8 flex flex-col gap-2 px-6 text-base text-foreground/80"
    >
      {links.map(({ to, label, exact }) => (
        <SheetClose asChild key={to}>
          <Link
            to={to}
            activeOptions={exact ? { exact: true } : undefined}
            activeProps={{ className: "bg-brand-soft font-semibold text-brand" }}
            className="rounded-xl px-4 py-3 transition-colors hover:bg-brand-soft hover:text-brand"
          >
            {label}
          </Link>
        </SheetClose>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl lg:sticky">
        <div className="mx-auto hidden max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:flex">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="Cheila Panizzi Veterinária - início"
          >
            <PawMark />
            <span className="sr-only">Cheila Panizzi Veterinária</span>
          </Link>
          <Navigation />
          <Button asChild className="rounded-full shadow-none">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>

        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[min(85vw,20rem)] border-r border-brand/15 bg-background p-0"
            >
              <div className="bg-brand-soft px-6 pb-7 pt-16">
                <Link
                  to="/"
                  className="inline-flex items-center gap-3"
                  aria-label="Cheila Panizzi Veterinária - início"
                >
                  <PawMark compact />
                  <span className="sr-only">Cheila Panizzi Veterinária</span>
                </Link>
                <SheetTitle className="mt-4 font-display text-2xl font-medium text-ink">
                  Menu principal
                </SheetTitle>
                <p className="mt-1 text-sm text-foreground/65">
                  Cuidado e carinho em cada detalhe.
                </p>
              </div>
              <MobileNavigation />
            </SheetContent>
          </Sheet>

          <Link to="/" aria-label="Cheila Panizzi Veterinária - início">
            <PawMark compact />
            <span className="sr-only">Cheila Panizzi Veterinária</span>
          </Link>

          <Button
            asChild
            size="icon"
            className="rounded-full shadow-none"
            aria-label="Falar pelo WhatsApp"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle />
            </a>
          </Button>
        </div>
      </header>
      <div className="h-[4.5rem] lg:hidden" aria-hidden="true" />
    </>
  );
}
