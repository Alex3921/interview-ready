import Java from "./topics/java.js";
import Cucumber from "./topics/cucumber.js";
import SoftSkills from "./topics/soft_skills.js";
import JUnitTestNG from "./topics/junit_testng.js";
import Maven from "./topics/maven.js";
import Selenium from "./topics/selenium.js";
import Scenario from "./topics/scenario.js";
import SQL from "./topics/sql.js";
import Mock from "./topics/mock.js";
import Algorithms from "./topics/pattern.js";
import Pattern from "./topics/pattern.js";

let selectedTopic;

// Get menu buttons
const btnTopicList = document.getElementsByClassName("btn-topic");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnConfirmNumQuestions = document.getElementById("btn-ok");

// Get the question number modal and modal overlay elements
const modalNumQuestions = document.getElementById("modal-num-questions");
const modalOverlay = document.getElementById("modal-overlay");

if (window.location.pathname.endsWith("algo-pattern-list.html")) {
    generateAlgorithmChecklist();
    loadAlgorithmChecklistState();
}

// Handle menu button click events
btnCloseModal.addEventListener("click", hideModalNumQuestions);
btnConfirmNumQuestions.addEventListener("click", checkForm);

function addEventListenerToBtnTopic() {
    for (let btn of btnTopicList) {
        btn.addEventListener("click", handleTopicChoice);
    }
}
addEventListenerToBtnTopic();

function handleTopicChoice(e) {
    const topic = e.target.innerHTML.trim();
    switch (topic) {
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
        case "Mock":
            selectedTopic = new Mock();
            break;
        case "Algo Patterns":
            window.open('algo-pattern-list.html', '_blank');
            break;
    }

    if (topic === "Mock") {
        showQuestionCard(selectedTopic.questions.size);
    } else {
        showModalNumQuestions(topic);
    }
}

function generateAlgorithmChecklist() {
    const checklistContainer = document.getElementById("algorithm-list");
    const patterns = new Pattern();

    for (let i = 0; i < patterns.dataList.length; i++) {
        const pattern = patterns.dataList[i];

        const subtitle = document.createElement('div');
        subtitle.classList.add('subtitle');
        subtitle.textContent = i + 1 + ". " + pattern.pattern;
        checklistContainer.appendChild(subtitle);

        const patternList = document.createElement('ul');

        pattern.questions.forEach((question, index) => {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = question.name;
            checkbox.dataset.index = i + '-' + index;
            checkbox.title = question.name;
            checkbox.placeholder = question.name;


            listItem.appendChild(checkbox);

            const label = document.createElement('label');
            label.textContent = question.name;
            label.htmlFor = checkbox.dataset.index;
            listItem.appendChild(label);

            label.addEventListener('click', () => {
                checkbox.click();
            });

            patternList.appendChild(listItem);
        });

        checklistContainer.appendChild(patternList);
    }

    const checklist = document.getElementById('algorithm-list');
    checklist.addEventListener('change', saveAlgorithmChecklistState);
}

// Function to save the algo checklist state to localStorage
function saveAlgorithmChecklistState() {
    const checklist = document.getElementById('algorithm-list');
    const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
    
    const selectedAlgorithms = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedAlgorithms.push(checkbox.getAttribute('data-index'));
        }
    });
    
    localStorage.setItem('selectedAlgorithms', JSON.stringify(selectedAlgorithms));
}

// Function to load the algo checklist state from localStorage
function loadAlgorithmChecklistState() {
    const selectedAlgorithms = JSON.parse(localStorage.getItem('selectedAlgorithms'));
    if (selectedAlgorithms) {
        const checklist = document.getElementById('algorithm-list');
        const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            const checkboxIndex = checkbox.getAttribute('data-index');
            checkbox.checked = selectedAlgorithms.includes(checkboxIndex);
        });
    }
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
    let randNum;
    if (selectedTopic.questions.size !== 35) {
        do {
            randNum =
                Math.floor(Math.random() * selectedTopic.questions.size) + 1;
        } while (visitedQuestions.findIndex((i) => i === randNum) != -1);
    } else {
        randNum = visitedQuestions.length + 1;
    }

    visitedQuestions.push(randNum);
    displayQuestion();
}

// Display text inside the question card
function displayQuestion() {
    // Retrieve question
    currentQuestionToken = selectedTopic.getQuestion(
        visitedQuestions[currentQuestionIndex]
    );
    // Update the question field with the new question text
    document.getElementById("question-title").innerHTML =
        currentQuestionIndex + 1 + ". " + currentQuestionToken;

    handleNextButtonDisabledState();
    handlePreviousButtonDisabledState();
}
