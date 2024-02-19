export class QuestionsDeck {
    private readonly popQuestions: Array<string> = []
    private popPositions = [0, 4, 8]

    private readonly scienceQuestions: Array<string> = []
    private sciencePositions = [1, 5, 9]

    private readonly sportsQuestions: Array<string> = []
    private sportsPositions = [2, 6, 10]

    private readonly rockQuestions: Array<string> = []
    private rockPositions = [3, 7, 11]

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
        if (this.popPositions.includes(position)) return "Pop"
        if (this.sciencePositions.includes(position)) return "Science"
        if (this.sportsPositions.includes(position)) return "Sports"
        if (this.rockPositions.includes(position)) return "Rock"

        throw new Error(`Invalid position ${position}`)
    }
}
