import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center">
      <Card
        style={{ width: "500px" }}
        className="flex flex-col justify-between"
      >
        <CardHeader>
          <CardTitle>Rendering</CardTitle>
          <CardDescription>Test various rendering strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-1">
            <Button asChild>
              <Link href="/rendering/ssg">SSG</Link>
            </Button>
            <Button asChild>
              <Link href="/rendering/ssr">SSR</Link>
            </Button>
            <Button asChild>
              <Link href="/rendering/isr">ISR</Link>
            </Button>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
