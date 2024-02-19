import { Game } from "./game"

export class Fenerbace {
    askQuestionFor(currentCategory: string, game: Game) {
        if (currentCategory == "Pop") console.log(game.popQuestions.shift())
        if (currentCategory == "Science")
            console.log(game.scienceQuestions.shift())
        if (currentCategory == "Sports")
            console.log(game.sportsQuestions.shift())
        if (currentCategory == "Rock") console.log(game.rockQuestions.shift())
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
