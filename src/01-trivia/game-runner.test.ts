import { expect, test, beforeEach, afterEach } from "vitest"
import { GameRunner } from "./game-runner"
import { ConsoleLogInterceptor } from "./test-support/console-log.interceptor"
import Prando from "prando"

let interceptor: ConsoleLogInterceptor
beforeEach(() => {
    // interceptor = new ConsoleLogInterceptor()
    // interceptor.startReceiving()
})
afterEach(() => {
    // interceptor.stopReceiving()
})

test("run game", () => {
    GameRunner.main()

    // expect(interceptor.logged).toMatchSnapshot()
})

test("Prando", () => {
    const rng = new Prando(11)

    const numbers = [
        rng.nextInt(0, 10),
        rng.nextInt(0, 10),
        rng.nextInt(0, 10),
        rng.nextInt(0, 10),
        rng.nextInt(0, 10),
    ]

    expect(numbers).toEqual([5, 7, 4, 8, 2])
})
