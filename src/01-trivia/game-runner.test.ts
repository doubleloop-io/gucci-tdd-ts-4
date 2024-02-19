import { expect, test, beforeEach, afterEach } from "vitest"
import { GameRunner } from "./game-runner"
import { ConsoleLogInterceptor } from "./test-support/console-log.interceptor"

let interceptor: ConsoleLogInterceptor
beforeEach(() => {
    interceptor = new ConsoleLogInterceptor()
    interceptor.startReceiving()
})
afterEach(() => {
    interceptor.stopReceiving()
})

test("run game", () => {
    GameRunner.main()

    console.log(interceptor.logged)
})
