import { EOL } from "node:os"

export class ConsoleLogInterceptor {
    private origLog?: () => void
    private _logged = ""

    startReceiving() {
        this.origLog = console.log.bind(console)
        console.log = (...args: unknown[]) => {
            this._logged += args.map((a) => `${a}`).join(" ") + EOL
            // this._logged += args.map((a) => JSON.stringify(a)).join(" ") + EOL
        }
    }

    stopReceiving() {
        if (!this.origLog) return
        console.log = this.origLog
    }

    get logged(): string {
        return this._logged
    }
}
