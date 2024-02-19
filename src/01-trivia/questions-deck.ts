export class QuestionsDeck {
    private readonly popQuestions: Array<string> = []
    private readonly scienceQuestions: Array<string> = []
    private readonly sportsQuestions: Array<string> = []
    private readonly rockQuestions: Array<string> = []

    constructor() {
        this.fillQuestions()
    }

    private fillQuestions() {
        for (let i = 0; i < 50; i++) {
            this.popQuestions.push("Pop Question " + i)
            this.scienceQuestions.push("Science Question " + i)
            this.sportsQuestions.push("Sports Question " + i)
            this.rockQuestions.push("Rock Question " + i)
        }
    }

    questionFor(category: string) {
        if (category == "Pop") {
            return this.popQuestions.shift()
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
        if (position == 0) return "Pop"
        if (position == 4) return "Pop"
        if (position == 8) return "Pop"
        if (position == 1) return "Science"
        if (position == 5) return "Science"
        if (position == 9) return "Science"
        if (position == 2) return "Sports"
        if (position == 6) return "Sports"
        if (position == 10) return "Sports"
        if (position == 3) return "Rock"
        if (position == 7) return "Rock"
        if (position == 11) return "Rock"

        throw new Error(`Invalid position ${position}`)
    }
}
