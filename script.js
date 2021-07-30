let currentQuestion = 0;


let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Bernes-Lee",
    "answer_4": "Justin Biber",
    "right_answer": 3
  },
  {
    "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
    "answer_1": "Text Fett",
    "answer_2": "Container",
    "answer_3": "Ein Link",
    "answer_4": "Kursiv",
    "right": 3
  },
  {
    "question": "Wie bindet man eine Website in eine Website ein?",
    "answer_1": "&lt;iframe&gt;,&lt;frame&gt;, and &lt;frameset&gt;",
    "answer_2": "&lt;iframe&gt;",
    "answer_3": "&lt;iframe&gt;",
    "answer_4": "&lt;frameset&gt;",
    "right_anwer": 2
  },
  {
    "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
    "answer_1": "readonly",
    "answer_2": "max",
    "answer_3": "from",
    "answer_4": "spellcheck",
    "right_anwert": 1
  },
  {
    "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mitdemattribut titleaus?",
    "answer_1": "a[title]{...}",
    "answer_2": "a > [title]{...}",
    "answer_3": "a.[title]{...}",
    "answer_4": "a=[title]{...}",
    "right_answer": 1
  },
  {
    "question": "Wie definiert man in JavaScript eine Variable?",
    "answer_1": "let 100 = rate;",
    "answer_2": "100 = let rate;",
    "answer_3": "rate = 100;",
    "answer_4": "let rate = 100;",
    "right_anwer": 4
  }
];

function init() {
  document.getElementById('number-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

//Mein Vorschlag:
/* function answer(selection) {
  let question = questions[currentQuestion];
  let z = question['right'];
  if (selection == 'answer_' + z) {
    alert('Richtig!!')
  }
  else {
    alert('Falsch!!')
  }
} */
function answer(selection) {
  let question = questions[currentQuestion];
  console.log('Selected answer is', selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log('seletedQuestionNumber is ', selectedQuestionNumber);
  console.log('Current question is ', question['right_answer']);

  let idOfRightAnswer = `answer_${question['right_answer']}`;


  if (selectedQuestionNumber == question['right_answer']) {
    console.log('richtige Antwort!!');
    document.getElementById(selection).parentNode.classList.add('bg-success');
  }
  else {
    console.log('falsche Antwort!!!');
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
}
