"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "@phosphor-icons/react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { calendarRows, nextMonthlyDue } from "@/lib/content/calendar";
import { cn } from "@/lib/utils";

export function ComplianceCalendar() {
  // Computed after mount so the server render never bakes in a stale date
  const [next, setNext] = useState<ReturnType<typeof nextMonthlyDue> | null>(null);
  useEffect(() => setNext(nextMonthlyDue(new Date())), []);
  const nextRow = next && calendarRows.find((r) => r.day === next.day);

  return (
    <div>
      <div aria-live="polite" className="min-h-[88px]">
        {next && nextRow && (
          <div className="flex items-start gap-4 rounded-lg border border-accent-dark/25 bg-accent-dark/[0.07] px-5 py-4 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-1 motion-safe:duration-500">
            <CalendarCheck size={24} className="mt-0.5 shrink-0 text-accent-dark" aria-hidden="true" />
            <p className="text-[15px] leading-[1.6] text-foreground">
              <span className="font-semibold">
                Next monthly date:{" "}
                <time dateTime={next.date.toISOString().slice(0, 10)}>
                  {next.date.toLocaleDateString("en-IN", { day: "numeric", month: "long" })}
                </time>
              </span>{" "}
              &middot; {nextRow.what}
            </p>
          </div>
        )}
      </div>

      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[38%]">When</TableHead>
            <TableHead>What is due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calendarRows.map((r) => {
            const isNext = nextRow === r;
            return (
              <TableRow key={r.when} className={cn("hover:bg-[#EFEADF]", isNext && "bg-accent-dark/[0.07] hover:bg-accent-dark/10")}>
                <TableCell className={cn("tabular pl-0 font-serif-text text-[17px] text-foreground", isNext && "text-accent-dark")}>
                  <span className={cn("transition-[padding] duration-300", isNext && "pl-3")}>{r.when}</span>
                </TableCell>
                <TableCell className="text-[15px] leading-[1.6] text-foreground/80">{r.what}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
