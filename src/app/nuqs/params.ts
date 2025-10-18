import { redirect } from "next/navigation";
import { inferParserType } from "nuqs";
import { createLoader, parseAsFloat } from "nuqs/server";
// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const coordinatesSearchParams = {
  latitude: parseAsFloat.withDefault(0),
  longitude: parseAsFloat.withDefault(0),
};

export const loadSearchParams = createLoader(coordinatesSearchParams, {
  urlKeys: {
    latitude: "lat",
    longitude: "lon",
  },
});
