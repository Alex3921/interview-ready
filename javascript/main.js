import Java from "./topics/java.js";
import Cucumber from "./topics/cucumber.js";
import SoftSkills from "./topics/soft_skills.js";
import JUnitTestNG from "./topics/junit_testng.js";
import Maven from "./topics/maven.js";
import Selenium from "./topics/selenium.js";
import Scenario from "./topics/scenario.js";
import SQL from "./topics/sql.js";

let selectedTopic;

// Get menu buttons
const btnTopicList = document.getElementsByClassName("btn-topic");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnConfirmNumQuestions = document.getElementById("btn-ok");

// Get the question number modal and modal overlay elements
const modalNumQuestions = document.getElementById("modal-num-questions");
const modalOverlay = document.getElementById("modal-overlay");

// Handle menu button click events
btnCloseModal.addEventListener("click", hideModalNumQuestions);
btnConfirmNumQuestions.addEventListener("click", checkForm);

function addEventListenerToBtnTopic() {
    for (let btn of btnTopicList) {
        btn.addEventListener("click", handleTopicChoice);
    }
}
addEventListenerToBtnTopic();

// This handles topic choice and retrieves the correct data
function handleTopicChoice(e) {
    const topic = e.target.innerHTML;

    switch (topic.trim()) {
        case "JAVA":
            selectedTopic = new Java();
            break;
        case "Soft Skills":
            selectedTopic = new SoftSkills();
            break;
        case "Cucumber":
            selectedTopic = new Cucumber();
            break;
        case "JUnit - TestNG":
            selectedTopic = new JUnitTestNG();
            break;
        case "Maven":
            selectedTopic = new Maven();
            break;
        case "Selenium":
            selectedTopic = new Selenium();
            break;
        case "Scenario":
            selectedTopic = new Scenario();
            break;
        case "SQL":
            selectedTopic = new SQL();
            break;
    }
    showModalNumQuestions(topic);
}

function showModalNumQuestions(topic) {
    // Customize modal subtitle with topic selection
    document.getElementById("topic").innerHTML = `Practice ${topic} questions!`;
    document.getElementById(
        "label-num-questions"
    ).innerHTML = `Current question bank: ${selectedTopic.questions.size}`;
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

    if (input < 1 || input > selectedTopic.questions.size) {
        alert(
            `Please enter a number between 1 and ${selectedTopic.questions.size}.`
        );
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
let currentQuestionToken = "";

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
    if (btnShowAnswer.innerHTML == "Details") {
        const details = selectedTopic.getAnswer(currentQuestionToken);
        answerField.className = "show";
        answerField.innerHTML = details;
        btnShowAnswer.innerHTML = "Hide";
    } else {
        clearAnswerField();
    }
}

// Clean answer field within the question card
function clearAnswerField() {
    answerField.className = "";
    answerField.innerHTML = "";
    btnShowAnswer.innerHTML = "Details";
}

function showQuestionCard(input) {
    // If all questions are to be served pre-generate all index positions
    if (input == selectedTopic.questions.size) {
        visitedQuestions = Array.from(
            { length: selectedTopic.questions.size },
            (_, i) => i + 1
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
    if (maxQuestions != selectedTopic.questions.size) {
        const randNum = Math.floor(
            Math.random() * selectedTopic.questions.size
        ) + 1;
        visitedQuestions.push(randNum);
    }
    displayQuestion();
}

// Display text inside the question card
function displayQuestion() {
    // Retrieve question
    currentQuestionToken = selectedTopic.getQuestion(
        visitedQuestions[currentQuestionIndex]
    );
    // Update the question field with the new question text
    document.getElementById("question-title").innerHTML = currentQuestionIndex+1 + ". " + currentQuestionToken;

    handleNextButtonDisabledState();
    handlePreviousButtonDisabledState();
}
