import { QuestionsDeck } from "./questions-deck"
import { QuestionCategory } from "./question-category"
import { Board } from "./board"

export class Game {
    private players: Array<string> = []
    private places: Array<number> = new Array(6).fill(0)
    private purses: Array<number> = new Array(6).fill(0)
    private inPenaltyBox: Array<boolean> = new Array(6).fill(0)
    private currentPlayer = 0
    private isGettingOutOfPenaltyBox = false

    private questionsDeck: QuestionsDeck
    private board: Board

    constructor() {
        const noOfCellPerCategory = 3
        const categoryNames = ["Pop", "Science", "Sports", "Rock"]

        this.board = new Board(categoryNames, noOfCellPerCategory)

        const categories = categoryNames.map(
            (name, index) =>
                new QuestionCategory(
                    name,
                    this.board.categoryPositionFor(index),
                ),
        )
        this.questionsDeck = new QuestionsDeck(categories)
    }
    public add(name: string): boolean {
        this.players.push(name)
        this.places[this.howManyPlayers()] = 0
        this.purses[this.howManyPlayers()] = 0
        this.inPenaltyBox[this.howManyPlayers()] = false

        console.log(name + " was added")
        console.log("They are player number " + this.players.length)

        return true
    }

    private howManyPlayers(): number {
        return this.players.length
    }

    public roll(roll: number) {
        console.log(this.players[this.currentPlayer] + " is the current player")
        console.log("They have rolled a " + roll)

        if (this.inPenaltyBox[this.currentPlayer]) {
            if (roll % 2 != 0) {
                this.isGettingOutOfPenaltyBox = true

                console.log(
                    this.players[this.currentPlayer] +
                        " is getting out of the penalty box",
                )

                this.advanceCurrentPlayer(roll)

                console.log(
                    this.players[this.currentPlayer] +
                        "'s new location is " +
                        this.places[this.currentPlayer],
                )
                console.log("The category is " + this.currentCategory())
                this.askQuestion()
            } else {
                console.log(
                    this.players[this.currentPlayer] +
                        " is not getting out of the penalty box",
                )
                this.isGettingOutOfPenaltyBox = false
            }
        } else {
            this.advanceCurrentPlayer(roll)

            console.log(
                this.players[this.currentPlayer] +
                    "'s new location is " +
                    this.places[this.currentPlayer],
            )
            console.log("The category is " + this.currentCategory())
            this.askQuestion()
        }
    }

    private advanceCurrentPlayer(roll: number) {
        const nextPosition = this.places[this.currentPlayer] + roll
        this.places[this.currentPlayer] =
            nextPosition % this.board.totalBoardCells
    }

    private askQuestion(): void {
        const currentCategory = this.currentCategory()
        const question = this.questionsDeck.questionFor(currentCategory)
        console.log(question)
    }

    private currentCategory(): string {
        const currentPlayerPlace = this.places[this.currentPlayer]

        return this.board.categoryAt(currentPlayerPlace)
    }

    private didPlayerWin(): boolean {
        return !(this.purses[this.currentPlayer] == 6)
    }

    public wrongAnswer(): boolean {
        console.log("Question was incorrectly answered")
        console.log(
            this.players[this.currentPlayer] + " was sent to the penalty box",
        )
        this.inPenaltyBox[this.currentPlayer] = true

        this.currentPlayer += 1
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0
        return true
    }

    public wasCorrectlyAnswered(): boolean {
        if (this.inPenaltyBox[this.currentPlayer]) {
            if (this.isGettingOutOfPenaltyBox) {
                console.log("Answer was correct!!!!")
                this.purses[this.currentPlayer] += 1
                console.log(
                    this.players[this.currentPlayer] +
                        " now has " +
                        this.purses[this.currentPlayer] +
                        " Gold Coins.",
                )

                const winner = this.didPlayerWin()
                this.currentPlayer += 1
                if (this.currentPlayer == this.players.length)
                    this.currentPlayer = 0

                return winner
            } else {
                this.currentPlayer += 1
                if (this.currentPlayer == this.players.length)
                    this.currentPlayer = 0
                return true
            }
        } else {
            console.log("Answer was corrent!!!!")

            this.purses[this.currentPlayer] += 1
            console.log(
                this.players[this.currentPlayer] +
                    " now has " +
                    this.purses[this.currentPlayer] +
                    " Gold Coins.",
            )

            const winner = this.didPlayerWin()

            this.currentPlayer += 1
            if (this.currentPlayer == this.players.length)
                this.currentPlayer = 0

            return winner
        }
    }
}
