import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type Props = {
  crumbs: Crumb[];
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

// Navy page head; the cream page below meets it with a folder tab, so every page reads as a file in the set
export function PageHeader({ crumbs, title, lede, children, className }: Props) {
  return (
    <header className={cn("relative overflow-hidden bg-bg-dark px-6 pb-24 pt-32 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-44", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F6F3EC 1px, transparent 1px), linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-[900px]">
          <Breadcrumb items={crumbs} className="rise mb-8" />
          <h1 className="rise font-serif text-[clamp(2.4rem,6.2vw,5.25rem)] leading-[1.04] tracking-[-0.01em] text-foreground-inv [--i:1]">
            {title}
          </h1>
          {lede && (
            <p className="rise mt-7 max-w-[56ch] text-base leading-[1.65] text-muted-inv sm:text-lg [--i:2]">{lede}</p>
          )}
        </div>
        {children && <div className="rise [--i:3]">{children}</div>}
      </div>
      <FolderTab />
    </header>
  );
}

export function FolderTab({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div
          className={cn(
            "h-4 w-40 rounded-t-[10px] sm:w-56",
            tone === "light" ? "bg-bg-light" : "bg-bg-dark"
          )}
        />
      </div>
    </div>
  );
}
