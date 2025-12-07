"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const UrlBasedExampleCounter = () => {
  const [counter, setCounter] = useQueryState(
    "counter",
    parseAsInteger.withDefault(0),
  );

  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => prev - 1);

  return (
    <Card>
      <CardHeader>
        Using search param as a state in a client component
      </CardHeader>
      <CardContent className="flex flex-row gap-2 justify-center items-center">
        <Button type="button" onClick={decrementCounter}>
          -
        </Button>
        {counter}
        <Button type="button" onClick={incrementCounter}>
          +
        </Button>
      </CardContent>
    </Card>
  );
};
