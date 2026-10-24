import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

// shadcn Breadcrumb, collapsed into one component since every page passes a plain trail
export function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-inv">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 transition-colors hover:text-foreground-inv hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={cn(last && "text-foreground-inv/80")}>
                  {item.label}
                </span>
              )}
              {!last && <CaretRight size={11} weight="bold" aria-hidden="true" className="opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
