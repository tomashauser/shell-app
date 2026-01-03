import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Route } from "next";

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
        <Link href={href as Route}>
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
