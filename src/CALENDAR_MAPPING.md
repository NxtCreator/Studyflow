# CALENDAR COMPONENT - STRICT TOKEN-TO-USAGE MAPPING

## SCOPE
- Calendar container
- Calendar header (month/year label, previous button, next button, today button)
- Calendar grid
- Calendar day cells

---

## COMPONENT: Calendar Container

### ELEMENT: Card Wrapper

- property: background
  token: --color-card
  value: oklch(0.99 0.005 40) [light] / oklch(0.16 0.03 40) [dark]
  state: default
  usage: base background of the calendar card container

- property: border
  token: --color-border
  value: oklch(0.88 0.01 40) [light] / oklch(0.24 0.03 40) [dark]
  state: default
  usage: 1px border around card

---

## COMPONENT: Calendar Header

### ELEMENT: Month/Year Label

- property: color
  token: --color-foreground
  value: oklch(0.12 0.02 40) [light] / oklch(0.96 0.01 40) [dark]
  state: default
  usage: text color for "March 2026" title

- property: font-size
  token: text-xl
  value: 1.25rem
  state: default
  usage: size of month/year label

- property: font-weight
  token: font-semibold
  value: 600
  state: default
  usage: weight of month/year label

### ELEMENT: Previous Button (ChevronLeft)

- property: background
  token: --color-background
  value: oklch(0.98 0.01 40) [light] / oklch(0.12 0.02 40) [dark]
  state: default
  usage: button background (outline variant)

- property: border
  token: --color-border
  value: oklch(0.88 0.01 40) [light] / oklch(0.24 0.03 40) [dark]
  state: default
  usage: button border (outline variant)

- property: color
  token: --color-foreground
  value: oklch(0.12 0.02 40) [light] / oklch(0.96 0.01 40) [dark]
  state: default
  usage: chevron icon color

- property: background
  token: implicit hover state
  value: oklch(0.92 0.01 40) [light] / oklch(0.22 0.03 40) [dark]
  state: hover
  usage: button background on hover

- property: transform
  token: scale-105
  value: scaleX(1.05) scaleY(1.05)
  state: hover
  usage: scale animation on hover

### ELEMENT: Today Button

- property: background
  token: --color-background
  value: oklch(0.98 0.01 40) [light] / oklch(0.12 0.02 40) [dark]
  state: default
  usage: button background (outline variant, small)

- property: border
  token: --color-border
  value: oklch(0.88 0.01 40) [light] / oklch(0.24 0.03 40) [dark]
  state: default
  usage: button border

- property: color
  token: --color-foreground
  value: oklch(0.12 0.02 40) [light] / oklch(0.96 0.01 40) [dark]
  state: default
  usage: text color for "Today" button

- property: background
  token: implicit hover state
  value: oklch(0.92 0.01 40) [light] / oklch(0.22 0.03 40) [dark]
  state: hover
  usage: button background on hover

- property: transform
  token: scale-105
  value: scaleX(1.05) scaleY(1.05)
  state: hover
  usage: scale animation on hover

### ELEMENT: Next Button (ChevronRight)

- property: background
  token: --color-background
  value: oklch(0.98 0.01 40) [light] / oklch(0.12 0.02 40) [dark]
  state: default
  usage: button background (outline variant)

- property: border
  token: --color-border
  value: oklch(0.88 0.01 40) [light] / oklch(0.24 0.03 40) [dark]
  state: default
  usage: button border

- property: color
  token: --color-foreground
  value: oklch(0.12 0.02 40) [light] / oklch(0.96 0.01 40) [dark]
  state: default
  usage: chevron icon color

- property: background
  token: implicit hover state
  value: oklch(0.92 0.01 40) [light] / oklch(0.22 0.03 40) [dark]
  state: hover
  usage: button background on hover

- property: transform
  token: scale-105
  value: scaleX(1.05) scaleY(1.05)
  state: hover
  usage: scale animation on hover

---

## COMPONENT: Calendar Grid - Day Headers

### ELEMENT: Day Name (Sun, Mon, Tue, etc.)

- property: color
  token: --color-muted-foreground
  value: oklch(0.50 0.02 50) [light] / oklch(0.62 0.02 50) [dark]
  state: default
  usage: text color for weekday labels

- property: font-size
  token: text-xs
  value: 0.75rem
  state: default
  usage: size of day labels

- property: font-weight
  token: font-semibold
  value: 600
  state: default
  usage: weight of day labels

- property: text-transform
  token: uppercase
  value: text-transform: uppercase
  state: default
  usage: convert to uppercase

- property: letter-spacing
  token: tracking-wide
  value: letter-spacing: 0.125em
  state: default
  usage: letter spacing for day labels

- property: padding
  token: py-2
  value: padding-top: 0.5rem, padding-bottom: 0.5rem
  state: default
  usage: vertical padding of day headers

---

## COMPONENT: Calendar Day Cell

### ELEMENT: Button Container

- property: background
  token: --color-card
  value: oklch(0.99 0.005 40) [light] / oklch(0.16 0.03 40) [dark]
  state: default, current month
  usage: base background for cells in current month

- property: border
  token: --color-border
  value: oklch(0.88 0.01 40) [light] / oklch(0.24 0.03 40) [dark]
  state: default, current month
  usage: 2px border for current month cells

- property: border-width
  token: border-2
  value: 2px
  state: default, current month
  usage: border thickness

- property: border-radius
  token: rounded-xl
  value: border-radius: 0.75rem
  state: default
  usage: rounded corners of cell

- property: padding
  token: p-2.5
  value: padding: 0.625rem
  state: default
  usage: padding inside cell

- property: min-height
  token: h-28
  value: height: 7rem
  state: default
  usage: minimum height of cell

- property: background
  token: --color-muted with opacity
  value: oklch(0.92 0.01 40) [light] / oklch(0.22 0.03 40) [dark], opacity: 0.2
  state: default, not current month
  usage: background for cells outside current month

- property: border
  token: transparent
  value: border-color: transparent
  state: default, not current month
  usage: border for cells outside current month

- property: color
  token: --color-muted-foreground
  value: oklch(0.50 0.02 50) [light] / oklch(0.62 0.02 50) [dark]
  state: default, not current month
  usage: text color for cells outside current month

- property: opacity
  token: opacity-50
  value: opacity: 0.5
  state: default, not current month
  usage: reduced opacity for non-current month cells

- property: cursor
  token: cursor-default
  value: cursor: default
  state: default, not current month
  usage: cursor for disabled cells

- property: background
  token: --color-primary with opacity
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark], opacity: 0.05
  state: default, today (not selected)
  usage: subtle background for today cell

- property: border
  token: --color-primary
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark]
  state: default, today (not selected)
  usage: border highlight for today cell

- property: background
  token: --color-primary with opacity
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark], opacity: 0.1
  state: selected
  usage: background for selected day cell

- property: border
  token: --color-primary
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark]
  state: selected
  usage: border for selected day cell

- property: ring
  token: --color-primary with opacity
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark], opacity: 0.3
  state: selected
  usage: ring/glow around selected cell

- property: ring-width
  token: ring-2
  value: box-shadow ring of 2px
  state: selected
  usage: ring thickness

- property: box-shadow
  token: shadow-lg
  value: 0 10px 15px -3px rgb(0 0 0 / 0.1)
  state: selected
  usage: shadow effect for selected cell

- property: border
  token: --color-primary with opacity
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark], opacity: 0.4
  state: hover, current month
  usage: border color on hover

- property: box-shadow
  token: shadow-md
  value: 0 4px 6px -1px rgb(0 0 0 / 0.1)
  state: hover, current month
  usage: shadow effect on hover

- property: cursor
  token: cursor-pointer
  value: cursor: pointer
  state: hover, current month
  usage: pointer cursor for clickable cells

---

## COMPONENT: Calendar Day Cell - Date Number Badge

### ELEMENT: Date Number (14, 15, etc.)

- property: background
  token: transparent
  value: transparent
  state: default, not today
  usage: no background for regular date numbers

- property: color
  token: --color-foreground
  value: oklch(0.12 0.02 40) [light] / oklch(0.96 0.01 40) [dark]
  state: default, not today
  usage: text color for regular date numbers

- property: background
  token: --color-primary
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark]
  state: today
  usage: background for today's date number

- property: color
  token: --color-primary-foreground
  value: oklch(0.99 0 0)
  state: today
  usage: text color on today's date badge

- property: width
  token: w-6
  value: width: 1.5rem
  state: default
  usage: width of date number box

- property: height
  token: h-6
  value: height: 1.5rem
  state: default
  usage: height of date number box

- property: border-radius
  token: rounded-lg
  value: border-radius: 0.5rem
  state: default
  usage: rounded corners of badge

- property: font-size
  token: text-xs
  value: font-size: 0.75rem
  state: default
  usage: size of date number

- property: font-weight
  token: font-semibold
  value: font-weight: 600
  state: default
  usage: weight of date number

---

## COMPONENT: Calendar Day Cell - Event Count Badge

### ELEMENT: Event Count Badge (e.g., "2")

- property: background
  token: --color-primary with opacity
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark], opacity: 0.2
  state: default
  usage: background for event count badge

- property: color
  token: --color-primary
  value: oklch(0.55 0.16 35) [light] / oklch(0.62 0.18 35) [dark]
  state: default
  usage: text color for event count

- property: width
  token: w-5
  value: width: 1.25rem
  state: default
  usage: width of badge

- property: height
  token: h-5
  value: height: 1.25rem
  state: default
  usage: height of badge

- property: border-radius
  token: rounded-full
  value: border-radius: 9999px
  state: default
  usage: circular badge

- property: font-size
  token: text-xs
  value: font-size: 0.75rem
  state: default
  usage: size of count number

- property: font-weight
  token: font-bold
  value: font-weight: 700
  state: default
  usage: weight of count number

---

## COMPONENT: Calendar Day Cell - Event Preview Tags

### ELEMENT: Event Title Tag (e.g., "Problem Set Due")

- property: background
  token: various chart colors (bg-chart-1, bg-chart-2, bg-chart-3, bg-chart-4, bg-primary, bg-destructive)
  value: oklch(...) based on event.color property
  state: default
  usage: background color for event tag, varies by event

- property: color
  token: text-white
  value: oklch(0.99 0 0)
  state: default
  usage: text color for event title (always white)

- property: border-radius
  token: rounded-md
  value: border-radius: 0.375rem
  state: default
  usage: rounded corners of event tag

- property: font-size
  token: text-xs
  value: font-size: 0.75rem
  state: default
  usage: size of event title text

- property: font-weight
  token: font-medium
  value: font-weight: 500
  state: default
  usage: weight of event title

- property: padding
  token: px-2, py-1
  value: padding-x: 0.5rem, padding-y: 0.25rem
  state: default
  usage: padding inside event tag

- property: line-height
  token: leading-tight
  value: line-height: 1.25
  state: default
  usage: line height of event text

- property: box-shadow
  token: shadow-sm
  value: 0 1px 2px 0 rgb(0 0 0 / 0.05)
  state: default
  usage: subtle shadow under event tag

- property: opacity
  token: opacity-60
  value: opacity: 0.6
  state: completed
  usage: reduced opacity for completed events

---

## COMPONENT: Calendar Day Cell - More Events Text

### ELEMENT: "+N more" Text

- property: color
  token: --color-muted-foreground
  value: oklch(0.50 0.02 50) [light] / oklch(0.62 0.02 50) [dark]
  state: default
  usage: text color for overflow indicator

- property: font-size
  token: text-xs
  value: font-size: 0.75rem
  state: default
  usage: size of overflow text

- property: font-weight
  token: font-medium
  value: font-weight: 500
  state: default
  usage: weight of overflow text

---

## FLAT TOKEN INVENTORY

### Color Tokens Used in Calendar

1. **--color-card** [oklch(0.99 0.005 40) light / oklch(0.16 0.03 40) dark]
   - Usage: Calendar container background, day cell default background

2. **--color-border** [oklch(0.88 0.01 40) light / oklch(0.24 0.03 40) dark]
   - Usage: Calendar container border, day cell borders, header button borders

3. **--color-foreground** [oklch(0.12 0.02 40) light / oklch(0.96 0.01 40) dark]
   - Usage: Month/year label text, header button text, date number text (non-today)

4. **--color-primary** [oklch(0.55 0.16 35) light / oklch(0.62 0.18 35) dark]
   - Usage: Today date badge background, selected cell border/ring, event count badge color, event tag background

5. **--color-primary-foreground** [oklch(0.99 0 0)]
   - Usage: Text on today's date badge

6. **--color-muted** [oklch(0.92 0.01 40) light / oklch(0.22 0.03 40) dark]
   - Usage: Non-current month cell background (with opacity)

7. **--color-muted-foreground** [oklch(0.50 0.02 50) light / oklch(0.62 0.02 50) dark]
   - Usage: Day header text, non-current month cell text, "+more" indicator text

8. **--color-chart-1** [oklch(0.55 0.16 35)]
   - Usage: Event tag background color (when event.color = "bg-chart-1")

9. **--color-chart-2** [oklch(0.60 0.15 60)]
   - Usage: Event tag background color (when event.color = "bg-chart-2")

10. **--color-chart-3** [oklch(0.58 0.14 20)]
    - Usage: Event tag background color (when event.color = "bg-chart-3")

11. **--color-chart-4** [oklch(0.65 0.12 50)]
    - Usage: Event tag background color (when event.color = "bg-chart-4")

12. **--color-destructive** [oklch(0.55 0.18 25) light / oklch(0.60 0.20 25) dark]
    - Usage: Event tag background color (when event.color = "bg-destructive")

### Spacing Tokens Used in Calendar

1. **p-2.5** [padding: 0.625rem]
   - Usage: Padding inside day cells

2. **py-2** [padding-y: 0.5rem]
   - Usage: Vertical padding for day header labels

3. **px-2** [padding-x: 0.5rem]
   - Usage: Horizontal padding inside event tags

4. **py-1** [padding-y: 0.25rem]
   - Usage: Vertical padding inside event tags

5. **gap-2** [gap: 0.5rem]
   - Usage: Gap between header button icons, spacing in events list

6. **gap-1** [gap: 0.25rem]
   - Usage: Gap between date number and event count badge, gap between event tags

7. **mb-3** [margin-bottom: 0.75rem]
   - Usage: Space below day headers, above calendar grid

### Border Radius Tokens Used in Calendar

1. **rounded-xl** [border-radius: 0.75rem]
   - Usage: Day cell corners

2. **rounded-lg** [border-radius: 0.5rem]
   - Usage: Date number badge corners

3. **rounded-md** [border-radius: 0.375rem]
   - Usage: Event tag corners

4. **rounded-full** [border-radius: 9999px]
   - Usage: Event count badge (circular)

### Typography Tokens Used in Calendar

1. **text-xl** [font-size: 1.25rem]
   - Usage: Month/year label

2. **text-xs** [font-size: 0.75rem]
   - Usage: Day headers, date numbers, event titles, event count, overflow text

3. **font-semibold** [font-weight: 600]
   - Usage: Month/year label, day headers, date number

4. **font-medium** [font-weight: 500]
   - Usage: Event titles, overflow text

5. **font-bold** [font-weight: 700]
   - Usage: Event count badge

6. **uppercase** [text-transform: uppercase]
   - Usage: Day header labels

7. **tracking-wide** [letter-spacing: 0.125em]
   - Usage: Day header labels

8. **leading-tight** [line-height: 1.25]
   - Usage: Event title text

### Box Shadow Tokens Used in Calendar

1. **shadow-md** [0 4px 6px -1px rgb(0 0 0 / 0.1)]
   - Usage: Day cell hover state

2. **shadow-lg** [0 10px 15px -3px rgb(0 0 0 / 0.1)]
   - Usage: Selected day cell

3. **shadow-sm** [0 1px 2px 0 rgb(0 0 0 / 0.05)]
   - Usage: Event tag shadow

### Opacity/State Tokens Used in Calendar

1. **opacity-50** [opacity: 0.5]
   - Usage: Non-current month cells

2. **opacity-60** [opacity: 0.6]
   - Usage: Completed event tags

3. Implicit opacity-0.05 [opacity: 0.05]
   - Usage: Today cell background (primary/5)

4. Implicit opacity-0.1 [opacity: 0.1]
   - Usage: Selected cell background (primary/10)

5. Implicit opacity-0.2 [opacity: 0.2]
   - Usage: Event count badge background (primary/20)

6. Implicit opacity-0.3 [opacity: 0.3]
   - Usage: Selected cell ring (primary/30)

7. Implicit opacity-0.4 [opacity: 0.4]
   - Usage: Hover state border (primary/40)

### Transform Tokens Used in Calendar

1. **scale-105** [scaleX(1.05) scaleY(1.05)]
   - Usage: Header button hover state animation

### Other Utilities

1. **border-2** [border-width: 2px]
   - Usage: Day cell border thickness

2. **ring-2** [box-shadow ring of 2px]
   - Usage: Selected cell ring thickness

3. **h-28** [height: 7rem]
   - Usage: Day cell minimum height

4. **w-6 / h-6** [width/height: 1.5rem]
   - Usage: Date number badge dimensions

5. **w-5 / h-5** [width/height: 1.25rem]
   - Usage: Event count badge dimensions

6. **cursor-pointer** [cursor: pointer]
   - Usage: Current month day cells on hover

7. **cursor-default** [cursor: default]
   - Usage: Non-current month day cells

8. **transition-all duration-200** 
   - Usage: Day cell state transitions

9. **text-center**
   - Usage: Day headers, event count alignment

10. **text-left**
    - Usage: Day cell content alignment

11. **flex, flex-col, items-start, items-center, justify-between, justify-center, gap**
    - Usage: Layout for header, date badge, event tags

---

## SUMMARY

**Total Unique Color Tokens Used:** 12
**Total Unique Spacing Tokens Used:** 7
**Total Unique Typography Tokens Used:** 8
**Total Unique Effects (shadow/transform) Tokens Used:** 5

**Key Design Patterns:**
- Light/dark mode theme switching via CSS custom properties
- Primary color for interactive elements (today, selected, buttons)
- Muted colors for secondary text and non-interactive month cells
- Chart colors for event visual differentiation
- White text on colored event tags for contrast
- Consistent 2px borders for cell definition
- Shadow escalation: sm (event tags) → md (hover) → lg (selected)
- Ring system for focus states and selection emphasis