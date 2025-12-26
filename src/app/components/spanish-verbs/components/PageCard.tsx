import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "./BackButton";

type PageCardProps = {
  title?: string;
  children: ReactNode;
  onBack?: () => void;
  backHref?: string;
  headerContent?: ReactNode;
  footer?: ReactNode;
  cardClassName?: string;
  contentClassName?: string;
};

export function PageCard({
  title,
  children,
  onBack,
  backHref,
  headerContent,
  footer,
  cardClassName = "max-w-2xl w-full",
  contentClassName = "",
}: PageCardProps) {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />

      <Card
        className={`${cardClassName} relative z-10 backdrop-blur-sm bg-white/95 shadow-xl h-[95dvh] self-baseline flex flex-col`}
      >
        {(title || headerContent || onBack || backHref) && (
          <CardHeader>
            {(onBack || backHref) && !headerContent && (
              <div className="flex justify-between items-center mb-4">
                {backHref ? (
                  <BackButton href={backHref} />
                ) : onBack ? (
                  <BackButton onClick={onBack} />
                ) : null}
                {title && (
                  <CardTitle className="text-3xl text-emerald-800 text-center w-full">
                    {title}
                  </CardTitle>
                )}
                <div className="w-20"></div>
              </div>
            )}
            {headerContent}
          </CardHeader>
        )}

        <CardContent className={`flex-1 overflow-auto ${contentClassName}`}>
          {children}
        </CardContent>

        {footer}
      </Card>
    </div>
  );
}
