import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type BackButtonProps =
  | {
      href: string;
      onClick?: never;
    }
  | {
      onClick: () => void;
      href?: never;
    };

export function BackButton({ onClick, href }: BackButtonProps) {
  if (href) {
    return (
      <Button asChild variant="ghost" size="sm">
        {/* biome-ignore lint/suspicious/noExplicitAny: Next.js Link type issue with dynamic routes */}
        <Link href={href as any}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </Button>
    );
  }

  return (
    <Button onClick={onClick} variant="ghost" size="sm">
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
