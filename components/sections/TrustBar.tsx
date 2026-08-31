const ITEMS = [
  "10+ Years Experience",
  "100+ Founders Advised",
  "GST · Direct Tax · Audit",
  "Mumbai, India",
];

export function TrustBar() {
  return (
    <div className="border-t border-border-dark bg-bg-dark px-6 py-7">
      <p className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-muted-inv">
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {item}
            {i < ITEMS.length - 1 && <span className="text-accent">&bull;</span>}
          </span>
        ))}
      </p>
    </div>
  );
}
