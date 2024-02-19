import { Fenerbace } from "./fenerbace"

export class Game {
    private players: Array<string> = []
    private places: Array<number> = new Array(6).fill(0)
    private purses: Array<number> = new Array(6).fill(0)
    private inPenaltyBox: Array<boolean> = new Array(6).fill(0)
    private currentPlayer = 0
    private isGettingOutOfPenaltyBox = false

    // R-Add History
    private popQuestions: Array<string> = []
    private scienceQuestions: Array<string> = []
    private sportsQuestions: Array<string> = []
    private rockQuestions: Array<string> = []

    private fenerbace: Fenerbace

    constructor() {
        this.fenerbace = new Fenerbace()

        this.fillQuestions()
    }

    // R-Add History
    private fillQuestions() {
        for (let i = 0; i < 50; i++) {
            this.popQuestions.push("Pop Question " + i)
            this.scienceQuestions.push("Science Question " + i)
            this.sportsQuestions.push("Sports Question " + i)
            this.rockQuestions.push("Rock Question " + i)
        }
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
                this.places[this.currentPlayer] =
                    this.places[this.currentPlayer] + roll
                if (this.places[this.currentPlayer] > 11) {
                    this.places[this.currentPlayer] =
                        this.places[this.currentPlayer] - 12
                }

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
            this.places[this.currentPlayer] =
                this.places[this.currentPlayer] + roll
            if (this.places[this.currentPlayer] > 11) {
                this.places[this.currentPlayer] =
                    this.places[this.currentPlayer] - 12
            }

            console.log(
                this.players[this.currentPlayer] +
                    "'s new location is " +
                    this.places[this.currentPlayer],
            )
            console.log("The category is " + this.currentCategory())
            this.askQuestion()
        }
    }

    // R-Add History
    private askQuestion(): void {
        if (this.currentCategory() == "Pop")
            console.log(this.popQuestions.shift())
        if (this.currentCategory() == "Science")
            console.log(this.scienceQuestions.shift())
        if (this.currentCategory() == "Sports")
            console.log(this.sportsQuestions.shift())
        if (this.currentCategory() == "Rock")
            console.log(this.rockQuestions.shift())
    }

    private currentCategory(): string {
        const currentPlayerPlace = this.places[this.currentPlayer]
        return this.fenerbace.currentCategoryFor(currentPlayerPlace)
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
