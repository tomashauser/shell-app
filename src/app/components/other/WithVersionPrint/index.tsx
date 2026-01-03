"use client";

import { type PropsWithChildren, useEffect } from "react";

export const VersionPrintProvider = ({ children }: PropsWithChildren) => {
  const version = process.env.NEXT_PUBLIC_VERSION;
  const envName = process.env.NODE_ENV;

  useEffect(() => {
    console.info(
      `%cShell app | ${envName?.toUpperCase()} | ${version}`,
      `background: #26637B;
                            color: white; 
      			            padding: 0 0.5rem;
      			            border-radius: 0.125rem;`
    );
  }, [envName, version]);

  return children;
};
