// Skyfall Arcana service worker.
// The deploy workflow replaces __VERSION__ on every push, so each update gets a new cache
// and the app shows its "Update now" button (or updates on next launch).
const VERSION = "__VERSION__";
const CACHE = "skyfall-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/sky.jpg",
  "assets/terrain.webp",
  "assets/male.webp",
  "assets/female.webp",
  "assets/champion_male.webp",
  "assets/champion_female.webp",
  "assets/blue_wizard.webp",
  "assets/pink_witch.webp",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.all(FILES.map((f) => fetch(f, { cache: "reload" }).then((r) => r.ok && c.put(f, r))))
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("skyfall-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Serve from this version's cache so the game works offline and only changes when the player taps Update.
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((r) => {
        if (r.ok) c.put(req, r.clone());
        return r;
      }))
    )
  );
});
