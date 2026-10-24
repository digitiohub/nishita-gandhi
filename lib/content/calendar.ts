// Rows from the live Compliance Calendar; `day` marks the dates that repeat every month
export const calendarRows = [
  { when: "Every month – 7th", what: "TDS/TCS for the previous month (more time for March).", day: 7 },
  { when: "Every month – 11th", what: "GSTR-1, monthly filers.", day: 11 },
  { when: "Every month – 13th", what: "IFF (optional) for QRMP; GSTR-1 for quarterly filers after quarter-end.", day: 13 },
  { when: "Every month – 15th", what: "Provident Fund and ESIC for the previous month.", day: 15 },
  { when: "Every month – 20th", what: "GSTR-3B, monthly filers.", day: 20 },
  { when: "22nd / 24th after quarter", what: "GSTR-3B for QRMP taxpayers (by state)." },
  { when: "15 Jun · 15 Sep · 15 Dec · 15 Mar", what: "Advance tax instalments." },
  { when: "End of month after each quarter", what: "Quarterly TDS/TCS returns." },
  { when: "31 July (typical)", what: "Income tax returns – non-audit cases." },
  { when: "30 September (typical)", what: "Tax audit report; company AGMs (within six months of year end)." },
  { when: "31 October (typical)", what: "Income tax returns – audit cases." },
  { when: "30 / 60 days after AGM", what: "AOC-4 / MGT-7." },
  { when: "30 May / 30 October (typical)", what: "LLP Form 11 / LLP Form 8." },
  { when: "31 December (typical)", what: "GSTR-9 / GSTR-9C for the previous year." },
];

const monthlyDays = calendarRows.flatMap((r) => (r.day ? [r.day] : []));

// The next monthly date on or after `today` (rolls into next month after the 20th)
export function nextMonthlyDue(today: Date): { date: Date; day: number } {
  const d = today.getDate();
  const day = monthlyDays.find((m) => m >= d);
  if (day) return { date: new Date(today.getFullYear(), today.getMonth(), day), day };
  return { date: new Date(today.getFullYear(), today.getMonth() + 1, monthlyDays[0]), day: monthlyDays[0] };
}
