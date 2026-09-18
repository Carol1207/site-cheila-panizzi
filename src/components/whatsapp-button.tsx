import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  label: string;
  light?: boolean;
};

export function WhatsAppButton({ label, light = false }: WhatsAppButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      variant={light ? "secondary" : "default"}
      className="h-12 rounded-full px-6 shadow-none"
    >
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`${label} pelo WhatsApp`}>
        <MessageCircle />
        {label}
        <ArrowRight />
      </a>
    </Button>
  );
}
