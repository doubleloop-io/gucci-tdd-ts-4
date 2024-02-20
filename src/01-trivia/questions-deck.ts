class QuestionCategory {
    constructor(
        public name: string,
        private questions: Array<string>,
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

export class QuestionsDeck {
    private readonly popQuestions: Array<string> = []
    private popPositions = [0, 4, 8]
    popCategory: QuestionCategory

    private readonly scienceQuestions: Array<string> = []
    private sciencePositions = [1, 5, 9]

    private readonly sportsQuestions: Array<string> = []
    private sportsPositions = [2, 6, 10]

    private readonly rockQuestions: Array<string> = []
    private rockPositions = [3, 7, 11]

    constructor() {
        this.popCategory = new QuestionCategory(
            "Pop",
            this.popQuestions,
            this.popPositions,
        )

        this.fillQuestions()
    }

    private fillQuestions() {
        for (let i = 0; i < 50; i++) {
            this.scienceQuestions.push("Science Question " + i)
            this.sportsQuestions.push("Sports Question " + i)
            this.rockQuestions.push("Rock Question " + i)
        }
    }

    questionFor(category: string) {
        if (category == this.popCategory.name) {
            return this.popCategory.nextQuestion()
        }
        if (category == "Science") {
            return this.scienceQuestions.shift()
        }
        if (category == "Sports") {
            return this.sportsQuestions.shift()
        }
        if (category == "Rock") {
            return this.rockQuestions.shift()
        }

        throw new Error(`Unknown category ${category}`)
    }

    categoryAt(position: number) {
        if (this.popCategory.isCategoryAt(position))
            return this.popCategory.name
        if (this.sciencePositions.includes(position)) return "Science"
        if (this.sportsPositions.includes(position)) return "Sports"
        if (this.rockPositions.includes(position)) return "Rock"

        throw new Error(`Invalid position ${position}`)
    }
}
