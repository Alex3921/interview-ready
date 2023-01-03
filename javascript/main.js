// Both 'questions' and 'answers' are assigned after category selection
// Store question bank
let questions;
// Store answer bank
let answers;

// Get menu buttons
const btnJava = document.getElementById("btn-java");
const btnSoftSkills = document.getElementById("btn-soft-skills");
const btnMixed = document.getElementById("btn-mixed");
const btnCloseModal = document.getElementById("btn-close-modal");

// Get the question number modal and modal overlay elements
const modalNumQuestions = document.getElementById("modal-num-questions");
const modalOverlay = document.getElementById("modal-overlay");

// Handle menu button click events
btnJava.addEventListener("click", handleCategoryChoice);
btnSoftSkills.addEventListener("click", handleCategoryChoice);
btnMixed.addEventListener("click", handleCategoryChoice);
btnCloseModal.addEventListener("click", hideModalNumQuestions);

// This handles category choice and retrieves the correct data
function handleCategoryChoice(e) {
    const category = e.target.innerHTML;
    if (category === "JAVA") {
        questions = questions_java;
        answers = answers_java;
    } else if (category === "Soft Skills") {
        questions = questions_soft_skills;
        answers = answers_soft_skills;
    } else {
        questions = questions_java.concat(questions_soft_skills);
        answers = { ...answers_java, ...answers_soft_skills };
    }
    showModalNumQuestions(category);
}

function showModalNumQuestions(category) {
    // Customize modal subtitle with category selection
    document.getElementById(
        "category"
    ).innerHTML = `Practice ${category} questions!`;
    document.getElementById(
        "label-num-questions"
    ).innerHTML = `Current question bank: ${questions.length}`;
    // Show the modal and modal overlay
    modalNumQuestions.style.display = "block";
    modalOverlay.style.display = "block";
}

function hideModalNumQuestions() {
    // Hide the modal and modal overlay
    modalNumQuestions.style.display = "none";
    modalOverlay.style.display = "none";

    // Reset input field value
    document.getElementById("num-questions").value = "";
}

// Prevent bad input submision frum num questions modal
function checkForm(e) {
    e.preventDefault();

    // Get value from input field
    const input = document.getElementById("num-questions").value;

    if (input <= 0 || input > questions.length) {
        alert(`Please enter a number between 1 and ${questions.length}.`);
        document.getElementById("num-questions").value = "";
    } else {
        showQuestionCard(input);
    }
}

// Get question card elements
const questionCard = document.getElementById("question-card");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnShowAnswer = document.getElementById("show-answer");
const answerField = document.getElementById("answer-field");
const btnClose = document.getElementById("btn-close");

// Handle question card button click events
btnNext.addEventListener("click", handleNextButtonClick);
btnPrev.addEventListener("click", handlePrevButtonClick);
btnShowAnswer.addEventListener("click", handleDetailsButtonClick);
btnClose.addEventListener("click", hideQuestionCard);

// maxQuestions stores the number of questions that user wants to go over
let maxQuestions = 0;
// visitedQuestions stores the index pos for questions that are visited during session
// this, along with currentQuestionIndex enables previous and next functionality
let visitedQuestions = [];
let currentQuestionIndex = 0;

// Handle the "Next" button click:
function handleNextButtonClick() {
    if (currentQuestionIndex === visitedQuestions.length - 1) {
        generateNextQuestionIndex();
    }
    currentQuestionIndex++;
    clearAnswerField();
    displayQuestion();
}

// Handle the "Previous" button click
function handlePrevButtonClick() {
    currentQuestionIndex--;
    clearAnswerField();
    displayQuestion();
}

function handleNextButtonDisabledState() {
    // Select the "Next" button
    let btnNext = document.querySelector("#btn-next");

    // If the current question is the last one in the list, disable the "Next" button
    if (currentQuestionIndex < maxQuestions - 1) {
        btnNext.classList.remove("disabled");
        btnNext.disabled = false;
    } else {
        btnNext.classList.add("disabled");
        btnNext.disabled = true;
    }
}

function handlePreviousButtonDisabledState() {
    // Select the "Previous" button
    let btnPrev = document.querySelector("#btn-prev");

    // If the current question is the first one in the list, disable the "Previous" button
    if (currentQuestionIndex === 0) {
        btnPrev.classList.add("disabled");
        btnPrev.disabled = true;
    } else {
        btnPrev.classList.remove("disabled");
        btnPrev.disabled = false;
    }
}

// Handle the "Details" button click
function handleDetailsButtonClick() {
    if (btnShowAnswer.innerHTML == "Show Answer") {
        const currQuestion =
            document.getElementById("question-title").innerHTML;
        const details = answers[currQuestion];
        answerField.className = "show";
        answerField.innerHTML = details;
        btnShowAnswer.innerHTML = "Hide Answer";
    } else {
        clearAnswerField();
    }
}

// Clean answer field within the question card
function clearAnswerField() {
    answerField.className = "";
    answerField.innerHTML = "";
    btnShowAnswer.innerHTML = "Show Answer";
}

function showQuestionCard(input) {
    // If all questions are to be served pre-generate all index positions
    if (input == questions.length) {
        visitedQuestions = Array.from(
            { length: questions.length },
            (_, i) => i
        );
    }
    maxQuestions = input;
    generateNextQuestionIndex();

    // Hide questions number prompt
    hideModalNumQuestions();

    // Show the questionCard and modal overlay
    questionCard.style.display = "block";
    modalOverlay.style.display = "block";
}

function hideQuestionCard(e) {
    // Hide the questionCard and modal overlay
    questionCard.style.display = "none";
    modalOverlay.style.display = "none";
    // Reset variables
    maxQuestions = 0;
    visitedQuestions = [];
    currentQuestionIndex = 0;
    // Reset question field value
    document.getElementById("question-title").innerHTML = "";
    // Reset answer field
    clearAnswerField();
}

// This generates a random number which will be used as index to retrieve questions
function generateNextQuestionIndex() {
    if (maxQuestions != questions.length) {
        const randNum = Math.floor(Math.random() * questions.length);
        visitedQuestions.push(randNum);
    }
    displayQuestion();
}

// Display text inside the question card
function displayQuestion() {
    // Retrieve question
    const questionText = questions[visitedQuestions[currentQuestionIndex]];
    // Update the question field with the new question text
    document.getElementById("question-title").innerHTML = questionText;
    handleNextButtonDisabledState();
    handlePreviousButtonDisabledState();
}
