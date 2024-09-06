// This file contains all functionality for the quiz

import { quizData } from './quiz_data.js';
let currentQuestion = 0;
let score = 0;
let hintsUsed = 0;

document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("startQuiz");
  if (startButton) {
    startButton.addEventListener("click", startQuiz);
  }

  const hintButton = document.getElementById("hintButton");
  if (hintButton) {
    hintButton.addEventListener("click", useHint);
  }

  const choiceButtons = document.querySelectorAll(".choice");
  choiceButtons.forEach(button => {
    button.addEventListener("click", checkAnswer);
  });

  if (currentQuestion < quizData.length) {
    loadQuestion();
  }
});

function startQuiz() {
  window.location.href = "quiz-page.html";
}

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    document.getElementById("codeSnippet").textContent = currentQuiz.snippets[hintsUsed];

    const choiceButtons = document.querySelectorAll(".choice");
    const randomizedChoices = shuffleArray(currentQuiz.choices);
    choiceButtons.forEach((button, index) => {
        button.textContent = randomizedChoices[index];
    });
    document.getElementById("hintButton").disabled = false;
}

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}


function useHint() {
  hintsUsed++;
  if (hintsUsed < 3) {
    document.getElementById("codeSnippet").textContent = quizData[currentQuestion].snippets[hintsUsed];
  }

  if (hintsUsed > 1) {
    document.getElementById("hintButton").disabled = true;
  }
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].language;
    const selectedButton = event.target;
  
    if (selectedAnswer === correctAnswer) {
      score += (3 - hintsUsed);
      selectedButton.classList.add('correct'); // Green for correct
    } else {
      selectedButton.classList.add('incorrect'); // Red for incorrect
    }
  
    setTimeout(() => {
      currentQuestion++;
      hintsUsed = 0;
      selectedButton.classList.remove('correct', 'incorrect');
  
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showFinalScore();
      }
    }, 300);
  }

function showFinalScore() {
  window.location.href = "score-page.html";
  localStorage.setItem("finalScore", score);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  hintsUsed = 0;
  window.location.href = "code_language_quiz";
}

// On the final score page
document.addEventListener("DOMContentLoaded", function() {
  const finalScore = localStorage.getItem("finalScore");
  if (finalScore !== null) {
    document.getElementById("finalScore").textContent = finalScore;
    displayFinalMessage(finalScore);
  }
  const shareTwitter = document.getElementById("shareTwitter");
  const retryButton = document.getElementById("retryQuiz");
  if (retryButton) {
    retryButton.addEventListener("click", restartQuiz);
  }
  if (shareTwitter) {
    shareTwitter.addEventListener("click", () => shareResult(finalScore));
  }
});

function displayFinalMessage(score) {
  let message;
  if (score > 30) {
    message = "You're more than a legend, you're a hacker!";
  } else if (score === 30) {
    message = "Perfect score! You're a code language recognition master!";
  } else if (score >= 25) {
    message = "Excellent job! You have a great eye for code languages!";
  } else if (score >= 20) {
    message = "Well done! Your code language skills are impressive!";
  } else if (score >= 15) {
    message = "Good effort! Keep practicing to improve your skills!";
  } else if (score >= 10) {
    message = "Don't give up! With more practice, you'll improve your code recognition skills!";
  } else if (score >= 5) {
    message = "I'm not gonna lie, I don't think you've done much coding before.";
  } else {
    message = "Honestly, you have to try to get a score this low. You probably are actually good at coding.";
  }
  document.getElementById("finalMessage").textContent = message;
}

function shareResult(score) {
  const url = "https://jmumf.com/code_language_quiz"; 
  const text = `I scored ${score} points on the Code Language Recognition Quiz!`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}
