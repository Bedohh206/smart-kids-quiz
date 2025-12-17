const computerQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What does a computer use to store information?",
      a: "Memory",
      options: ["Memory", "Paper", "Pencil", "Light"],
    },
    {
      q: "Which device is used to move the cursor?",
      a: "Mouse",
      options: ["Keyboard", "Mouse", "Monitor", "Printer"],
    },
    {
      q: "Which part of the computer shows the screen?",
      a: "Monitor",
      options: ["Keyboard", "CPU", "Monitor", "Mouse"],
    },
    {
      q: "What does CPU stand for?",
      a: "Central Processing Unit",
      options: [
        "Central Processing Unit",
        "Control Power Unit",
        "Central Print Unit",
        "Computer Program Unit",
      ],
    },
    {
      q: "Which device is used for typing?",
      a: "Keyboard",
      options: ["Keyboard", "Mouse", "Speaker", "Camera"],
    },
    {
      q: "What is the brain of the computer?",
      a: "CPU",
      options: ["Mouse", "Keyboard", "CPU", "Monitor"],
    },
    {
      q: "Which device prints documents?",
      a: "Printer",
      options: ["Mouse", "Speaker", "Printer", "Keyboard"],
    },
    {
      q: "Which computer part plays sound?",
      a: "Speaker",
      options: ["Speaker", "Keyboard", "Monitor", "Mouse"],
    },
    {
      q: "Which of these is an input device?",
      a: "Keyboard",
      options: ["Speaker", "Monitor", "Keyboard", "Printer"],
    },
    {
      q: "What does a computer run?",
      a: "Programs",
      options: ["Programs", "Food", "Water", "Plants"],
    },

    // 40 easy fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Easy #${i + 11}: Which device is an input device?`,
      a: "Mouse",
      options: ["Mouse", "Printer", "Speaker", "Monitor"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What is the permanent storage of a computer?",
      a: "Hard drive",
      options: ["RAM", "CPU", "Hard drive", "Cache"],
    },
    {
      q: "What does RAM stand for?",
      a: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Read And Modify",
        "Run All Memory",
        "Real Application Machine",
      ],
    },
    {
      q: "What is the main language of computers?",
      a: "Binary",
      options: ["Binary", "English", "Spanish", "Hexadecimal"],
    },
    {
      q: "Which component connects a computer to the internet?",
      a: "Network card",
      options: ["CPU", "RAM", "Network card", "Printer"],
    },
    {
      q: "What type of device is a joystick?",
      a: "Input device",
      options: ["Input device", "Output device", "Storage device", "Power device"],
    },
    {
      q: "What does GUI stand for?",
      a: "Graphical User Interface",
      options: [
        "Graphical User Interface",
        "General User Input",
        "Global User Internet",
        "General Utility Interface",
      ],
    },
    {
      q: "What is used to store data temporarily?",
      a: "RAM",
      options: ["RAM", "SSD", "Monitor", "Router"],
    },
    {
      q: "Which software helps you browse websites?",
      a: "Web browser",
      options: ["Editor", "Calculator", "Web browser", "Terminal"],
    },
    {
      q: "Which file type is used for images?",
      a: "PNG",
      options: ["TXT", "EXE", "PNG", "MP3"],
    },
    {
      q: "What is phishing?",
      a: "A cyber attack to steal information",
      options: [
        "A video game",
        "A cyber attack to steal information",
        "A programming language",
        "A computer virus",
      ],
    },

    // 40 medium fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Medium #${i + 11}: Which of these is a storage device?`,
      a: "SSD",
      options: ["SSD", "Monitor", "Mouse", "Keyboard"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which part of the CPU performs arithmetic and logic operations?",
      a: "ALU",
      options: ["ALU", "CU", "RAM", "BIOS"],
    },
    {
      q: "Which protocol is used to transfer web pages?",
      a: "HTTP",
      options: ["HTTP", "FTP", "SMTP", "SSH"],
    },
    {
      q: "Which language is closest to machine code?",
      a: "Assembly language",
      options: [
        "Python",
        "Assembly language",
        "JavaScript",
        "HTML",
      ],
    },
    {
      q: "What is encryption used for?",
      a: "Protecting data",
      options: [
        "Protecting data",
        "Deleting data",
        "Slowing down data",
        "Copying data",
      ],
    },
    {
      q: "Which database language is used to manage data?",
      a: "SQL",
      options: ["SQL", "CSS", "Java", "XML"],
    },
    {
      q: "What does CPU scheduling manage?",
      a: "Process execution",
      options: [
        "Process execution",
        "Computer cooling",
        "Power supply",
        "Internet speed",
      ],
    },
    {
      q: "Which structure is used for organizing and storing data efficiently?",
      a: "Data structure",
      options: [
        "Data structure",
        "Data link",
        "Data machine",
        "Data control",
      ],
    },
    {
      q: "What is Big O notation used for?",
      a: "Measuring algorithm efficiency",
      options: [
        "Measuring algorithm efficiency",
        "Measuring file size",
        "Measuring RAM speed",
        "Measuring internet speed",
      ],
    },
    {
      q: "What is a computer virus?",
      a: "A malicious program that spreads",
      options: [
        "A harmless file",
        "A video format",
        "A malicious program that spreads",
        "A programming language",
      ],
    },
    {
      q: "What is cloud computing?",
      a: "Using remote servers over the internet",
      options: [
        "Using local machines only",
        "Using remote servers over the internet",
        "Turning off computers remotely",
        "Running programs offline only",
      ],
    },

    // 40 hard fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Hard #${i + 11}: What type of cybersecurity attack steals user data?`,
      a: "Phishing",
      options: ["Phishing", "Debugging", "Updating", "Formatting"],
    })),
  ],
};

export default computerQuestions;
