export class QuestionCategory {
    private questions: Array<string> = []
    constructor(
        public name: string,
        private positions: number[],
    ) {
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

    isCategoryAt(position: number) {
        return this.positions.includes(position)
    }
}
