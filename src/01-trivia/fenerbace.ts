export class Fenerbace {
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

    askQuestionFor(currentCategory: string) {
        if (currentCategory == "Pop") console.log(this.popQuestions.shift())
        if (currentCategory == "Science")
            console.log(this.scienceQuestions.shift())
        if (currentCategory == "Sports")
            console.log(this.sportsQuestions.shift())
        if (currentCategory == "Rock") console.log(this.rockQuestions.shift())
    }

    currentCategoryFor(currentPlayerPlace: number) {
        if (currentPlayerPlace == 0) return "Pop"
        if (currentPlayerPlace == 4) return "Pop"
        if (currentPlayerPlace == 8) return "Pop"
        if (currentPlayerPlace == 1) return "Science"
        if (currentPlayerPlace == 5) return "Science"
        if (currentPlayerPlace == 9) return "Science"
        if (currentPlayerPlace == 2) return "Sports"
        if (currentPlayerPlace == 6) return "Sports"
        if (currentPlayerPlace == 10) return "Sports"
        return "Rock"
    }
}
