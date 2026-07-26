/**
 * In New York City (Unit 1) — Speaking: "A Call from New York".
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs). One situation carries the whole page: your American friend Sam
 * phones you while you are in NYC and wants to know three things — where
 * you are NOW, what you have ALREADY seen, and your plans for TOMORROW.
 * Every level trains the three "time zones" (present progressive · present
 * perfect · going-to, plus simple past for one finished moment) and ends
 * by speaking. The six landmark photos (sliced from the supplied travel
 * grid) anchor every task.
 *
 * Steps:
 *   Step 1 (LE)     — name the sights, the three time zones, a call frame
 *   Step 2 (G-Kurs) — verb forms, sounding natural, a free one-minute call
 *   Step 3 (E-Kurs) — repair a call, robot→real rewrite, surprise questions
 *   Step 4 (★)      — "Sam is Calling!": a live phone call, choose the reply
 *
 * Speaking can't be auto-graded, so productive tasks are spoken frames /
 * notes (say-it-aloud) that also feed the PDF; the tense and phrasing work
 * is self-checking.
 */

const SPK = "assets/images/unit1/speaking";
const LANDMARKS = [
  { word: "the Statue of Liberty", image: `${SPK}/01.jpg` },
  { word: "Brooklyn Bridge", image: `${SPK}/02.jpg` },
  { word: "Central Park", image: `${SPK}/03.jpg` },
  { word: "the Empire State Building", image: `${SPK}/04.jpg` },
  { word: "Times Square", image: `${SPK}/05.jpg` },
  { word: "Joe's Pizza", image: `${SPK}/06.jpg` },
];

export default {
  title: "A Call from New York",

  /* ============ Shared reference card ============ */
  guide: {
    label: "Your Speaking Toolkit",
    numbered: false,
    types: [
      {
        name: "NOW",
        tag: "at this moment",
        accent: "teal",
        formula: "am / is / are + …ing",
        de: "Was gerade passiert (Present Progressive).",
        example: "Right now I'm standing on the bridge.",
      },
      {
        name: "ALREADY",
        tag: "before now",
        accent: "olive",
        formula: "have / has + 3rd form",
        de: "Was du schon erlebt hast (Present Perfect).",
        example: "I've already seen Times Square.",
      },
      {
        name: "YESTERDAY",
        tag: "one finished moment",
        accent: "slate",
        formula: "2nd form / …ed",
        de: "Ein abgeschlossener Moment (Simple Past).",
        example: "Yesterday we ate at Joe's Pizza.",
      },
      {
        name: "TOMORROW",
        tag: "plans",
        accent: "ochre",
        formula: "am going to + verb",
        de: "Deine Pläne (going to-future).",
        example: "Tomorrow we're going to visit Central Park.",
      },
    ],
    tensesLabel: "Sound like a real phone call — not a school text",
    tenses: [
      { tense: "Open", accent: "olive", use: "Greet Sam and create interest.", example: "Hi Sam, great to hear from you! Guess where I am!", signals: "der Anfang" },
      { tense: "Fillers", accent: "teal", use: "Small words buy you a second to think — and make you sound fluent.", example: "Well… · Actually… · you know · I mean… · anyway", signals: "natürlich klingen" },
      { tense: "Close", accent: "ochre", use: "End the call politely.", example: "Anyway, I'd better go — talk to you soon!", signals: "das Ende" },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "Mit Hilfe auf Deutsch",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Which famous place in New York do you already know? Write the name — in English or German.",
          answer: true,
        },
        {
          type: "image-match",
          kind: "Deine Bilder",
          title: "What is it?",
          intro: "These are your six New York pictures. Tap a photo, then tap its name.",
          pairs: LANDMARKS,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Your language toolkit",
          intro: "Tap an English word, then tap its German partner.",
          leftLabel: "English",
          rightLabel: "Deutsch",
          pairs: [
            { left: "famous", right: "berühmt" },
            { left: "a sight", right: "eine Sehenswürdigkeit" },
            { left: "a bridge", right: "eine Brücke" },
            { left: "a park", right: "ein Park" },
            { left: "a skyscraper", right: "ein Wolkenkratzer" },
            { left: "delicious", right: "lecker" },
            { left: "to visit", right: "besuchen" },
            { left: "to take a photo", right: "ein Foto machen" },
            { left: "great", right: "toll" },
            { left: "See you soon!", right: "Bis bald!" },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "The right time zone",
          intro: "NOW, ALREADY or TOMORROW? Tap the correct form.",
          columns: 2,
          questions: [
            { q: "Right now I ___ on the bridge.", options: ["am standing", "stood"], correct: 0 },
            { q: "I ___ the Statue of Liberty already.", options: ["have seen", "am seeing"], correct: 0 },
            { q: "Tomorrow we ___ Central Park.", options: ["are going to visit", "visited"], correct: 0 },
            { q: "Yesterday we ___ at Joe's Pizza.", options: ["ate", "are eating"], correct: 0 },
            { q: "Look! I ___ at Times Square right now.", options: ["am", "was"], correct: 0 },
            { q: "I ___ pizza — it was delicious!", options: ["have eaten", "am going to eat"], correct: 0 },
          ],
        },
        {
          type: "written",
          kind: "Sprich laut",
          title: "Where are you NOW?",
          intro: "Choose one picture. Complete the sentences — then say them aloud!",
          starters: [
            "I am at …",
            "I am looking at …",
            "It is …! (great / amazing / big / beautiful)",
          ],
          help: "🔊 Say each sentence out loud — loud and clear. Then do it with a second picture.",
        },
        {
          type: "written",
          kind: "Finale · Sprich laut",
          title: "Your call to Sam",
          intro: "Complete your frame, then say the whole call aloud (about 30–40 seconds).",
          starters: [
            "Hi Sam! Right now I am at …",
            "I am looking at …",
            "I have already seen … and …",
            "Yesterday I …",
            "Tomorrow I am going to …",
          ],
          help: "🔊 Now say it aloud — don't read word by word. Look up and talk to Sam!",
        },
      ],
    },

    /* ================= STEP 2 — G-Kurs ================= */
    {
      step: 2,
      subtitle: "G-Kurs",
      accent: "olive",
      layout: "spread",
      cards: [
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "Your phone rings while you are on holiday. What do your friends always want to know? Write down one question they would ask you.",
          answer: true,
        },
        {
          type: "image-match",
          kind: "Deine Bilder",
          title: "Name the sights",
          intro: "Tap a photo, then tap the name of the landmark.",
          pairs: LANDMARKS,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Your language toolkit",
          intro: "Tap an English word or phrase, then tap its German partner.",
          leftLabel: "English",
          rightLabel: "Deutsch",
          pairs: [
            { left: "a landmark", right: "eine Sehenswürdigkeit" },
            { left: "the skyline", right: "die Skyline" },
            { left: "crowded", right: "voller Menschen" },
            { left: "the view", right: "die Aussicht" },
            { left: "breathtaking", right: "atemberaubend" },
            { left: "a guided tour", right: "eine geführte Tour" },
            { left: "to walk across", right: "hinübergehen" },
            { left: "to try (food)", right: "probieren" },
            { left: "I can't wait to …", right: "Ich kann es kaum erwarten …" },
            { left: "Guess where I am!", right: "Rate mal, wo ich bin!" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Übung",
          title: "The right time zone",
          intro: "Put the verb into the right form. Ask yourself first: NOW, ALREADY, YESTERDAY or TOMORROW?",
          items: [
            { segments: ["Right now I ", { answer: "am standing", accept: ["'m standing"], size: 13 }, " (stand) on Brooklyn Bridge."] },
            { segments: ["I ", { answer: "have already seen", accept: ["'ve already seen"], size: 18 }, " (already/see) the Statue of Liberty."] },
            { segments: ["Tomorrow we ", { answer: "are going to visit", accept: ["'re going to visit"], size: 19 }, " (going to/visit) Central Park."] },
            { segments: ["Yesterday we ", { answer: "ate", size: 6 }, " (eat) at Joe's Pizza."] },
            { segments: ["I ", { answer: "have never been", accept: ["'ve never been"], size: 16 }, " (never/be) in such a big city before!"] },
            { segments: ["At the moment my family ", { answer: "is taking", accept: ["are taking"], size: 11 }, " (take) photos of the skyline."] },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Sound like a real phone call",
          intro: "A phone call is not a school text! Tap the phrase that sounds natural.",
          columns: 2,
          questions: [
            { q: "You want to start the call.", options: ["Hi Sam, great to hear from you!", "Dear Sam, I am writing to inform you."], correct: 0 },
            { q: "You want to build suspense about where you are.", options: ["Guess where I am right now!", "My current location is New York."], correct: 0 },
            { q: "You need a second to think.", options: ["Well… actually…", "Please wait while I load my answer."], correct: 0 },
            { q: "You want to end the call.", options: ["Anyway, I'd better go — talk to you soon!", "This conversation is now over."], correct: 0 },
            { q: "You're describing what you see right now.", options: ["You won't believe what I'm looking at!", "I hereby describe my view."], correct: 0 },
            { q: "You want to add a new point.", options: ["Oh, by the way…", "Additionally, I must state that…"], correct: 0 },
          ],
        },
        {
          type: "group-sort",
          kind: "Ordnen",
          title: "Beginning, middle or end?",
          intro: "Put each phrase into the right part of the call.",
          groups: [
            { label: "1 · Beginning", items: ["Hi Sam, great to hear from you!", "Guess where I am right now!"] },
            { label: "2 · Middle (your news)", items: ["You won't believe what we did yesterday.", "And tomorrow we're going to…"] },
            { label: "3 · End", items: ["Anyway, I have to go, my family is waiting.", "Talk to you soon!"] },
          ],
        },
        {
          type: "written",
          kind: "Notizen",
          title: "Your call notes",
          intro: "Write key words only — no full sentences! You'll speak freely from these.",
          starters: [
            "NOW (where + what I'm doing):",
            "ALREADY seen / done (2–3 places + 1 detail):",
            "TOMORROW (1–2 plans + why):",
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Your phone call to Sam",
          intro: "Write your call (about one minute). Use all three time zones and a natural opening and ending — then say it freely from your notes.",
          min: 45,
          max: 90,
          placeholder: "Hi Sam, great to hear from you! Guess where I am — right now I'm …",
          chips: ["Right now I'm …", "I've already …", "Yesterday we …", "Tomorrow I'm going to …", "I can't wait to …", "Anyway, I'd better go!"],
          checklist: ["A friendly opening?", "NOW, ALREADY and TOMORROW all used?", "One detail about yesterday?", "A natural goodbye?"],
        },
      ],
    },

    /* ================= STEP 3 — E-Kurs ================= */
    {
      step: 3,
      subtitle: "E-Kurs",
      accent: "slate",
      layout: "spread",
      cards: [
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you start",
          intro: "What makes a spoken description interesting to listen to — not just grammatically correct? Write down one idea.",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Words: English · simple English",
          intro: "No German this time — match each word with its meaning in simple English.",
          leftLabel: "Word",
          rightLabel: "Meaning",
          pairs: [
            { left: "a landmark", right: "a famous building or place people know" },
            { left: "iconic", right: "so famous that it is a symbol of a place" },
            { left: "crowded", right: "full of people" },
            { left: "breathtaking", right: "so beautiful that it surprises you" },
            { left: "a viewing platform", right: "a high place where you look at the city" },
            { left: "a filler", right: "a small word that gives you time to think" },
            { left: "to be worth it", right: "good enough for the time or money" },
            { left: "touristy", right: "made mainly for tourists, often too much so" },
            { left: "to sum up", right: "to say the most important points in short" },
            { left: "spontaneous", right: "not planned before" },
          ],
        },
        {
          type: "spot-fix",
          kind: "Reparieren",
          title: "Repair the phone call",
          intro: "Lena mixes up her tenses. Five verbs are in the wrong time zone — tap a word to fix it.",
          hint: "Ask yourself for each verb: NOW, YESTERDAY, ALREADY or TOMORROW?",
          checkLabel: "Check the call",
          paragraphs: [
            "Hi Sam! Right now I stand on the Brooklyn Bridge — it's amazing! Yesterday I see the Statue of Liberty, and this morning we walk through Central Park. We have be here since Monday. Tomorrow we visited Times Square.",
          ],
          fixes: [
            { wrong: "stand", correct: "am standing", accept: ["'m standing"] },
            { wrong: "see", correct: "saw" },
            { wrong: "walk", correct: "walked" },
            { wrong: "be", correct: "been" },
            { wrong: "visited", correct: "are going to visit", accept: ["'re going to visit", "will visit"] },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Precise & natural",
          intro: "Tap the more precise or more correct option.",
          columns: 2,
          questions: [
            { q: "The city was so full of people.", options: ["It was really crowded.", "It was really big."], correct: 0 },
            { q: "The view surprised me — so beautiful!", options: ["It was breathtaking.", "It was nice."], correct: 0 },
            { q: "Right now, as we speak, I ___ at the skyline.", options: ["am looking", "look"], correct: 0 },
            { q: "We ___ so much this week — for example, the ferry.", options: ["have done", "did"], correct: 0 },
            { q: "A small word that gives you time to think is a ___.", options: ["filler", "landmark"], correct: 0 },
            { q: "Tomorrow we're going to the museum, ___ I really want to see it.", options: ["because", "so that"], correct: 0 },
          ],
        },
        {
          type: "essay-editor",
          kind: "Umschreiben",
          title: "From robot to real person",
          intro:
            "This is correct English — but it sounds like a robot: “I am in New York. I am at Times Square. I have seen Central Park. I have eaten pizza. Tomorrow I am going to visit the Empire State Building.” Rewrite it (4–5 sentences) so it sounds like a real teenager on the phone — add fillers, linking words and one personal reaction.",
          min: 40,
          max: 90,
          placeholder: "Hey Sam! Well, you won't believe it — I'm actually right in the middle of Times Square, and …",
          chips: ["Well… / Actually…", "you know / I mean", "by the way", "It's honestly amazing!", "and / so / because", "anyway"],
          checklist: ["At least two fillers?", "A linking word (and / so / because)?", "One personal reaction?", "All tenses still correct?"],
        },
        {
          type: "written",
          kind: "Notizen & Überraschung",
          title: "Notes + surprise questions",
          intro: "Prepare with key words only (max three words per line). Then guess: what might Sam suddenly ask?",
          starters: [
            "NOW (max 3 words):",
            "ALREADY seen / done (max 3 words):",
            "TOMORROW + reason (max 3 words):",
            "Sam might ask … → my key-word answer:",
            "Sam might also ask … → my key-word answer:",
          ],
        },
      ],
    },

    /* ================= STEP 4 — ★ Creative challenge ================= */
    {
      step: 4,
      subtitle: "",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "call-game",
          title: "Sam is Calling!",
          intro:
            "RING RING… it's Sam! Pick up and have a real phone call. For everything Sam says, choose the reply that uses the right time zone and sounds natural. Keep the call flowing and you'll talk for a whole minute like a true New Yorker!",
          contact: { name: "Sam", sub: "calling from the USA", avatar: "😎" },
          turns: [
            {
              sam: "Heyyy! Great to hear from you! Okay — I have to know: where are you right now?",
              prompt: "NOW → present progressive.",
              options: [
                "Right now I'm standing on the Brooklyn Bridge!",
                "Yesterday I stood on the Brooklyn Bridge.",
                "Tomorrow I'm going to stand on the Brooklyn Bridge.",
              ],
              correct: 0,
              note: "NOW → present progressive: I'm standing …",
            },
            {
              sam: "No way, that's so cool! So, what have you already seen over there?",
              prompt: "ALREADY → present perfect.",
              options: [
                "I've already seen the Statue of Liberty and Times Square.",
                "I see the Statue of Liberty and Times Square.",
                "I'm going to see the Statue of Liberty and Times Square.",
              ],
              correct: 0,
              note: "ALREADY → present perfect: I've already seen …",
            },
            {
              sam: "Amazing. Wait — have you tried real New York pizza yet?",
              prompt: "One finished moment → simple past.",
              options: [
                "Yeah! Yesterday we ate at Joe's Pizza — it was so good.",
                "Yeah, I eat at Joe's Pizza tomorrow.",
                "Yeah, I am eating at Joe's Pizza every day since Monday.",
              ],
              correct: 0,
              note: "A finished moment → simple past: yesterday we ate …",
            },
            {
              sam: "Haha, love it! So, any plans for tomorrow?",
              prompt: "TOMORROW → going to.",
              options: [
                "Tomorrow we're going to visit Central Park.",
                "Tomorrow we visited Central Park.",
                "Right now we visit Central Park.",
              ],
              correct: 0,
              note: "TOMORROW → going to: we're going to visit …",
            },
            {
              sam: "Sounds like the best trip ever! Anyway, I should let you go.",
              prompt: "End the call naturally.",
              options: [
                "Yeah, I'd better go too — talk to you soon!",
                "This is the end of the phone call. Goodbye.",
                "I will now terminate this telephone conversation.",
              ],
              correct: 0,
              note: "A natural close: I'd better go — talk to you soon!",
            },
          ],
          help: "★ NOW → I'm …ing · ALREADY → I've seen … · YESTERDAY → I saw … · TOMORROW → I'm going to …",
        },
      ],
    },
  ],
};
