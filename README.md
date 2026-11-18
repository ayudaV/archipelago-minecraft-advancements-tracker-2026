# Archipelago Minecraft Advancements Tracker

A static Minecraft-style tracker for Archipelago Minecraft advancements (Java 26.2 / NeoForgeAP v2.2.1).

## Structure

- `index.html` - page markup
- `styles.css` - custom styles
- `app.js` - UI and tracker behavior
- `advancements.csv` - advancement records
- `vercel.json` - Vercel static hosting configuration

The tracker organizes advances by six gameplay phases and by individual Overworld, Nether, Ocean, End, and structure areas. Advancements are editable in `advancements.csv` through their `phase` and `loc` columns.

## Local preview

```powershell
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

Import this repository in Vercel and use the default static-site settings. No build command or framework preset is required.
