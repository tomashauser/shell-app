import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-2">
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
        <Card>
          <CardHeader>Other</CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-1">
              <Button asChild>
                <Link href="/nuqs">Nuqs</Link>
              </Button>
              <Button asChild>
                <Link href="/spanish-verbs">Spanish Verbs</Link>
              </Button>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
