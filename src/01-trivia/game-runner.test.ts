import { expect, test } from "vitest"
import { GameRunner } from "./game-runner"
import { ConsoleLogInterceptor } from "./test-support/console-log.interceptor"

test("run game", () => {
    const interceptor = new ConsoleLogInterceptor()
    interceptor.startReceiving()

    GameRunner.main()

    interceptor.stopReceiving()

    console.log(interceptor.logged)
})
