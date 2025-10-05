import Link from "next/link";
import {dynamicSlugLabels, dynamicSlugs, isrSlugLabels, isrSlugs} from "@/app/rendering/isr/params";
import {formatTimeForView} from "@/app/utils/date-functions";
import {Button} from "@/components/ui/button";

export default async function Page() {
    const date = new Date();

    return (
        <main>
            <p>
                This page contains dummy articles that are supposed to be statically
                pregenerated even though the URL contains a dynamic slug.
            </p>
            <p>
                This date should be the date of the build: {formatTimeForView(date)} because
                this page itself is SSG'd
            </p>
            <p>However, the dates inside of the individual articles</p>
            <h1 className="mt-2">ISR'd recipes</h1>
            <ul className="flex flex-col gap-1">
                {isrSlugs.map((isrSlug) => (
                    <li key={isrSlug}>
                        <Button variant="link" asChild>
                            <Link href={`/rendering/isr/${isrSlug}`}>
                                {isrSlugLabels[isrSlug]}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
            <h1 className="mt-2">Dynamic recipes</h1>
            <ul className="flex flex-col gap-1">
                {dynamicSlugs.map((dynamicSlug) => (
                    <li key={dynamicSlug}>
                        <Button variant="link" asChild>
                            <Link href={`/rendering/isr/${dynamicSlug}`}>
                                {dynamicSlugLabels[dynamicSlug]}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
