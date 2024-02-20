export class QuestionCategory {
    private questions: Array<string> = []

    constructor(public name: string) {
        this.fillQuestions()
    }

    fillQuestions() {
        for (let i = 0; i < 50; i++) {
            this.questions.push(`${this.name} Question ` + i)
        }
    }

    nextQuestion() {
        return this.questions.shift()
    }
}
