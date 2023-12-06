const quizData = [
    {
        question: "Who is our current President?",
        options: ["Droupadi Murmu", "Mahatma Gandhi", "Rajendra Prasad", "Narendra Modi"],
        correctOption: 0
    },
    {
        question: "Finance Minister of INDIA",
        options: ["Amit Shah", "Nirmala Sitharaman", "Raj Nath Singh", "Nitin Jairam Gadkari"],
        correctOption: 1
    },
    {
        question: "How many States are there in India",
        options: ["29", "32", "28", "25"],
        correctOption: 2
    },
    {
        question: "How many countries in the World",
        options: ["196", "200", "192", "195"],
        correctOption: 3
    },
    {
        question: "What is the capital of Assam",
        options: ["Dispur", "Itanagar", "Panaji", "Shillong"],
        correctOption: 0
    }
];

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const nextButton = document.getElementById('next');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    optionsElements.forEach((optionElement, index) => {
        optionElement.innerText = currentQuizData.options[index];
    });
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuiz];
    const correctOption = currentQuizData.correctOption;

    if (parseInt(selectedOption) === correctOption) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert('Quiz completed. Your score: ' + score);
    }
}

nextButton.addEventListener('click', () => {
    let selectedOption = null;

    optionsElements.forEach((optionElement, index) => {
        if (optionElement.clicked) {
            selectedOption = index;
        }
    });

    if (selectedOption !== null) {
        checkAnswer(selectedOption);
    } else {
        alert('Please select an option.');
    }
});

optionsElements.forEach((optionElement, index) => {
    optionElement.addEventListener('click', () => {
        optionsElements.forEach((element) => {
            element.classList.remove('selected');
        });
        optionElement.classList.add('selected');
        optionElement.clicked = true;
    });
});