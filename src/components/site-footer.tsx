import { Link } from "@tanstack/react-router";

import { PawMark } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="bg-background px-5 py-6 sm:px-8 sm:py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center" aria-label="Cheila Panizzi Veterinária - início">
          <PawMark />
          <span className="sr-only">Cheila Panizzi Veterinária</span>
        </Link>
        <p className="text-sm text-foreground/55">Copyright © 2026 Clínica Cheila Panizzi Veterinária</p>
      </div>
    </footer>
  );
}
