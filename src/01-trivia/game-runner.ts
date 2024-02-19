import { Game } from "./game"

export class GameRunner {
    public static main(): void {
        this.run(this.randomNumber)
    }

    public static run(randomNumber: (maxExcluded: number) => number) {
        const game = new Game()
        game.add("Chet")
        game.add("Pat")
        game.add("Sue")

        let notAWinner
        do {
            game.roll(randomNumber(6) + 1)

            if (randomNumber(10) == 7) {
                notAWinner = game.wrongAnswer()
            } else {
                notAWinner = game.wasCorrectlyAnswered()
            }
        } while (notAWinner)
    }

    private static randomNumber(maxExcluded: number) {
        return Math.floor(Math.random() * maxExcluded)
    }
}

GameRunner.main()
