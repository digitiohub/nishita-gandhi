// Self-check for nextMonthlyDue: npx tsx lib/content/calendar.check.ts
import assert from "node:assert/strict";

import { nextMonthlyDue } from "./calendar";

const ymd = (d: Date) => [d.getFullYear(), d.getMonth() + 1, d.getDate()];

assert.deepEqual(ymd(nextMonthlyDue(new Date(2026, 9, 24)).date), [2026, 11, 7]); // after the 20th: next month
assert.deepEqual(ymd(nextMonthlyDue(new Date(2026, 9, 7)).date), [2026, 10, 7]); // due today counts
assert.deepEqual(ymd(nextMonthlyDue(new Date(2026, 9, 12)).date), [2026, 10, 13]);
assert.deepEqual(ymd(nextMonthlyDue(new Date(2026, 11, 21)).date), [2027, 1, 7]); // year rollover
console.log("calendar ok");
