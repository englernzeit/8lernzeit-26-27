/**
 * In New York City (Unit 1) — Grammar: "Tense Revision"
 * (Simple Present · Present Progressive · Simple Past).
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs) supplied for this lesson, rebuilt as one interactive page in
 * the night-map design and mapped onto our four Steps:
 *
 *   Step 1 (LE)      — Ben's week in New York
 *   Step 2 (G-Kurs)  — Emma's holiday in New York
 *   Step 3 (E-Kurs)  — the "Subway Stories" blog
 *   Step 4 (Check-out) — an "I can…" self-assessment
 *
 * A shared reference card (the 3 tenses) sits at the top for every
 * level. The reading tasks use the colour-pen highlighter: learners mark
 * each verb with the colour of its tense and press Check — the paper
 * "highlight all verbs" task becomes a self-checking discovery tool.
 * The three highlight colours (green / blue / amber) are reused
 * everywhere so the tense–colour link is learned by repetition.
 */

/** The tense-colour pens, shared by every reading task on the page. */
const TENSE_PENS = [
  { key: "present", label: "Simple Present" },
  { key: "progressive", label: "Present Progressive" },
  { key: "past", label: "Simple Past" },
];
const PEN_HINT =
  "Pick a colour, then tap each verb: green = Simple Present, blue = Present Progressive, amber = Simple Past. Press Check when you are done.";

export default {
  title: "Tense Revision",

  /* ============ Shared reference card ============ */
  guide: {
    label: "The 3 Tenses",
    subtitle: "Your reference card — keep it open while you work",
    numbered: false,
    types: [
      {
        name: "Simple Present",
        tag: "every day · always · often · never",
        accent: "olive",
        formula: "verb ( + -s for he / she / it )",
        de: "Was immer wieder passiert – Gewohnheit oder Fakt.",
        example: "Ben walks to school every day.",
      },
      {
        name: "Present Progressive",
        tag: "now · Look! · Listen! · at the moment",
        accent: "slate",
        formula: "am / is / are + verb + -ing",
        de: "Was genau JETZT gerade passiert.",
        example: "Look! Ben is eating a hot dog now.",
      },
      {
        name: "Simple Past",
        tag: "yesterday · last week · ago · in 2019",
        accent: "ochre",
        formula: "verb + -ed  ·  or 2nd form (see → saw)",
        de: "Was vorbei ist – abgeschlossen.",
        example: "Yesterday Ben visited the Empire State Building.",
      },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "Mit Farben und Hilfe auf Deutsch",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "text",
          kind: "Lesen & markieren",
          title: "Ben's week in New York",
          intro:
            "Read Ben's week. Then mark every verb with the colour of its tense. Tap the underlined words for German help.",
          highlight: {
            hint: PEN_HINT,
            colors: TENSE_PENS,
            answers: [
              { word: "is", tense: "present" },
              { word: "lives", tense: "present" },
              { word: "walks", tense: "present" },
              { word: "is", tense: "present" },
              { word: "likes", tense: "present" },
              { word: "is", tense: "progressive" },
              { word: "eating", tense: "progressive" },
              { word: "are", tense: "progressive" },
              { word: "waiting", tense: "progressive" },
              { word: "are", tense: "progressive" },
              { word: "laughing", tense: "progressive" },
              { word: "visited", tense: "past" },
              { word: "saw", tense: "past" },
              { word: "made", tense: "past" },
              { word: "was", tense: "past" },
              { word: "plays", tense: "present" },
              { word: "is", tense: "progressive" },
              { word: "running", tense: "progressive" },
              { word: "loves", tense: "present" },
            ],
          },
          paragraphs: [
            [
              "This is Ben. Ben lives in New York. He walks to school every day. His school is big. Ben likes hot dogs.",
            ],
            [
              // Note: never gloss a verb that is a highlight answer — the
              // glossary popup's text would break the tense-check matcher.
              "Look! Ben is eating a hot dog now. His friends are waiting for him. They are laughing. Yesterday Ben visited the Empire State Building. He saw ",
              { w: "the whole city", de: "die ganze Stadt" },
              ".",
            ],
            [
              "He made many photos. The ",
              { w: "weather", de: "das Wetter" },
              " was great. Every Sunday Ben plays basketball in Central Park. Now he is running to the bus. Ben loves New York.",
            ],
          ],
          help: "Verb = Tu-Wort (walk, eat, be …). Manche haben zwei Teile: is + eating.",
        },
        {
          type: "group-sort",
          kind: "Sortieren",
          title: "When does it happen?",
          intro: "Tap a verb, then tap the right box. Sort all nine, then press Check.",
          groups: [
            { label: "🟢 every day (jeden Tag)", items: ["lives", "walks", "likes", "plays"] },
            { label: "🔵 NOW! (jetzt)", items: ["is eating", "are waiting", "is running"] },
            { label: "🟠 yesterday (gestern)", items: ["visited", "saw"] },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Circle the correct verb",
          intro: "Read the signal word (underlined idea). Tap the correct verb form.",
          questions: [
            { q: "Ben ___ to school every day.", options: ["walks", "is walking"], correct: 0 },
            { q: "Look! He ___ a hot dog now.", options: ["eats", "is eating"], correct: 1 },
            { q: "Yesterday Ben ___ a museum.", options: ["visits", "visited"], correct: 1 },
            { q: "His friends ___ for him right now.", options: ["wait", "are waiting"], correct: 1 },
            { q: "Ben often ___ basketball in Central Park.", options: ["plays", "played"], correct: 0 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Fill in the verb",
          intro: "Write the verb in the correct form. The signal words help you.",
          items: [
            { hint: "every day → Simple Present", segments: ["Ben ", { answer: "lives", size: 9 }, " (live) in New York."] },
            { hint: "now → am / is / are + -ing", segments: ["Look! It ", { answer: "is raining", accept: ["'s raining"], size: 12 }, " (rain) in Manhattan."] },
            { hint: "yesterday → Simple Past", segments: ["Yesterday we ", { answer: "walked", size: 10 }, " (walk) in Central Park."] },
            { hint: "always → Simple Present (he/she/it + -s)", segments: ["She always ", { answer: "likes", size: 9 }, " (like) hot dogs."] },
            { hint: "Listen! → am / is / are + -ing", segments: ["Listen! They ", { answer: "are singing", size: 12 }, " (sing) in the street."] },
          ],
        },
        {
          type: "sentence-build",
          kind: "Sätze bauen",
          title: "Make the sentence",
          intro: "Tap the words in the right order. Look at the signal word first!",
          sentences: [
            { tokens: ["Ben", "plays", "football", "every day."] },
            { tokens: ["Look!", "Ben", "is running", "to the bus."] },
            { tokens: ["Yesterday", "Ben", "watched", "a film."] },
          ],
        },
        {
          type: "spot-fix",
          kind: "Fehlersuche",
          title: "Find the mistake",
          intro: "One verb in each line is wrong. Tap the word, fix it, then press Check.",
          hint: "3 verbs are hidden in the wrong tense.",
          paragraphs: [
            "Ben walk to school every day.",
            "Look! She eat an ice cream now.",
            "Yesterday I play basketball.",
          ],
          fixes: [
            { wrong: "walk", correct: "walks" },
            { wrong: "eat", correct: "is eating" },
            { wrong: "play", correct: "played" },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Be creative: all about you",
          intro: "Write one sentence for each idea — about YOU!",
          starters: ["Every day I …", "Right now I am … (am + -ing!)", "Yesterday I …"],
          help: "Hilfe: every day → Simple Present · right now → am + -ing · yesterday → Simple Past.",
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
          type: "text",
          kind: "Lesen & markieren",
          title: "Emma's holiday in New York",
          intro:
            "Read the text. Then mark every verb with its tense colour — careful, some verbs have two parts (is + sitting). Press Check.",
          highlight: {
            hint: PEN_HINT,
            colors: TENSE_PENS,
            answers: [
              { word: "is", tense: "present" },
              { word: "lives", tense: "present" },
              { word: "works", tense: "present" },
              { word: "knows", tense: "present" },
              { word: "plan", tense: "present" },
              { word: "is", tense: "progressive" },
              { word: "sitting", tense: "progressive" },
              { word: "is", tense: "progressive" },
              { word: "shining", tense: "progressive" },
              { word: "are", tense: "progressive" },
              { word: "jogging", tense: "progressive" },
              { word: "is", tense: "progressive" },
              { word: "selling", tense: "progressive" },
              { word: "visited", tense: "past" },
              { word: "took", tense: "past" },
              { word: "made", tense: "past" },
              { word: "ate", tense: "past" },
              { word: "was", tense: "past" },
              { word: "sleeps", tense: "present" },
            ],
          },
          paragraphs: [
            [
              "Emma is on holiday in New York. Her aunt lives in Brooklyn. The aunt works as a taxi driver. She knows every street in the city. Every morning they plan something new.",
            ],
            [
              // 'jogging' is a highlight answer, so it must stay plain text
              // (a glossary popup would break the tense-check matcher).
              "Right now Emma is sitting in Central Park. The sun is shining. Hundreds of people are jogging past her. A man is selling ice cream under a tree. Yesterday they visited the Statue of Liberty.",
            ],
            [
              "They took the ",
              { w: "ferry", de: "die Fähre" },
              ". Emma made about a hundred photos. In the evening they ate pizza in Little Italy. It was fantastic. New York never sleeps.",
            ],
          ],
        },
        {
          type: "group-sort",
          kind: "Sortieren",
          title: "Sort the verbs by tense",
          intro: "Drop each verb in the right column, then press Check.",
          groups: [
            { label: "Simple Present · regularly", items: ["lives", "works", "knows", "sleeps"] },
            { label: "Present Progressive · right now", items: ["is sitting", "is shining", "are jogging"] },
            { label: "Simple Past · finished", items: ["visited", "took", "ate"] },
          ],
        },
        {
          type: "written",
          kind: "Nachdenken",
          title: "Discovery: what do they share?",
          intro:
            "Look at the middle column. What do ALL the Present Progressive verbs have in common? Write your idea.",
          answer: true,
          help: "Tipp: Schau auf die Form — welche zwei Teile hat jedes Verb?",
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Choose the correct form",
          intro: "Three options, one is right. Tap it — you see at once if it fits.",
          questions: [
            { q: "Emma's aunt ___ a taxi every day.", options: ["drives", "is driving", "drove"], correct: 0 },
            { q: "Listen! Someone ___ music in the park.", options: ["plays", "is playing", "played"], correct: 1 },
            { q: "Last night they ___ pizza in Little Italy.", options: ["eat", "are eating", "ate"], correct: 2 },
            { q: "New York ___ – it's a fact!", options: ["never sleeps", "is never sleeping", "never slept"], correct: 0 },
            { q: "Look out of the window! It ___.", options: ["snows", "is snowing", "snowed"], correct: 1 },
            { q: "Two years ago my family ___ London.", options: ["visits", "is visiting", "visited"], correct: 2 },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Put the verb in the correct tense",
          intro: "Look for the signal words first, then type the correct form.",
          items: [
            { hint: "usually → Simple Present", segments: ["Emma usually ", { answer: "takes", size: 9 }, " (take) the subway to Manhattan."] },
            { hint: "Right now → Present Progressive", segments: ["Right now she ", { answer: "is waiting", accept: ["'s waiting"], size: 12 }, " (wait) for the ferry."] },
            { hint: "Yesterday → Simple Past (irregular!)", segments: ["Yesterday the ferry ", { answer: "was", size: 7 }, " (be) full of tourists."] },
            { hint: "last Sunday → Simple Past (irregular!)", segments: ["Emma ", { answer: "made", size: 8 }, " (make) 100 photos last Sunday."] },
            { hint: "Look! → Present Progressive", segments: ["Look! The street artists ", { answer: "are dancing", size: 13 }, " (dance) on the square."] },
            { hint: "a fact → Simple Present (he/she/it + -s)", segments: ["Her aunt ", { answer: "knows", size: 9 }, " (know) every street in the city."] },
          ],
        },
        {
          type: "spot-fix",
          kind: "Fehlersuche",
          title: "Correct Emma's little brother",
          intro:
            "Emma's little brother made 5 verb mistakes. Tap each wrong verb, fix it, then press Check.",
          hint: "5 verbs are in the wrong tense. (Tip: to fix a Present Progressive, type both parts, e.g. “am doing”.)",
          paragraphs: [
            "Every day I goes to school by bus. My best friend Sam always sit next to me. Yesterday we see a police car with blue lights! Right now I do my homework and my mum cooked dinner in the kitchen.",
          ],
          fixes: [
            { wrong: "goes", correct: "go" },
            { wrong: "sit", correct: "sits" },
            { wrong: "see", correct: "saw" },
            { wrong: "do", correct: "am doing", accept: ["am doing"] },
            { wrong: "cooked", correct: "is cooking", accept: ["is cooking"] },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Answer about YOU",
          intro: "Answer in full sentences. The sentence starters help you.",
          starters: ["After school I usually …", "At this moment I am …", "Last weekend I …"],
        },
        {
          type: "written",
          kind: "Kreativ",
          title: "Your message from New York",
          intro:
            "Imagine YOU are in New York today. Write a message to a friend (6–8 sentences). Use all three tenses.",
          lines: [
            "2 sentences: what you do there every day (Simple Present)",
            "2 sentences: what is happening around you right now (Present Progressive)",
            "2 sentences: what you did yesterday (Simple Past)",
          ],
          answer: true,
          help: "Starter: Every morning I … · Right now I am sitting … · Yesterday I … · It was …",
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
          type: "text",
          kind: "Lesen & markieren",
          title: "Subway Stories — a New York blog",
          intro:
            "Read the blog post and mark the verbs by tense. Careful: not every verb is one of the three tenses — watch out for modals (can) and infinitives (to sing). Mark only the three tenses.",
          highlight: {
            hint: PEN_HINT,
            colors: TENSE_PENS,
          },
          paragraphs: [
            [
              "Most tourists love Times Square. Real New Yorkers ",
              { w: "avoid", de: "vermeiden" },
              " it whenever they can. The city runs on ",
              { w: "routine", de: "die Routine, der Alltag" },
              ". Every morning millions of people pour into the subway. They grab a coffee and rush to work.",
            ],
            [
              "At the moment I am sitting in a small café in Brooklyn. I am writing this post on my laptop. Outside, a delivery cyclist is ",
              { w: "arguing", de: "streitet" },
              " with a taxi driver. The barista knows my order by heart because I come here almost daily. Last Friday, however, my routine ",
              { w: "broke down", de: "brach zusammen" },
              " completely.",
            ],
            [
              "The subway stopped between two stations. The lights went out. For twenty minutes nobody moved. Then a stranger started to sing quietly, and soon everyone sang along. Moments like that explain why I love this crazy city.",
            ],
          ],
        },
        {
          type: "written",
          kind: "Analysieren",
          title: "Why this tense?",
          intro:
            "In your own words, explain WHY the writer uses each tense in this blog. Give one reason per tense.",
          lines: [
            "Simple Present → the writer uses it because …",
            "Present Progressive → the writer uses it because …",
            "Simple Past → the writer uses it because …",
          ],
          answer: true,
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Mixed gap fill",
          intro: "Put the verb in brackets into the correct tense. Read the whole sentence first.",
          items: [
            { hint: "a general fact → Simple Present", segments: ["New Yorkers ", { answer: "walk", size: 8 }, " (walk) faster than almost anyone else – studies prove it."] },
            { hint: "at this moment → Present Progressive", segments: ["Quiet, please! I ", { answer: "am recording", accept: ["'m recording"], size: 14 }, " (record) a video for my blog."] },
            { hint: "in 1904 → Simple Past", segments: ["In 1904 the first subway line ", { answer: "opened", size: 9 }, " (open) in Manhattan."] },
            { hint: "right now → Present Progressive", segments: ["She can't answer the phone right now – she ", { answer: "is riding", accept: ["'s riding"], size: 12 }, " (ride) through heavy traffic."] },
            { hint: "a state verb → Simple Present, not progressive", segments: ["I ", { answer: "do not believe", accept: ["don't believe"], size: 16 }, " (not / believe) this story – it sounds impossible!"] },
            { hint: "two weeks ago → Simple Past (irregular)", segments: ["Two weeks ago a water pipe ", { answer: "broke", size: 8 }, " (break) under 5th Avenue."] },
            { hint: "this month, a temporary situation → Present Progressive", segments: ["My cousin ", { answer: "is staying", accept: ["'s staying"], size: 12 }, " (stay) with us this month while her flat is being renovated."] },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Questions and negatives",
          intro:
            "Complete the mini-dialogues with the correct helping verb and form (do / does / did / am / is / are).",
          items: [
            { hint: "last week → Simple Past question + short answer", segments: ["A: ", { answer: "Did", size: 6 }, " you ", { answer: "visit", size: 8 }, " the Statue of Liberty last week?  B: No, we ", { answer: "didn't", accept: ["did not"], size: 8 }, "."] },
            { hint: "today → Present Progressive question", segments: ["A: Why ", { answer: "is", size: 5 }, " he ", { answer: "wearing", size: 9 }, " a suit today?  B: He has a job interview."] },
            { hint: "opinion / state → Simple Present question", segments: ["A: ", { answer: "Does", size: 6 }, " your aunt ", { answer: "like", size: 7 }, " her job as a taxi driver?  B: Yes, she loves it."] },
            { hint: "right now → Present Progressive, both parts", segments: ["A: What ", { answer: "are", size: 5 }, " they ", { answer: "doing", size: 8 }, " right now?  B: They ", { answer: "are watching", accept: ["'re watching"], size: 14 }, " the street parade."] },
          ],
        },
        {
          type: "spot-fix",
          kind: "Fehlersuche",
          title: "Edit the text like a pro",
          intro:
            "This paragraph contains 6 tense mistakes. Tap each wrong verb, fix it, then press Check.",
          hint: "6 verbs are wrong — watch for agreement, tense choice and state verbs. (For a Present Progressive, type both parts, e.g. “is standing”.)",
          paragraphs: [
            "My grandfather love New York. He moved there in 1985, when he was twenty years old. At first he worked as a dishwasher every day and dreams of his future restaurant. Today he owned a small pizzeria in Queens. Right now he stand in the kitchen and teaching my brother his secret recipe. Last summer I visit him for two whole weeks.",
          ],
          fixes: [
            { wrong: "love", correct: "loves" },
            { wrong: "dreams", correct: "dreamed" },
            { wrong: "owned", correct: "owns" },
            { wrong: "stand", correct: "is standing", accept: ["is standing"] },
            { wrong: "teaching", correct: "is teaching", accept: ["is teaching"] },
            { wrong: "visit", correct: "visited" },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Tense contrast in pairs",
          intro:
            "Write ONE sentence that uses BOTH verbs — one in each tense given. Join them with but, while or because.",
          starters: [
            "every day (work) / at the moment (relax): …",
            "now (rain) / yesterday (shine): …",
            "normally (cook) / last night (order pizza): …",
          ],
          help: "Beispiel: I usually take the bus, but today I am walking because the weather is great.",
        },
        {
          type: "written",
          kind: "Kreativ · Challenge",
          title: "Your blog post: “A day I will never forget”",
          intro:
            "Imagine you live in New York. Write a blog post (about 100 words) in three tense steps.",
          lines: [
            "Simple Present (2–3 sentences): what your normal day looks like.",
            "Present Progressive (2–3 sentences): what is happening around you right now.",
            "Simple Past (3–4 sentences): the special thing that happened yesterday.",
          ],
          answer: true,
          help: "Starter: Every day I … · Right now I am sitting in … · Around me, people are … · But yesterday something special happened: … · Suddenly … · In the end …",
        },
      ],
    },

    /* ================= STEP 4 — ★ Challenge mini-project ================= */
    {
      step: 4,
      subtitle: "Mini-project · about 10 minutes",
      accent: "ochre",
      challenge: true,
      layout: "single",
      cards: [
        {
          type: "comic-strip",
          kind: "Kreativ-Projekt",
          title: "My New York Minute — a 3-frame story",
          intro:
            "Make a tiny photo-story about your day in New York. Each frame is locked to one tense: picture the scene, write a speech bubble and a caption. Your bubbles appear inside the frames as you type — then hit the PDF button to take your comic home.",
          panels: [
            {
              n: 1,
              prompt: "① Yesterday — Simple Past. Something happened.",
              bubblePlaceholder: "💬 “I saw …!”",
              capPlaceholder: "Yesterday I … (verb + -ed, or 2nd form: see → saw)",
            },
            {
              n: 2,
              prompt: "② Right now — Present Progressive. The live moment.",
              bubblePlaceholder: "💬 “Look — I am …!”",
              capPlaceholder: "Right now I am … (am / is / are + verb + -ing)",
            },
            {
              n: 3,
              prompt: "③ Every day — Simple Present. Your New York routine.",
              bubblePlaceholder: "💬 “I always …”",
              capPlaceholder: "Every day I … (verb, + -s for he / she / it)",
            },
          ],
          help: "★ Bonus: make the three frames tell ONE connected story — a mini New York adventure from yesterday, to right now, to every day.",
        },
      ],
    },
  ],
};
