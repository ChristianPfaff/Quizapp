let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

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
    "right_answer": 3
  },
  {
    "question": "Wie bindet man eine Website in eine Website ein?",
    "answer_1": "&lt;iframe&gt;,&lt;frame&gt;, and &lt;frameset&gt;",
    "answer_2": "&lt;iframe&gt;",
    "answer_3": "&lt;iframe&gt;",
    "answer_4": "&lt;frameset&gt;",
    "right_answer": 2
  },
  {
    "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
    "answer_1": "readonly",
    "answer_2": "max",
    "answer_3": "from",
    "answer_4": "spellcheck",
    "right_answer": 1
  },
  {
    "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut titleaus?",
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
    "right_answer": 4
  }
];

function init() {
  document.getElementById('number-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {

  if (gameIsOver()) {
    showEndscreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndscreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('amount-of-questions').innerHTML = questions.length;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('header-image').src = 'img/cup.jpg';
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  console.log('percent Fortschritt', percent);
  document.getElementById('progress-bar').innerHTML = `${percent}%`;
  document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('question-number').innerHTML = currentQuestion + 1;
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
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question['right_answer']}`;


  if (rightAnswerSelected(selectedQuestionNumber, question)) { //Frage richtig beantwortet
    document.getElementById(selection).parentNode.classList.add('bg-success');
    rightQuestions++;
    AUDIO_SUCCESS.play();
  }
  else {//Frage falsch beantwortet
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
  }
  document.getElementById('next-button').disabled = false; //Aktiviert wieder den Button
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
  currentQuestion++;// z.B.von 0 auf 1
  //Ativiert wieder den Button
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();

}

function resetAnswerButtons() {
  //Markierung der Fragen wieder löschen:
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
  document.getElementById('header-image').src = 'img/pencil.jpg';
  document.getElementById('questionBody').style = '';// questionBody wieder anzeigen
  document.getElementById('endScreen').style = 'display: none';//Endscreen ausblenden

  currentQuestion = 0;
  rightQuestions = 0;
  init();


}