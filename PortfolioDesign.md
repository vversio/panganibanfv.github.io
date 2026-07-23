# Design Specification: Hyperlane / 26

**Event Summary:** Hyperlane / 26 is a one-night developer summit taking place in Brooklyn on October 17, 2026. The event spans twelve hours, featuring eight talks and four live product launches. The public list opens on September 9.

## 1. Design Tokens & Theme

The project utilizes an "atmospheric" genre with a "Marquee Hero" macrostructure and a "Bloom" theme. The color scheme is strictly dark.

### Color Palette

|**Token Category**|**Token Variables**|**Description**|
|---|---|---|
|**Paper (Backgrounds)**|`--color-paper` to `--color-paper-4`|Dark foundational background shades using OKLCH values.|
|**Ink (Text)**|`--color-ink` to `--color-ink-3`|Light typography shades for contrast.|
|**Accents**|`--color-accent`, `--color-accent-soft`|Warm-amber accent hues.|
|**Utility**|`--color-error`, `--color-success`|Standard functional colors for states.|
|**Atmospheric**|`--color-bloom-1`, `--color-bloom-2`|Specialized colors for ambient background blooms.|

### Typography

- **Display Font:** "Inter Tight" (system-ui, sans-serif).
    
- **Body Font:** "Inter" (system-ui, sans-serif).
    
- **Monospace Font:** "JetBrains Mono" (ui-monospace, monospace).
    
- **Accent Font:** "Instrument Serif" (serif).
    
- **Sizing:** Ranges from `--text-xs` (0.75rem) to `--text-display` (fluid clamp up to 9.5rem).
    
- **Leading:** Includes tight (1.05), snug (1.25), and standard body (1.55) line heights.
    

### Layout & Spacing

- **Spacing System:** Based on a 4pt scale, from `--space-2xs` (0.25rem) to `--space-4xl` (9rem).
    
- **Radii:** Ranges from `--radius-xs` (3px) to fully rounded `--radius-pill` (999px).
    
- **Grid/Containers:** The maximum width is set to 80rem, with a reading measure of 60ch.
    

## 2. Interactive Behaviours

The site incorporates specific motion and interactive elements, designed to respect reduced-motion preferences.

- **Hero Spotlight:** An HP3 cursor-spotlight effect that tracks the pointer's X and Y coordinates via `requestAnimationFrame`, scoped specifically to the hero section.
    
- **Live Countdown:** A timer tracking down to the event start target (2026-10-17T19:00:00-04:00), updating days, hours, minutes, and seconds.
    
- **Sticky Pill Navigation:** The top navigation transitions from a "rest" state to a "scrolled" state once the user scrolls past 24px.
    
- **Form Silent-Success:** The RSVP form utilizes an optimistic UI pattern. Upon submission, a 480ms simulated delay changes the button state to "success" and displays a confirmation message without using traditional toast notifications.
    

## 3. Content Architecture & Sections

### Navigation

- A floating pill design featuring the brand "Hyperlane / 26".
    
- Links to Format, Why, Programme, and FAQ, alongside a "Join the list" call-to-action.
    

### Hero Section

- Headline: "For engineers who ship after dark".
    
- Displays metadata: Date/Time, the live countdown, and the location (Brooklyn, 480 capacity).
    

### Format & Schedule

- **7:00 PM (Doors):** Soft open, drinks, and introductions.
    
- **8:30 PM (Programme):** Eight talks and four live launches running until 1 AM.
    
- **11:00 PM (Workshop):** A hands-on session limited to 40 seats.
    
- **1:00 AM (Late):** Closing DJ, open until 4 AM.
    
- **Address:** Revealed to ticketed guests 48 hours before the event.
    

### "Why" Pitch

- Positioned for engineers, founders, and designers who build at 2 AM.
    
- Emphasizes an anti-conference vibe: no badges, no pitches, no panels, and short talks (12-18 minutes).
    

### Programme Grid (Wave 01)

- Showcases six of twelve announced slots.
    
- Highlights include a 12-minute opening keynote on shipping under constraint, a 45-minute live coding session with no slides, and live, unrecorded product launches.
    
- Wave 02 reveals on September 9, 2026.
    

### Ticketing (RSVP) & FAQ

- **Pricing:** Wave 01 is $140, Wave 02 is $180, and Wave 03 is $220 at the door.
    
- **Rules:** Tickets are non-transferable. Talks are recorded and released 30 days later, but live launches are strictly unrecorded.
    
- **Refunds:** Available up to seven days before doors open.