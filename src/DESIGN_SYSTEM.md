/* Ember Hearth Design System - Token Reference */

/* 
  EMBER HEARTH DESIGN SYSTEM
  A warm, earthy color palette designed for calm productivity and focus
  
  Color Philosophy:
  - Primary: Terracotta (hue 35) - Warm, inviting, and energetic
  - Accent: Amber/Gold (hue 60) - Complementary warmth and highlights
  - Neutrals: Warm grays (hue 40) - Natural stone and earth tones
  - Background: Cream/Warm white - Soft on the eyes, welcoming
  - Dark Mode: Warm charcoal - Maintains warmth in low-light environments
*/

/* ============================================================================
   LIGHT MODE COLOR TOKENS
   ============================================================================ */

/* Backgrounds & Surfaces */
:root {
  /* Primary Background */
  --background: oklch(0.98 0.01 40);           /* Warm cream #FAFAF7 */
  --card: oklch(0.99 0.005 40);                /* Slight warmer white #FFFDF9 */
  --popover: oklch(0.99 0.005 40);             /* Same as card #FFFDF9 */
  
  /* Secondary Background */
  --secondary: oklch(0.96 0.01 40);            /* Light warm gray #F3F0ED */
  --sidebar: oklch(0.97 0.01 40);              /* Slightly lighter warm gray #F8F5F2 */
  
  /* Muted Background */
  --muted: oklch(0.92 0.01 40);                /* Medium warm gray #EBE4DF */
  --input: oklch(0.88 0.01 40);                /* Input background #DFD5CF */
  --border: oklch(0.88 0.01 40);               /* Border color #DFD5CF */
}

/* Text & Foreground */
:root {
  /* Primary Text */
  --foreground: oklch(0.12 0.02 40);           /* Dark warm gray #1A1512 */
  --card-foreground: oklch(0.12 0.02 40);      /* Same as foreground #1A1512 */
  --popover-foreground: oklch(0.12 0.02 40);   /* Same as foreground #1A1512 */
  --sidebar-foreground: oklch(0.12 0.02 40);   /* Same as foreground #1A1512 */
  
  /* Secondary Text */
  --secondary-foreground: oklch(0.25 0.02 40); /* Medium gray #3A2F29 */
  --accent-foreground: oklch(0.12 0.02 40);    /* Dark for contrast on accent #1A1512 */
  
  /* Muted Text */
  --muted-foreground: oklch(0.50 0.02 50);     /* Light gray #7B7370 */
  --sidebar-accent-foreground: oklch(0.25 0.02 40); /* Medium gray #3A2F29 */
}

/* Primary Colors - Terracotta */
:root {
  --primary: oklch(0.55 0.16 35);              /* Terracotta #C2410C */
  --primary-foreground: oklch(0.99 0 0);       /* White text #FFFFFF */
  --sidebar-primary: oklch(0.55 0.16 35);      /* Same as primary #C2410C */
  --sidebar-primary-foreground: oklch(0.99 0 0); /* White text #FFFFFF */
  --ring: oklch(0.55 0.16 35);                 /* Focus ring #C2410C */
  --sidebar-ring: oklch(0.55 0.16 35);         /* Same as ring #C2410C */
}

/* Accent Colors - Amber/Gold */
:root {
  --accent: oklch(0.60 0.15 60);               /* Amber #F59E0B */
  --success: oklch(0.60 0.15 60);              /* Same as accent #F59E0B */
  --warning: oklch(0.60 0.15 60);              /* Same as accent #F59E0B */
  --success-foreground: oklch(0.99 0 0);       /* White text #FFFFFF */
  --warning-foreground: oklch(0.12 0.02 40);   /* Dark text #1A1512 */
  --sidebar-accent: oklch(0.93 0.01 35);       /* Light terracotta bg #F5E6E1 */
}

/* Destructive Colors - Red */
:root {
  --destructive: oklch(0.55 0.18 25);          /* Red-orange #D12619 */
  --destructive-foreground: oklch(0.99 0 0);   /* White text #FFFFFF */
}

/* Chart Colors - Multi-color palette */
:root {
  --chart-1: oklch(0.55 0.16 35);              /* Terracotta #C2410C */
  --chart-2: oklch(0.60 0.15 60);              /* Amber #F59E0B */
  --chart-3: oklch(0.58 0.14 20);              /* Deep brown #8B4513 */
  --chart-4: oklch(0.65 0.12 50);              /* Light golden #DCA54B */
  --chart-5: oklch(0.55 0.18 25);              /* Red-orange #D12619 */
}

/* Sidebar Accent */
:root {
  --sidebar-accent-foreground: oklch(0.25 0.02 40);
  --sidebar-border: oklch(0.88 0.01 40);
}

/* ============================================================================
   DARK MODE COLOR TOKENS
   ============================================================================ */

.dark {
  /* Primary Background */
  --background: oklch(0.12 0.02 40);           /* Warm charcoal #1A1512 */
  --card: oklch(0.16 0.03 40);                 /* Slightly lighter #242119 */
  --popover: oklch(0.16 0.03 40);              /* Same as card #242119 */
  
  /* Secondary Background */
  --secondary: oklch(0.20 0.03 40);            /* Medium charcoal #2C261F */
  --sidebar: oklch(0.14 0.02 40);              /* Darker charcoal #1F1915 */
  
  /* Muted Background */
  --muted: oklch(0.22 0.03 40);                /* Muted charcoal #322B24 */
  --input: oklch(0.24 0.03 40);                /* Input background #382F28 */
  --border: oklch(0.24 0.03 40);               /* Border color #382F28 */
}

/* Text & Foreground - Dark Mode */
.dark {
  /* Primary Text */
  --foreground: oklch(0.96 0.01 40);           /* Warm white #F5F0EB */
  --card-foreground: oklch(0.96 0.01 40);      /* Same as foreground #F5F0EB */
  --popover-foreground: oklch(0.96 0.01 40);   /* Same as foreground #F5F0EB */
  --sidebar-foreground: oklch(0.96 0.01 40);   /* Same as foreground #F5F0EB */
  
  /* Secondary Text */
  --secondary-foreground: oklch(0.96 0.01 40); /* Warm white #F5F0EB */
  --accent-foreground: oklch(0.12 0.02 40);    /* Dark for contrast #1A1512 */
  
  /* Muted Text */
  --muted-foreground: oklch(0.62 0.02 50);     /* Light gray #A69E96 */
  --sidebar-accent-foreground: oklch(0.96 0.01 40); /* Warm white #F5F0EB */
}

/* Primary Colors - Dark Mode (Brighter Terracotta) */
.dark {
  --primary: oklch(0.62 0.18 35);              /* Bright terracotta #DC5C3D */
  --primary-foreground: oklch(0.99 0 0);       /* White text #FFFFFF */
  --sidebar-primary: oklch(0.62 0.18 35);      /* Same as primary #DC5C3D */
  --sidebar-primary-foreground: oklch(0.99 0 0); /* White text #FFFFFF */
  --ring: oklch(0.62 0.18 35);                 /* Focus ring #DC5C3D */
  --sidebar-ring: oklch(0.62 0.18 35);         /* Same as ring #DC5C3D */
}

/* Accent Colors - Dark Mode (Brighter Amber) */
.dark {
  --accent: oklch(0.65 0.16 60);               /* Bright amber #FDB022 */
  --success: oklch(0.65 0.16 60);              /* Same as accent #FDB022 */
  --warning: oklch(0.65 0.16 60);              /* Same as accent #FDB022 */
  --success-foreground: oklch(0.99 0 0);       /* White text #FFFFFF */
  --warning-foreground: oklch(0.12 0.02 40);   /* Dark text #1A1512 */
  --sidebar-accent: oklch(0.22 0.04 35);       /* Dark terracotta bg #372B23 */
}

/* Destructive Colors - Dark Mode (Brighter Red) */
.dark {
  --destructive: oklch(0.60 0.20 25);          /* Bright red-orange #E83926 */
  --destructive-foreground: oklch(0.99 0 0);   /* White text #FFFFFF */
}

/* Chart Colors - Dark Mode */
.dark {
  --chart-1: oklch(0.62 0.18 35);              /* Bright terracotta #DC5C3D */
  --chart-2: oklch(0.65 0.16 60);              /* Bright amber #FDB022 */
  --chart-3: oklch(0.62 0.15 20);              /* Light brown #A66C47 */
  --chart-4: oklch(0.68 0.13 50);              /* Lighter golden #E8C547 */
  --chart-5: oklch(0.60 0.20 25);              /* Bright red-orange #E83926 */
}

/* Sidebar - Dark Mode */
.dark {
  --sidebar-accent-foreground: oklch(0.96 0.01 40);
  --sidebar-border: oklch(0.26 0.03 40);
}

/* ============================================================================
   DESIGN SYSTEM CONSTANTS
   ============================================================================ */

:root {
  /* Border Radius */
  --radius: 0.625rem;                          /* 10px base radius */
  
  /* Derived radius values are calculated in @theme */
}

/* ============================================================================
   USAGE GUIDELINES
   ============================================================================ */

/*
  PRIMARY USAGE:
  - Use --primary for main CTAs, navigation highlights, and primary UI elements
  - Use --accent for highlights, secondary CTAs, and success states
  - Use --destructive only for dangerous actions (delete, warning)
  
  TEXT HIERARCHY:
  - --foreground: Main body text and primary headings
  - --secondary-foreground: Secondary text and subheadings
  - --muted-foreground: Helper text, captions, and placeholders
  
  BACKGROUNDS:
  - --background: Main page background
  - --card: Cards, modals, and contained elements
  - --secondary: Alternative surfaces and hover states
  - --muted: Disabled states and secondary backgrounds
  
  SIDEBAR:
  - Use sidebar-specific variables for consistent sidebar styling
  - --sidebar-primary for active nav items
  - --sidebar-accent for hover states and accents
  
  CHARTS:
  - chart-1 through chart-5 provide a coordinated color set
  - Rotate through these for multi-series data visualization
  - Pairs well with chart-2 (accent) for highlighting
*/
