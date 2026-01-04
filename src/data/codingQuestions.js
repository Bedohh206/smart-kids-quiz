// Coding Questions - Two Modes: Kids & Advanced
// Kids Mode: Elementary (ages 6-8) - Basic computer concepts, simple logic
// Advanced Mode: Middle/High School (ages 13-14) - Programming concepts, algorithms, coding basics

const codingQuestions = {
  // =========================================
  // KIDS MODE - Elementary Coding Concepts
  // =========================================
  
  // ------------------------------
  // KIDS LEVEL 1 — EASY (50 QUESTIONS)
  // ------------------------------
  kids_level1: [
    { q: "What does a computer use to follow steps?", a: "Instructions", options: ["Guesses", "Instructions", "Magic", "Pictures"] },
    { q: "What is a set of instructions called?", a: "Program", options: ["Game", "Program", "Song", "Story"] },
    { q: "What does a loop do in coding?", a: "Repeats instructions", options: ["Stops code", "Repeats instructions", "Deletes code", "Makes noise"] },
    { q: "What is a mistake in code called?", a: "Bug", options: ["Feature", "Bug", "Loop", "Variable"] },
    { q: "What stores information in a program?", a: "Variable", options: ["Loop", "Variable", "Bug", "Function"] },
    { q: "What is fixing bugs called?", a: "Debugging", options: ["Breaking", "Debugging", "Looping", "Coding"] },
    { q: "What is code that makes a decision called?", a: "If statement", options: ["Loop", "Variable", "If statement", "Function"] },
    { q: "What is a reusable block of code called?", a: "Function", options: ["Bug", "Loop", "Variable", "Function"] },
    { q: "What does an algorithm do?", a: "Solves a problem", options: ["Creates bugs", "Solves a problem", "Deletes files", "Plays music"] },
    { q: "What language do computers understand?", a: "Binary", options: ["English", "Spanish", "Binary", "French"] },
    
    { q: "What are the numbers in binary?", a: "0 and 1", options: ["1 and 2", "0 and 1", "A and B", "Yes and No"] },
    { q: "What is HTML used for?", a: "Web pages", options: ["Games", "Web pages", "Music", "Videos"] },
    { q: "What does CSS style?", a: "Web pages", options: ["Programs", "Web pages", "Robots", "Phones"] },
    { q: "What is a sequence in coding?", a: "Steps in order", options: ["Random steps", "Steps in order", "No steps", "Backward steps"] },
    { q: "What is output in coding?", a: "What the program shows", options: ["What you type", "What the program shows", "The error", "The bug"] },
    { q: "What is input in coding?", a: "What you give the program", options: ["What you give the program", "What the computer gives", "The error", "The output"] },
    { q: "What does JavaScript do?", a: "Makes websites interactive", options: ["Creates documents", "Makes websites interactive", "Edits photos", "Plays music"] },
    { q: "What is Scratch?", a: "Block coding language", options: ["A game", "Block coding language", "A robot", "A website"] },
    { q: "What is an event in coding?", a: "Something that happens", options: ["A loop", "Something that happens", "A bug", "A variable"] },
    { q: "What does Python use to organize code?", a: "Indentation", options: ["Brackets", "Indentation", "Semicolons", "Quotes"] },
    
    { q: "What is a sprite in Scratch?", a: "A character or object", options: ["A bug", "A character or object", "A loop", "An error"] },
    { q: "What symbol starts a comment in Python?", a: "#", options: ["//", "#", "/*", "--"] },
    { q: "What is a boolean value?", a: "True or False", options: ["Yes or No", "True or False", "1 or 2", "A or B"] },
    { q: "What does a forever block do in Scratch?", a: "Runs code forever", options: ["Stops code", "Runs code forever", "Deletes code", "Pauses code"] },
    { q: "What is a string in programming?", a: "Text data", options: ["Number data", "Text data", "Loop data", "Error data"] },
    { q: "What does == mean in coding?", a: "Equal to", options: ["Not equal", "Equal to", "Greater than", "Less than"] },
    { q: "What is an integer?", a: "Whole number", options: ["Decimal number", "Whole number", "Text", "Boolean"] },
    { q: "What does a repeat block do?", a: "Repeats code certain times", options: ["Stops code", "Repeats code certain times", "Deletes code", "Creates code"] },
    { q: "What is a condition in coding?", a: "Something to check", options: ["A loop", "Something to check", "A variable", "A function"] },
    { q: "What does print() do in Python?", a: "Shows text on screen", options: ["Deletes text", "Shows text on screen", "Saves text", "Hides text"] },
    
    { q: "What is a coordinate in coding?", a: "Position on screen", options: ["A number", "Position on screen", "A color", "A sound"] },
    { q: "What does motion do in Scratch?", a: "Moves sprites", options: ["Changes colors", "Moves sprites", "Plays sounds", "Stops code"] },
    { q: "What is an array?", a: "List of items", options: ["Single item", "List of items", "A loop", "A function"] },
    { q: "What does the looks category do in Scratch?", a: "Changes appearance", options: ["Moves sprites", "Changes appearance", "Plays sounds", "Detects events"] },
    { q: "What is a parameter?", a: "Input to a function", options: ["Output from function", "Input to a function", "A loop", "A variable"] },
    { q: "What does elif mean in Python?", a: "Else if", options: ["End loop", "Else if", "Error line", "Execute loop"] },
    { q: "What is concatenation?", a: "Joining strings", options: ["Splitting strings", "Joining strings", "Deleting strings", "Copying strings"] },
    { q: "What does sensing do in Scratch?", a: "Detects things", options: ["Moves sprites", "Changes colors", "Detects things", "Plays music"] },
    { q: "What is modulo (%) operator?", a: "Remainder after division", options: ["Sum of numbers", "Product of numbers", "Remainder after division", "Difference of numbers"] },
    { q: "What does def do in Python?", a: "Defines a function", options: ["Deletes function", "Defines a function", "Runs a loop", "Stops code"] },
    
    { q: "What is a list in Python?", a: "Collection of items", options: ["Single item", "Collection of items", "A number", "A string"] },
    { q: "What does len() do in Python?", a: "Gets length", options: ["Deletes items", "Gets length", "Sorts items", "Adds items"] },
    { q: "What is a pen in Scratch?", a: "Drawing tool", options: ["Movement tool", "Drawing tool", "Sound tool", "Detection tool"] },
    { q: "What does range() do in Python?", a: "Creates number sequence", options: ["Deletes numbers", "Creates number sequence", "Adds numbers", "Multiplies numbers"] },
    { q: "What is a broadcast in Scratch?", a: "Sends a message", options: ["Receives message", "Sends a message", "Deletes message", "Hides message"] },
    { q: "What does input() do in Python?", a: "Gets user input", options: ["Shows output", "Gets user input", "Deletes input", "Saves input"] },
    { q: "What is a backdrop in Scratch?", a: "Background image", options: ["Foreground sprite", "Background image", "Sound effect", "Variable"] },
    { q: "What does str() do in Python?", a: "Converts to string", options: ["Converts to number", "Converts to string", "Deletes string", "Copies string"] },
    { q: "What is a costume in Scratch?", a: "Sprite's appearance", options: ["Background image", "Sprite's appearance", "Sound effect", "Variable value"] },
    { q: "What does int() do in Python?", a: "Converts to integer", options: ["Converts to string", "Converts to integer", "Converts to float", "Deletes number"] },
  ],

  // ------------------------------
  // KIDS LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ------------------------------
  kids_level2: [
    { q: "What is object-oriented programming?", a: "Code with objects", options: ["Linear code", "Code with objects", "Web design", "Database design"] },
    { q: "What is a class in programming?", a: "Blueprint for objects", options: ["A loop", "Blueprint for objects", "A variable", "A function"] },
    { q: "What is inheritance in OOP?", a: "Class inherits from another", options: ["Copying code", "Class inherits from another", "Deleting code", "Running code"] },
    { q: "What is recursion?", a: "Function calls itself", options: ["Loop repeats", "Function calls itself", "Variable changes", "Code stops"] },
    { q: "What is an API?", a: "Application interface", options: ["Programming language", "Application interface", "Database type", "Web browser"] },
    { q: "What is JSON?", a: "Data format", options: ["Programming language", "Data format", "Web framework", "Database"] },
    { q: "What does SQL do?", a: "Manages databases", options: ["Styles websites", "Manages databases", "Creates graphics", "Plays sounds"] },
    { q: "What is a library in programming?", a: "Reusable code collection", options: ["Book of code", "Reusable code collection", "Error log", "Variable list"] },
    { q: "What is Git used for?", a: "Version control", options: ["Web design", "Version control", "Database", "Graphics"] },
    { q: "What is a framework?", a: "Code structure/tools", options: ["Single function", "Code structure/tools", "Variable type", "Loop type"] },
    
    { q: "What is debugging with breakpoints?", a: "Pausing code to inspect", options: ["Deleting code", "Pausing code to inspect", "Running faster", "Skipping errors"] },
    { q: "What is a dictionary in Python?", a: "Key-value pairs", options: ["List of items", "Key-value pairs", "Single value", "Function type"] },
    { q: "What is a tuple in Python?", a: "Unchangeable list", options: ["Changeable list", "Unchangeable list", "Dictionary", "Function"] },
    { q: "What is None in Python?", a: "No value/null", options: ["Zero", "No value/null", "Empty string", "False"] },
    { q: "What are try/except blocks for?", a: "Error handling", options: ["Looping", "Error handling", "Defining functions", "Creating variables"] },
    { q: "What is a lambda function?", a: "Anonymous function", options: ["Named function", "Anonymous function", "Loop", "Variable"] },
    { q: "What is list comprehension?", a: "Concise list creation", options: ["List deletion", "Concise list creation", "List sorting", "List copying"] },
    { q: "What does import do in Python?", a: "Uses external code", options: ["Deletes code", "Uses external code", "Exports code", "Hides code"] },
    { q: "What is a module in Python?", a: "File with Python code", options: ["Database", "File with Python code", "Web page", "Image file"] },
    { q: "What is pip?", a: "Package installer", options: ["Programming language", "Package installer", "Code editor", "Web browser"] },
    
    { q: "What is npm?", a: "Node package manager", options: ["Python tool", "Node package manager", "Java framework", "C++ compiler"] },
    { q: "What is React?", a: "JavaScript library", options: ["Database", "JavaScript library", "Programming language", "Operating system"] },
    { q: "What is Node.js?", a: "JavaScript runtime", options: ["Web browser", "JavaScript runtime", "Database", "Graphics engine"] },
    { q: "What is a repository?", a: "Code storage location", options: ["Error log", "Code storage location", "Web page", "Database table"] },
    { q: "What is a commit in Git?", a: "Saving changes", options: ["Deleting code", "Saving changes", "Running code", "Testing code"] },
    { q: "What is a merge in Git?", a: "Combining branches", options: ["Creating branch", "Combining branches", "Deleting branch", "Renaming branch"] },
    { q: "What is a pull request?", a: "Proposing code changes", options: ["Downloading code", "Proposing code changes", "Deleting code", "Running tests"] },
    { q: "What is async/await?", a: "Asynchronous programming", options: ["Loop type", "Asynchronous programming", "Variable type", "Function type"] },
    { q: "What is a promise in JavaScript?", a: "Future value", options: ["Current value", "Future value", "Past value", "No value"] },
    { q: "What is DOM?", a: "Document Object Model", options: ["Database Model", "Document Object Model", "Design Object Method", "Data Output Mode"] },
    
    { q: "What is AJAX?", a: "Async web requests", options: ["Programming language", "Async web requests", "Database type", "Graphics format"] },
    { q: "What is REST API?", a: "Web service architecture", options: ["Programming language", "Web service architecture", "Database", "Operating system"] },
    { q: "What is HTTP?", a: "Web protocol", options: ["Programming language", "Web protocol", "Database", "File format"] },
    { q: "What is HTTPS?", a: "Secure web protocol", options: ["Fast HTTP", "Secure web protocol", "Old HTTP", "Mobile HTTP"] },
    { q: "What is a GET request?", a: "Retrieve data", options: ["Send data", "Retrieve data", "Delete data", "Update data"] },
    { q: "What is a POST request?", a: "Send data", options: ["Retrieve data", "Send data", "Delete data", "View data"] },
    { q: "What is MVC?", a: "Model-View-Controller", options: ["Model-Value-Code", "Model-View-Controller", "Main-View-Class", "Mode-View-Code"] },
    { q: "What is responsive design?", a: "Adapts to screen size", options: ["Fast loading", "Adapts to screen size", "Colorful design", "Simple layout"] },
    { q: "What is Bootstrap?", a: "CSS framework", options: ["Programming language", "CSS framework", "Database", "Operating system"] },
    { q: "What is Flexbox?", a: "CSS layout system", options: ["JavaScript library", "CSS layout system", "Database type", "File format"] },
    
    { q: "What is Grid in CSS?", a: "2D layout system", options: ["1D layout", "2D layout system", "3D layout", "No layout"] },
    { q: "What is a pseudo-class?", a: "CSS element state", options: ["Fake class", "CSS element state", "JavaScript class", "Python class"] },
    { q: "What is localStorage?", a: "Browser storage", options: ["Server storage", "Browser storage", "Cloud storage", "External drive"] },
    { q: "What is a cookie?", a: "Small data file", options: ["Large database", "Small data file", "Image file", "Video file"] },
    { q: "What is debugging?", a: "Finding and fixing errors", options: ["Writing code", "Finding and fixing errors", "Running code", "Deleting code"] },
    { q: "What is refactoring?", a: "Improving code structure", options: ["Writing new code", "Improving code structure", "Deleting code", "Running tests"] },
    { q: "What is unit testing?", a: "Testing small code parts", options: ["Testing whole program", "Testing small code parts", "Testing database", "Testing design"] },
    { q: "What is a stack?", a: "LIFO data structure", options: ["FIFO data structure", "LIFO data structure", "Random access", "Sorted list"] },
    { q: "What is a queue?", a: "FIFO data structure", options: ["LIFO data structure", "FIFO data structure", "Random access", "Sorted list"] },
    { q: "What is Big O notation?", a: "Algorithm efficiency", options: ["Variable type", "Algorithm efficiency", "Function name", "Loop count"] },
  ],

  // ------------------------------
  // KIDS LEVEL 3 — HARD (50 QUESTIONS)
  // ------------------------------
  kids_level3: [
    { q: "What is time complexity of binary search?", a: "O(log n)", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"] },
    { q: "What is polymorphism in OOP?", a: "Many forms of methods", options: ["Single form", "Many forms of methods", "No forms", "Two forms"] },
    { q: "What is encapsulation?", a: "Data hiding", options: ["Data showing", "Data hiding", "Data deleting", "Data copying"] },
    { q: "What is abstraction in OOP?", a: "Hiding complexity", options: ["Showing all details", "Hiding complexity", "Copying code", "Deleting code"] },
    { q: "What is a hash table?", a: "Key-value storage", options: ["Array", "Key-value storage", "Stack", "Queue"] },
    { q: "What is a linked list?", a: "Connected nodes", options: ["Array", "Connected nodes", "Tree", "Graph"] },
    { q: "What is a binary tree?", a: "Tree with max 2 children", options: ["Tree with 3 children", "Tree with max 2 children", "Linear structure", "No children"] },
    { q: "What is DFS?", a: "Depth-First Search", options: ["Data File System", "Depth-First Search", "Direct File Search", "Distributed File System"] },
    { q: "What is BFS?", a: "Breadth-First Search", options: ["Binary File Search", "Breadth-First Search", "Basic File System", "Best First Search"] },
    { q: "What is dynamic programming?", a: "Optimizing with subproblems", options: ["Fast coding", "Optimizing with subproblems", "Web programming", "Mobile programming"] },
    
    { q: "What is memoization?", a: "Caching results", options: ["Memorizing code", "Caching results", "Deleting cache", "Creating files"] },
    { q: "What is greedy algorithm?", a: "Local optimal choices", options: ["Random choices", "Local optimal choices", "Worst choices", "No choices"] },
    { q: "What is divide and conquer?", a: "Split problem, solve parts", options: ["Solve all at once", "Split problem, solve parts", "Ignore problem", "Guess solution"] },
    { q: "What is a graph?", a: "Nodes and edges", options: ["Linear list", "Nodes and edges", "Single value", "Text file"] },
    { q: "What is Dijkstra's algorithm?", a: "Shortest path", options: ["Longest path", "Shortest path", "Random path", "No path"] },
    { q: "What is a heap?", a: "Tree-based structure", options: ["Linear array", "Tree-based structure", "Hash table", "Linked list"] },
    { q: "What is quicksort?", a: "Divide and conquer sort", options: ["Insertion sort", "Divide and conquer sort", "Bubble sort", "Selection sort"] },
    { q: "What is merge sort?", a: "Divide and merge sort", options: ["Quick selection", "Divide and merge sort", "Bubble sort", "Insertion sort"] },
    { q: "What is a trie?", a: "Prefix tree", options: ["Binary tree", "Prefix tree", "Hash table", "Array"] },
    { q: "What is garbage collection?", a: "Automatic memory management", options: ["Manual deletion", "Automatic memory management", "Code cleanup", "File deletion"] },
    
    { q: "What is a closure in JavaScript?", a: "Function with outer scope", options: ["Closed function", "Function with outer scope", "Loop end", "Variable type"] },
    { q: "What is hoisting?", a: "Moving declarations up", options: ["Lowering code", "Moving declarations up", "Deleting code", "Running code"] },
    { q: "What is event bubbling?", a: "Event propagates upward", options: ["Event stops", "Event propagates upward", "Event deletes", "Event hides"] },
    { q: "What is event capturing?", a: "Event propagates downward", options: ["Event stops", "Event propagates upward", "Event propagates downward", "Event hides"] },
    { q: "What is prototypal inheritance?", a: "Objects inherit from objects", options: ["Classes inherit", "Objects inherit from objects", "No inheritance", "Multiple inheritance"] },
    { q: "What is currying?", a: "Transforming multiple args", options: ["Spicy function", "Transforming multiple args", "Loop type", "Variable type"] },
    { q: "What is a callback?", a: "Function passed as argument", options: ["Loop", "Function passed as argument", "Variable", "Class"] },
    { q: "What is middleware?", a: "Software between layers", options: ["Database", "Software between layers", "Frontend", "Backend"] },
    { q: "What is SQL injection?", a: "Security vulnerability", options: ["Database feature", "Security vulnerability", "Query type", "Data format"] },
    { q: "What is XSS?", a: "Cross-Site Scripting attack", options: ["Extra Server Security", "Cross-Site Scripting attack", "External Style Sheets", "Extended System Support"] },
    
    { q: "What is CSRF?", a: "Cross-Site Request Forgery", options: ["Client Server Request Format", "Cross-Site Request Forgery", "Code Security Review Framework", "Custom Server Response Function"] },
    { q: "What is a race condition?", a: "Timing-dependent bug", options: ["Fast code", "Timing-dependent bug", "Slow code", "No bug"] },
    { q: "What is deadlock?", a: "Processes wait forever", options: ["Fast execution", "Processes wait forever", "Code completion", "No processes"] },
    { q: "What is a semaphore?", a: "Synchronization tool", options: ["Variable type", "Synchronization tool", "Loop type", "Function type"] },
    { q: "What is mutex?", a: "Mutual exclusion lock", options: ["Multiple execution", "Mutual exclusion lock", "Music extension", "Memory utility"] },
    { q: "What is thread-safe?", a: "Safe for concurrent use", options: ["Single threaded", "Safe for concurrent use", "Unsafe code", "Slow execution"] },
    { q: "What is NoSQL?", a: "Non-relational database", options: ["No SQL allowed", "Non-relational database", "New SQL", "Network SQL"] },
    { q: "What is sharding?", a: "Database partitioning", options: ["Data deletion", "Database partitioning", "Data encryption", "Data backup"] },
    { q: "What is indexing in databases?", a: "Fast data retrieval", options: ["Slow search", "Fast data retrieval", "Data deletion", "Data insertion"] },
    { q: "What is normalization?", a: "Organizing database", options: ["Deleting data", "Organizing database", "Backing up", "Encrypting"] },
    
    { q: "What is denormalization?", a: "Adding redundancy", options: ["Removing data", "Adding redundancy", "Normalizing more", "Deleting tables"] },
    { q: "What is ACID in databases?", a: "Transaction properties", options: ["Chemical compound", "Transaction properties", "Database type", "Query language"] },
    { q: "What is CAP theorem?", a: "Consistency, Availability, Partition", options: ["Code Analysis Program", "Consistency, Availability, Partition", "Computer Application Protocol", "Central Access Point"] },
    { q: "What is Redis?", a: "In-memory database", options: ["Programming language", "In-memory database", "Web framework", "Operating system"] },
    { q: "What is MongoDB?", a: "Document database", options: ["Relational database", "Document database", "Programming language", "Web server"] },
    { q: "What is Docker?", a: "Containerization platform", options: ["Database", "Containerization platform", "Programming language", "Web browser"] },
    { q: "What is Kubernetes?", a: "Container orchestration", options: ["Database", "Container orchestration", "Programming language", "Text editor"] },
    { q: "What is microservices?", a: "Distributed architecture", options: ["Monolithic app", "Distributed architecture", "Small programs", "Tiny variables"] },
    { q: "What is GraphQL?", a: "Query language for APIs", options: ["Graph database", "Query language for APIs", "Graphics library", "Game framework"] },
    { q: "What is WebSocket?", a: "Two-way communication", options: ["One-way communication", "Two-way communication", "No communication", "Slow communication"] },
  ],

  // =========================================
  // ADVANCED MODE - Middle/High School
  // =========================================
  
  advanced_level1: [],
  advanced_level2: [],
  advanced_level3: [],
};

// For advanced mode, reuse the same questions for now
codingQuestions.advanced_level1 = codingQuestions.kids_level1;
codingQuestions.advanced_level2 = codingQuestions.kids_level2;
codingQuestions.advanced_level3 = codingQuestions.kids_level3;

export default codingQuestions;
