---
name: CA Nishita Gandhi
description: The website of a practising Chartered Accountant in Mulund, Mumbai, set as one indexed file.
colors:
  ledger-navy: "#0E1A2B"
  folder-slate: "#14243A"
  navy-rule: "#22344E"
  cream-paper: "#F6F3EC"
  slip-paper: "#FBF9F4"
  paper-rule: "#E3DDCE"
  ink: "#14202E"
  ink-muted: "#5B6270"
  mist-muted: "#9AA7BA"
  signal-teal: "#5EC4B6"
  signal-teal-hover: "#7DD3C7"
  ledger-teal: "#1A6B62"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(3rem, 9.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 6.2vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  section:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.1
  title-italic:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.2
  lede:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  slip: "4px"
  md: "6px"
  lg: "8px"
  tab: "10px"
  full: "999px"
spacing:
  gutter: "24px"
  gutter-lg: "40px"
  container: "1400px"
  section: "96px"
  section-lg: "128px"
  row: "28px"
components:
  button-primary:
    backgroundColor: "{colors.signal-teal}"
    textColor: "{colors.ledger-navy}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-teal-hover}"
    textColor: "{colors.ledger-navy}"
  button-outline-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.cream-paper}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.cream-paper}"
    typography: "{typography.body}"
    padding: "8px 0"
    height: "44px"
  page-header:
    backgroundColor: "{colors.ledger-navy}"
    textColor: "{colors.cream-paper}"
    typography: "{typography.headline}"
  folder-tab:
    backgroundColor: "{colors.cream-paper}"
    rounded: "{rounded.tab}"
    height: "16px"
    width: "224px"
  ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "28px 0"
  checklist-slip:
    backgroundColor: "{colors.slip-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.slip}"
    padding: "24px 28px 28px"
    width: "620px"
  cta-band:
    backgroundColor: "{colors.ledger-navy}"
    textColor: "{colors.cream-paper}"
    typography: "{typography.section}"
    padding: "96px 40px"
  aside-card:
    backgroundColor: "{colors.ledger-navy}"
    textColor: "{colors.cream-paper}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: CA Nishita Gandhi

## Overview

**Creative North Star: "Your Whole File"**

The site is one practitioner's file, opened page by page. Every page is a sheet in the same folder: a navy page head carries the title, a cream reading body is cut with a folder tab where the two meet, and the content below is set as ruled ledger rows rather than marketing cards. Caslon, the face of printed statute and account books, sets every heading; Manrope carries the reading text at generous sizes for senior readers.

Density is calm and editorial: wide gutters, long measures capped at 56 to 68ch, hairline rules doing the work that boxes and shadows do elsewhere. Navy is the ground for heads and closes, cream is the paper for reading, and teal is used only where something can be acted on, shows a state, or is the single hero emphasis. Motion is restrained and functional; the one authored moment is the WebGL file stack in the home hero.

Confirmed rejections, from the direction contract: no icon-tile card grids, no stock CA imagery, no eyebrows or kickers above headings, no section numbers.

**Key Characteristics:**
- Navy head, cream body, joined by a folder tab on every inner page.
- Ruled ledger rows (heavy top rule, hairline rows, Caslon titles, sliding arrow) for every index.
- Teal for action, state, and the single hero emphasis.
- One shared gutter and container on every band, nav and hero included.
- Visible-by-default content; reveals and the page crossfade are progressive enhancement.

## Colors

A three-part world: deep ledger navy, warm cream paper, and a teal that signals action.

### Primary
- **Signal Teal** (signal-teal): primary buttons, link accents and focus rings on navy, active nav underline, text selection, and the italic "handled." in the hero headline. Lightens to Signal Teal Hover on primary-button hover only.
- **Ledger Teal** (ledger-teal): the same role on cream, where light teal cannot hold contrast: hover colour on ledger titles and arrows, focus outline, text caret, scrollbar thumb hover, the compliance calendar's "next due" row and notice, process-step ordinals.

### Neutral
- **Ledger Navy** (ledger-navy): page heads, the home hero, the home services band, the CtaBand close, the service-page aside card, the nav bar (at 70% opacity, 95% once scrolled), footer.
- **Folder Slate** (folder-slate): raised surfaces on navy: menu item hover, menu footers.
- **Navy Rule** (navy-rule): hairlines, input underlines and pill borders on navy.
- **Cream Paper** (cream-paper): the reading ground for all body content, the folder tab, and inverse text on navy.
- **Slip Paper** (slip-paper): the documents checklist slip and the paper of the WebGL sheets; one step brighter than cream so the slip reads as a loose sheet on the page.
- **Paper Rule** (paper-rule): hairline ledger rows and dividers on cream.
- **Ink** (ink): headings and primary text on cream; at 85% it is the heavy 2px ledger header rule.
- **Ink Muted** (ink-muted): secondary text, summaries and labels on cream.
- **Mist Muted** (mist-muted): ledes, secondary text and labels on navy; also the Firefox scrollbar thumb.

### Named Rules
**The Teal Means Something Rule.** Teal is for action, state, and the single hero emphasis. It is never a decorative fill, a section background, or a second headline emphasis.

**The Two Teals Rule.** Light teal (signal-teal) on navy, deep teal (ledger-teal) on cream. Focus outlines switch automatically: deep teal by default, light teal inside any navy or slate surface.

## Typography

**Display Font:** Libre Caslon Display 400 (with Georgia, serif)
**Text Serif:** Libre Caslon Text 400/700, roman and italic (with Georgia, serif)
**Body Font:** Manrope 400 to 700 (with sans-serif)

**Character:** Statute-and-ledger Caslon over a clear, open grotesque. Display Caslon only at large sizes; Caslon Text, usually italic, for group names, ledes and quiet asides where the display cut would be too fine.

### Hierarchy
- **Display** (400, clamp 3 to 6rem, 1.0, -0.015em): the home hero H1 only, masked line by line.
- **Headline** (400, clamp 2.4 to 5.25rem, 1.04, -0.01em): every inner page H1 in the navy page head.
- **Section** (400, clamp roughly 2.2 to 4.75rem, 1.04 to 1.08): section H2s and the CtaBand title.
- **Title** (400, 22 to 42px, 1.1 to 1.15): ledger-row titles; 26 to 30px in the services index, 30 to 34px on home bands, 22px in related services.
- **Title Italic** (Caslon Text italic, 17 to 28px): service group names, "Related services", menu group headings, the checklist slip header.
- **Lede** (Caslon Text, clamp 1.2 to 1.5rem, 1.4): the hero subhead only. Inner-page ledes are Manrope 16 to 18px in mist-muted, max 56ch.
- **Body** (Manrope 400, 17px, 1.75): long-form reading at max 68ch; the first paragraph steps up to 19px in full ink. Supporting copy runs at 15px, 1.65.
- **Label** (Manrope 600, 12px, 0.12 to 0.14em, uppercase): form field labels, table column heads, the About fact list terms, and the "Chartered Accountant" line of the logo lockup. Labels name a field or datum; they never sit above a heading.

### Named Rules
**The Ledger Numerals Rule.** Dates, due dates and step ordinals use tabular lining numerals.

**The Balanced Head Rule.** H1 to H3 use balanced wrapping; paragraphs use pretty wrapping.

## Layout

One spatial rule governs every band, the fixed nav and the hero included: outer padding of 24px, 40px from the lg breakpoint (px-6 lg:px-10), around an inner container centred at a 1400px max width with no padding of its own. Edges therefore line up from nav to footer at every width.

Bands stack vertically with 96px block padding (128px on large home bands); inner reading bodies use 80 to 96px. Page heads clear the 80px fixed nav with 128 to 176px top padding. Service pages run a two-column grid: an article capped at 68ch, and a 340px sticky aside (top 112px) holding the navy "What you get" card and an on-this-page list. Indexes set a 300px sticky group-name column beside the ledger on desktop. Anchor targets are offset 84 to 112px for the fixed nav.

On phones every grid collapses to one column. The home hero reorders to headline, file stack still, then actions.

## Elevation & Depth

Mostly flat: depth comes from tone (navy against cream, slate on navy) and from rules, not shadows. Shadows are soft, long and low-opacity, and appear only on objects that are physically "lifted" off the page: the checklist slip, the aside card, the scrolled nav, open menus, and the primary button on hover. The page heads carry a faint 96px grid at 5 to 6% opacity, masked toward one corner.

### Shadow Vocabulary
- **Slip lift** (`box-shadow: 0 18px 40px -24px rgba(20,32,46,0.35), 0 2px 6px -2px rgba(20,32,46,0.08)`): the checklist slip on cream.
- **Card lift** (`box-shadow: 0 24px 48px -28px rgba(14,26,43,0.6)`): the navy aside card on cream.
- **Nav scrolled** (`box-shadow: 0 8px 32px rgba(4,10,20,0.35)`): the fixed nav once the page scrolls past 8px.
- **Teal hover glow** (`box-shadow: 0 12px 28px -10px rgba(94,196,182,0.55)`): primary button hover.
- **Focus halo** (`box-shadow: 0 0 0 6px rgba(94,196,182,0.22)`): buttons on focus-visible, alongside the 2px outline.

### Named Rules
**The Lifted Paper Rule.** Only things that are a separate sheet or object get a shadow. Ledger rows, sections and indexes stay flat and are divided by rules.

## Shapes

Rectilinear paper with soft corners. Ledgers and sections have no corners at all, just rules: a 2px ink rule (85% opacity) heads every ledger, hairline rows follow. Actions are fully rounded pills (buttons, area chips, arrow discs, the logo monogram). Containers use 8px (aside card, notices, nav menus), 6px for menu items, and the checklist slip a near-square 4px with a slight -0.4deg tilt and dashed row rules. The folder tab is a 16px-tall block, 160px wide (224px from sm), with 10px top corners, in the colour of the page below. Checkboxes on the slip are 16px squares at 3px radius.

## Components

### Buttons
Confident pills that lift slightly.
- **Shape:** full pill (999px), 48px tall (40px small, 52px large), uppercase Manrope 12px at 0.08em.
- **Primary:** signal teal with navy text; lightens and gains the teal glow on hover.
- **Outline-inverse:** transparent with a 30% cream border on navy, 70% on hover. **Outline:** the same in ink on cream.
- **Hover / Focus:** lift 2px over 200ms ease-out, press to 97% scale; focus gets the 6px teal halo plus the global 2px outline. Trailing arrows slide 4px right on hover and focus. Hover lift is off under reduced motion.

### Inputs / Fields
- **Style:** underline only: a transparent field 44px tall with a 1px navy-rule bottom border, cream text, mist placeholder at 70%. The form sits on navy.
- **Focus:** the underline turns signal teal and reads 2px heavy (a 1px teal shadow below the border). The caret is deep teal.
- **Labels:** uppercase 12px label style in mist-muted.

### Navigation
- **Style:** fixed 80px bar on 70% navy with a backdrop blur, solidifying to 95% with a navy-rule border and shadow after 8px of scroll. Logo lockup left (NG monogram in a teal-tinted disc, Caslon name, uppercase label line), menu centre, small primary "Get in Touch" right.
- **Desktop menus:** Radix navigation menu; Services opens an 880px three-column panel grouped by Caslon Text italic headings. Top links get a 1px teal underline that scales in from the left over 300ms on hover, focus and active.
- **Mobile:** a sheet at 88vw with 26px Caslon links on navy-rule hairlines, Services and Knowledge Centre as accordions, the phone number pinned at the bottom.

### Ruled Ledger Row (signature)
The house pattern for every index: the services index, home services, resources and audiences, who-we-work-with, the Knowledge Centre and related services. A 2px ink rule (85%) heads the list; each row is a whole-row link on a hairline paper-rule (navy-rule on navy) with a Caslon title, an optional 15px muted summary, and an arrow. On hover the title turns teal, the arrow slides 4px right, and on the larger indexes the 40px outlined arrow disc fills with teal. Transitions run 200ms.

### Page Head and Folder Tab (signature)
Every inner page opens on a navy head: breadcrumb, Caslon headline, a mist-muted lede at max 56ch, and an optional right-hand slot (on the services index, the area pills). The faint grid sits behind it. A cream folder tab rises from the bottom edge, aligned to the container's left edge, so the cream body below reads as the sheet pulled from the folder.

### CtaBand (signature)
The close on every inner page: a navy band with a Caslon section title, a short muted line, and the three real contact routes: call (primary), email and contact form (outline-inverse), stacked in a 340px column on desktop.

### Checklist Slip (signature)
"Documents to keep ready" on every service page: a slip-paper sheet, max 620px, tilted -0.4deg, with a deep-teal italic header over a 2px teal rule, dashed rows, and empty square checkboxes. It carries the slip lift shadow.

### Accordion and Tabs
FAQ accordions run on hairline rows with a muted caret that turns deep teal on hover; they open in 300ms and close in 250ms with expo-out. FAQ tabs fade content in over 300ms.

### Compliance Calendar
A ruled table with uppercase label heads; the next due row is tinted deep teal at 7%, and a live notice above it names the next date.

### Hero File Stack (signature moment)
The home hero's right column is a WebGL scene (react-three-fiber): five sheets (Form 3CD, GSTR-3B, AIS, Form 16, ITR), each named on a stepped divider tab, settle into a slate folder labelled "Your file". The stack tilts with the pointer and turns with scroll, and stops rendering when the hero is offscreen. It loads only on desktop with a fine pointer, motion allowed and WebGL2 available, after fonts are ready, and crossfades over the still over 700ms. Everywhere else the still image of the same pose is shown. The hero carries no portrait or lede (removed at client request, Oct 2026); the portrait lives on About.

### Motion Grammar
- **Page crossfade:** each navigation remounts the template, fading in and rising 10px over 520ms on expo-out (cubic-bezier(0.16, 1, 0.3, 1)), with backwards fill so no transform lingers afterward.
- **Scroll reveals:** elements marked for reveal fade and rise 22px over 700ms expo-out, staggered 70ms per index, once. They are armed only after a script adds the `js` class to html, so content is visible without JavaScript.
- **Hero entrance:** CSS, not hydration: headline lines rise from behind a mask over 900ms (110ms stagger), the rest rises 0.5em over 800ms (90ms stagger).
- **Hover:** 150 to 250ms colour, border and translate changes; the nav underline is 300ms.
- **Reduced motion:** reveals are shown immediately, smooth scrolling is off, and all animations and transitions collapse to 0.01ms; the hero shows the still.

### Raster Assets
Every shipping raster carries its provenance inside the file.

| Asset | Size | Origin | Embedded provenance | Maintenance |
|---|---|---|---|---|
| public/images/file-stack.png | 1248 x 1560, transparent | Rendered in-house from the site's own scene (components/three/FileStack.tsx) via headless Chrome, sheets settled | PNG tEXt `impeccable:prompt` | Re-render after any change to the scene, so the still matches the WebGL pose |
| public/images/nishita-full.jpg | 1080 x 1920 | Client-supplied portrait of CA Nishita Gandhi | JPEG COM `impeccable:prompt` | Replace only with another client-supplied photograph |

## Do's and Don'ts

### Do:
- **Do** wrap every band in 24px / 40px (lg) outer padding around a 1400px centred container with no inner padding, nav and hero included.
- **Do** set indexes as ruled ledger rows: 2px ink rule at 85% on top, hairline rows, Caslon titles, an arrow that slides 4px on hover.
- **Do** open every inner page with the navy page head and folder tab, and close it with the CtaBand.
- **Do** use teal for action, state, and the single hero emphasis; light teal on navy, deep teal on cream.
- **Do** keep content visible by default; reveals are one-time, 700ms expo-out with a 70ms stagger, and are skipped under reduced motion.
- **Do** keep hover changes between 150 and 250ms.
- **Do** keep the WebGL file stack as the only authored motion moment, with the still image as its fallback, and re-render file-stack.png when the scene changes.
- **Do** cap reading measure at 56 to 68ch and keep body text at 15px or larger.

### Don't:
- **Don't** put eyebrows or kickers above headings; uppercase labels only name form fields, table columns and data terms.
- **Don't** number sections; ordinals belong only to genuinely ordered process steps.
- **Don't** build icon-tile card grids or use stock CA imagery.
- **Don't** use teal as decoration, a band background, or a second emphasis word in a headline.
- **Don't** shadow ledger rows or sections; only lifted objects (slip, card, scrolled nav, menus) get shadows.
- **Don't** add a second WebGL or scroll-driven scene, or run the file stack on touch, reduced motion or without WebGL2.
