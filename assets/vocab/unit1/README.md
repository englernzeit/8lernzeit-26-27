# Unit 1 — Picture Vocabulary artwork ("Neon Postcard")

Drop the illustrations here and the flashcard deck lights up automatically.
Until a file exists, that card shows a neon placeholder (never a broken image),
and the word / translation / example already display on top.

## Where the files go (exact names)

The engine loads `assets/vocab/unit1/<course>/NN.jpg` — two-digit, starting at `01`.

```
assets/vocab/unit1/
  gkurs/  01.jpg … 12.jpg   (G-Kurs)
  ekurs/  01.jpg … 12.jpg   (E-Kurs)
```

## Image format

- **JPG**, **2:3 portrait** (1024×1536 px — gpt-image-1's portrait size). The site
  re-encodes/optimises; drop originals in and they get archived under
  `assets/_original/vocab/unit1/`. Keep files well under 25 MiB (a few hundred KB
  is plenty).
- **Wordless.** The English word, German translation and example are drawn by the
  site as crisp text on top — do **not** bake any text/letters into the image.
- Leave the **top ~20 %** and **bottom ~30 %** darker / calmer: the site lays a
  neon word-sign over the top and the translation + example over the bottom.

## Shared style prompt (put the SUBJECT in the [brackets])

> Neon night illustration of **[SUBJECT]**, single hero subject centered, deep
> navy New York night background, glowing teal and warm-gold neon rim-light,
> subtle coral accents, cinematic soft glow, painterly cinematic light,
> **no text, no letters, no words, no logos**, clean darker space at the top and
> bottom, 2:3 portrait.

## G-Kurs — gkurs/NN.jpg

| file | word | subject to put in the prompt |
|------|------|------------------------------|
| 01 | state | ✅ done — neon government building with US flag & NYC skyline |
| 02 | age | ✅ done — neon birthday cake with candles, NYC skyline through a window |
| 03 | liberty | ✅ done — vintage suitcase on a pier, glowing Statue of Liberty in the distance |
| 04 | sneakers | a pair of cool sneakers on a pedestal under a neon spotlight |
| 05 | pants | a pair of trousers on a hanger in a neon-lit clothing store |
| 06 | candy | a colourful candy / sweets display in a glowing candy-store window |
| 07 | cab | a classic yellow New York taxi cab under neon street lights |
| 08 | fries | a paper cup of French fries glowing under a diner neon sign |
| 09 | cookie | a big chocolate-chip cookie on a plate under warm neon light |
| 10 | skyscraper | one tall lit New York skyscraper against the night sky |
| 11 | restroom | a glowing restroom door with the male/female restroom pictogram |
| 12 | line | a line (queue) of people waiting outside a glowing shop entrance |

## E-Kurs — ekurs/NN.jpg

| file | word | subject to put in the prompt |
|------|------|------------------------------|
| 01 | receipt | a long paper store receipt curling, glowing under neon light |
| 02 | checkout | a store checkout counter with a cash register glowing |
| 03 | changing room | a fitting-room booth with a curtain in a neon-lit store |
| 04 | souvenir | small Statue of Liberty souvenir figurines glowing on a stall |
| 05 | landmark | the Statue of Liberty lit up at night |
| 06 | bargain | a bright red discount price tag tied to a product, glowing |
| 07 | guided tour | a tour guide holding a small flag leading tourists past a lit landmark |
| 08 | sightseeing bus | a red open-top double-decker sightseeing bus on a neon street |
| 09 | first floor | an elevator control panel glowing, the lowest (ground) button lit |
| 10 | the check | a small restaurant bill on a tray with a pen, under diner light |
| 11 | Exit | a glowing green exit sign with a running-figure pictogram above a door |
| 12 | MetroCard | a hand tapping a yellow-and-blue transit fare card on a subway gate reader |

The same words drive **Word Master** (the gap-fill drill) — no extra assets needed there.
