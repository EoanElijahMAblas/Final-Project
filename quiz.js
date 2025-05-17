const quizData = [
    {
        question: "What is 4th Sustainable Development Goal?",
        options: ["No Poverty", "Zero Hunger", "Quality Education", "Reduced Inequality"],
        answer: 2
    },
    {
        question: "Based on the United Nations, what percentage of students have completed upper secondary education in 2023?",
        options: ["53%", "59%", "49%", "61%"],
        answer: 1
    },
    {
        question: "In what year does SDG 4 hope to achieve its goals?",
        options: ["2028", "2035", "2030", "2040"],
        answer: 2
    },
    {
        question: "Which region of the world has the lowest literacy rate?",
        options: ["Sub Saharan Africa", "Middle East", "Southeast Asia", "North America"],
        answer: 0
    },
    {
        question: "Which region of the world has the highest literacy rate?",
        options: ["Middle East", "North America", "Central Asia", "Europe"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const quizContainer = document.getElementById("quiz");
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `<div class='question'>${currentQuestion + 1}. ${q.question}</div>`;
    
    q.options.forEach((option, i) => {
        quizContainer.innerHTML += `<button class='option-btn' onclick='selectAnswer(${i})'>${option}</button>`;
    });
    
    document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    
    const correctAnswer = quizData[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-btn");
    
    buttons.forEach((button, index) => {
        if (index === correctAnswer) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });
    
    document.getElementById("nextBtn").style.display = "block";
    
    if (selectedIndex === correctAnswer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("result").innerText = `Quiz finished! Your score: ${score}/${quizData.length}`;
    }
}