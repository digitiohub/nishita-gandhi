"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// One observer for every [data-reveal] element on the page; each reveals once
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
