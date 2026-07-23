/**
 * In New York City (Unit 1) — Reading: "Faster than Traffic"
 * (NYC bike messengers).
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs) and their answer keys, rebuilt as one interactive page and
 * mapped onto our four Steps:
 *
 *   Step 1 (LE)      — Leo, the Bike Messenger
 *   Step 2 (G-Kurs)  — A Day with Maya (Manhattan)
 *   Step 3 (E-Kurs)  — Faster than Traffic (the long read)
 *   Step 4 (★)       — Rush Hour: the Dispatch Game (reading as play)
 *
 * The shared guide is a reading toolkit (skim / scan / read closely)
 * plus three golden rules. Every level keeps the draft's arc:
 * warm-up → text → words → comprehension → language → creative.
 *
 * The Step-4 board artwork lives at assets/images/unit1/dispatch/
 * board.jpg (16:9). Until the file lands the board renders as the
 * dark hatched panel — the game stays fully playable.
 */

const BOARD = "assets/images/unit1/dispatch";

export default {
  title: "Faster than Traffic",

  /* ============ Shared reference card ============ */
  guide: {
    label: "The Reading Toolkit",
    numbered: false,
    types: [
      {
        name: "1 · Skim",
        tag: "the first look",
        accent: "olive",
        formula: "title + first lines → what is it about?",
        de: "Überfliegen: Worum geht es ungefähr? Kein Wörterbuch, kein Stress.",
        example: "A text about bike messengers in New York.",
      },
      {
        name: "2 · Scan",
        tag: "the detail hunt",
        accent: "teal",
        formula: "hunt for names · numbers · places",
        de: "Gezielt suchen: Die Antwort steht IM Text — finde die Stelle.",
        example: "How old is Leo? → scan for a number: 21.",
      },
      {
        name: "3 · Read closely",
        tag: "prove it",
        accent: "ochre",
        formula: "read again slowly + quote the evidence",
        de: "Genau lesen und mit Textstellen beweisen.",
        example: "The job is dangerous — the text says: “accidents are common”.",
      },
    ],
    tensesLabel: "Three golden reading rules",
    tenses: [
      {
        tense: "Rule 1",
        accent: "olive",
        use: "Read the QUESTIONS first — then you know what to hunt for.",
        signals: "erst die Fragen",
      },
      {
        tense: "Rule 2",
        accent: "olive",
        use: "You don't need every word. Names, numbers and places carry most answers.",
        signals: "Namen · Zahlen · Orte",
      },
      {
        tense: "Rule 3",
        accent: "ochre",
        use: "Prove your answer with words from the text — guessing is not reading.",
        signals: "Beweis im Text",
      },
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
          title: "Before you read",
          intro: "Have you ever seen a person delivering something by bicycle? Write one sentence.",
          starters: ["Yes, I have. I saw … / No, I haven't."],
          help: "Jede ehrliche Antwort ist richtig!",
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Leo, the Bike Messenger",
          intro: "Read about Leo. Tap the underlined words for German help.",
          paragraphs: [
            [
              "This is Leo. Leo is 21 years old. He lives in New York City. Leo is a ",
              { w: "bike messenger", de: "der Fahrradkurier" },
              ". He rides his bike every day. He ",
              { w: "delivers", de: "liefert" },
              " letters and small ",
              { w: "packages", de: "die Pakete" },
              " from one office to another office.",
            ],
            [
              "New York is very big. The streets are full of cars and taxis. The ",
              { w: "traffic", de: "der Verkehr" },
              " is crazy! Leo is fast. He knows all the streets, so he doesn't need a ",
              { w: "GPS", de: "das Navigationssystem" },
              ". He wears a ",
              { w: "helmet", de: "der Helm" },
              " and a big bag.",
            ],
            [
              "His radio says: “Go to Wall Street! A package for Mr. Green!” Leo says: “OK! I am on my way!” In one day, Leo rides about 60 kilometres. His job is hard, but he loves it.",
            ],
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wörter",
          title: "Words: work & transport",
          sections: [
            {
              label: "English – Deutsch",
              accent: "coral",
              pairs: [
                ["bike messenger", "der/die Fahrradkurier·in"],
                ["to deliver", "liefern"],
                ["package", "das Paket"],
                ["letter", "der Brief"],
                ["traffic", "der Verkehr"],
                ["helmet", "der Helm"],
                ["office", "das Büro"],
                ["street", "die Straße"],
                ["GPS", "das Navigationssystem"],
                ["I am on my way!", "Ich bin unterwegs!"],
              ],
            },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Right or wrong?",
          intro: "Read each sentence. Right or wrong? Tap your answer — the text knows the truth.",
          // Fixed order: Right always left, Wrong always right.
          shuffle: false,
          questions: [
            { q: "Leo is 21 years old.", options: ["Right ✔", "Wrong ✖"], correct: 0 },
            { q: "Leo lives in London.", options: ["Right ✔", "Wrong ✖"], correct: 1 },
            { q: "Leo rides a bike.", options: ["Right ✔", "Wrong ✖"], correct: 0 },
            { q: "Leo delivers big cars to offices.", options: ["Right ✔", "Wrong ✖"], correct: 1 },
            { q: "Leo wears a helmet.", options: ["Right ✔", "Wrong ✖"], correct: 0 },
          ],
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Match the words",
          intro: "Tap an English word, then tap its German partner.",
          leftLabel: "English",
          rightLabel: "Deutsch",
          pairs: [
            { left: "a letter", right: "ein Brief" },
            { left: "the traffic", right: "der Verkehr" },
            { left: "a helmet", right: "ein Helm" },
            { left: "to deliver", right: "liefern" },
            { left: "a package", right: "ein Paket" },
          ],
        },
        {
          type: "inline-choice",
          kind: "Lücken",
          title: "Fill in the words",
          intro: "Choose the right word from the box for each gap.",
          bank: ["bike", "helmet", "New York", "delivers", "packages"],
          segments: [
            "Leo lives in ",
            { gap: 0 },
            ". He rides his ",
            { gap: 1 },
            " every day. He ",
            { gap: 2 },
            " letters to offices. He takes letters and ",
            { gap: 3 },
            " to offices. He wears a ",
            { gap: 4 },
            " on his head.",
          ],
          gaps: [
            { options: ["bike", "helmet", "New York", "delivers", "packages"], answer: "New York" },
            { options: ["bike", "helmet", "New York", "delivers", "packages"], answer: "bike" },
            { options: ["bike", "helmet", "New York", "delivers", "packages"], answer: "delivers" },
            { options: ["bike", "helmet", "New York", "delivers", "packages"], answer: "packages" },
            { options: ["bike", "helmet", "New York", "delivers", "packages"], answer: "helmet" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Kurze Antworten",
          title: "Short answers",
          intro: "Answer with one or two words. Scan the text — the answers are all there.",
          items: [
            { segments: ["How old is Leo? → ", { answer: "21", accept: ["21 years old", "twenty-one"], size: 8 }] },
            { segments: ["What does Leo ride? → ", { answer: "a bike", accept: ["bike", "his bike"], size: 9 }] },
            { segments: ["What does he wear on his head? → ", { answer: "a helmet", accept: ["helmet"], size: 10 }] },
            { segments: ["How many kilometres does he ride in one day? → ", { answer: "about 60", accept: ["60", "60 km", "about 60 km", "60 kilometres", "about 60 kilometres"], size: 10 }] },
          ],
        },
        {
          type: "written",
          kind: "Kreativ",
          title: "YOUR bike messenger",
          intro: "Invent your own bike messenger! Write three sentences about him or her.",
          starters: [
            "My messenger's name is …",
            "He / She is … years old.",
            "He / She delivers …",
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
          title: "Before you read",
          intro: "Have you ever seen a person delivering something by bicycle? Write one sentence — what and where?",
          starters: ["Yes, I have. I once saw … / No, I haven't, but I think …"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "A Day with Maya — Bike Messenger in Manhattan",
          intro: "Read about Maya's working day. Tap the underlined words for German help.",
          paragraphs: [
            [
              "Maya is 22 years old and she works as a bike messenger in Manhattan, the busiest part of New York City. Companies pay her to deliver letters, documents and small packages quickly — much quicker than a car, because cars often stand in ",
              { w: "traffic jams", de: "der Stau (Pl.: Staus)" },
              ".",
            ],
            [
              "Her day starts at 8 a.m. She checks her bike, puts on her helmet and turns on her radio. Then the first job comes in: “Pick up a package on 42nd Street and take it to a ",
              { w: "customer", de: "der Kunde / die Kundin" },
              " on Wall Street!” Maya knows every ",
              { w: "shortcut", de: "die Abkürzung" },
              " in the city, so she arrives in only 15 minutes.",
            ],
            [
              "The job is not easy. The streets are full of yellow taxis, buses and people. Sometimes car drivers do not see cyclists, so Maya must be ",
              { w: "careful", de: "vorsichtig" },
              " all the time. In summer it is hot, in winter it is icy — but the packages must arrive ",
              { w: "on time", de: "pünktlich" },
              ".",
            ],
            [
              "At about 6 p.m. Maya finishes work. She has ridden more than 70 kilometres and delivered around 25 packages. She is tired, but happy. “My office is the street,” she says, “and I love it.”",
            ],
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wörter",
          title: "Words for Maya's day",
          sections: [
            {
              label: "English – Deutsch",
              accent: "olive",
              pairs: [
                ["bike messenger", "der/die Fahrradkurier·in"],
                ["to deliver", "liefern"],
                ["document", "das Dokument"],
                ["package", "das Paket"],
                ["traffic jam", "der Stau"],
                ["customer", "der Kunde / die Kundin"],
                ["shortcut", "die Abkürzung"],
                ["on time", "pünktlich"],
                ["careful", "vorsichtig"],
                ["route", "die Strecke"],
              ],
            },
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "True, false — or not in the text?",
          intro: "Careful: some sentences sound possible, but the text simply doesn't say it. That's the third button!",
          shuffle: false,
          questions: [
            { q: "Maya works in Manhattan.", options: ["True", "False", "Not in the text"], correct: 0 },
            { q: "She starts work at 9 a.m.", options: ["True", "False", "Not in the text"], correct: 1 },
            { q: "She delivers pizza to offices.", options: ["True", "False", "Not in the text"], correct: 1 },
            { q: "Maya knows the streets very well.", options: ["True", "False", "Not in the text"], correct: 0 },
            { q: "She earns 20 dollars for every package.", options: ["True", "False", "Not in the text"], correct: 2 },
            { q: "At 6 p.m. she finishes work.", options: ["True", "False", "Not in the text"], correct: 0 },
          ],
        },
        {
          type: "event-order",
          kind: "Sortieren",
          title: "Put Maya's day in order",
          intro: "Bring the five moments of Maya's day into the correct order.",
          events: [
            { text: "Maya checks her bike and puts on her helmet." },
            { text: "The radio sends her to 42nd Street." },
            { text: "She picks up a package." },
            { text: "She takes the package to the customer on Wall Street." },
            { text: "She finishes work, tired but happy." },
          ],
        },
        {
          type: "written",
          kind: "Antworten",
          title: "Answer in full sentences",
          intro: "Answer the questions — the sentence starters help you.",
          starters: [
            "What does Maya deliver? → Maya delivers …",
            "Why is a bike often quicker than a car? → A bike is quicker because …",
            "Why must Maya be careful? → She must be careful because …",
            "How does Maya feel at the end of the day? → She feels …",
          ],
        },
        {
          type: "sentence-build",
          kind: "Sätze bauen",
          title: "Build the sentences",
          intro: "Tap the parts in the correct order.",
          sentences: [
            { tokens: ["Maya", "rides", "her bike", "every day."] },
            { tokens: ["The streets", "are", "full of", "yellow taxis."] },
            { tokens: ["The packages", "must", "arrive", "on time."] },
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "A postcard from New York",
          intro: "Imagine you are a bike messenger in New York for one day. Write a short postcard (5–6 sentences) to a friend in Germany.",
          min: 40,
          max: 70,
          placeholder: "Your postcard…",
          chips: [
            "Dear …",
            "In the morning I …",
            "The streets were …",
            "The best moment was …",
            "Tomorrow I will …",
            "See you soon, …",
          ],
          checklist: [
            "5–6 sentences?",
            "Dear … and a closing line?",
            "Past forms for your day (delivered, was, were)?",
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
          title: "Before you read",
          intro: "Why can a bicycle sometimes be faster than a car in a city like Manhattan? Write your idea in one sentence.",
          answer: true,
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Faster than Traffic — New York's Bike Messengers",
          intro: "A longer read in four paragraphs (¶ 1–4). Tap the underlined words for help in simple English.",
          paragraphs: [
            [
              "¶ 1  When people think of New York City, they imagine skyscrapers, yellow taxis and crowded sidewalks. But between the cars and buses, there is another group that keeps the city moving: bike messengers. For more than a hundred years, these cyclists have carried letters, ",
              { w: "contracts", de: "contract = a legal document" },
              ", film reels and packages across Manhattan — often faster than any car could.",
            ],
            [
              "¶ 2  The golden age of the bike messenger was the 1980s and 1990s. Before e-mail existed, banks and law firms needed original documents delivered within the hour, and thousands of messengers raced through the streets every day. Then the internet arrived, and many people ",
              { w: "predicted", de: "to predict = to say what will happen in the future" },
              " that the job would ",
              { w: "disappear", de: "to disappear = to go away completely" },
              " completely. They were wrong. Digital files replaced paper, but online shopping and food delivery apps created new work. Today's messengers deliver everything from sushi to laptop computers.",
            ],
            [
              "¶ 3  It remains one of the ",
              { w: "toughest", de: "tough = very hard and difficult" },
              " jobs in the city. Messengers ride up to 80 kilometres a day, in burning summer heat and icy winter winds. Car doors open suddenly, taxis change lanes without warning, and accidents are common. Most messengers are paid ",
              { w: "per delivery", de: "for each package they bring" },
              ", not per hour — so speed means money, and waiting at a red light can feel like losing a dollar.",
            ],
            [
              "¶ 4  Yet many messengers would never change their job. They describe a feeling of freedom that no office can offer, and they belong to a proud ",
              { w: "subculture", de: "a small group with its own style and rules" },
              " with its own style, slang and even illegal street races called “",
              { w: "alleycats", de: "an illegal street race for messengers" },
              "”. As one ",
              { w: "veteran", de: "a person with many years of experience" },
              " messenger put it: “In an office you watch the city through a window. On my bike, I am part of it.”",
            ],
          ],
        },
        {
          type: "phrase-reference",
          kind: "Wörter",
          title: "Words: English · simple English",
          sections: [
            {
              label: "no German this time — explain English with English",
              accent: "slate",
              pairs: [
                ["bike messenger", "a person who delivers things by bicycle"],
                ["contract", "a legal document"],
                ["to predict", "to say what will happen in the future"],
                ["to disappear", "to go away completely"],
                ["tough", "very hard and difficult"],
                ["per delivery", "for each package you bring"],
                ["subculture", "a small group with its own style and rules"],
                ["veteran", "a person with many years of experience"],
                ["alleycat", "an illegal street race for messengers"],
                ["freedom", "the feeling that you can do what you want"],
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Verstehen",
          title: "Understanding the text",
          intro: "Answer in your own words — full sentences.",
          starters: [
            "Why did many people think bike messengers would disappear? →",
            "How did the job survive after the internet arrived? →",
            "Why can waiting at a red light “feel like losing a dollar”? →",
          ],
        },
        {
          type: "match-up",
          kind: "Beweise",
          title: "Find the evidence — which paragraph?",
          intro: "The text supports each statement. In which paragraph is the proof?",
          options: ["¶ 1", "¶ 2", "¶ 3", "¶ 4"],
          items: [
            { left: "The job is physically dangerous.", answer: "¶ 3" },
            { left: "Bike messengers have their own identity and traditions.", answer: "¶ 4" },
            { left: "The profession is older than most people think.", answer: "¶ 1" },
          ],
        },
        {
          type: "written",
          kind: "Beweise",
          title: "…and quote the proof",
          intro: "Now copy the exact words from the text that prove each statement.",
          starters: [
            "Dangerous — the text says: “…",
            "Own identity — the text says: “…",
            "Older than people think — the text says: “…",
          ],
        },
        {
          type: "essay-editor",
          kind: "Zusammenfassen",
          title: "Summary — 50 to 60 words",
          intro: "Summarise the text in 50–60 words. Do not copy sentences from the text!",
          min: 50,
          max: 60,
          placeholder: "Your summary…",
          chips: [
            "What bike messengers do",
            "How the job has changed",
            "Why people still love it",
          ],
          checklist: [
            "All three points covered?",
            "Your own words — nothing copied?",
            "50–60 words?",
          ],
        },
        {
          type: "written",
          kind: "Sprache",
          title: "Language in context",
          intro: "Explain what these expressions mean in this text. Your own English words — no dictionary definitions.",
          starters: [
            "“keeps the city moving” (¶ 1) means …",
            "“the golden age” (¶ 2) means …",
            "“On my bike, I am part of it.” (¶ 4) means …",
          ],
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Dream job or death trap?",
          intro: "An online magazine asks its readers: “Bike messenger in NYC — a dream job or simply too dangerous?” Write a comment (about 100 words): your opinion, two arguments from the text, one idea of your own — and answer at least one argument from the other side.",
          min: 90,
          max: 110,
          placeholder: "Your comment…",
          comment: { replyTo: "Bike messenger in NYC — a dream job or simply too dangerous?" },
          chips: [
            "In my opinion …",
            "One clear advantage / danger is …",
            "Some people argue that …, however …",
            "All in all …",
          ],
          checklist: [
            "Your opinion?",
            "Two arguments from the text?",
            "One idea of your own?",
            "An answer to the other side?",
            "About 100 words?",
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
          type: "dispatch-game",
          title: "Rush Hour — your first day as a messenger",
          intro:
            "The radio is on, the bag is packed. Five deliveries, one night shift. Read every dispatch carefully — the details pay your wage: answer both questions right and the delivery is yours. Wrong taps cost you your rank, not your money. Ready? Ride!",
          board: {
            img: `${BOARD}/board.jpg`,
            alt: "Painted night map of Manhattan streets seen from above",
          },
          start: { x: 10, y: 80 },
          stops: [
            {
              pin: { x: 26, y: 58 },
              time: "8:04 a.m.",
              pay: 8,
              km: 6,
              note: "Good morning, rookie! Easy start: pick up a small envelope at the flower shop on 7th Avenue. Take it to Mrs. Rossi at the Hotel Astoria. She is waiting in the lobby — not at the pool.",
              questions: [
                { q: "What do you pick up?", options: ["A small envelope", "A box of flowers", "A pizza"], correct: 0 },
                { q: "Where is Mrs. Rossi waiting?", options: ["At the pool", "In the lobby", "On the roof"], correct: 1 },
              ],
            },
            {
              pin: { x: 46, y: 78 },
              time: "10:31 a.m.",
              pay: 9,
              km: 11,
              note: "Next job! A lawyer on Wall Street needs a blue folder with contracts. Pick it up at the bank on 42nd Street, window 3. And hurry — it starts raining in ten minutes, and the folder must stay dry!",
              questions: [
                { q: "What is in the folder?", options: ["Money", "Photos", "Contracts"], correct: 2 },
                { q: "Where exactly do you pick it up?", options: ["At the bank, window 3", "At the lawyer's office", "At the bank, window 13"], correct: 0 },
              ],
            },
            {
              pin: { x: 60, y: 44 },
              time: "11:48 a.m.",
              pay: 11,
              km: 14,
              note: "Rush order from Little Italy! Two boxes of cannoli must reach the TV studio before 12 o'clock — they start filming at noon. The guard at the back door knows you. Do NOT use the front entrance: the street there is closed for a parade.",
              questions: [
                { q: "Why must you hurry?", options: ["The studio closes at noon", "They start filming at noon", "The cannoli melt at noon"], correct: 1 },
                { q: "Which way do you go in?", options: ["Through the front entrance", "Through the window", "Through the back door"], correct: 2 },
              ],
            },
            {
              pin: { x: 28, y: 24 },
              time: "2:40 p.m.",
              pay: 12,
              km: 16,
              note: "A doctor forgot her tablet computer in a taxi. The driver, Mr. Habib, is waiting at the taxi stand at Central Park — but only until 3 p.m. After that he starts his night shift and you won't find him. It is 2:40 now. Twenty minutes, messenger!",
              questions: [
                { q: "What do you pick up?", options: ["A tablet computer", "Medicine", "A taxi"], correct: 0 },
                { q: "Why must you arrive before 3 p.m.?", options: ["The park closes then", "The doctor flies home then", "Mr. Habib starts his night shift then"], correct: 2 },
              ],
            },
            {
              pin: { x: 86, y: 78 },
              time: "6:12 p.m.",
              pay: 14,
              km: 21,
              note: "Last run, superstar! A gallery in SoHo sold a small painting — it is a hundred years old and worth more than your bike. The new owner waits at the harbour; her ship leaves at seven. And if the lights are against you, remember: a late painting is better than a broken one.",
              questions: [
                { q: "What does the last sentence really mean?", options: ["Ride faster when the lights are red", "Ride safely, even if you lose time", "The painting is already broken"], correct: 1 },
                { q: "Why is seven o'clock important?", options: ["The ship leaves then", "The gallery closes then", "The harbour opens then"], correct: 0 },
              ],
            },
          ],
          help: "★ Read like a messenger: WHAT do I take, WHERE does it go, WHEN must it arrive — the answer is always in the note.",
        },
      ],
    },
  ],
};
