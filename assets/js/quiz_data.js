//languages: Python, Ruby, C++, SQL, Javascript, Assembly, Rust, Go, Java, PHP
const quizData = [
    {
      language: "Ruby",
      snippets: [
            `x = 10\ny = x + 5`,
            `def add(a, b)\n\ta + b\nend`,
            `5.times do |i|\n\tputs "Number: #{i}"\nend`
      ],
        choices: ["Ruby", "Java", "Go", "Rust"]
    },
    {
      language: "JavaScript",
        snippets: [
            `let x = 10;\nx += 5;`,
            `const numbers = [1, 2, 3];\nnumbers.forEach(num => console.log(num));`,
            `document.getElementById("app").innerHTML = "Hello, World!";`,
        ],
        choices: ["JavaScript", "Python", "Ruby", "Java"]
    },
    {
      language: "Assembly",
        snippets: [
            `section .data\n\tmsg db 'Hello, World!', 0`,
            `MOV AX, 1\nADD AX, 2`,
            `MOV EAX, 1\nADD EAX, 2`
        ],
        choices: ["Assembly", "C++", "Rust", "Go"]
    },
    {
      language: "Rust",
        snippets: [
            `let x = 10;\nlet y = x + 5;`,
            `let mut v = Vec::new();\nv.push(1);`,
            `fn main() {\n\tfor i in 0..5 {\n\t\tprintln!("Number: {}", i);\n\t}\n}`
        ],
        choices: ["Rust", "Python", "Ruby", "PHP"]
    },
    {
      language: "Go",
        snippets: [
            `x := 10\ny := x + 5`,
            `func add(a int, b int) int {\n\treturn a + b\n}`,
            `package main\nfunc main() {\n\tfor i := 0; i < 10; i++ {\n\t\tfmt.Println(i)\n\t}\n}`
        ],
        choices: ["Go", "Python", "Ruby", "PHP"]
    },
    {
      language: "Java",
        snippets: [
            `int x = 10;\nint y = x + 5;`,
            `public int add(int a, int b) {\n\treturn a + b;\n}`,
            `public class Main {\n\tpublic static void main(String[] args) {\n\t\tfor (int i = 0; i < 5; i++) {\n\t\t\tSystem.out.println("Number: " + i);\n\t\t}\n\t}\n}`
        ],
        choices: ["Java", "Python", "Ruby", "Javscript"]
    },
    {
      language: "PHP",
        snippets: [
            `$x = 10;\n$y = $x + 5;`,
            `function add($a, $b) {\n\treturn $a + $b;\n}`,
            `<?php\nfor ($i = 0; $i < 5; $i++) {\n\techo "Number: " . $i . "<br>";\n}\n?>`
        ],
        choices: ["PHP", "Go", "C++", "Assembly"]
    },
    {
      language: "Python2",
      snippets: [
        `x = xrange(1, 10000)`,
        `print "Hello, World!"`,
        `from __future__ import division\n\nprint 5 / 2`
      ],
      choices: ["Python1", "Python2", "Python3", "Python4"]
  },
  {
      language: "postgreSQL",
      snippets: [
          `SELECT unnest(array[1, 2, 3, 4]);`,
          `SELECT * FROM users\nWHERE user_id = ANY (ARRAY[1, 2, 3]);`,
          `CREATE TABLE products (\nid SERIAL PRIMARY KEY,\nname VARCHAR(100),\nprice NUMERIC\n);`
      ],
      choices: ["postgreSQL", "MySQL", "SQLite", "Snowflake-extended SQL"]
  },
  {
      language: "C++",
      snippets: [
        `class ThisClass {\n\tpublic:\n\tint var;\n\tvoid print() {\n\t\tcout << "Hello";\n\t}\n};`,
        `#include <iostream>\nvoid add(int a, int b) {\n\tstd::cout << a + b << std::endl;\n}`,
        `for (int i = 0; i < 5; i++) {\n\tstd::cout << "Number: " << i << std::endl;\n}`
      ],
      choices: ["C++", "C", "C#", "Objective-C"]
  },
];

export {quizData};