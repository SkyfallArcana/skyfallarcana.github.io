# Skyfall Arcana

Turn-based wizard artillery battles on a destructible floating island. Inspired by Arcanists and Worms Armageddon.

**Play / install:** https://skyfallarcana.github.io/

## Install it

- **Android (Chrome):** open the link, tap the ⋮ menu → **Install app** (or **Add to Home screen**).
- **iPhone / iPad (Safari):** open the link, tap **Share** → **Add to Home Screen**.
- **PC (Chrome or Edge):** open the link, click the install icon at the right of the address bar.

The game plays sideways on phones and full screen on PC (mouse + keyboard).

## Updates

Every push to `main` runs `.github/workflows/deploy.yml`, which publishes the game to GitHub Pages with a new version number.

- If a player opens the app while an update is waiting, it updates on launch.
- If they're already playing, an **Update now** button appears. During a match it waits until the match ends.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole game: sign-up, menus, battle engine |
| `sw.js` | Offline cache and update check |
| `manifest.webmanifest` | App name, icons, landscape orientation |
| `assets/` | Characters, island terrain, sky |
| `icons/` | App icons |

## Controls

- Walk: A / D or ← / →. Jump: W or ↑. High jump: Space.
- Spells: click or press 1–9, 0. Lobbed spells: hold to charge, release to throw.
- Phones: on-screen Walk / Jump buttons; tap and hold on the map to aim.

## Notes

Accounts and progress are stored on each device for now. Real Google sign-in, cross-device accounts and online matches need a game server.
