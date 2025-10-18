import type { Route } from "next";
import { revalidatePath } from "next/cache";
import { formatTimeForView } from "@/app/utils/date-functions";
import { Button } from "@/components/ui/button";

const revalidate = async (path: Route) => {
  "use server";
  revalidatePath(path);
};

export default async function Page() {
  const date = new Date();

  return (
    <main>
      <p>This page should be statically pre-rendered.</p>
      <p>
        This time display should be the static of the build:{" "}
        {formatTimeForView(date)}
      </p>
      <p>It is also possible to revalidate a path manually:</p>
      <form action={revalidate.bind(null, "/rendering/ssg")}>
        <Button type="submit">Revalidovat</Button>
      </form>
    </main>
  );
}
