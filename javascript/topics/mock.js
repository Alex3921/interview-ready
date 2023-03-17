import DataHandler from "../utilities/data_handler.js";
import Cucumber from "./cucumber.js";
import Java from "./java.js";
import JUnitTestNG from "./junit_testng.js";
import Maven from "./maven.js";
import Scenario from "./scenario.js";
import Selenium from "./selenium.js";
import SoftSkills from "./soft_skills.js";
import SQL from "./sql.js";

export default class Mock extends DataHandler {
    constructor() {
        super();
        this.generateMock();
    }

    #java = new Java();
    #softSkills = new SoftSkills();
    #cucumber = new Cucumber();
    #jUnitTestNG = new JUnitTestNG();
    #maven = new Maven();
    #selenium = new Selenium();
    #scenario = new Scenario();
    #sql = new SQL();

    #topics = [
        this.#java,
        this.#softSkills,
        this.#cucumber,
        this.#jUnitTestNG,
        this.#maven,
        this.#selenium,
        this.#scenario,
        this.#sql,
    ];

    #first = this.#scenario.questions.get(29);
    #second = this.#scenario.questions.get(20);
    #third = this.#scenario.questions.get(30);

    questions = new Map([
        [1, this.#first],
        [2, this.#second],
        [3, this.#third],
    ]);

    answers = new Map([
        [this.#first, this.#scenario.answers.get(this.#first)],
        [this.#second, this.#scenario.answers.get(this.#second)],
        [this.#third, this.#scenario.answers.get(this.#third)],
    ]);

    generateMock() {
        for (let i = 0; i < this.#topics.length; i++) {
            this.getRandomQuestions(this.#topics[i]);
        }
    }

    getRandomQuestions(topic) {
        let topicQ = topic.questions;
        let topicA = topic.answers;

        const selectedIndices = new Set();
        while (selectedIndices.size < 4) {
            const index = Math.floor(Math.random() * topicQ.size) + 1;
            selectedIndices.add(index);
        }
        [...selectedIndices].map(
            (index) => (
                this.questions.set(this.questions.size + 1, topicQ.get(index)),
                this.getAnswers(topicQ.get(index), topicA)
            )
        );
    }

    getAnswers(question, answers) {
        this.answers.set(question, answers.get(question));
    }
}
