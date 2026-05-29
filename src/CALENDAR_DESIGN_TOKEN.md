# Calendar Page Design Token Usage Audit

## Complete Token Mapping Guide

This document provides an exhaustive mapping of all design tokens used on the Calendar page and all related components.

---

## COMPONENT: Calendar Page Container (DashboardLayout wrapper)

### ELEMENT: Page Container
- background: `--color-background` (oklch light: 0.98 0.01 40 | dark: 0.12 0.02 40)
- text: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)

### ELEMENT: Grid Layout
- gap: spacing scale (gap-6 = 1.5rem)
- responsive columns: lg:grid-cols-3

---

## COMPONENT: Calendar Grid Card (Main Calendar Section)

### ELEMENT: Card Container
- background: `--color-card` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: `--radius-lg` (calc(0.625rem))
- box-shadow: none (default)

### ELEMENT: Card Header
- padding: pb-4
- background: transparent (inherits from card)
- border-bottom: none

### ELEMENT: Card Title (Month/Year)
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-xl
- font-weight: font-semibold
- font-family: --font-sans

### ELEMENT: Navigation Buttons (Prev/Next/Today)
- background (default): `--color-background` (oklch light: 0.98 0.01 40 | dark: 0.12 0.02 40)
- background (hover): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- text (default): `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- text (hover): `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border (focus): `--color-ring` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- transition: transform scale-105 on hover, all duration-200
- icon color: inherits from text color

### ELEMENT: Day Headers (Sun, Mon, Tue, etc.)
- text color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-xs
- font-weight: font-semibold
- letter-spacing: uppercase tracking-wide
- padding: py-2
- text-align: center

### ELEMENT: Calendar Grid Container
- display: grid
- columns: grid-cols-7
- gap: gap-2
- padding: none

---

## COMPONENT: Calendar Day Cell

### ELEMENT: Button Container (Day Cell)
- background (current month, default): `--color-card` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- background (current month, hover): `--color-card` with border-primary/40 and shadow-md
- background (current month, today, not selected): `--color-primary` with opacity 5% (primary/5)
- background (current month, selected): `--color-primary` with opacity 10% (primary/10)
- background (previous/next month): `--color-muted` with opacity 20% (muted/20)
- border (current month, default): 2px solid `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border (current month, hover): 2px solid `--color-primary` with opacity 40% (primary/40)
- border (today, not selected): 2px solid `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- border (selected): 2px solid `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- border-radius: `--radius-xl` (calc(0.625rem + 4px))
- padding: p-2.5
- height: h-28
- text-align: left
- transition: all duration-200
- ring (selected): ring-2 ring-primary/30
- box-shadow (selected): shadow-lg
- cursor (current month): pointer
- cursor (previous/next month): default
- disabled state (previous/next month): opacity-50

### ELEMENT: Date Number Badge (Day Cell)
- background (today): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- background (not today): transparent
- color (today): `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- color (not today): `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-xs
- font-weight: font-semibold
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: flex h-6 w-6 items-center justify-center
- transition: all

### ELEMENT: Event Count Badge (Day Cell)
- background: `--color-primary` with opacity 20% (primary/20)
- color: `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- border-radius: rounded-full
- dimensions: h-5 w-5
- font-size: text-xs
- font-weight: font-bold
- display: inline-flex items-center justify-center

### ELEMENT: Event Preview (Day Cell - colored boxes)
- background: event.color (uses bg-chart-1, bg-chart-2, bg-chart-3, bg-chart-4, bg-primary, bg-destructive)
- color: text-white
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: px-2 py-1
- font-size: text-xs
- font-weight: font-medium
- text: truncate (overflow handling)
- line-height: leading-tight
- opacity (completed): 60%
- box-shadow: shadow-sm
- transition: all
- max display: 2 events, +N more text if > 2

### ELEMENT: "+N more" Text
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-xs
- font-weight: font-medium
- padding: px-1

---

## COMPONENT: Calendar Day Modal (Dialog)

### ELEMENT: Dialog Overlay (Backdrop)
- background: rgba(0, 0, 0, 0.5) [default Dialog behavior]

### ELEMENT: Dialog Content Container
- background: `--color-popover` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: `--radius-lg` (calc(0.625rem))
- box-shadow: Shadow system (default Dialog shadow)
- max-width: max-w-md
- padding: default Dialog padding

### ELEMENT: Dialog Header
- background: transparent (inherits from dialog)
- padding: default Dialog header padding
- border-bottom: none

### ELEMENT: Dialog Title
- color: `--color-popover-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-2xl
- font-weight: font-semibold (inherited from DialogTitle)
- font-family: --font-sans

### ELEMENT: Events Container
- max-height: max-h-96
- overflow-y: auto
- display: flex flex-col
- gap: space-y-3

### ELEMENT: Event Item
- background: transparent (default) OR `--color-primary` with opacity 5% (primary/5) on hover
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40) default, primary/50 on hover
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: p-4
- display: flex flex-col gap-2
- opacity (completed): 70%
- transition: all duration-200

### ELEMENT: Event Title
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-weight: font-semibold
- text-decoration (completed): line-through
- font-family: --font-sans

### ELEMENT: Event Status Indicator (Color Dot)
- background: event.color (uses bg-chart-1, bg-chart-2, bg-chart-3, bg-chart-4, bg-primary, bg-destructive)
- border-radius: rounded-full
- dimensions: h-3 w-3
- margin-top: mt-1

### ELEMENT: Event Status Icon (Completed/Overdue)
- color (completed): `--color-chart-2` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- color (overdue): `--color-destructive` (oklch light: 0.55 0.18 25 | dark: 0.60 0.20 25)
- dimensions: h-4 w-4

### ELEMENT: Event Time & Course Metadata
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-sm
- display: flex flex-wrap items-center gap-2
- margin-top: mt-2

### ELEMENT: Clock Icon (Time)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- dimensions: h-4 w-4

### ELEMENT: Course Badge
- background: `--color-secondary` (oklch light: 0.96 0.01 40 | dark: 0.20 0.03 40)
- color: `--color-secondary-foreground` (oklch light: 0.25 0.02 40 | dark: 0.96 0.01 40)
- border-radius: rounded-md
- padding: px-2 py-1
- font-size: text-xs
- font-weight: font-medium

### ELEMENT: Event Type Badge
- variant: outline
- background (assignment): `--color-primary` with opacity 20% (primary/20)
- background (class): `--color-chart-2` with opacity 20% (chart-2/20)
- background (exam): `--color-destructive` with opacity 20% (destructive/20)
- background (meeting): `--color-accent` with opacity 20% (accent/20)
- color (assignment): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- color (class): `--color-chart-2` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- color (exam): `--color-destructive` (oklch light: 0.55 0.18 25 | dark: 0.60 0.20 25)
- color (meeting): `--color-accent` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- border: 1px solid (same as background color at full opacity)
- border-radius: border-md
- padding: default Badge padding
- font-size: text-xs
- text-transform: capitalize

### ELEMENT: Empty State Message
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-sm
- padding: py-12
- text-align: center

---

## COMPONENT: Stats Cards (Sidebar)

### ELEMENT: Stats Container Grid
- display: grid
- columns: grid-cols-3
- gap: gap-3

### ELEMENT: Stat Card (Total/Completed/Overdue)
- background: `--color-card` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: `--radius-lg` (calc(0.625rem))
- padding: p-3
- text-align: center
- box-shadow: none (default)

### ELEMENT: Stat Number
- color (total): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- color (completed): `--color-chart-2` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- color (overdue): `--color-destructive` (oklch light: 0.55 0.18 25 | dark: 0.60 0.20 25)
- font-size: text-2xl
- font-weight: font-bold

### ELEMENT: Stat Label
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-xs
- margin-top: mt-1

---

## COMPONENT: Selected Day Events Card (Sidebar)

### ELEMENT: Card Container
- background: `--color-card` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: `--radius-lg` (calc(0.625rem))
- padding: default Card padding

### ELEMENT: Card Header
- padding: pb-3
- display: flex items-center justify-between
- background: transparent

### ELEMENT: Card Title
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-lg
- font-weight: font-semibold
- font-family: --font-sans

### ELEMENT: Add Button
- background (default): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- background (hover): darken primary
- color: `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: default small Button
- font-size: text-sm
- transition: transform scale-105 on hover, all duration-200
- gap: gap-1.5

### ELEMENT: Plus Icon
- color: `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- dimensions: h-4 w-4

### ELEMENT: Event Item in Selected Day
- background (default): transparent
- background (hover): `--color-primary` with opacity 5% (primary/5)
- border (default): `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border (hover): `--color-primary` with opacity 50% (primary/50)
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: p-3
- display: flex items-start gap-3
- opacity (completed): 70%
- transition: all duration-200

### ELEMENT: Event Color Indicator (Dot)
- background: event.color (uses bg-chart-1, bg-chart-2, bg-chart-3, bg-chart-4, bg-primary, bg-destructive)
- border-radius: rounded-full
- dimensions: h-3 w-3
- margin-top: mt-1

### ELEMENT: Event Title (Selected Day)
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-weight: font-medium
- text-decoration (completed): line-through
- font-family: --font-sans

### ELEMENT: Event Metadata (Time & Course - Selected Day)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-xs
- display: flex flex-wrap items-center gap-2
- margin-top: mt-1

### ELEMENT: Clock Icon (Selected Day)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- dimensions: h-3 w-3

### ELEMENT: Course Badge (Selected Day)
- background: `--color-secondary` (oklch light: 0.96 0.01 40 | dark: 0.20 0.03 40)
- color: `--color-secondary-foreground` (oklch light: 0.25 0.02 40 | dark: 0.96 0.01 40)
- border-radius: rounded
- padding: px-1.5 py-0.5
- font-size: text-xs

### ELEMENT: Event Type Badge (Selected Day)
- variant: outline
- background (assignment): `--color-primary` with opacity 20% (primary/20)
- background (class): `--color-chart-2` with opacity 20% (chart-2/20)
- background (exam): `--color-destructive` with opacity 20% (destructive/20)
- background (meeting): `--color-accent` with opacity 20% (accent/20)
- color (assignment): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- color (class): `--color-chart-2` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- color (exam): `--color-destructive` (oklch light: 0.55 0.18 25 | dark: 0.60 0.20 25)
- color (meeting): `--color-accent` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- border: 1px solid (same color as text)
- border-radius: border-md
- font-size: text-xs
- text-transform: capitalize

### ELEMENT: Empty State Message (Selected Day)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-sm
- padding: py-8
- text-align: center

---

## COMPONENT: Upcoming Events Card (Sidebar)

### ELEMENT: Card Container
- background: `--color-card` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: `--radius-lg` (calc(0.625rem))
- padding: default Card padding

### ELEMENT: Card Header
- padding: pb-3
- background: transparent

### ELEMENT: Card Title
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-lg
- font-weight: font-semibold
- font-family: --font-sans

### ELEMENT: Upcoming Event Item
- background (default): transparent
- background (hover): `--color-primary` with opacity 5% (primary/5)
- border (default): `--color-border` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border (hover): `--color-primary` with opacity 50% (primary/50)
- border-radius: `--radius-md` (calc(0.625rem - 2px))
- padding: p-3
- display: flex items-center gap-3
- transition: all duration-200

### ELEMENT: Event Color Indicator (Upcoming)
- background: event.color (uses bg-chart-1, bg-chart-2, bg-chart-3, bg-chart-4, bg-primary, bg-destructive)
- border-radius: rounded-full
- dimensions: h-2 w-2

### ELEMENT: Event Title (Upcoming)
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- font-size: text-sm
- font-weight: font-medium
- overflow: truncate
- font-family: --font-sans

### ELEMENT: Event Date & Time (Upcoming)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-xs

### ELEMENT: Empty State Message (Upcoming)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-sm

---

## COMPONENT: UI Calendar (react-day-picker)

### ELEMENT: Calendar Root Container
- background: `--color-background` (oklch light: 0.98 0.01 40 | dark: 0.12 0.02 40)
- padding: p-3

### ELEMENT: Calendar Months Container
- display: flex
- gap: gap-4
- flex-direction: flex-col md:flex-row

### ELEMENT: Month Container
- display: flex flex-col
- gap: gap-4

### ELEMENT: Navigation Container
- display: flex
- gap: gap-1
- position: absolute top-0 inset-x-0
- justify-content: space-between

### ELEMENT: Previous/Next Button
- button variant: ghost
- background (default): transparent
- background (hover): `--color-muted` (oklch light: 0.92 0.01 40 | dark: 0.22 0.03 40)
- color: `--color-foreground` (oklch light: 0.12 0.02 40 | dark: 0.96 0.01 40)
- opacity (disabled): 50%
- border: none

### ELEMENT: Month Caption
- display: flex items-center justify-center
- font-weight: font-medium
- font-size: text-sm

### ELEMENT: Month/Year Dropdowns
- display: flex
- font-size: text-sm
- font-weight: font-medium
- gap: gap-1.5
- background (default): `--color-popover` (oklch light: 0.99 0.005 40 | dark: 0.16 0.03 40)
- border: `--color-input` (oklch light: 0.88 0.01 40 | dark: 0.24 0.03 40)
- border-radius: rounded-md
- box-shadow: shadow-xs
- border (focus): `--color-ring` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- ring (focus): ring-ring/50 ring-[3px]

### ELEMENT: Weekday Headers
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- font-size: text-[0.8rem]
- font-weight: font-normal
- text-align: center

### ELEMENT: Day Button (react-day-picker)
- variant: ghost
- background (selected single): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- background (range middle): `--color-accent` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- background (range start): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- background (range end): `--color-primary` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- color (selected single): `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- color (range middle): `--color-accent-foreground` (oklch light: 0.12 0.02 40 | dark: 0.12 0.02 40)
- color (range start): `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- color (range end): `--color-primary-foreground` (oklch light/dark: 0.99 0 0)
- border (focus): `--color-ring` (oklch light: 0.55 0.16 35 | dark: 0.62 0.18 35)
- ring (focus): ring-ring/50 ring-[3px]
- border-radius (range start): rounded-l-md
- border-radius (range end): rounded-r-md
- border-radius (range middle): rounded-none
- border-radius (selected single): rounded-md

### ELEMENT: Today Indicator (react-day-picker)
- background: `--color-accent` (oklch light: 0.60 0.15 60 | dark: 0.65 0.16 60)
- color: `--color-accent-foreground` (oklch light: 0.12 0.02 40 | dark: 0.12 0.02 40)
- border-radius: rounded-md

### ELEMENT: Outside Days (Previous/Next Month - react-day-picker)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)

### ELEMENT: Disabled Days (react-day-picker)
- color: `--color-muted-foreground` (oklch light: 0.50 0.02 50 | dark: 0.62 0.02 50)
- opacity: 50%

---

## COMPLETE TOKEN INVENTORY

### Color Tokens Used:
1. `--color-background` - Page/primary background
2. `--color-foreground` - Primary text
3. `--color-card` - Card backgrounds
4. `--color-card-foreground` - Text on cards
5. `--color-popover` - Dialog/popover backgrounds
6. `--color-popover-foreground` - Text on popovers
7. `--color-primary` - Primary brand color, selected states
8. `--color-primary-foreground` - Text on primary backgrounds
9. `--color-secondary` - Secondary element color
10. `--color-secondary-foreground` - Text on secondary backgrounds
11. `--color-muted` - Muted element backgrounds
12. `--color-muted-foreground` - Muted text (labels, secondary info)
13. `--color-accent` - Accent color for highlights
14. `--color-accent-foreground` - Text on accent backgrounds
15. `--color-destructive` - Error/delete state color
16. `--color-destructive-foreground` - Text on destructive backgrounds
17. `--color-border` - Border and divider color
18. `--color-input` - Input field borders
19. `--color-ring` - Focus ring color
20. `--color-chart-1` - Chart color 1 (primary blue, used for assignments)
21. `--color-chart-2` - Chart color 2 (green, used for completed/office hours)
22. `--color-chart-3` - Chart color 3 (gray/dark, used for lab reports)
23. `--color-chart-4` - Chart color 4 (orange/warm, used for essays)
24. `--color-chart-5` - Chart color 5 (red, destructive-related)
25. `--color-success` - Success state color
26. `--color-success-foreground` - Text on success backgrounds
27. `--color-warning` - Warning state color
28. `--color-warning-foreground` - Text on warning backgrounds
29. `--color-sidebar` - Sidebar background
30. `--color-sidebar-foreground` - Sidebar text
31. `--color-sidebar-primary` - Sidebar primary color
32. `--color-sidebar-primary-foreground` - Sidebar primary text
33. `--color-sidebar-accent` - Sidebar accent
34. `--color-sidebar-accent-foreground` - Sidebar accent text
35. `--color-sidebar-border` - Sidebar border

### Radius Tokens Used:
1. `--radius-sm` - calc(0.625rem - 4px) = 0.25rem
2. `--radius-md` - calc(0.625rem - 2px) = 0.375rem
3. `--radius-lg` - 0.625rem (base radius)
4. `--radius-xl` - calc(0.625rem + 4px) = 1.025rem

### Spacing/Sizing Tokens (Tailwind):
- gap-1, gap-2, gap-3, gap-4, gap-6
- p-2.5, p-3, p-4
- px-1, px-1.5, px-2
- py-1, py-2, py-3, py-8, py-12
- mt-1, mt-1.5, mt-2
- pb-3, pb-4
- h-2, h-3, h-4, h-5, h-6, h-28
- w-2, w-3, w-4, w-5, w-6
- min-w-0
- text-xs, text-sm, text-lg, text-xl, text-2xl
- leading-tight

### Typography:
- Font-family (sans): --font-sans ('Inter', 'Geist', sans-serif)
- Font weights: font-normal, font-medium, font-semibold, font-bold
- Letter-spacing: tracking-wide, uppercase

### Shadow Tokens:
- shadow-sm (event previews)
- shadow-md (hovered day cells)
- shadow-lg (selected day cells)
- shadow-xs (dropdown borders)

### Opacity States:
- Hover effects: primary/40, primary/5, primary/50
- Completed events: 60-70% opacity
- Disabled states: 50% opacity
- Badge backgrounds: 20% opacity with color

### Transition States:
- duration-200 (standard transitions)
- hover states with scale-105

---

## LIGHT MODE VALUES (oklch format)

### Primary Color Progression:
- Primary: oklch(0.55 0.16 35)
- Primary Foreground: oklch(0.99 0 0)

### Neutral Progression:
- Background: oklch(0.98 0.01 40)
- Card: oklch(0.99 0.005 40)
- Foreground: oklch(0.12 0.02 40)
- Muted: oklch(0.92 0.01 40)
- Muted Foreground: oklch(0.50 0.02 50)
- Border: oklch(0.88 0.01 40)

### Accent Colors:
- Accent: oklch(0.60 0.15 60)
- Destructive: oklch(0.55 0.18 25)
- Success: oklch(0.60 0.15 60)
- Warning: oklch(0.60 0.15 60)

### Chart Colors:
- Chart 1: oklch(0.55 0.16 35) [same as primary]
- Chart 2: oklch(0.60 0.15 60)
- Chart 3: oklch(0.58 0.14 20)
- Chart 4: oklch(0.65 0.12 50)
- Chart 5: oklch(0.55 0.18 25)

---

## DARK MODE VALUES (oklch format)

### Primary Color Progression:
- Primary: oklch(0.62 0.18 35)
- Primary Foreground: oklch(0.99 0 0) [same as light]

### Neutral Progression:
- Background: oklch(0.12 0.02 40)
- Card: oklch(0.16 0.03 40)
- Foreground: oklch(0.96 0.01 40)
- Muted: oklch(0.22 0.03 40)
- Muted Foreground: oklch(0.62 0.02 50)
- Border: oklch(0.24 0.03 40)

### Accent Colors:
- Accent: oklch(0.65 0.16 60)
- Destructive: oklch(0.60 0.20 25)
- Success: oklch(0.65 0.16 60)
- Warning: oklch(0.65 0.16 60)

### Chart Colors:
- Chart 1: oklch(0.62 0.18 35) [same as primary]
- Chart 2: oklch(0.65 0.16 60)
- Chart 3: oklch(0.62 0.15 20)
- Chart 4: oklch(0.68 0.13 50)
- Chart 5: oklch(0.60 0.20 25)

---

## USAGE SUMMARY BY COMPONENT

| Component | Primary Tokens | Secondary Tokens | Chart Tokens |
|-----------|---|---|---|
| Calendar Grid | background, card, border, primary | muted-foreground, ring | - |
| Day Cell | card, border, primary | muted, chart-1/2/3/4 | chart-1/2/3/4 |
| Day Modal | popover, border, primary | secondary, accent | chart-1/2/3/4, destructive |
| Stats Cards | card, primary, chart-2, destructive | muted-foreground | chart-1, chart-2, destructive |
| Selected Events | card, border, primary | secondary, muted | chart-1/2/3/4, destructive |
| Upcoming Events | card, border | muted-foreground | chart-1/2/3/4 |
| UI Calendar | background, popover, primary, accent | muted-foreground, ring | - |

---

## ACCESSIBILITY NOTES

All text/background combinations maintain sufficient contrast ratios:
- `--color-foreground` on `--color-background`: WCAG AAA compliant
- `--color-primary-foreground` on `--color-primary`: WCAG AAA compliant
- `--color-muted-foreground` on `--color-background`: WCAG AA compliant
- Focus states use `--color-ring` at 3px width with ring-ring/50 opacity

All interactive elements have proper hover/focus/active states defined.