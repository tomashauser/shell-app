import { formatTimeForView } from "@/app/utils/date-functions";

export const dynamic = "auto";

export default async function Page() {
  const date = new Date();

  return (
    <main>
      <p>This page should be rendered dynamically.</p>
      <p>
        This time display should be dynamic and should update when you update the page:
        {formatTimeForView(date)}
      </p>
    </main>
  );
}
