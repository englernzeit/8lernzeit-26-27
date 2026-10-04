/**
 * The best days of your life (Unit 2) — Reading: "The Lion roars"
 * (a school newspaper changes the school cafeteria).
 *
 * The same story at three levels, from the three worksheets:
 *   Step 1 (LE)        — short simple text, right/wrong, matching, word box
 *   Step 2 (G-Kurs)    — longer text, true/false/not-in-text, order the events
 *   Step 3 (E-Kurs)    — the full article as a real newspaper page, evidence,
 *                        summary, the interests of everybody involved
 *   Step 4 (Challenge) — write the next front page for your own school
 */

export default {
  title: "The Lion roars",

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
          title: "Before you read",
          intro:
            "Does your school have a newspaper, a blog or an Instagram page? Write one sentence.",
          help: "Hat deine Schule eine Zeitung, einen Blog oder eine Instagram-Seite?",
          starters: ["Yes, we have … / No, we don't, but …"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "Maya makes the news",
          intro:
            "Read about Maya and her school newspaper. Tap the underlined words for German help.",
          paragraphs: [
            [
              "This is Maya. She is 15 and she goes to Boston West High School.",
            ],
            [
              "Every Friday morning Maya meets six other students in Room 1201. They make the school ",
              { w: "newspaper", de: "die Zeitung" },
              ". Its name is “The Lion”.",
            ],
            [
              "Maya writes the ",
              { w: "articles", de: "die Artikel" },
              ". Tom takes the photos. Lisa is the ",
              { w: "editor", de: "die Redakteurin" },
              " — she says what goes in the newspaper.",
            ],
            [
              "In March Maya wrote about the school ",
              { w: "cafeteria", de: "die Mensa" },
              ". For three weeks she ",
              { w: "counted", de: "zählte" },
              " the food in the ",
              { w: "bin", de: "der Mülleimer" },
              ". Her article said: “Our school ",
              { w: "throws away", de: "wirft weg" },
              " 200 kilos of food every week!”",
            ],
            [
              "Many students read the article. Some parents wrote emails. The ",
              { w: "principal", de: "die Schulleiterin" },
              " was not happy.",
            ],
            [
              "But now the cafeteria has a food-sharing table. Students can leave food there for other students. Today the school throws away much less food.",
            ],
            [
              "Maya says: “People think a school newspaper is only a hobby. But we ",
              { w: "changed", de: "veränderten" },
              " something!”",
            ],
          ],
          help: "Tipp: Lies den Text zweimal. Beim zweiten Mal verstehst du mehr.",
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "Right or wrong?",
          intro: "Read each sentence. Is it right or wrong? Tap your answer.",
          help: "Richtig oder falsch? Tippe deine Antwort an.",
          columns: 2,
          questions: [
            { q: "Maya is 15 years old.", options: ["Right", "Wrong"], correct: 0 },
            { q: "The newspaper is called “The Tiger”.", options: ["Right", "Wrong"], correct: 1 },
            { q: "Maya writes the articles.", options: ["Right", "Wrong"], correct: 0 },
            { q: "Maya wrote about the sports hall.", options: ["Right", "Wrong"], correct: 1 },
            { q: "The school throws away 200 kilos of food every week.", options: ["Right", "Wrong"], correct: 0 },
            { q: "The principal was happy about the article.", options: ["Right", "Wrong"], correct: 1 },
          ],
        },
        {
          type: "tap-match",
          kind: "Verbinden",
          title: "Who does what?",
          intro: "Tap a person, then tap what this person does.",
          help: "Verbinde die Person mit der richtigen Aufgabe.",
          leftLabel: "Person",
          rightLabel: "What they do",
          pairs: [
            { left: "Maya", right: "writes the articles" },
            { left: "Tom", right: "takes the photos" },
            { left: "Lisa", right: "is the editor" },
            { left: "The principal", right: "was not happy" },
          ],
        },
        {
          type: "gap-fill",
          kind: "Lücken",
          title: "Fill in the words",
          intro: "Write the correct word in each gap. The word box helps you.",
          help: "Schreibe das richtige Wort in die Lücke.",
          bank: ["articles", "cafeteria", "Friday", "newspaper", "photos"],
          bankCap: "Word box",
          items: [
            { segments: ["The students meet every ", { answer: "Friday", size: 10 }, " morning."] },
            { segments: ["They make the school ", { answer: "newspaper", size: 12 }, "."] },
            { segments: ["Maya writes the ", { answer: "articles", size: 11 }, "."] },
            { segments: ["Tom takes the ", { answer: "photos", size: 10 }, "."] },
            { segments: ["Maya's article was about the ", { answer: "cafeteria", size: 12 }, "."] },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Short answers",
          intro: "Answer with one to three words.",
          help: "Antworte mit einem bis drei Wörtern.",
          answerLines: 1,
          questions: [
            { q: "Where do the students meet?", starter: "In …" },
            { q: "How long did Maya count the food?", starter: "For …" },
            { q: "What is new in the cafeteria now?", starter: "A …" },
            { q: "Who wrote emails?", starter: "Some …" },
          ],
        },
        {
          type: "group-sort",
          kind: "Problem lösen",
          title: "Good idea or bad idea?",
          intro:
            "THE PROBLEM: The food-sharing table works. But at 3 p.m. the school closes, and all the food still on the table goes in the bin. Sort the ideas, then press Check.",
          help: "Um 15 Uhr schließt die Schule — und das Essen, das noch auf dem Tisch liegt, kommt in den Müll.",
          groups: [
            {
              label: "👍 Good idea",
              items: [
                "Students can take the food home at 2:45 p.m.",
                "A teacher brings the food to an animal shelter.",
              ],
            },
            {
              label: "👎 Bad idea",
              items: [
                "The cafeteria cooks more food.",
                "Nobody uses the table any more.",
              ],
            },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro: "Now write YOUR solution in 3 sentences. Use the frame.",
          help: "Hilfe: to take home = mitnehmen · to give away = verschenken · a box = eine Box · an animal shelter = ein Tierheim · to ask the principal = die Schulleiterin fragen",
          starters: ["My idea is …", "This is good because …", "First, we …"],
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
          intro: "What could students write about in a school newspaper? Write down two ideas.",
          help: "Worüber könnten Schüler*innen in einer Schülerzeitung schreiben?",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "How a school newspaper changed the cafeteria",
          intro:
            "Read the article from “The Lion”. Tap the underlined words for German help.",
          paragraphs: [
            [
              "Every Friday morning, seven students meet in Room 1201 before the first lesson. They are the team of The Lion, the school newspaper of Boston West High School. Their motto is: “By students, for students.”",
            ],
            [
              "Maya Reyes, 15, joined the paper last September because she wanted to write about music. Six months later she is the ",
              { w: "news editor", de: "die Nachrichtenredakteurin" },
              ". “I thought it would be interviews with cool bands,” she laughs. “Now I spend my Fridays ",
              { w: "checking facts", de: "Fakten überprüfen" },
              " and arguing about ",
              { w: "headlines", de: "Überschriften" },
              ".”",
            ],
            [
              "In March, The Lion ",
              { w: "published", de: "veröffentlichte" },
              " Maya's biggest story. For three weeks she had collected information about the school cafeteria: how much food was thrown away, how many students ",
              { w: "skipped lunch", de: "das Mittagessen ausfallen ließen" },
              ", and what the meals really cost. Her article showed that the school threw away almost 200 kilos of food every week.",
            ],
            [
              "Before the article went to print, however, there was a problem. Principal Snow asked the team to remove one sentence — a ",
              { w: "quote", de: "ein Zitat" },
              " from a kitchen worker who said that the school had known about the problem for years.",
            ],
            [
              "“We understood her,” says Mr Delgado, the teacher who helps the team. “The quote could have ",
              { w: "got that woman into trouble", de: "der Frau Ärger gebracht" },
              ". But the students had to decide themselves.” After a long discussion, they printed the article without the quote.",
            ],
            [
              "The reaction was immediate. Students ",
              { w: "shared", de: "teilten" },
              " the article online, parents wrote emails, and even the local newspaper called. Today the cafeteria has a food-sharing table, and ",
              { w: "food waste", de: "der Lebensmittelabfall" },
              " has fallen by a third. Maya keeps the article in her locker. “People think a school newspaper is just a hobby,” she says. “But we changed something. That's not a hobby.”",
            ],
          ],
        },
        {
          type: "multiple-choice",
          kind: "Quiz",
          title: "True, false or not in the text?",
          intro:
            "Careful: some sentences are not wrong — the text simply does not say anything about them.",
          help: "Achtung: Manche Sätze sind nicht falsch — sie stehen einfach nicht im Text.",
          questions: [
            { q: "The team meets before lessons start.", options: ["True", "False", "Not in the text"], correct: 0 },
            { q: "Maya joined the newspaper to write about music.", options: ["True", "False", "Not in the text"], correct: 0 },
            { q: "Maya is paid for her work.", options: ["True", "False", "Not in the text"], correct: 2 },
            { q: "She collected information for three weeks.", options: ["True", "False", "Not in the text"], correct: 0 },
            { q: "The principal wanted the whole article removed.", options: ["True", "False", "Not in the text"], correct: 1 },
            { q: "Food waste has fallen since the article.", options: ["True", "False", "Not in the text"], correct: 0 },
          ],
        },
        {
          type: "written",
          kind: "Schreiben",
          title: "Answer in full sentences",
          intro: "Answer in full sentences. The sentence starters help you.",
          help: "Antworte in ganzen Sätzen. Nutze die Satzanfänge.",
          answerLines: 1,
          questions: [
            { q: "What did Maya expect when she joined the paper?", starter: "She expected …" },
            { q: "What did her article show?", starter: "Her article showed that …" },
            { q: "Why did Principal Snow want the quote removed?", starter: "She wanted it removed because …" },
            { q: "What has changed in the cafeteria?", starter: "Today …" },
          ],
        },
        {
          type: "match-up",
          kind: "Wörter finden",
          title: "Find the words",
          intro: "Which word from the text means this? Choose it from the list.",
          help: "Welches Wort aus dem Text bedeutet das?",
          options: ["to publish", "a quote", "to skip lunch", "immediate"],
          items: [
            { left: "to print something for everybody to read", answer: "to publish" },
            { left: "the exact words somebody said", answer: "a quote" },
            { left: "not to eat lunch", answer: "to skip lunch" },
            { left: "straight away, very fast", answer: "immediate" },
          ],
        },
        {
          type: "event-order",
          kind: "Reihenfolge",
          title: "The steps of the story",
          intro: "Put the events in the right order, then press Check.",
          help: "Bringe die Ereignisse in die richtige Reihenfolge.",
          events: [
            { text: "Maya collected information about the cafeteria." },
            { text: "Principal Snow asked the team to remove a sentence." },
            { text: "The team printed the article without the quote." },
            { text: "Parents wrote emails and the local newspaper called." },
            { text: "The cafeteria got a food-sharing table." },
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Collect two ideas",
          intro:
            "THE PROBLEM: Maya's article changed the cafeteria — but now nobody wants to talk to The Lion any more. Students are afraid of getting into trouble, just like the kitchen worker. Without information there are no articles. How can the team get information without putting people in danger?",
          help: "Wie kann das Team an Informationen kommen, ohne jemanden in Gefahr zu bringen?",
          starters: ["Idea 1 —", "Idea 2 —"],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Write your solution",
          intro:
            "Choose your best idea and write your solution in 3 sentences: What do you do? Why does it help? What is the first step?",
          help: "Useful phrases: Our solution is … · This helps because … · Nobody has to … · First, we would … · Then …",
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
          title: "Before you read",
          intro:
            "A school newspaper is written by students, but printed at school. Who should decide what goes in it? Write down your first idea in one sentence.",
          starters: ["I think …"],
        },
        {
          type: "text",
          kind: "Lesen",
          title: "How a school newspaper changed the cafeteria",
          intro: "Read the article. Tap the underlined words for German help.",
          blog: {
            author: "Maya Reyes · News editor",
            date: "March issue · Boston West High School",
            about: {
              title: "About The Lion",
              bio: "Seven students, one room, one motto: “By students, for students.” The Lion has been the voice of Boston West High School since 1998.",
            },
            categories: [
              { name: "School life", active: true },
              "Cafeteria",
              "Clubs",
              "Sports",
            ],
            popular: [
              { icon: "🍽️", title: "200 kilos a week: the cafeteria story", date: "March" },
              { icon: "🎸", title: "The band that played on the roof", date: "February" },
              { icon: "🏃", title: "Why first period should start later", date: "January" },
            ],
          },
          paragraphs: [
            [
              "Every Friday morning, long before the first lesson, seven students meet in Room 1201. They are the ",
              { w: "editorial team", de: "die Redaktion" },
              " of The Lion, the newspaper of Boston West High School. The motto on their door reads: “By students, for students.”",
            ],
            [
              "Maya Reyes, 15, joined last September because she wanted to interview bands. Six months later she is the news editor. “I thought this would be about music,” she laughs. “Now I spend my Fridays checking facts and arguing about headlines.”",
            ],
            [
              "In March, The Lion published Maya's biggest story so far. For three weeks she had ",
              { w: "gathered data", de: "Daten gesammelt" },
              " on the school cafeteria: how much food ended up in the bin, how many students skipped lunch altogether, what the meals actually cost. Her article showed that the school was throwing away almost 200 kilos of food every single week.",
            ],
            [
              "Before the article went to print, however, there was a problem. Principal Snow asked the team to ",
              { w: "delete", de: "streichen" },
              " one sentence: a quote from a kitchen worker claiming that the school had been ",
              { w: "aware of", de: "sich bewusst über" },
              " the problem for years.",
            ],
            [
              "“We understood the principal's point,” says Mr Delgado, the teacher who ",
              { w: "supervises", de: "betreut" },
              " the paper. “That quote could have cost the woman her job. But it wasn't my decision — the students had to make it themselves.” After a long discussion the team printed the article without the quote, but added a line explaining that a ",
              { w: "source", de: "die Quelle" },
              " had asked to remain ",
              { w: "anonymous", de: "anonym" },
              ".",
            ],
            [
              "The reaction was ",
              { w: "immediate", de: "sofort" },
              ". Students shared the article online, parents sent emails, and the local newspaper rang the school. Today the cafeteria has a food-sharing table and waste has dropped by a third. Maya keeps a printed copy in her locker. “People think a school paper is just a hobby,” she says. “But we actually changed something. That's not a hobby.”",
            ],
          ],
        },
        {
          type: "written",
          kind: "Verstehen",
          title: "Understanding the text",
          intro: "Answer in your own words, in full sentences.",
          answerLines: 2,
          questions: [
            { q: "What did Maya expect from the newspaper — and what does she really do?", starter: "She expected … but now …" },
            { q: "How did Maya get the information for her article?", starter: "She …" },
            { q: "Why did Principal Snow want one sentence deleted?", starter: "Because …" },
            { q: "Explain the compromise the team found.", starter: "They …" },
          ],
        },
        {
          type: "written",
          kind: "Belege finden",
          title: "Find the evidence",
          intro:
            "Prove each statement with the text. Quote the words from the article that show it.",
          help: "Tipp: Zitiere genau — nimm die Wörter so, wie sie im Text stehen.",
          answerLines: 1,
          questions: [
            { q: "The newspaper is made by students for students.", starter: "“…”" },
            { q: "The article had effects outside the school.", starter: "“…”" },
            { q: "The teacher did not make the decision for the team.", starter: "“…”" },
            { q: "The article had real results.", starter: "“…”" },
          ],
        },
        {
          type: "written",
          kind: "Analysieren",
          title: "Whose interests?",
          intro:
            "Four people are involved in the conflict. What does each of them want — and why?",
          answerLines: 2,
          questions: [
            { q: "Maya (news editor)", starter: "She wants … because …" },
            { q: "Principal Snow", starter: "She wants … because …" },
            { q: "the kitchen worker", starter: "She wants … because …" },
            { q: "Mr Delgado (teacher)", starter: "He wants … because …" },
          ],
        },
        {
          type: "essay-editor",
          kind: "Zusammenfassen",
          title: "Summary",
          intro:
            "Summarise the text in 50–60 words: (a) what happened, (b) what the conflict was, (c) what the result was. Do not copy sentences from the text.",
          min: 45,
          max: 70,
          placeholder: "The Lion is the school newspaper of …",
          chips: [
            "The article showed that …",
            "The conflict was …",
            "In the end …",
            "As a result …",
          ],
          checklist: [
            "I wrote what happened.",
            "I wrote what the conflict was.",
            "I wrote what the result was.",
            "I used my own words.",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen",
          title: "Develop a solution",
          intro:
            "THE PROBLEM: Maya's article worked — but it created a new one. Since the kitchen worker almost lost her job, nobody at school wants to give The Lion information any more. Teachers, cleaners and students are all afraid of trouble. The team still wants to report on real problems, but they cannot promise anyone that nothing will happen to them.",
          starters: [
            "What the team should do: …",
            "Why this solves the problem: …",
            "The first concrete step: …",
          ],
        },
        {
          type: "written",
          kind: "Problem lösen · Challenge",
          title: "What could go wrong?",
          intro:
            "Every solution has a weak point. Name one thing that could go wrong with your idea — and what you would do about it.",
          help: "Think about: Would people really trust an anonymous letterbox? · What if somebody uses it to spread lies? · Who checks whether the information is true? · Does the school have to agree?",
          answerLines: 2,
          questions: [
            { q: "One thing that could go wrong:", starter: "If …" },
            { q: "What I would do about it:", starter: "To stop that, we would …" },
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
          type: "essay-editor",
          kind: "Kreativ · Challenge",
          title: "The front page of YOUR school paper",
          intro:
            "You are the news editor of your school's newspaper. Choose one real thing at your school that should change — and write the opening of the article: a headline and the first paragraph.",
          min: 50,
          max: 90,
          placeholder: "HEADLINE: …\n\nEvery morning at our school …",
          chips: [
            "Our school throws away …",
            "Students say that …",
            "For three weeks we counted …",
            "Nobody has ever asked …",
            "That has to change.",
          ],
          checklist: [
            "My article has a headline.",
            "I wrote what the problem is.",
            "I gave one number or one example.",
            "I quoted somebody (“…”).",
            "A reader knows what should change.",
          ],
          help: "★ Bonus: a good headline is short and makes you want to read on. Try writing three and choose the best.",
        },
      ],
    },
  ],
};
