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

    // More variety: explorers, inventions, leaders
    { q: "Which explorer sailed for Spain and reached the Americas?", a: "Christopher Columbus", options: ["Christopher Columbus", "Vasco da Gama", "Leif Erikson", "Magellan"] },
    { q: "Who invented the telephone?", a: "Alexander Graham Bell", options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Benjamin Franklin"] },
    { q: "Which American president was on Mount Rushmore?", a: "George Washington", options: ["George Washington", "Harry Truman", "Thomas Jefferson", "John Adams"] },
    { q: "Which year did the Titanic sink?", a: "1912", options: ["1905", "1912", "1920", "1931"] },
    { q: "Who was the first woman aviator?", a: "Amelia Earhart", options: ["Amelia Earhart", "Bessie Coleman", "Jackie Cochran", "Hedy Lamarr"] },
    { q: "Which country hosted the first Olympics in ancient times?", a: "Greece", options: ["Greece", "Rome", "Egypt", "Persia"] },
    { q: "Who was the king of England who had six wives?", a: "Henry VIII", options: ["Henry VIII", "Richard III", "Edward VI", "John"] },
    { q: "Which document declared American independence?", a: "Declaration of Independence", options: ["Declaration of Independence", "Constitution", "Bill of Rights", "Magna Carta"] },
    { q: "What year did the Berlin Wall fall?", a: "1989", options: ["1985", "1989", "1991", "1993"] },
    { q: "Who was the first queen of a unified Egypt?", a: "Cleopatra", options: ["Hatshepsut", "Cleopatra", "Nefertiti", "Ankhesenamun"] },
    { q: "Which explorer discovered the Americas for Europe?", a: "Christopher Columbus", options: ["Christopher Columbus", "John Cabot", "Leif Erikson", "Vasco Balboa"] },
    { q: "Which famous inventor created many inventions including light bulb?", a: "Thomas Edison", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"] },
    { q: "Who was the first President of the United States?", a: "George Washington", options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"] },
    { q: "Which war was fought between North and South USA?", a: "Civil War", options: ["Civil War", "Revolutionary War", "Spanish-American War", "World War I"] },
    { q: "Who led India to independence?", a: "Mahatma Gandhi", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel"] },
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

    // More variety: wars, treaties, revolutions
    { q: "What document freed enslaved people in the U.S.?", a: "Emancipation Proclamation", options: ["Emancipation Proclamation", "Bill of Rights", "13th Amendment", "Civil Rights Act"] },
    { q: "Which war lasted approximately 100 years?", a: "Hundred Years' War", options: ["Hundred Years' War", "Thirty Years' War", "Seven Years' War", "Crimean War"] },
    { q: "Who was the first democratically elected leader of South Africa?", a: "Nelson Mandela", options: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Kofi Annan"] },
    { q: "Which revolution occurred in 1917 in Russia?", a: "Bolshevik Revolution", options: ["Bolshevik Revolution", "French Revolution", "American Revolution", "Chinese Revolution"] },
    { q: "Who led the Italian unification?", a: "Giuseppe Garibaldi", options: ["Giuseppe Garibaldi", "Benito Mussolini", "Victor Emmanuel", "Cavour"] },
    { q: "Which Spanish conquistador conquered the Aztecs?", a: "Hernán Cortés", options: ["Hernán Cortés", "Francisco Pizarro", "Bartolomé de las Casas", "Juan Perón"] },
    { q: "Who invented the printing press?", a: "Johannes Gutenberg", options: ["Johannes Gutenberg", "Nicolaus Copernicus", "Galileo Galilei", "Isaac Newton"] },
    { q: "Which Scottish inventor revolutionized steam engines?", a: "James Watt", options: ["James Watt", "George Stephenson", "Richard Arkwright", "Samuel Morse"] },
    { q: "Which American wrote the Declaration of Independence?", a: "Thomas Jefferson", options: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"] },
    { q: "Who was the first emperor of China?", a: "Qin Shi Huang", options: ["Qin Shi Huang", "Wu Zetian", "Han Wudi", "Sun Yat-sen"] },
    { q: "What treaty ended World War I?", a: "Treaty of Versailles", options: ["Treaty of Versailles", "Treaty of Paris", "Munich Agreement", "Molotov-Ribbentrop Pact"] },
    { q: "Which president ended slavery in the U.S.?", a: "Abraham Lincoln", options: ["Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes"] },
    { q: "What period followed the fall of Rome?", a: "Middle Ages", options: ["Middle Ages", "Renaissance", "Dark Ages only", "Classical period"] },
    { q: "Which culture built the pyramids?", a: "Ancient Egyptians", options: ["Ancient Egyptians", "Romans", "Greeks", "Persians"] },
    { q: "Who discovered penicillin?", a: "Alexander Fleming", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"] },
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

    // More variety: empires, philosophers, dynasties
    { q: "Which empire built Machu Picchu?", a: "Inca Empire", options: ["Inca Empire", "Maya Empire", "Aztec Empire", "Olmec Civilization"] },
    { q: "Which philosopher wrote The Republic?", a: "Plato", options: ["Socrates", "Plato", "Aristotle", "Epicurus"] },
    { q: "What was the longest-reigning Chinese dynasty?", a: "Zhou", options: ["Qin", "Han", "Song", "Zhou"] },
    { q: "Which explorer sailed around the Cape of Good Hope?", a: "Vasco da Gama", options: ["Vasco da Gama", "Bartolomeu Dias", "Pedro Cabral", "Afonso de Albuquerque"] },
    { q: "Who was the Arab military leader during the Crusades?", a: "Saladin", options: ["Saladin", "Nur ad-Din", "Qutuz", "Al-Kamil"] },
    { q: "Which Roman Emperor moved the capital to Constantinople?", a: "Constantine I", options: ["Constantine I", "Diocletian", "Theodosius", "Hadrian"] },
    { q: "What was the Renaissance movement's focus?", a: "Human potential and classical learning", options: ["Religious reform", "Human potential and classical learning", "Military conquest", "Trade expansion"] },
    { q: "Which philosopher said 'I think, therefore I am'?", a: "René Descartes", options: ["René Descartes", "Immanuel Kant", "Friedrich Nietzsche", "Arthur Schopenhauer"] },
    { q: "Which dynasty succeeded the Qin in China?", a: "Han", options: ["Zhou", "Song", "Han", "Tang"] },
    { q: "Which ancient wonder is still standing?", a: "Great Pyramid of Giza", options: ["Great Pyramid of Giza", "Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria"] },
    { q: "What marked the end of feudalism?", a: "Renaissance and exploration", options: ["Renaissance and exploration", "Industrial Revolution", "Enlightenment", "Reformation"] },
    { q: "Who discovered the New World for Europeans?", a: "Christopher Columbus", options: ["Christopher Columbus", "Amerigo Vespucci", "Leif Erikson", "John Cabot"] },
    { q: "Which explorer led the first voyage around the world?", a: "Ferdinand Magellan", options: ["Ferdinand Magellan", "Vasco da Gama", "Columbus", "Drake"] },
    { q: "What was the Holocaust?", a: "Nazi genocide of Jews", options: ["Nazi genocide of Jews", "War in Middle East", "Famine in Asia", "Disease outbreak"] },
    { q: "Which country's empire was the largest?", a: "British Empire", options: ["Roman Empire", "Ottoman Empire", "British Empire", "Mongol Empire"] },
  ],
};

export default historyQuestions;
