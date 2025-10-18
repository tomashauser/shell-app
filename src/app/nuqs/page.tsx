import type { SearchParams } from "nuqs/server";
import { UrlBasedExampleCounter } from "@/app/nuqs/components/UrlBasedExampleCounter";
import { loadSearchParams } from "@/app/nuqs/params";

type PageProps = {
  searchParams: Promise<SearchParams>;
};
export default async function Page({ searchParams }: PageProps) {
  const { latitude, longitude } = await loadSearchParams(searchParams);

  return (
    <div>
      <h1>This is to showcase nuqs library</h1>
      <UrlBasedExampleCounter />
      <div>
        <div>Latitutde: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    </div>
  );
}
