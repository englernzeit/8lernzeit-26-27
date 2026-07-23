/**
 * In New York City (Unit 1) — Writing: "The Perfect Comment"
 * (commenting on a blog entry).
 *
 * Built from the three differentiated worksheet drafts (LE · G-Kurs ·
 * E-Kurs) supplied for this lesson, rebuilt as one interactive page in
 * the night-map design and mapped onto our four Steps:
 *
 *   Step 1 (LE)      — Alex's blog + the 5-step recipe, video in German
 *   Step 2 (G-Kurs)  — Lisa's model comment, block work
 *   Step 3 (E-Kurs)  — strong vs weak comment, video in English
 *   Step 4 (★)       — the Comment Lab: get your comment pinned by Alex
 *
 * One running fiction carries the page: Alex's blog "ALEX IN AMERICA".
 * Every level reads a version of the same post and ends by writing a
 * real comment under it. The shared reference card is the 5-block
 * comment recipe; the netiquette rules ride below it as the "rules of
 * the comment section".
 *
 * The two explanation videos are placed by level: the German one opens
 * Step 1 (LE), the English one opens Step 3 (E-Kurs).
 */

const VIDEO = "assets/video/unit1";

/** The five block names, reused wherever blocks are matched or sorted. */
const B1 = "1 · React";
const B2 = "2 · Refer";
const B3 = "3 · Opinion";
const B4 = "4 · Answer";
const B5 = "5 · Close";

export default {
  title: "The Perfect Comment",

  /* ============ Shared reference card ============ */
  guide: {
    label: "The Comment Recipe",
    numbered: false,
    types: [
      {
        name: B1,
        tag: "say hello",
        accent: "olive",
        formula: "Hi Alex! Thanks for your post!",
        de: "Begrüße den Blogger und bedanke dich für den Post.",
        example: "I really enjoyed reading your post.",
      },
      {
        name: B2,
        tag: "pick ONE detail",
        accent: "teal",
        formula: "I liked the part about …",
        de: "Geh auf EIN Detail aus dem Post ein.",
        example: "It's funny that you wrote about the loud streets.",
      },
      {
        name: B3,
        tag: "always with because",
        accent: "ochre",
        formula: "In my opinion, … because …",
        de: "Deine Meinung — immer mit Begründung.",
        example: "I think New York is exciting because there is so much to see.",
      },
      {
        name: B4,
        tag: "the blogger's question",
        accent: "coral",
        formula: "I could / couldn't live there because …",
        de: "Beantworte die Frage aus dem Post.",
        example: "I could never live there because I need quiet places.",
      },
      {
        name: B5,
        tag: "end friendly",
        accent: "slate",
        formula: "Keep writing! Greetings from …",
        de: "Ein netter Schluss — Wunsch, Frage oder Gruß.",
        example: "Can't wait for your next post!",
      },
    ],
    // The netiquette table rides in the guide's revision-table slot.
    tensesLabel: "Netiquette — the rules of the comment section",
    tenses: [
      {
        tense: "✔ Do",
        accent: "olive",
        use: "Be friendly and polite — even when you disagree. Criticise ideas, never the person.",
        signals: "freundlich & höflich",
      },
      {
        tense: "✔ Do",
        accent: "olive",
        use: "Be specific: write about the post and give reasons for your opinion.",
        signals: "konkret + Gründe",
      },
      {
        tense: "✖ Don't",
        accent: "ochre",
        use: "No insults, no one-word comments — always say WHY.",
        example: "cool",
        signals: "keine Beleidigungen",
      },
      {
        tense: "✖ Don't",
        accent: "ochre",
        use: "Don't write in CAPITAL LETTERS — it looks like shouting.",
        signals: "GROSS = schreien",
      },
    ],
  },

  steps: [
    /* ================= STEP 1 — LE ================= */
    {
      step: 1,
      subtitle: "Mit Video und Hilfe auf Deutsch",
      accent: "coral",
      layout: "slide",
      cards: [
        {
          type: "video",
          kind: "Erklärvideo · Deutsch",
          title: "Perfekte Blog-Kommentare",
          intro: "Watch first: the five steps of a good comment — explained in German.",
          video: {
            src: `${VIDEO}/perfekte-blog-kommentare.mp4`,
            caption: "Das Video erklärt die 5 Schritte — perfekt zum Starten.",
          },
        },
        {
          type: "text",
          kind: "Blog lesen",
          title: "Alex's blog: One week in New York — wow!",
          intro: "Read Alex's blog post. Tap the underlined words for German help.",
          paragraphs: [
            ["Hi, I'm Alex from Hamburg. I was in New York for one week."],
            [
              "The city is fantastic! The ",
              { w: "skyline", de: "die Skyline / Hochhäuser" },
              " is amazing and the pizza is great. Central Park is my favourite place.",
            ],
            [
              "But New York is also very ",
              { w: "loud", de: "laut" },
              ". The streets are ",
              { w: "full of people", de: "voller Menschen" },
              ". And everything is ",
              { w: "expensive", de: "teuer" },
              " — a hot dog costs six dollars!",
            ],
            ["So, what do you think: Could you live in New York? Write a comment!"],
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Good comment or bad comment?",
          intro: "Read each comment under Alex's post. Good netiquette — or bad? Tap your answer.",
          // Fixed order: Good is always left, Bad always right.
          shuffle: false,
          questions: [
            { q: "“Your post is stupid and boring.”", options: ["Good ✔", "Bad ✖"], correct: 1 },
            { q: "“Great post! I also love Central Park because it is so green.”", options: ["Good ✔", "Bad ✖"], correct: 0 },
            { q: "“cool”", options: ["Good ✔", "Bad ✖"], correct: 1 },
            { q: "“Thanks, Alex! I think six dollars for a hot dog is crazy!”", options: ["Good ✔", "Bad ✖"], correct: 0 },
            { q: "“Nobody wants to read your blog!!!”", options: ["Good ✔", "Bad ✖"], correct: 1 },
          ],
        },
        {
          type: "match-up",
          kind: "Zuordnen",
          title: "Which step is it?",
          intro: "Every phrase belongs to one step of the comment recipe. Choose the step.",
          options: [
            "1 — Say hello + thank you",
            "2 — Say what you liked",
            "3 — Opinion + because",
            "4 — Answer the question",
            "5 — Friendly ending",
          ],
          items: [
            { left: "Greetings from Berlin!", answer: "5 — Friendly ending" },
            { left: "Hi Alex! Thanks for your post!", answer: "1 — Say hello + thank you" },
            { left: "I could live in New York because I love big cities.", answer: "4 — Answer the question" },
            { left: "I liked the part about the skyline.", answer: "2 — Say what you liked" },
            { left: "I think the city is great because there is so much to see.", answer: "3 — Opinion + because" },
          ],
        },
        {
          type: "inline-choice",
          kind: "Lücken",
          title: "Complete Tom's comment",
          intro: "Choose the right word from the box for each gap.",
          bank: ["because", "Thanks", "liked", "Greetings", "think"],
          segments: [
            "Hi Alex! ",
            { gap: 0 },
            " for your post! I ",
            { gap: 1 },
            " the part about the hot dogs. I ",
            { gap: 2 },
            " New York is interesting ",
            { gap: 3 },
            " the buildings are so tall. ",
            { gap: 4 },
            " from Hamburg!",
          ],
          gaps: [
            { options: ["because", "Thanks", "liked", "Greetings", "think"], answer: "Thanks" },
            { options: ["because", "Thanks", "liked", "Greetings", "think"], answer: "liked" },
            { options: ["because", "Thanks", "liked", "Greetings", "think"], answer: "think" },
            { options: ["because", "Thanks", "liked", "Greetings", "think"], answer: "because" },
            { options: ["because", "Thanks", "liked", "Greetings", "think"], answer: "Greetings" },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Your opinion + because",
          intro: "Finish the sentences with YOUR ideas — always with because + a reason!",
          starters: [
            "I think New York is …",
            "I could / couldn't live in New York because …",
          ],
          help: "Ideen: exciting – aufregend · too loud – zu laut · too expensive – zu teuer · full of cool places – voller cooler Orte.",
        },
        {
          type: "paragraph-builder",
          kind: "Finale",
          title: "Write YOUR comment!",
          intro: "Now answer Alex! Build your comment step by step — use your ideas from Task 4.",
          paragraph: {
            title: "Your comment under Alex's post",
            goal: "All 5 steps, at least one because, friendly words.",
            sentences: [
              {
                label: "Step 1 — Say hello + thank you",
                starter: "Hi Alex!",
                hint: "Begrüßung + Danke für den Post.",
                example: "Hi Alex! Thanks for your great post!",
              },
              {
                label: "Step 2 — Say what you liked",
                starter: "I liked the part about",
                hint: "Was fandest du im Blog gut?",
                example: "I liked the part about Central Park.",
              },
              {
                label: "Step 3 — Your opinion + because",
                starter: "I think New York is",
                hint: "Deine Meinung + because + Grund!",
                example: "I think New York is exciting because there is so much to see.",
              },
              {
                label: "Step 4 — Answer Alex's question",
                starter: "I could / couldn't live there because",
                hint: "Könntest du dort leben? Warum (nicht)?",
                example: "I couldn't live there because it is too loud for me.",
              },
              {
                label: "Step 5 — Friendly ending",
                starter: "",
                hint: "Netter Schluss + Gruß.",
                example: "Keep writing! Greetings from Frankfurt!",
              },
            ],
          },
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
          kind: "Blog lesen",
          title: "Alex's blog: One week in New York — my honest opinion",
          intro: "Read Alex's post. Tap the underlined words for German help.",
          paragraphs: [
            [
              "Hi everyone! I'm Alex, 14, from Hamburg, and I have just spent one week in New York with my family. Here is my ",
              { w: "honest opinion", de: "ehrliche Meinung" },
              ".",
            ],
            [
              "First, the good things: The skyline at night is the most amazing thing I have ever seen. The food is fantastic — we ate pizza, bagels and the best cheesecake of my life. And Central Park is like a green ",
              { w: "island", de: "die Insel" },
              " in the middle of the crazy city.",
            ],
            [
              "But to be honest, New York also ",
              { w: "stressed me", de: "hat mich gestresst" },
              ". The city is incredibly loud, the streets are always full, and everything is expensive. A simple hot dog costs six dollars! After three days I really missed some ",
              { w: "peace and quiet", de: "Ruhe" },
              ".",
            ],
            [
              "So now I want to hear from you: Could you live in a city like New York — yes or no? Write a comment and tell me why!",
            ],
          ],
        },
        {
          type: "comment-view",
          kind: "Modell",
          title: "Lisa's comment — all 5 blocks",
          intro: "Lisa's comment is a perfect example: all five blocks, in order. Read it — then find the blocks in Task 1.",
          comments: [
            {
              user: "Lisa_2011",
              when: "2 hours ago",
              likes: 12,
              text: "Hi Alex! Thanks for your interesting post! I liked the part about the cheesecake — now I'm hungry! In my opinion, New York is perfect for a holiday because there is always something to do. But I could never live there because I need quiet places and nature around me. Maybe a small town near the sea is more my style. Keep writing — I can't wait for your next post! Greetings from Frankfurt!",
              reply: "This is exactly the kind of comment I love, Lisa — thanks! A small town near the sea sounds nice too. 😄",
            },
          ],
        },
        {
          type: "match-up",
          kind: "Analysieren",
          title: "Find the 5 blocks in Lisa's comment",
          intro: "Which building block is each quote from Lisa's comment?",
          options: [B1, B2, B3, B4, B5],
          items: [
            { left: "“Thanks for your interesting post!”", answer: B1 },
            { left: "“I liked the part about the cheesecake — now I'm hungry!”", answer: B2 },
            { left: "“In my opinion, New York is perfect for a holiday because …”", answer: B3 },
            { left: "“But I could never live there because I need quiet places …”", answer: B4 },
            { left: "“Keep writing — I can't wait for your next post!”", answer: B5 },
          ],
        },
        {
          type: "group-sort",
          kind: "Sortieren",
          title: "Sort the phrases into the blocks",
          intro: "Tap a phrase, then tap its block. Sort all eight, then press Check.",
          groups: [
            { label: B1, items: ["Thanks for your cool post!"] },
            {
              label: B2,
              items: [
                "I liked the part about the six-dollar hot dog.",
                "It's funny that you wrote about the loud streets.",
              ],
            },
            {
              label: B3,
              items: [
                "I don't agree with you because big cities are exciting.",
                "In my opinion, New York is too stressful because it never sleeps.",
              ],
            },
            { label: B4, items: ["I could live there because I love busy streets."] },
            { label: B5, items: ["Greetings from Munich!", "Can't wait for your next post!"] },
          ],
        },
        {
          type: "written",
          kind: "Umschreiben",
          title: "Make it polite!",
          intro: "These comments break the netiquette rules. Rewrite each one as a polite, helpful comment — the sentence starters help you.",
          starters: [
            "“Your post is boring.” → Thanks for your post, but in my opinion …",
            "“You are wrong, New York is not loud!” → I don't agree with you because …",
            "“cool” → I really liked … because …",
          ],
        },
        {
          type: "comment-fill",
          kind: "Halbfertig",
          title: "Finish Sam's comment",
          intro:
            "Sam pressed Post too early — half the comment is missing! Write into the gaps so it becomes a complete 5-block comment. Full sentences, your own ideas.",
          user: "Sam_NYC_Fan",
          when: "just now",
          segments: [
            "Hi Alex! Thanks for ",
            { key: "react", size: 24 },
            "! I liked the part about ",
            { key: "refer", size: 22 },
            " because ",
            { key: "reason", size: 26 },
            ". In my opinion, New York ",
            { key: "opinion", size: 34 },
            ". Greetings from ",
            { key: "close", size: 14 },
            "!",
          ],
          help: "Bonus: Sam forgot block 4 — can you sneak an answer to Alex's question (could Sam live there?) into one of the gaps?",
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Write YOUR comment!",
          intro: "Now answer Alex's question: could you live in a city like New York — yes or no? Write your own complete comment. Use all 5 blocks in the correct order.",
          min: 60,
          max: 80,
          placeholder: "Your comment…",
          comment: { replyTo: "One week in New York — my honest opinion" },
          chips: ["React", "Refer", "Opinion + because", "Answer", "Close"],
          checklist: [
            "All 5 blocks in the right order?",
            "At least one because?",
            "Answer to Alex's question?",
            "Polite — netiquette OK?",
            "60–80 words?",
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
          type: "video",
          kind: "Video lesson · English",
          title: "Anatomy of a Perfect Comment",
          intro: "Watch first: what separates a strong comment from a weak one — in English.",
          video: {
            src: `${VIDEO}/anatomy-of-a-perfect-comment.mp4`,
            caption: "The anatomy of a strong comment, block by block.",
          },
        },
        {
          type: "text",
          kind: "Blog lesen",
          title: "Alex's blog: New York — overrated or the greatest city on earth?",
          intro: "Read Alex's post. Tap the underlined words for German help.",
          paragraphs: [
            [
              "Hi everyone! I'm Alex, 14, from Hamburg, and I have just spent a week in New York. Before the trip, everybody told me it would be the best week of my life. Now I'm back — and I have ",
              { w: "mixed feelings", de: "gemischte Gefühle" },
              ".",
            ],
            [
              "Of course, some moments were unforgettable. When you see the skyline from the Brooklyn Bridge at sunset, you understand why millions of people dream of this city. The energy is incredible: street musicians, food from every country in the world, and people who all seem to be on an important ",
              { w: "mission", de: "die Mission, der Auftrag" },
              ".",
            ],
            [
              "But here is my problem: New York never gives you a break. The noise follows you everywhere, even into Central Park. Everything is ",
              { w: "shockingly", de: "erschreckend" },
              " expensive — our small hotel room cost more per night than a week of holidays in Denmark. And although the city is full of people, nobody really has time for you. In my opinion, New York is an amazing place to visit, but a hard place to live.",
            ],
            [
              "What do you think? Is New York ",
              { w: "overrated", de: "überbewertet" },
              ", or is it really the greatest city on earth? Could YOU live there? Comment below — I answer every comment!",
            ],
          ],
        },
        {
          type: "comment-view",
          kind: "Modell",
          title: "Two comments — one strong, one weak",
          intro: "Comment A got 31 likes and a reply from Alex. Comment B got zero — and no reply. Read both — the difference is the whole lesson.",
          comments: [
            {
              badge: "A",
              user: "Lisa_2011",
              when: "2 hours ago",
              likes: 31,
              text: "Thanks for this honest post, Alex! You wrote that nobody in New York really has time for you — that part surprised me, because in films the city always looks so friendly. I see your point about the noise, but I'm not sure the city is overrated: maybe it depends on what you need. I love busy places, so I could imagine living there for a few years — but probably not forever. Have you thought about visiting a smaller American city next time, like Boston? Anyway, great post — looking forward to your reply!",
              reply: "Boston is a great idea, Lisa — maybe next summer! And you're right: it probably depends on what you need.",
            },
            {
              badge: "B",
              user: "xX_Niko_Xx",
              when: "1 hour ago",
              likes: 0,
              text: "bro ur so wrong, NY is the best city EVER!!! everyone knows that. this post is pointless lol",
            },
          ],
        },
        {
          type: "match-up",
          kind: "Analysieren",
          title: "The anatomy of Comment A",
          intro: "Comment A uses all five building blocks. Which quote is which block?",
          options: [
            "1 · React to the post",
            "2 · Refer to a detail",
            "3 · Agree / disagree with reasons",
            "4 · Add your own — experience or question back",
            "5 · Close in a friendly way",
          ],
          items: [
            { left: "“Thanks for this honest post, Alex!”", answer: "1 · React to the post" },
            { left: "“You wrote that nobody in New York really has time for you …”", answer: "2 · Refer to a detail" },
            { left: "“I see your point about the noise, but I'm not sure the city is overrated …”", answer: "3 · Agree / disagree with reasons" },
            { left: "“Have you thought about visiting a smaller American city next time?”", answer: "4 · Add your own — experience or question back" },
            { left: "“Anyway, great post — looking forward to your reply!”", answer: "5 · Close in a friendly way" },
          ],
        },
        {
          type: "argument-pick",
          kind: "Diagnose",
          title: "Why did Comment B get zero likes?",
          intro: "Niko's comment collected zero likes — and Alex will probably never answer it. Diagnose it like a pro.",
          lead: "Tick the {n} real problems — and leave the false alarms alone.",
          labels: {
            good: "Yes — a real problem.",
            miss: "You missed this problem.",
            bad: "That's not actually a problem.",
            ignored: "Right — not a problem.",
          },
          args: [
            {
              correct: true,
              text: "He insults the post instead of criticising ideas (“this post is pointless”).",
              note: "Netiquette: criticise ideas, never the person — and never the post as a whole.",
            },
            {
              correct: true,
              text: "“EVER!!!” — capital letters and !!! read like shouting.",
              note: "Calm letters win arguments.",
            },
            {
              correct: true,
              text: "He gives no reasons — “everyone knows that” is not an argument.",
              note: "An opinion without reasons convinces nobody.",
            },
            {
              correct: false,
              text: "He disagrees with Alex.",
              note: "Disagreeing is completely fine — polite disagreement makes a comment section interesting.",
            },
            {
              correct: false,
              text: "He loves New York.",
              note: "Any opinion is allowed — the problem is how he says it, not what he thinks.",
            },
            {
              correct: false,
              text: "His comment is short.",
              note: "Short is fine. Empty is the problem: no detail, no reason, no question.",
            },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Refer and react",
          intro: "React to each statement from Alex's post: first refer to it (“You wrote that …”), then agree or disagree — with a reason. Two sentences each.",
          starters: [
            "“New York never gives you a break.” →",
            "“Although the city is full of people, nobody really has time for you.” →",
            "“New York is an amazing place to visit, but a hard place to live.” →",
          ],
        },
        {
          type: "written",
          kind: "Retten",
          title: "Rescue Comment B",
          intro: "Niko actually has an interesting opinion: he loves New York and disagrees with Alex. Rewrite his comment so it keeps his opinion but follows the rules of a strong comment — polite tone, a reference to the post, reasons, and a friendly ending (3–4 sentences).",
          answer: true,
        },
        {
          type: "essay-editor",
          kind: "Finale",
          title: "Join the discussion!",
          intro: "Write your own comment that answers Alex's questions: Is New York overrated? Could you live there?",
          min: 100,
          max: 120,
          placeholder: "Your comment…",
          comment: { replyTo: "New York — overrated or the greatest city on earth?" },
          chips: [
            "React to the post",
            "Refer: “You wrote that …”",
            "Opinion with TWO reasons",
            "Own experience or question back",
            "Friendly closing line",
          ],
          checklist: [
            "A reaction to the post?",
            "ONE specific detail quoted (“You wrote that …”)?",
            "Your opinion with at least TWO reasons?",
            "An own experience, example or question back to Alex?",
            "A friendly close — and polite everywhere, even where you disagree?",
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
          type: "comment-lab",
          title: "Get pinned by Alex!",
          intro:
            "Alex pins ONE comment under every post — the best one. Write your comment below: the five gems light up as your blocks appear, and the netiquette bot guards the thread. Light up all five, press Post — and the pin is yours.",
          post: {
            blog: "ALEX IN AMERICA — my blog",
            title: "The pin is waiting: your best comment, please!",
            meta: "posted on Friday · 2 comments",
            text: "You all know my opinion now: New York is amazing to visit, but hard to live in. Now it's your turn. The best comment — friendly, specific, with reasons and a real answer to my question — gets pinned to the top. So: could YOU live in New York? Go!",
          },
          comments: [
            {
              user: "MetsFan_Joe",
              when: "2 hours ago",
              likes: 18,
              text: "Hi Alex! Thanks for your post — I liked the part about the six-dollar hot dog. I think that's crazy because in Cologne a hot dog costs two euros. Greetings from Cologne!",
              reply: "Haha, true! But you didn't answer my question, Joe: could you live here? So close to the pin! 😄",
            },
            {
              user: "kiki_berlin",
              when: "1 hour ago",
              likes: 0,
              text: "cool",
              reply: "Cool… what exactly? 😅 Tell me more!",
            },
          ],
          help: "★ Tip: read how Alex answers Joe and kiki — it tells you exactly what he wants. Joe almost got the pin. What is he missing?",
        },
      ],
    },
  ],
};
