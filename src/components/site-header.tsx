import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import logoAsset from "@/assets/cheila-panizzi-logo.svg";

export function PawMark({ compact = false }: { compact?: boolean }) {
  return (
    <img src={logoAsset} alt="" aria-hidden="true" className={compact ? "h-10 w-auto" : "h-14 w-auto sm:h-16"} />
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Cheila Panizzi Veterinária - início">
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
      <Navigation mobile />
    </header>
  );
}
