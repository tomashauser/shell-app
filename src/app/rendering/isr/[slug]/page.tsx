import type { Route } from "next";
import {
  type DynamicSlug,
  dynamicSlugLabels,
  dynamicSlugs,
  type IsrSlug,
  isrSlugLabels,
  isrSlugs,
} from "@/app/rendering/isr/params";
import { formatTimeForView } from "@/app/utils/date-functions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return isrSlugs.map((isrSlug) => ({
    slug: isrSlug,
  }));
}

export const revalidate = 60;

// TODO: Idealni pripad na pouziti nuqs
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const date = new Date();

  const revalidateMessage =
    "If you wait for a minute and refresh the page, you should see a fresh time due to revalidate set to 60 seconds";

  if (dynamicSlugs.includes(slug as DynamicSlug)) {
    return (
      <main>
        <p>
          This page contains a recipe for{" "}
          {dynamicSlugLabels[slug as DynamicSlug]}
        </p>
        <p>
          The time you see is the time of your arrival to{" "}
          {"/rendering/isr" satisfies Route} because this page got prefetched
          then and is not ISR'd: {formatTimeForView(date)}
        </p>
        <p>
          If you go back and visit any of the ISR'd articles you'll see the
          build time instead
        </p>
        <p>{revalidateMessage}</p>
      </main>
    );
  }

  return (
    <main>
      <p>This page contains a recipe for {isrSlugLabels[slug as IsrSlug]}</p>
      <p>
        The time should be a static time of the app build{" "}
        {formatTimeForView(date)}
      </p>
      <p>{revalidateMessage}</p>
    </main>
  );
}
