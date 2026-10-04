/**
 * The best days of your life (Unit 2) — Listening: "Morning announcements"
 *
 * You are an exchange student at Boston West High School. Every morning Mr
 * Okonkwo reads the announcements over the loudspeaker: picture day, bus 14,
 * the science fair and the winter coat collection.
 *
 *   Step 1 (LE)        — true/false, a part-filled table, two details
 *   Step 2 (G-Kurs)    — six multiple-choice questions, the full table
 *   Step 3 (E-Kurs)    — detail questions, an inference, + an objection
 *   Step 4 (Challenge) — write and record your own announcement
 *
 * AUDIO: drop the recordings at the paths in AUDIO below. The comprehension
 * tasks are written-answer for now; once the answer key is in, the first-
 * listening tasks become tap-to-check (multiple-choice / true-false) cards.
 */

const AUDIO = "assets/audio/unit2";
const A_LE = `${AUDIO}/announcements-le.mp3`;
const A_GK = `${AUDIO}/announcements-gk.mp3`;
const A_EK = `${AUDIO}/announcements-ek.mp3`;

/** The four announcements, used for the note-taking table at every level. */
const TABLE_ROWS = [
  "1 Picture day — the school photos",
  "2 Bus 14",
  "3 Science fair",
  "4 Winter coats",
];

/** The recurring problem on this page. */
const PROBLEM =
  "THE PROBLEM: Your school wants to read the morning announcements in English, because there are exchange students in every class. But the loudspeaker in your room is old and very quiet, and in the morning everybody is still talking. The guests miss almost all the information.";

export default {
  title: "Morning announcements",

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
          intro:
            "You are an exchange student at Boston West High School. Every morning Mr Okonkwo reads the announcements over the loudspeaker. What do schools tell students in a morning announcement? Write down two things.",
          help: "Was sagen Schulen in einer Morgendurchsage? Schreibe zwei Dinge auf.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "written",
          kind: "Hören · 1. Mal",
          title: "While you listen — the first time",
          intro: "Listen to the four announcements. Is each sentence true or false? Write true or false.",
          help: "Höre zu und schreibe true oder false.",
          audio: { src: A_LE, label: "🎧 Mr Okonkwo — today's announcements (listen 2×)" },
          answerLines: 1,
          questions: [
            { q: "1. Picture day is on Wednesday.", starter: "true / false" },
            { q: "2. You may wear a hat for the school photo.", starter: "true / false" },
            { q: "3. Bus 14 leaves ten minutes later from Monday.", starter: "true / false" },
            { q: "4. The science fair is free for everybody.", starter: "true / false" },
            { q: "5. The winter coats go to a night shelter.", starter: "true / false" },
            { q: "6. You can bring the coats until Saturday.", starter: "true / false" },
          ],
        },
        {
          type: "written",
          kind: "Hören · 2. Mal",
          title: "While you listen — the second time",
          intro:
            "Listen again and make notes for each announcement: when? where? how much? If something is not said, write a dash (—).",
          help: "Höre noch einmal und mach dir Notizen. Wenn etwas nicht gesagt wird, mach einen Strich (—).",
          audio: { src: A_LE, label: "🎧 Mr Okonkwo — today's announcements (listen again)" },
          answerLines: 1,
          questions: TABLE_ROWS.map((r) => ({ q: r, starter: "when … / where … / how much …" })),
        },
        {
          type: "written",
          kind: "Details",
          title: "After listening — details",
          intro: "Choose the right answer and write it down.",
          help: "Schreibe die richtige Antwort auf.",
          answerLines: 1,
          questions: [
            { q: "1. Where do the classes go for the school photo?", starter: "to the gym / to the hall" },
            { q: "2. When does bus 14 leave from Monday?", starter: "at 2.50 p.m. / at 3.00 p.m." },
            { q: "3. What must you bring to Room 115?", starter: "books / warm clothes" },
          ],
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Which ideas help?",
          intro: PROBLEM + " Sort the ideas, then press Check.",
          help: "Die Durchsagen sind kaum zu hören. Die Gastschüler bekommen fast nichts mit.",
          groups: [
            {
              label: "✅ This helps",
              items: [
                "We put the announcements on a board next to the classroom door.",
                "One student writes the three most important points on the whiteboard.",
              ],
            },
            {
              label: "❌ This doesn't help",
              items: [
                "Mr Okonkwo speaks much louder.",
                "We stop making announcements.",
                "We make the announcements in German.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro: "Write your solution in 3 sentences. Use the sentence frame.",
          help: "Schreibe deine Lösung in 3 Sätzen.",
          starters: ["Our idea is …", "This helps because …", "First, we …"],
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
          intro:
            "You are an exchange student at Boston West High School. Every morning Mr Okonkwo reads the announcements over the loudspeaker. What do schools tell students in a morning announcement? Write down two things.",
          help: "Was sagen Schulen in einer Morgendurchsage?",
          starters: ["1 —", "2 —"],
        },
        {
          type: "written",
          kind: "Hören · 1. Mal",
          title: "While you listen — the first time",
          intro: "Listen and write down the right answer (a, b or c).",
          help: "Höre zu und schreibe die richtige Antwort auf (a, b oder c).",
          audio: { src: A_GK, label: "🎧 Mr Okonkwo — today's announcements (listen 2×)" },
          answerLines: 1,
          questions: [
            { q: "1. The classes come to the gym …", starter: "a) during first period  b) during second period  c) after school" },
            { q: "2. One set of school photos costs …", starter: "a) nine dollars  b) twelve dollars  c) fifteen dollars" },
            { q: "3. From Monday, bus 14 leaves at …", starter: "a) 2.50 p.m.  b) 3.00 p.m.  c) 3.30 p.m." },
            { q: "4. At the science fair you can see projects from …", starter: "a) the eighth grade  b) the ninth grade  c) all grades" },
            { q: "5. The winning project gets …", starter: "a) a trip to Boston  b) five hundred dollars  c) new computers" },
            { q: "6. The clothes have to be in Room 115 by …", starter: "a) Wednesday  b) Friday  c) Saturday" },
          ],
        },
        {
          type: "written",
          kind: "Hören · 2. Mal",
          title: "While you listen — the second time",
          intro:
            "Listen again and make notes for each announcement: what is it? when? where? how much? If something is not said, write a dash (—).",
          help: "Höre noch einmal und fülle die Tabelle aus.",
          audio: { src: A_GK, label: "🎧 Mr Okonkwo — today's announcements (listen again)" },
          answerLines: 2,
          questions: TABLE_ROWS.map((r) => ({ q: r, starter: "what … / when … / where … / how much …" })),
        },
        {
          type: "written",
          kind: "Details",
          title: "After listening — details",
          intro: "Answer the questions in full sentences.",
          help: "Antworte in ganzen Sätzen.",
          answerLines: 2,
          questions: [
            { q: "1. What are students not allowed to wear for the school photo?", starter: "Students are not allowed to wear …" },
            { q: "2. When do you pay for your photos?", starter: "You pay …" },
            { q: "3. Who do you talk to if your club finishes at three o'clock?", starter: "You talk to …" },
            { q: "4. What does the winning project at the science fair get the money for?", starter: "The money is for …" },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro: PROBLEM + " Collect two ideas.",
          help: "Sammle zwei Ideen.",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro:
            "Choose your best idea and write your solution in 3 sentences: What do you do? Why does it help? What is the first step?",
          help: "Useful phrases: Our solution is … · This helps because … · Everybody can … · First, we would … · Then …",
          starters: ["Our solution is …", "This helps because …", "First, we would …"],
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
          kind: "Warm-up",
          title: "Before you listen",
          intro:
            "You are an exchange student at Boston West High School. Every morning Mr Okonkwo reads the announcements over the loudspeaker. What do schools tell students in a morning announcement? Write down two things.",
          starters: ["1 —", "2 —"],
        },
        {
          type: "written",
          kind: "Hören · 1. Mal",
          title: "While you listen — the first time",
          intro: "Listen and write down the right answer (a, b or c). Make notes while you listen.",
          audio: { src: A_EK, label: "🎧 Mr Okonkwo — today's announcements (listen 2×)" },
          answerLines: 1,
          questions: [
            { q: "1. The classes come to the gym …", starter: "a) during first period  b) during second period  c) after school" },
            { q: "2. One set of school photos costs …", starter: "a) nine dollars  b) twelve dollars  c) fifteen dollars" },
            { q: "3. From Monday, bus 14 leaves at …", starter: "a) 2.50 p.m.  b) 3.00 p.m.  c) 3.30 p.m." },
            { q: "4. At the science fair you can see projects from …", starter: "a) the eighth grade  b) the ninth grade  c) all grades" },
            { q: "5. The winning project gets …", starter: "a) a trip to Boston  b) five hundred dollars  c) new computers" },
            { q: "6. The clothes have to be in Room 115 by …", starter: "a) Wednesday  b) Friday  c) Saturday" },
          ],
        },
        {
          type: "written",
          kind: "Hören · 2. Mal",
          title: "While you listen — the second time",
          intro:
            "Listen again and complete your notes: what is it? when? where? how much? If something is not said, write a dash (—).",
          audio: { src: A_EK, label: "🎧 Mr Okonkwo — today's announcements (listen again)" },
          answerLines: 2,
          questions: TABLE_ROWS.map((r) => ({ q: r, starter: "what … / when … / where … / how much …" })),
        },
        {
          type: "written",
          kind: "Details",
          title: "After listening — details",
          intro: "Answer the questions in full sentences.",
          answerLines: 2,
          questions: [
            { q: "1. What are students not allowed to wear for the school photo?", starter: "Students are not allowed to wear …" },
            { q: "2. When do you pay for your photos?", starter: "You pay …" },
            { q: "3. Who do you talk to if your club finishes at three o'clock?", starter: "You talk to …" },
            { q: "4. What does the winning project at the science fair get the money for?", starter: "The money is for …" },
            { q: "5. Where do the winter coats go, and when does the van come?", starter: "The coats go to … and the van comes …" },
          ],
        },
        {
          type: "written",
          kind: "Schlussfolgern",
          title: "Think about it",
          intro:
            "Mr Okonkwo says that bus 14 leaves ten minutes earlier and that the driver will not wait. Why does he mention Mrs Delgado in the same announcement?",
          help: "Tipp: Die Antwort steht nicht direkt in der Durchsage — du musst sie erschließen.",
          answerLines: 2,
          questions: [
            { q: "Why does he mention Mrs Delgado?", starter: "He mentions her because …" },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Find a solution",
          intro: PROBLEM + " Write your solution in 3 sentences.",
          starters: ["What we do: …", "Why it helps: …", "The first step: …"],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "Answer the objection",
          intro:
            "A teacher says: “Writing things on the board every morning takes time away from the lesson.” What do you answer?",
          help: "Useful phrases: That is true, but … · It takes about one minute … · Otherwise half the class … · A student could do it while …",
          answerLines: 2,
          questions: [{ q: "Your answer to the objection:", starter: "That is true, but …" }],
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
          type: "essay-editor",
          kind: "Kreativ · Challenge",
          title: "Your own morning announcement",
          intro:
            "Tomorrow it is your turn on the loudspeaker. Write the morning announcement for YOUR school — three short items that a guest from Boston could follow at seven in the morning. Then read it out loud.",
          min: 45,
          max: 90,
          placeholder: "Good morning, everyone. Here are today's announcements. First, …",
          chips: [
            "Good morning, everyone.",
            "First, … · Second, … · And finally, …",
            "That's at … in …",
            "Please bring …",
            "If you have any questions, talk to …",
            "Have a good day!",
          ],
          checklist: [
            "I have three separate items.",
            "Every item says WHEN and WHERE.",
            "I used short sentences a guest can follow.",
            "I opened and closed like a real announcement.",
            "I read it out loud and it takes under a minute.",
          ],
          help: "★ Bonus: read it to a partner at normal speed. Can they note down all three items the first time?",
        },
      ],
    },
  ],
};
