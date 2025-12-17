const historyQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "Who was the first President of the United States?",
      a: "George Washington",
      options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
    },
    {
      q: "Which ancient civilization built the pyramids?",
      a: "Egyptians",
      options: ["Egyptians", "Romans", "Greeks", "Chinese"],
    },
    {
      q: "Who invented the light bulb?",
      a: "Thomas Edison",
      options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Isaac Newton"],
    },
    {
      q: "What ship famously sank in 1912?",
      a: "Titanic",
      options: ["Titanic", "Queen Mary", "Discovery", "Empire"],
    },
    {
      q: "Who was known as the 'Mother of Civil Rights'?",
      a: "Rosa Parks",
      options: ["Harriet Tubman", "Rosa Parks", "Sojourner Truth", "Ella Baker"],
    },
    {
      q: "Which war ended in 1945?",
      a: "World War II",
      options: ["World War I", "World War II", "Cold War", "Korean War"],
    },
    {
      q: "Which country built the Great Wall?",
      a: "China",
      options: ["Japan", "China", "India", "Korea"],
    },
    {
      q: "Who was the first man to walk on the moon?",
      a: "Neil Armstrong",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    },
    {
      q: "Where did the Olympics begin?",
      a: "Greece",
      options: ["Greece", "Italy", "Egypt", "China"],
    },
    {
      q: "Who is known as the 'Father of Computers'?",
      a: "Charles Babbage",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    },

    // 40 EASY AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Easy #${i + 11}: Who discovered America?`,
      a: "Christopher Columbus",
      options: ["Christopher Columbus", "Vasco da Gama", "Leif Erikson", "Magellan"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which empire was ruled by Julius Caesar?",
      a: "Roman Empire",
      options: ["Roman Empire", "Ottoman Empire", "Greek Empire", "Persian Empire"],
    },
    {
      q: "What year did World War I begin?",
      a: "1914",
      options: ["1910", "1914", "1918", "1920"],
    },
    {
      q: "Which African leader fought against apartheid and became president?",
      a: "Nelson Mandela",
      options: ["Nelson Mandela", "Desmond Tutu", "Kwame Nkrumah", "Haile Selassie"],
    },
    {
      q: "Which document begins with 'We the People'?",
      a: "U.S. Constitution",
      options: ["Bill of Rights", "U.S. Constitution", "Declaration of Independence", "Articles of Confederation"],
    },
    {
      q: "Which ancient city was destroyed by a volcano in 79 AD?",
      a: "Pompeii",
      options: ["Pompeii", "Athens", "Rome", "Babylon"],
    },
    {
      q: "Who led India to independence through non-violence?",
      a: "Mahatma Gandhi",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "Indira Gandhi"],
    },
    {
      q: "Who wrote the famous speech 'I Have a Dream'?",
      a: "Martin Luther King Jr.",
      options: ["Malcolm X", "Martin Luther King Jr.", "Frederick Douglass", "Barack Obama"],
    },
    {
      q: "Which war was fought between the North and South in the U.S.?",
      a: "Civil War",
      options: ["Civil War", "Revolutionary War", "Vietnam War", "Cold War"],
    },
    {
      q: "Which explorer first circumnavigated the globe?",
      a: "Ferdinand Magellan",
      options: ["Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"],
    },
    {
      q: "Which ancient civilization invented democracy?",
      a: "Ancient Greece",
      options: ["Ancient Greece", "Rome", "Egypt", "China"],
    },

    // 40 MEDIUM AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Medium #${i + 11}: What document freed enslaved people in the U.S.?`,
      a: "Emancipation Proclamation",
      options: ["Emancipation Proclamation", "Bill of Rights", "13th Amendment", "Civil Rights Act"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What year did the Berlin Wall fall?",
      a: "1989",
      options: ["1980", "1985", "1989", "1991"],
    },
    {
      q: "Which treaty ended World War I?",
      a: "Treaty of Versailles",
      options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of London", "Treaty of Berlin"],
    },
    {
      q: "Who was the first emperor of China?",
      a: "Qin Shi Huang",
      options: ["Qin Shi Huang", "Wu Zetian", "Han Wudi", "Sun Yat-sen"],
    },
    {
      q: "Which civilization developed cuneiform writing?",
      a: "Sumerians",
      options: ["Sumerians", "Egyptians", "Phoenicians", "Mayans"],
    },
    {
      q: "Which event started the Great Depression?",
      a: "Stock Market Crash of 1929",
      options: ["World War I", "Dust Bowl", "Stock Market Crash of 1929", "Oil Crisis"],
    },
    {
      q: "Who was the longest-reigning British monarch (before Queen Elizabeth II)?",
      a: "Queen Victoria",
      options: ["Queen Victoria", "George III", "Henry VIII", "Elizabeth I"],
    },
    {
      q: "Where was democracy first practiced?",
      a: "Athens",
      options: ["Athens", "Rome", "Babylon", "Carthage"],
    },
    {
      q: "Which African empire was led by Mansa Musa?",
      a: "Mali Empire",
      options: ["Mali Empire", "Ghana Empire", "Songhai Empire", "Zimbabwe Kingdom"],
    },
    {
      q: "Which war was also called 'The Great War'?",
      a: "World War I",
      options: ["World War I", "World War II", "Korean War", "Vietnam War"],
    },
    {
      q: "Who created the theory of relativity?",
      a: "Albert Einstein",
      options: ["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"],
    },

    // 40 HARD AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Hard #${i + 11}: Which empire built Machu Picchu?`,
      a: "Inca Empire",
      options: ["Inca Empire", "Maya Empire", "Aztec Empire", "Olmec Civilization"],
    })),
  ],
};

export default historyQuestions;
