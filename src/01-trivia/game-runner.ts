import { Game } from "./game"

export class GameRunner {
    public static main(): void {
        const game = new Game()
        game.add("Chet")
        game.add("Pat")
        game.add("Sue")

        let notAWinner
        do {
            game.roll(this.randomNumber(6) + 1)

            if (this.randomNumber(10) == 7) {
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
