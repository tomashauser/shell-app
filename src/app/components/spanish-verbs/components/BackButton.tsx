import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type BackButtonProps = {
  onClick: () => void;
};

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button onClick={onClick} variant="ghost" size="sm">
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
