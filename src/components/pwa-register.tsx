"use client";

import { useEffect } from "react";

export function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const basePath = process.env.NODE_ENV === "production" ? "/uxterms" : "";
      
      navigator.serviceWorker
        .register(`${basePath}/service-worker.js`)
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return null;
}
