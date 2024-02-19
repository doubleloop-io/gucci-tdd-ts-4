import { expect, test, beforeEach, afterEach } from "vitest"
import { GameRunner } from "./game-runner"
import { ConsoleLogInterceptor } from "./test-support/console-log.interceptor"
import Prando from "prando"

let interceptor: ConsoleLogInterceptor
beforeEach(() => {
    interceptor = new ConsoleLogInterceptor()
    interceptor.startReceiving()
})
afterEach(() => {
    interceptor.stopReceiving()
})

test("run game", () => {
    for (let i = 1; i < 100; i++) {
        const rng = new Prando(11 * i)
        GameRunner.run((maxExcluded) => rng.nextInt(0, maxExcluded - 1))
    }

    expect(interceptor.logged).toMatchSnapshot()
})
