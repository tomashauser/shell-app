import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
  output: "standalone",
  typedRoutes: true,
  env: {
    NEXT_PUBLIC_VERSION: packageJson.version,
  },
};

export default nextConfig;
