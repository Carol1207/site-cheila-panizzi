import { Link } from "@tanstack/react-router";

import { PawMark } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="bg-background px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <PawMark compact />
          <span className="font-display text-lg font-semibold">Cheila Panizzi Veterinária</span>
        </Link>
        <p className="text-sm text-foreground/55">Copyright © 2026 Clínica Cheila Panizzi Veterinária</p>
      </div>
    </footer>
  );
}
