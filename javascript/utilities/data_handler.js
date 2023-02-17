export default class DataHandler {
    constructor() {
        this.questions = new Map();
        this.answers = new Map();
    }

    getQuestion(key) {
        return this.questions.get(key);
    }

    getAnswer(key) {
        return this.answers.get(key);
    }
}