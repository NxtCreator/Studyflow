# StudyFlow Dashboard - Design Token Usage Map

## Light Mode Token Values

| Token | OKLch Value | Hex Equivalent | Purpose |
|-------|-------------|----------------|---------|
| --background | oklch(0.98 0.01 40) | #FAFAF8 | Page background |
| --foreground | oklch(0.12 0.02 40) | #1F1D1A | Primary text |
| --card | oklch(0.99 0.005 40) | #FCFBFA | Card backgrounds |
| --card-foreground | oklch(0.12 0.02 40) | #1F1D1A | Card text |
| --primary | oklch(0.55 0.16 35) | #C2410C | Brand color (Ember) |
| --primary-foreground | oklch(0.99 0 0) | #FFFFFF | White text on primary |
| --secondary | oklch(0.96 0.01 40) | #F5F3F0 | Light backgrounds |
| --secondary-foreground | oklch(0.25 0.02 40) | #403C38 | Secondary text |
| --muted | oklch(0.92 0.01 40) | #EBE7E4 | Muted backgrounds |
| --muted-foreground | oklch(0.50 0.02 50) | #808078 | Muted text |
| --accent | oklch(0.60 0.15 60) | #EAA52C | Amber/Gold accent |
| --accent-foreground | oklch(0.12 0.02 40) | #1F1D1A | Dark text on accent |
| --destructive | oklch(0.55 0.18 25) | #A4240A | Red/destructive |
| --destructive-foreground | oklch(0.99 0 0) | #FFFFFF | White text on destructive |
| --border | oklch(0.88 0.01 40) | #D8D3CE | Subtle dividers |
| --input | oklch(0.88 0.01 40) | #D8D3CE | Input field borders |
| --ring | oklch(0.55 0.16 35) | #C2410C | Focus ring (Primary) |
| --success | oklch(0.60 0.15 60) | #EAA52C | Success state |
| --warning | oklch(0.60 0.15 60) | #EAA52C | Warning state |

## Dark Mode Token Values

| Token | OKLch Value | Hex Equivalent | Purpose |
|-------|-------------|----------------|---------|
| --background | oklch(0.12 0.02 40) | #1F1D1A | Dark page background |
| --foreground | oklch(0.96 0.01 40) | #F5F3F0 | Light text on dark |
| --card | oklch(0.16 0.03 40) | #2A2622 | Dark card background |
| --card-foreground | oklch(0.96 0.01 40) | #F5F3F0 | Light text on cards |
| --primary | oklch(0.62 0.18 35) | #E85D2D | Brighter Ember |
| --primary-foreground | oklch(0.99 0 0) | #FFFFFF | White text |
| --secondary | oklch(0.20 0.03 40) | #332E2A | Dark secondary bg |
| --secondary-foreground | oklch(0.96 0.01 40) | #F5F3F0 | Light secondary text |
| --muted | oklch(0.22 0.03 40) | #3A3530 | Dark muted bg |
| --muted-foreground | oklch(0.62 0.02 50) | #A0998F | Light muted text |
| --accent | oklch(0.65 0.16 60) | #F5B841 | Brighter Amber |
| --accent-foreground | oklch(0.12 0.02 40) | #1F1D1A | Dark text on accent |
| --destructive | oklch(0.60 0.20 25) | #D93D1A | Brighter Red |
| --destructive-foreground | oklch(0.99 0 0) | #FFFFFF | White text |
| --border | oklch(0.24 0.03 40) | #423B35 | Dark borders |
| --input | oklch(0.24 0.03 40) | #423B35 | Dark input borders |
| --ring | oklch(0.62 0.18 35) | #E85D2D | Bright focus ring |
| --success | oklch(0.65 0.16 60) | #F5B841 | Success state |
| --warning | oklch(0.65 0.16 60) | #F5B841 | Warning state |

## Sidebar-Specific Tokens

| Token | Light Value | Dark Value | Usage |
|-------|-------------|-----------|--------|
| --sidebar | oklch(0.97 0.01 40) | oklch(0.14 0.02 40) | Sidebar background |
| --sidebar-foreground | oklch(0.12 0.02 40) | oklch(0.96 0.01 40) | Sidebar text |
| --sidebar-primary | oklch(0.55 0.16 35) | oklch(0.62 0.18 35) | Active nav item |
| --sidebar-primary-foreground | oklch(0.99 0 0) | oklch(0.99 0 0) | Active nav text |
| --sidebar-accent | oklch(0.93 0.01 35) | oklch(0.22 0.04 35) | Nav hover background |
| --sidebar-accent-foreground | oklch(0.25 0.02 40) | oklch(0.96 0.01 40) | Nav hover text |
| --sidebar-border | oklch(0.88 0.01 40) | oklch(0.26 0.03 40) | Sidebar divider |

## Chart Colors

| Token | Value | Usage |
|-------|-------|-------|
| --chart-1 | oklch(0.55/0.62 0.16/0.18 35) | Primary chart bars (Terracotta) |
| --chart-2 | oklch(0.60/0.65 0.15/0.16 60) | Secondary chart bars (Amber) |
| --chart-3 | oklch(0.58/0.62 0.14/0.15 20) | Tertiary chart bars (Dark brown) |
| --chart-4 | oklch(0.65/0.68 0.12/0.13 50) | Quaternary chart bars (Light tan) |
| --chart-5 | oklch(0.55/0.60 0.18/0.20 25) | Error/Warning bars (Red) |

---

# Dashboard Component Token Usage

## Top Navigation Header
**File:** `/components/dashboard/top-nav.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Header background | --background | `bg-background/80` with backdrop blur |
| Header border | --border | `border-b border-border` |
| Title text | --foreground | Page title heading |
| Subtitle text | --muted-foreground | Secondary subtitle text |
| Search bar background | --secondary | `bg-secondary/50` |
| Search bar border | --border | `border-border` |
| Search text | --muted-foreground | Placeholder and hint text |
| Search icon | --muted-foreground | Icon color |
| Keyboard hint background | --background | `bg-background` |
| Keyboard hint border | --border | `border-border` |
| Quick Add button background | --primary | Button primary color |
| Quick Add button text | --primary-foreground | White text |
| Quick Add icon backgrounds | --primary/15, --accent/15, --chart-3/15 | Icon container backgrounds (tinted) |
| Icon colors in dropdown | --primary, --accent, --chart-3 | Dropdown menu icons |
| Theme toggle button | --foreground (icon) | Sun/Moon icon color |
| Notification dot | --primary | Animated pulsing indicator |

## Sidebar Navigation
**File:** `/components/dashboard/sidebar.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Sidebar background | --sidebar | Full sidebar `bg-sidebar` |
| Sidebar border | --sidebar-border | Right border `border-r border-sidebar-border` |
| Logo badge background | --primary | Icon container background |
| Logo badge icon | --primary-foreground | White icon |
| Logo text | --sidebar-foreground | "StudyFlow" text |
| Beta pill background | --primary/15 | Tinted primary background |
| Beta pill text | --primary | Orange/terracotta text |
| Menu label | --muted-foreground/70 | "Menu" section label (muted) |
| Active nav item background | --primary/10 | `bg-primary/10` |
| Active nav item text | --primary | Navigation text when active |
| Active nav indicator | --primary | Left sidebar accent bar |
| Inactive nav text | --sidebar-foreground/70 | Default navigation text |
| Inactive nav icon | --muted-foreground | Icon color when not active |
| Nav hover background | --sidebar-accent | `hover:bg-sidebar-accent` |
| Nav hover text | --sidebar-foreground | Text on hover |
| Upgrade card background | --primary/5 | `bg-primary/5` |
| Upgrade card border | --primary/20 | `border-primary/20` |
| Upgrade icon background | --primary/15 | Icon container |
| Upgrade icon | --primary | Icon color |
| Upgrade title | --sidebar-foreground | Text |
| Upgrade button background | --primary | `bg-primary` |
| Upgrade button text | --primary-foreground | White text |
| Upgrade button hover | --primary/90 | Darkened primary on hover |
| User avatar ring | --primary/20 | `ring-primary/20` |
| User avatar background | --primary/15 | `bg-primary/15` |
| User avatar text | --primary | Avatar initials |
| User name | --sidebar-foreground | Jane Doe text |
| User role | --muted-foreground | "Computer Science" text |
| User menu hover | --sidebar-accent | `hover:bg-sidebar-accent` |
| Collapse button | --foreground (icon) | Chevron icon color |

## Stat Cards
**File:** `/components/dashboard/stat-card.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Card background | --card | Main card container |
| Card border | --border/50 | `border-border/50` (50% opacity) |
| Card hover border | --primary/20 | `hover:border-primary/20` |
| Card shadow | --primary/5 | `hover:shadow-primary/5` |
| Card title text | --muted-foreground | Stat name text |
| Card value text | --foreground | Large number display |
| Positive trend badge background | --success/10 | `bg-success/10` |
| Positive trend badge text | --success | Green text for up trend |
| Negative trend badge background | --destructive/10 | `bg-destructive/10` |
| Negative trend badge text | --destructive | Red text for down trend |
| Subtitle text | --muted-foreground | Secondary stat info |
| Icon background (chart-1) | --chart-1/15 | `bg-chart-1/15` tinted |
| Icon color (chart-1) | --chart-1 | Orange/Ember icon |
| Icon background (chart-2) | --chart-2/15 | `bg-chart-2/15` tinted |
| Icon color (chart-2) | --chart-2 | Amber icon |
| Icon background (primary) | --primary/15 | `bg-primary/15` tinted |
| Icon color (primary) | --primary | Primary icon |
| Decorative gradient | --primary/5 | Blurred accent on hover |

## Cards and Containers
**File:** `/components/ui/card.tsx` (used throughout)

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Card background | --card | `bg-card` |
| Card text | --card-foreground | Card content text |
| Card borders | --border | Optional borders |

## Input Elements
**File:** `/components/ui/input.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Input background | --background | Input field background |
| Input border | --input | `border-input` |
| Input text | --foreground | User input text |
| Input placeholder | --muted-foreground | Placeholder text |
| Focus ring | --ring | Focus state outline |

## Buttons and Interactive Elements
**File:** `/components/ui/button.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Primary button background | --primary | Default button color |
| Primary button text | --primary-foreground | White text |
| Ghost button text | --foreground | Transparent bg, colored text |
| Outline button border | --border | Border color |
| Button focus ring | --ring | Focus outline |

## Dropdown Menus
**File:** `/components/ui/dropdown-menu.tsx`

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Menu background | --popover | Dropdown background |
| Menu text | --popover-foreground | Menu item text |
| Menu border | --border | Menu borders |
| Hover item background | --secondary | Hover state background |

## Data Visualization
**Used in charts and progress bars**

| Element | Token Used | Specific Usage |
|---------|------------|----------------|
| Primary chart bars | --chart-1 | Main data series (Terracotta) |
| Secondary bars | --chart-2 | Comparison data (Amber) |
| Tertiary bars | --chart-3 | Additional metrics (Dark brown) |
| Progress bar background | --secondary | Track background |
| Progress bar fill | --primary | Filled portion |
| Progress bar text | --muted-foreground | Labels |

---

# Token Priority & Hierarchy

## Primary Content Layer
- **Background:** --background
- **Text:** --foreground
- **Interactive:** --primary

## Secondary Layer
- **Background:** --secondary / --card
- **Text:** --secondary-foreground / --card-foreground
- **Muted Elements:** --muted / --muted-foreground

## Interactive States
- **Active/Hover:** --primary / --primary/10 / --primary/15 / --primary/20
- **Focus Ring:** --ring
- **Error/Destructive:** --destructive / --destructive-foreground
- **Accents:** --accent / --accent/10 / --accent/15

## Navigation Layer
- **Sidebar Background:** --sidebar / --sidebar-accent
- **Active Items:** --sidebar-primary / --primary
- **Text:** --sidebar-foreground / --muted-foreground

## Data Layer
- **Chart 1 (Primary):** --chart-1 (Terracotta/Ember)
- **Chart 2 (Secondary):** --chart-2 (Amber/Gold)
- **Chart 3 (Tertiary):** --chart-3 (Dark Brown)
- **Chart 4 (Quaternary):** --chart-4 (Light Tan)
- **Chart 5 (Error):** --chart-5 (Red)

---

# Color Opacity Patterns

The design uses opacity modifiers extensively:

```
/5   = 5% opacity   (very subtle backgrounds)
/10  = 10% opacity  (tinted backgrounds for icons/badges)
/15  = 15% opacity  (icon backgrounds in cards)
/20  = 20% opacity  (borders, hover states)
/50  = 50% opacity  (semi-transparent overlays)
/70  = 70% opacity  (slightly muted text labels)
/80  = 80% opacity  (header backdrop)
/90  = 90% opacity  (button hover states)
```

Example Usage:
- `--primary/5` → Very subtle Ember tint for decorative gradients
- `--primary/10` → Active navigation item background
- `--primary/15` → Icon backgrounds in stat cards
- `--primary/20` → Hover borders and rings