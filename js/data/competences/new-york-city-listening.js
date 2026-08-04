/**
 * In New York City (Unit 1) — Listening: "On the Subway".
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs) and the shared transcripts. TWO audio files are reused across
 * all levels — only the tasks differ:
 *
 *   Audio 1 — six station announcements  (assets/audio/unit1/announcements.mp3)
 *   Audio 2 — Emma asks Marcus for help  (assets/audio/unit1/subway-dialogue.mp3)
 *
 * Steps:
 *   Step 1 (LE)     — every audio task carries the "Help me" transcript
 *   Step 2 (G-Kurs) — no transcript; topic-matching + details
 *   Step 3 (E-Kurs) — note-taking, typed dialogue (no word box)
 *   Step 4 (★)      — "Mind the Gap": ride to Times Square by
 *                     understanding the announcements
 *
 * House rule from the draft: the dialogue price is spoken as "two
 * dollars ninety" but written $2.90 — both are accepted.
 */

const AUDIO = "assets/audio/unit1";
const A1 = `${AUDIO}/announcements.mp3`;
const A2 = `${AUDIO}/subway-dialogue.mp3`;
/** Picture tiles for the "Right or wrong?" quiz. */
const IMG = "assets/listening/unit1";

/** Audio-1 transcript for the Step-1 "Help me" button and the ★ game. */
const ANNOUNCEMENTS = [
  "Number one. This is a Manhattan-bound N train. The next stop is 34th Street–Herald Square. Stand clear of the closing doors, please.",
  "Number two. Ladies and gentlemen, we are delayed because of a red signal in front of us. We will be moving shortly. We are sorry for the delay.",
  "Number three. Attention, passengers. This weekend there is no L train service between Manhattan and Brooklyn. Please use the M14 bus or the J train instead.",
  "Number four. This is 14th Street–Union Square. Transfer here to the four, five, six, L and R trains.",
  "Number five. Please step away from the platform edge. The next uptown train arrives in four minutes.",
  "Number six. This is the last stop on this train. Everybody off, please. Thank you for riding with New York City Transit.",
];

/** Audio-2 transcript (Emma & Marcus) for the Step-1 "Help me" button. */
const DIALOGUE = [
  { speaker: "Emma", text: "Excuse me, can you help me? I want to go to Times Square, but I don't understand this map." },
  { speaker: "Marcus", text: "Sure, no problem. We are at Union Square right now — here." },
  { speaker: "Emma", text: "Okay. And where is Times Square?" },
  { speaker: "Marcus", text: "Up here. You need the N or the Q train, and you have to go uptown." },
  { speaker: "Emma", text: "Uptown? What does that mean?" },
  { speaker: "Marcus", text: "Uptown means north. Downtown means south. If you take the wrong direction, you end up in Brooklyn." },
  { speaker: "Emma", text: "Good to know. And how do I pay? I don't have a MetroCard." },
  { speaker: "Marcus", text: "You don't need one. Just tap your bank card or your phone at the gate. One ride costs two dollars ninety." },
  { speaker: "Emma", text: "That's easy. And how many stops is it?" },
  { speaker: "Marcus", text: "Three stops. Union Square, 23rd Street, 34th Street — and then Times Square." },
  { speaker: "Emma", text: "There is a sign here. It says “express”. Should I take the express train?" },
  { speaker: "Marcus", text: "Careful! The express train doesn't stop at every station. The local train stops everywhere." },
  { speaker: "Emma", text: "So the express is faster, but it skips the small stations." },
  { speaker: "Marcus", text: "Exactly. And always listen to the announcements. At the weekend there are often service changes." },
  { speaker: "Emma", text: "Is the subway safe in the evening?" },
  { speaker: "Marcus", text: "It's quite safe. But wait in the middle of the platform, and keep your phone in your pocket." },
  { speaker: "Emma", text: "Okay. And how do I find the way out?" },
  { speaker: "Marcus", text: "Just follow the green signs. They say “Exit”." },
  { speaker: "Emma", text: "Thank you so much! You saved my day." },
  { speaker: "Marcus", text: "No problem. Have fun at Times Square!" },
];

export default {
  title: "On the Subway",

  /* ============ Shared reference card ============ */
  guide: {
    label: "How to Listen",
    numbered: false,
    types: [
      {
        name: "1 · Read first",
        tag: "before you listen",
        accent: "olive",
        formula: "read the task + the gaps first",
        de: "Lies zuerst die Aufgabe und die Lücken — dann weißt du, worauf du hörst.",
        example: "A number? A station? A price?",
      },
      {
        name: "2 · Catch key words",
        tag: "not every word",
        accent: "teal",
        formula: "numbers · lines (N, Q, L) · stations · prices",
        de: "Achte auf Schlüsselwörter — du musst nicht jedes Wort verstehen.",
        example: "“…no L train this weekend…”",
      },
      {
        name: "3 · Keep going",
        tag: "don't freeze",
        accent: "ochre",
        formula: "missed one? use logic and listen on",
        de: "Ein Wort verpasst? Rate mit Logik weiter — sonst verpasst du das nächste.",
        example: "First listen to understand, then to write.",
      },
    ],
    tensesLabel: "Three golden listening rules",
    tenses: [
      { tense: "Rule 1", accent: "olive", use: "Listen twice — first for the idea, then for the details.", signals: "2× hören" },
      { tense: "Rule 2", accent: "olive", use: "Predict the gap: is it a number, a place or a verb?", signals: "vorhersagen" },
      { tense: "Rule 3", accent: "ochre", use: "Speakers stress the important words — follow the stress.", example: "no L train", signals: "betonte Wörter" },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "LE",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "written",
          kind: "Aufwärmen",
          title: "Before you listen",
          intro: "Think about how you travel. Answer the questions in one or two sentences.",
          icons: [
            { icon: "🚆", label: "Train", bg: "#9fd0f5" },
            { icon: "🚌", label: "Bus", bg: "#a7e8c4" },
            { icon: "🚇", label: "Subway", bg: "#c9b6f5" },
            { icon: "🚲", label: "Bike", bg: "#f5d97a" },
            { icon: "🚗", label: "Car", bg: "#f2b6c6" },
            { icon: "🚶", label: "Walk", bg: "#a9d6f5" },
          ],
          questions: [
            { q: "How do you usually go to school?", starter: "I usually …" },
            { q: "Have you ever travelled by subway?", starter: "Yes, I have … / No, I haven't …" },
            { q: "Where did you go?", starter: "I went to …" },
          ],
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          intro: "Match each word with its meaning.",
          pairs: [
            { left: "the subway", right: "die U-Bahn" },
            { left: "the station", right: "die Station" },
            { left: "the platform", right: "der Bahnsteig" },
            { left: "the doors", right: "die Türen" },
            { left: "uptown", right: "Richtung Norden" },
            { left: "downtown", right: "Richtung Süden" },
            { left: "the last stop", right: "die Endstation" },
            { left: "the announcement", right: "die Durchsage" },
            { left: "to be late", right: "sich verspäten" },
            { left: "Exit", right: "Ausgang" },
          ],
        },
        {
          type: "match-up",
          kind: "Hören · Audio 1",
          title: "What does the announcement mean?",
          intro: "Listen to the six announcements. Match each meaning to its number. Stuck? Press “Help me”.",
          audio: { src: A1, label: "🎧 Audio 1 — six announcements (listen 2×)", transcript: ANNOUNCEMENTS },
          options: ["1", "2", "3", "4", "5", "6"],
          items: [
            { left: "The doors are closing now.", answer: "1" },
            { left: "The train is late.", answer: "2" },
            { left: "This weekend there is no L train.", answer: "3" },
            { left: "Here you can change to other trains.", answer: "4" },
            { left: "The next train comes in four minutes.", answer: "5" },
            { left: "This is the last stop. Everybody must get out.", answer: "6" },
          ],
        },
        {
          type: "inline-choice",
          kind: "Hören & schreiben · Audio 1",
          title: "Listen and write",
          intro: "Listen to Audio 1 again and choose the missing word or number for each gap.",
          audio: { src: A1, label: "🎧 Audio 1 — announcements", transcript: ANNOUNCEMENTS },
          bank: ["34th", "L", "bus", "four", "last"],
          layout: "dialogue",
          lines: [
            { speaker: "1", segments: ["The next stop is ", { gap: 0 }, " Street–Herald Square."] },
            { speaker: "3", segments: ["This weekend there is no ", { gap: 1 }, " train to Brooklyn."] },
            { speaker: "3", segments: ["Please take the M14 ", { gap: 2 }, "."] },
            { speaker: "5", segments: ["The next uptown train comes in ", { gap: 3 }, " minutes."] },
            { speaker: "6", segments: ["This is the ", { gap: 4 }, " stop on this train."] },
          ],
          gaps: [
            { options: ["34th", "L", "bus", "four", "last"], answer: "34th" },
            { options: ["34th", "L", "bus", "four", "last"], answer: "L" },
            { options: ["34th", "L", "bus", "four", "last"], answer: "bus" },
            { options: ["34th", "L", "bus", "four", "last"], answer: "four" },
            { options: ["34th", "L", "bus", "four", "last"], answer: "last" },
          ],
        },
        {
          type: "inline-choice",
          kind: "Dialog · Audio 2",
          title: "Fill in the dialogue",
          split: "dialogue",
          intro: "Emma is a student from Germany, lost in a subway station. Listen and choose the 10 missing words. “Help me” shows the whole dialogue.",
          audio: { src: A2, label: "🎧 Audio 2 — Emma asks for help (listen 2–3×)", transcript: DIALOGUE },
          bank: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"],
          layout: "dialogue",
          lines: [
            { speaker: "Emma", segments: ["Excuse me, can you help me? I want to go to Times Square, but I don't understand this ", { gap: 0 }, "."] },
            { speaker: "Marcus", segments: ["Sure, no problem. We are at Union Square right now — here."] },
            { speaker: "Marcus", segments: ["You need the N or the Q ", { gap: 1 }, ", and you have to go ", { gap: 2 }, "."] },
            { speaker: "Marcus", segments: ["Uptown means ", { gap: 3 }, ". Downtown means south."] },
            { speaker: "Marcus", segments: ["Just tap your bank card or your ", { gap: 4 }, " at the gate. One ride costs $2.90."] },
            { speaker: "Marcus", segments: [{ gap: 5 }, " stops. Union Square, 23rd Street, 34th Street — and then Times Square."] },
            { speaker: "Marcus", segments: ["The ", { gap: 6 }, " train stops everywhere."] },
            { speaker: "Marcus", segments: ["And always listen to the ", { gap: 7 }, "."] },
            { speaker: "Marcus", segments: ["But wait in the middle of the ", { gap: 8 }, ", and keep your phone in your pocket."] },
            { speaker: "Marcus", segments: ["Just follow the ", { gap: 9 }, " signs. They say “Exit”."] },
          ],
          gaps: [
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "map" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "train" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "uptown" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "north" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "phone" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "three" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "local" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "announcements" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "platform" },
            { options: ["announcements", "green", "local", "map", "north", "phone", "platform", "three", "train", "uptown"], answer: "green" },
          ],
        },
        {
          type: "right-wrong",
          kind: "Quiz",
          title: "Right or wrong?",
          intro: "Read your completed dialogue. Right or wrong?",
          statements: [
            { text: "Emma wants to go to Brooklyn.", answer: false, img: `${IMG}/q1-brooklyn.jpg`, ph: "🌉" },
            { text: "Uptown means north.", answer: true, img: `${IMG}/q2-compass.jpg`, ph: "🧭" },
            { text: "Emma must buy a MetroCard.", answer: false, img: `${IMG}/q3-metrocard.jpg`, ph: "🎫" },
            { text: "One ride costs $2.90.", answer: true, img: `${IMG}/q4-fare.jpg`, ph: "💲" },
            { text: "The local train stops at every station.", answer: true, img: `${IMG}/q5-subway.jpg`, ph: "🚇" },
            { text: "You have to go downtown to reach Times Square.", answer: false, img: `${IMG}/q6-timessquare.jpg`, ph: "🚏" },
          ],
        },
        {
          type: "written",
          kind: "Kreativ",
          title: "Your announcement",
          intro: "You are the voice in the subway station! Complete your own announcement — then read it aloud, loud and clear.",
          starters: [
            "Good morning! This is … station.",
            "The next train to … arrives in … minutes.",
            "The next stop is …",
            "Thank you for travelling with …!",
          ],
        },
        {
          type: "game",
          game: "monster-hangman",
          kind: "Spiel",
          title: "Monster's Lunch",
          intro:
            "Guess the subway word letter by letter and save the hero from the monster — every wrong letter feeds it!",
          words: [
            { word: "SUBWAY", hint: "die U-Bahn (AE)" },
            { word: "TRAIN", hint: "der Zug" },
            { word: "STATION", hint: "die (U-Bahn-)Station" },
            { word: "PLATFORM", hint: "der Bahnsteig" },
            { word: "TICKET", hint: "die Fahrkarte" },
            { word: "CARD", hint: "die MetroCard" },
            { word: "TAP", hint: "die Karte auflegen" },
            { word: "READER", hint: "das Lesegerät" },
            { word: "PAY", hint: "bezahlen" },
            { word: "STOP", hint: "die Haltestelle" },
            { word: "LINE", hint: "die (U-Bahn-)Linie" },
            { word: "MAP", hint: "der Liniennetzplan" },
            { word: "EXIT", hint: "der Ausgang" },
            { word: "DELAY", hint: "die Verspätung" },
            { word: "MINUTE", hint: "die Minute" },
            { word: "ARRIVE", hint: "ankommen" },
            { word: "DIRECTION", hint: "die Richtung" },
            { word: "DOWNTOWN", hint: "Richtung Zentrum/Süden" },
            { word: "UPTOWN", hint: "Richtung Norden" },
            { word: "TRANSFER", hint: "das Umsteigen" },
          ],
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
          title: "Before you listen",
          intro: "A tourist asks you how to use the bus or the U-Bahn in your town. What information does this person need? Write one sentence.",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          intro: "Match each word with its meaning.",
          pairs: [
            { left: "the subway", right: "die U-Bahn" },
            { left: "the platform", right: "der Bahnsteig" },
            { left: "the announcement", right: "die Durchsage" },
            { left: "the delay", right: "die Verspätung" },
            { left: "a service change", right: "eine Fahrplanänderung" },
            { left: "to transfer", right: "umsteigen" },
            { left: "the express train", right: "der Schnellzug" },
            { left: "the local train", right: "der Zug, der überall hält" },
            { left: "to tap your card", right: "die Karte auflegen" },
            { left: "uptown", right: "Richtung Norden" },
          ],
        },
        {
          type: "match-up",
          kind: "Hören · Audio 1",
          title: "Six announcements",
          intro: "Listen to Audio 1. Match each topic to its announcement number.",
          audio: { src: A1, label: "🎧 Audio 1 — six announcements (listen 2×)" },
          options: ["1", "2", "3", "4", "5", "6"],
          items: [
            { left: "a delay", answer: "2" },
            { left: "the doors are closing", answer: "1" },
            { left: "you can change to other lines here", answer: "4" },
            { left: "a service change at the weekend", answer: "3" },
            { left: "waiting time for the next train", answer: "5" },
            { left: "the end of the line", answer: "6" },
          ],
        },
        {
          type: "written",
          kind: "Details · Audio 1",
          title: "Details",
          intro: "Listen to Audio 1 again and answer in short sentences.",
          audio: { src: A1, label: "🎧 Audio 1 — announcements" },
          starters: [
            "Which station is the next stop in announcement 1? →",
            "Why is the train not moving in announcement 2? →",
            "Which line has no service at the weekend, and what can you use instead? →",
            "How long do you have to wait for the next uptown train? →",
          ],
        },
        {
          type: "inline-choice",
          kind: "Dialog · Audio 2",
          title: "Fill in the dialogue",
          split: "dialogue",
          intro: "Listen and choose the 12 missing words. Careful — the word box has three words too many!",
          audio: { src: A2, label: "🎧 Audio 2 — Emma asks for help (listen 2–3×)" },
          bank: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"],
          layout: "dialogue",
          lines: [
            { speaker: "Emma", segments: ["I want to go to Times Square, but I don't understand this ", { gap: 0 }, "."] },
            { speaker: "Marcus", segments: ["You need the N or the Q train, and you have to go ", { gap: 1 }, "."] },
            { speaker: "Marcus", segments: ["Uptown means ", { gap: 2 }, ". Downtown means ", { gap: 3 }, ". If you take the wrong direction, you end up in ", { gap: 4 }, "."] },
            { speaker: "Marcus", segments: ["Just tap your bank card or your phone at the ", { gap: 5 }, ". One ride costs ", { gap: 6 }, "."] },
            { speaker: "Marcus", segments: [{ gap: 7 }, " stops. Union Square, 23rd Street, 34th Street — and then Times Square."] },
            { speaker: "Marcus", segments: ["The express train doesn't stop at every ", { gap: 8 }, ". The local train stops everywhere."] },
            { speaker: "Marcus", segments: ["At the weekend there are often ", { gap: 9 }, "."] },
            { speaker: "Marcus", segments: ["But wait in the ", { gap: 10 }, " of the platform, and keep your phone in your pocket."] },
            { speaker: "Marcus", segments: ["Just follow the green ", { gap: 11 }, ". They say “Exit”."] },
          ],
          gaps: [
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "map" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "uptown" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "north" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "south" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "Brooklyn" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "gate" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "$2.90" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "three" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "station" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "service changes" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "middle" },
            { options: ["$2.90", "Brooklyn", "bus", "downtown", "gate", "map", "middle", "north", "red", "service changes", "signs", "south", "station", "three", "uptown"], answer: "signs" },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer in full sentences",
          intro: "Use your completed dialogue. Answer in full sentences.",
          starters: [
            "What is the difference between an express train and a local train? → An express train …, but a local train …",
            "How can Emma pay for her ride? → She can …",
            "Which two safety tips does Marcus give her? → First, she should … Second, …",
          ],
        },
        {
          type: "dialogue-write",
          kind: "Finale",
          title: "Answer the tourist",
          intro: "A tourist from New York visits YOUR town and wants to use the bus, tram or U-Bahn. The tourist's lines are already here — write YOUR answers to help them.",
          lines: [
            { speaker: "Tourist", text: "Excuse me, can you help me? I want to go to the city centre. Which line do I take?" },
            { speaker: "You", hint: "Name a bus, tram or U-Bahn line and the direction." },
            { speaker: "Tourist", text: "Great. And how many stops is it from here?" },
            { speaker: "You", hint: "Say how many stops." },
            { speaker: "Tourist", text: "Where can I buy a ticket?" },
            { speaker: "You", hint: "Explain where to buy one (machine, app, driver…)." },
            { speaker: "Tourist", text: "And how much does a single ticket cost?" },
            { speaker: "You", hint: "Give the price." },
            { speaker: "Tourist", text: "Do I have to change somewhere?" },
            { speaker: "You", hint: "Say yes or no — and where to change if needed." },
            { speaker: "Tourist", text: "Thank you so much! You really helped me." },
            { speaker: "You", hint: "Say you're welcome and wish them a nice day." },
          ],
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
          title: "Before you listen",
          intro: "Announcements in stations are often hard to understand — even for native speakers. Why? Write down one reason.",
          answer: true,
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          intro: "Match each word with its meaning.",
          pairs: [
            { left: "platform", right: "where you wait for the train" },
            { left: "announcement", right: "spoken information for all passengers" },
            { left: "delay", right: "when a train comes later than planned" },
            { left: "express train", right: "a fast train that skips smaller stations" },
            { left: "local train", right: "a train that stops at every station" },
            { left: "uptown", right: "toward the north of Manhattan" },
            { left: "to tap your card", right: "hold your card on the reader to pay" },
            { left: "to transfer", right: "change from one line to another" },
            { left: "suspicious", right: "strange, and maybe dangerous" },
          ],
        },
        {
          type: "written",
          kind: "Notizen · Audio 1",
          title: "Listen and note",
          intro: "For each announcement, note the topic and the key word that helped you understand it.",
          audio: { src: A1, label: "🎧 Audio 1 — six announcements (listen 2×)" },
          starters: [
            "1 — topic / key word:",
            "2 — topic / key word:",
            "3 — topic / key word:",
            "4 — topic / key word:",
            "5 — topic / key word:",
            "6 — topic / key word:",
          ],
        },
        {
          type: "written",
          kind: "Reagieren · Audio 1",
          title: "What do you do?",
          intro: "Use the information from Audio 1. What do you do in these situations? Answer in one or two sentences and explain why.",
          starters: [
            "It is Saturday. You want to take the L train from Manhattan to Brooklyn. →",
            "The train suddenly stops between two stations and an announcement comes on. Should you worry? →",
            "You are at Union Square and you need the number 6 train. →",
          ],
        },
        {
          type: "gap-fill",
          kind: "Dialog · Audio 2",
          title: "Complete the dialogue",
          columns: 2,
          subway: ["34 St – Penn Station", "28 St", "23 St", "14 St – Union Sq", "8 St – NYU", "3 Av", "Grand Central – 42 St"],
          intro: "Listen and type the missing words and phrases — there is no word box, and some gaps need more than one word.",
          audio: { src: A2, label: "🎧 Audio 2 — Emma asks for help (listen 2–3×)" },
          items: [
            { speaker: "Emma", segments: ["I want to go to Times Square, but I don't understand this ", { answer: "map", size: 8 }, "."] },
            { speaker: "Marcus", segments: ["You need the N or the Q train, and you have to go ", { answer: "uptown", size: 9 }, "."] },
            { speaker: "Marcus", segments: ["Uptown means ", { answer: "north", size: 8 }, ". Downtown means ", { answer: "south", size: 8 }, ". If you take the wrong direction, you end up in ", { answer: "Brooklyn", size: 10 }, "."] },
            { speaker: "Emma", segments: ["How do I pay? I don't have a ", { answer: "MetroCard", accept: ["Metro Card"], size: 11 }, "."] },
            { speaker: "Marcus", segments: ["Just ", { answer: "tap", size: 6 }, " your bank card or your phone at the gate. One ride costs ", { answer: "$2.90", accept: ["2.90", "two dollars ninety", "2 dollars 90"], size: 10 }, "."] },
            { speaker: "Marcus", segments: [{ answer: "Three", accept: ["3"], size: 7 }, " stops. Union Square, 23rd Street, 34th Street — and then Times Square."] },
            { speaker: "Marcus", segments: ["Careful! The express train ", { answer: "doesn't stop", accept: ["does not stop", "doesn’t stop"], size: 14 }, " at every station."] },
            { speaker: "Emma", segments: ["So the express is faster, but it ", { answer: "skips", size: 8 }, " the small stations."] },
            { speaker: "Marcus", segments: ["At the weekend there are often ", { answer: "service changes", accept: ["service change"], size: 16 }, "."] },
            { speaker: "Marcus", segments: ["But wait in the ", { answer: "middle", size: 8 }, " of the platform, and keep your phone in your ", { answer: "pocket", size: 8 }, "."] },
            { speaker: "Marcus", segments: ["Just follow the ", { answer: "green", size: 7 }, " signs. They say “Exit”."] },
          ],
        },
        {
          type: "written",
          kind: "Erklären",
          title: "Explain it in your own words",
          intro: "Answer using your completed dialogue. Do not copy whole sentences from the text.",
          starters: [
            "A friend says: “Uptown, downtown — I don't get it.” Explain the system in two sentences. →",
            "When is it better to take the local train, and when the express train? →",
            "“Always listen to the announcements.” Use Audio 1 to explain why — give a concrete example. →",
          ],
        },
        {
          type: "dialogue-write",
          kind: "Finale",
          title: "A problem on the platform",
          intro: "It is Saturday and you have just heard announcement 3: no L train to Brooklyn this weekend. A tourist wants exactly that train. Write the whole dialogue — every line is empty. Cover all five beats.",
          lines: [
            { speaker: "Tourist", hint: "The tourist's question — they want the L train to Brooklyn.", rows: 2 },
            { speaker: "You", hint: "The bad news, in your own words — no L train this weekend.", rows: 2 },
            { speaker: "Tourist", hint: "The tourist reacts — worried or surprised.", rows: 2 },
            { speaker: "You", hint: "A solution — the M14 bus or the J train instead.", rows: 2 },
            { speaker: "You", hint: "One piece of practical advice for the ride.", rows: 2 },
            { speaker: "Tourist", hint: "The tourist thanks you.", rows: 2 },
            { speaker: "You", hint: "A friendly ending.", rows: 2 },
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
          type: "subway-game",
          title: "Mind the Gap — ride to Times Square",
          intro:
            "Listen to all six real station announcements once. Then ride the line: at every station a situation comes up, and the right choice depends on what you heard. Choose well and your train rolls on to Times Square. Ready? Mind the gap!",
          audio: {
            src: A1,
            label: "🎧 The six announcements — listen, then ride!",
          },
          stations: ["Union Square", "14 St", "23 St", "28 St", "34 St", "42 St", "Times Square"],
          stops: [
            {
              prompt: "The doors of your train start to close and the announcement warns you. What is the safe thing to do?",
              options: ["Stand clear of the closing doors", "Hold the doors open with your arm", "Run through the closing doors"],
              correct: 0,
              note: "Announcement 1: “Stand clear of the closing doors, please.”",
            },
            {
              prompt: "The train stops between two stations. The announcement explains why. What should you do?",
              options: ["Stay calm and wait — it will move shortly", "Open the doors and walk on the tracks", "Get out and push the train"],
              correct: 0,
              note: "Announcement 2: a red signal — the train will move shortly.",
            },
            {
              prompt: "It's the weekend and you want to get from Manhattan to Brooklyn. How do you go?",
              options: ["Take the M14 bus or the J train", "Wait on the platform for the L train", "Take the express to Times Square"],
              correct: 0,
              note: "Announcement 3: no L train this weekend — use the M14 bus or the J train.",
            },
            {
              prompt: "You are at Union Square and you need the number 6 train. What do you do?",
              options: ["Transfer here to the 6 train", "Stay on this train and hope", "Leave the station and walk"],
              correct: 0,
              note: "Announcement 4: at 14th Street–Union Square you can transfer to the 4, 5, 6, L and R trains.",
            },
            {
              prompt: "You are waiting on the platform. The next uptown train is four minutes away. What do you do?",
              options: ["Step back from the edge and wait", "Stand right on the platform edge", "Climb down to look for the train"],
              correct: 0,
              note: "Announcement 5: step away from the platform edge — the train arrives in four minutes.",
            },
            {
              prompt: "The last announcement comes on as your train arrives at the final station. What do you do?",
              options: ["Get off the train", "Stay in your seat and ride back", "Wait for the doors to open again later"],
              correct: 0,
              note: "Announcement 6: this is the last stop — everybody off.",
            },
          ],
          help: "★ Listen like a New Yorker: numbers, line names and the ONE key word carry the whole message.",
        },
      ],
    },
  ],
};
