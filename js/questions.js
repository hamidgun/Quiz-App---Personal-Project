class Question {
  constructor(questionText, answerChoices, correctAnswer) {
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(answer) {
    return answer === this.correctAnswer;
  }
}

// These contents below must be operated in a backend app because they are downloaded when a user run this app and users can see them all. So we don't want users to see these contents!!!

const htmlQuestionList = [
  new Question(
    "1- What does HTML stand for?",
    {
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Hyperlinking Text Marking Language",
    },
    "a"
  ),
  new Question(
    "2- Who is making the Web standards?",
    {
      a: "Mozilla",
      b: "Microsoft",
      c: "The World Wide Web Consortium",
      d: "Google",
    },
    "c"
  ),
  new Question(
    "3- Choose the correct HTML element for the largest heading:",
    { a: "<heading>", b: "<h6>", c: "<head>", d: "<h1>" },
    "d"
  ),
  new Question(
    "4- What is the correct HTML element for inserting a line break?",
    { a: "<break>", b: "<lb>", c: "<br>", d: "<b>" },
    "c"
  ),
  new Question(
    "5- What is the correct HTML for adding a background color?",
    {
      a: '<body bg="yellow">',
      b: "<background>yellow</background>",
      c: '<body style="background-color:yellow;">',
      d: "<bg>yellow</bg>",
    },
    "c"
  ),
  new Question(
    "6- Choose the correct HTML element to define important text",
    { a: "<strong>", b: "<b>", c: "<important>", d: "<i>" },
    "a"
  ),
  new Question(
    "7- Which character is used to indicate an end tag?",
    { a: "*", b: "/", c: "<", d: "!" },
    "b"
  ),
  new Question(
    "8- How can you make a numbered list?",
    { a: "<list>", b: "<ol>", c: "<ul>", d: "<dl>" },
    "b"
  ),
  new Question(
    "9- How can you make a bulleted list?",
    { a: "<ul>", b: "<ol>", c: "<dl>", d: "<list>" },
    "a"
  ),
  new Question(
    "10- What is the correct HTML for creating a hyperlink?",
    {
      a: "<a>http://www.example.com</a>",
      b: '<a href="http://www.example.com">Example</a>',
      c: '<a url="http://www.example.com">Example</a>',
      d: "<link>http://www.example.com</link>",
    },
    "b"
  ),
];

const cssQuestionList = [
  new Question(
    "1- What does CSS stand for?",
    {
      a: "Creative Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computer Style Sheets",
      d: "Colorful Style Sheets",
    },
    "b"
  ),
  new Question(
    "2- Where in an HTML document is the correct place to refer to an external style sheet?",
    {
      a: "In the <head> section",
      b: "At the end of the document",
      c: "In the <body> section",
      d: "You can't refer to an external style sheet in an HTML document",
    },
    "a"
  ),
  new Question(
    "3- Which HTML tag is used to define an internal style sheet?",
    { a: "<css>", b: "<style>", c: "<script>", d: "<link>" },
    "b"
  ),
  new Question(
    " 4- Which is the correct CSS syntax?",
    {
      a: "body {color: black;}",
      b: "{body;color:black;}",
      c: "{body:color=black;}",
      d: "body:color=black;",
    },
    "a"
  ),
  new Question(
    "5- How do you insert a comment in a CSS file?",
    {
      a: "' this is a comment '",
      b: "// this is a comment //",
      c: "/* this is a comment */",
      d: "<!-- this is a comment -->",
    },
    "c"
  ),
  new Question(
    "6- Which property is used to change the background color?",
    { a: "bgcolor", b: "color", c: "background-color", d: "backgroundColor" },
    "c"
  ),
  new Question(
    "7- Which CSS property controls the text size?",
    { a: "font-style", b: " text-size", c: "font-size", d: "text-style" },
    "c"
  ),
  new Question(
    "8- How do you make each word in a text start with a capital letter?",
    {
      a: "text-transform:capitalize",
      b: "text-style:capitalize",
      c: "transform:capitalize",
      d: "You can't do that with CSS",
    },
    "a"
  ),
  new Question(
    "9- Which property is used to change the font of an element?",
    { a: "font-weight", b: "font-family", c: "font-style", d: "text-style" },
    "b"
  ),
  new Question(
    "10- How do you make the text bold?",
    { a: "font-weight:bold", b: "style:bold", c: "font:bold", d: "text:bold" },
    "a"
  ),
];

const jsQuestionList = [
  new Question(
    "1- Inside which HTML element do we put the JavaScript?",
    { a: "<js>", b: "<scripting>", c: "<script>", d: "<javascript>" },
    "c"
  ),
  new Question(
    "2- Where is the correct place to insert a JavaScript?",
    {
      a: "Both the <head> section and the <body> section are correct",
      b: "The <head> section",
      c: "The <body> section",
      d: "The <footer> section",
    },
    "a"
  ),
  new Question(
    "3- What is the correct syntax for referring to an external script called 'xxx.js'?",
    {
      a: '<script href="xxx.js">',
      b: '<script name="xxx.js">',
      c: '<script src="xxx.js">',
      d: '<script file="xxx.js">',
    },
    "c"
  ),
  new Question(
    "4- How do you write 'Hello World' in an alert box?",
    {
      a: 'msgBox("Hello World");',
      b: 'alertBox("Hello World");',
      c: 'msg("Hello World");',
      d: 'alert("Hello World");',
    },
    "d"
  ),
  new Question(
    "5- How do you create a function in JavaScript?",
    {
      a: "function = myFunction()",
      b: "function:myFunction()",
      c: "function myFunction()",
      d: "create myFunction()",
    },
    "c"
  ),
  new Question(
    "6- How do you call a function named 'myFunction'?",
    {
      a: "call myFunction()",
      b: "myFunction()",
      c: "call function myFunction()",
      d: "Call.myFunction()",
    },
    "b"
  ),
  new Question(
    "7- How to write an IF statement in JavaScript?",
    {
      a: "if i = 5 then",
      b: "if i == 5 then",
      c: "if (i == 5)",
      d: "if i = 5",
    },
    "c"
  ),
  new Question(
    "8- How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    { a: "if (i <> 5)", b: "if i <> 5", c: "if (i != 5)", d: "if i =! 5 then" },
    "c"
  ),
  new Question(
    "9- How does a WHILE loop start?",
    {
      a: "while (i <= 10; i++)",
      b: "while (i <= 10)",
      c: "while i = 1 to 10",
      d: "while (i++ <= 10)",
    },
    "b"
  ),
  new Question(
    "10- How does a FOR loop start?",
    {
      a: "for (i = 0; i <= 5)",
      b: "for (i <= 5; i++)",
      c: "for i = 1 to 5",
      d: "for (i = 0; i <= 5; i++)",
    },
    "d"
  ),
];

const pythonQuestionList = [
  new Question(
    "1- What is the correct file extension for Python files?",
    { a: ".pyth", b: ".pt", c: ".pyt", d: ".py" },
    "d"
  ),
  new Question(
    "2- How do you create a variable with the numeric value 5?",
    {
      a: "x = int(5)",
      b: "x = 5",
      c: "Both the other answers are correct",
      d: "x = float(5)",
    },
    "c"
  ),
  new Question(
    "3- Which method can be used to remove any whitespace from both the beginning and the end of a string?",
    { a: "ptrim()", b: "len()", c: "strip()", d: "trim()" },
    "c"
  ),
  new Question(
    "4- Which operator is used to multiply numbers?",
    { a: "*", b: "%", c: "x", d: "#" },
    "a"
  ),
  new Question(
    "5- Which collection is ordered, changeable, and allows duplicate members?",
    { a: "SET", b: "LIST", c: "DICTIONARY", d: "TUPLE" },
    "b"
  ),
  new Question(
    "6- How do you start writing an if statement in Python?",
    {
      a: "if x > y then:",
      b: "if (x > y)",
      c: "if x > y:",
      d: "if x > y then",
    },
    "c"
  ),
  new Question(
    "7- Which statement is used to stop a loop?",
    { a: "stop", b: "exit", c: "break", d: "return" },
    "c"
  ),
  new Question(
    "8- Which keyword is used to create a function in Python?",
    { a: "function", b: "def", c: "fun", d: "define" },
    "b"
  ),
  new Question(
    "9- Which operator is used to compare two values?",
    { a: "=", b: "==", c: "equals", d: "eq" },
    "b"
  ),
  new Question(
    "10- How do you insert COMMENTS in Python code?",
    {
      a: "// This is a comment",
      b: "# This is a comment",
      c: "<!-- This is a comment -->",
      d: "/* This is a comment */",
    },
    "b"
  ),
];

const reactQuestionList = [
  new Question(
    "1- What is React?",
    {
      a: "A JavaScript library for building user interfaces",
      b: "A database management system",
      c: "A server-side framework",
      d: "A CSS framework",
    },
    "a"
  ),
  new Question(
    "2- Who developed React?",
    { a: "Google", b: "Microsoft", c: "Facebook", d: "Twitter" },
    "c"
  ),
  new Question(
    "3- What is a component in React?",
    {
      a: "A reusable piece of UI",
      b: "A database table",
      c: "A server endpoint",
      d: "A CSS class",
    },
    "a"
  ),
  new Question(
    "4- How do you create a React component?",
    {
      a: "Using a function or a class",
      b: "Using a database query",
      c: "Using a server-side script",
      d: "Using a CSS stylesheet",
    },
    "a"
  ),
  new Question(
    "5- What is JSX?",
    {
      a: "A syntax extension for JavaScript",
      b: "A database query language",
      c: "A server-side scripting language",
      d: "A CSS preprocessor",
    },
    "a"
  ),
  new Question(
    "6- How do you pass data to a React component?",
    {
      a: "Using props",
      b: "Using state",
      c: "Using context",
      d: "Using hooks",
    },
    "a"
  ),
  new Question(
    "7- What is state in React?",
    {
      a: "A way to manage data within a component",
      b: "A way to style components",
      c: "A way to create server endpoints",
      d: "A way to query databases",
    },
    "a"
  ),
  new Question(
    "8- How do you update state in a React component?",
    {
      a: "Using the setState method",
      b: "Directly modifying the state object",
      c: "Using props",
      d: "Using context",
    },
    "a"
  ),
  new Question(
    "9- What is the virtual DOM?",
    {
      a: "A lightweight copy of the actual DOM",
      b: "A database management system",
      c: "A server-side framework",
      d: "A CSS framework",
    },
    "a"
  ),
  new Question(
    "10- How do you handle events in React?",
    {
      a: "Using event handlers",
      b: "Using database triggers",
      c: "Using server-side scripts",
      d: "Using CSS classes",
    },
    "a"
  ),
];

const phpQuestionList = [
  new Question(
    "1- What does PHP stand for?",
    {
      a: "Personal Home Page",
      b: "Private Home Page",
      c: "PHP: Hypertext Preprocessor",
      d: "Pretext Hypertext Processor",
    },
    "c"
  ),
  new Question(
    "2- Who developed PHP?",
    {
      a: "Rasmus Lerdorf",
      b: "Mark Zuckerberg",
      c: "Brendan Eich",
      d: "Tim Berners-Lee",
    },
    "a"
  ),
  new Question(
    "3- What is the correct way to start a PHP block of code?",
    { a: "<?php", b: "<php>", c: "<?", d: "<script>" },
    "a"
  ),
  new Question(
    "4- How do you write 'Hello World' in PHP?",
    {
      a: 'echo "Hello World";',
      b: 'print("Hello World");',
      c: 'console.log("Hello World");',
      d: 'printf("Hello World");',
    },
    "a"
  ),
  new Question(
    "5- Which of the following is a correct way to create a variable in PHP?",
    {
      a: "$var_name;",
      b: "var $var_name;",
      c: "both of the other answers are correct",
      d: "variable $var_name;",
    },
    "c"
  ),
  new Question(
    "6- How do you create a function in PHP?",
    {
      a: "function myFunction()",
      b: "def myFunction()",
      c: "create myFunction()",
      d: "func myFunction()",
    },
    "a"
  ),
  new Question(
    "7- How do you call a function named 'myFunction' in PHP?",
    {
      a: "myFunction();",
      b: "call myFunction();",
      c: "invoke myFunction();",
      d: "execute myFunction();",
    },
    "a"
  ),
  new Question(
    "8- Which superglobal variable is used to collect form data in PHP?",
    {
      a: "$_GET",
      b: "$_POST",
      c: "both of the other answers are correct",
      d: "$_REQUEST",
    },
    "c"
  ),
  new Question(
    "9- How do you start a session in PHP?",
    {
      a: "session_start();",
      b: "start_session();",
      c: "begin_session();",
      d: "init_session();",
    },
    "a"
  ),
  new Question(
    "10- Which of the following is a correct way to connect to a MySQL database in PHP?",
    {
      a: "mysqli_connect()",
      b: "mysql_connect()",
      c: "both of the other answers are correct",
      d: "db_connect()",
    },
    "c"
  ),
];
