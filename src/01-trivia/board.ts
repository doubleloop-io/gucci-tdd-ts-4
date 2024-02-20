import { arrayFrom } from "../support/helpers"

export class Board {
    constructor(
        private noOfCategories: number,
        private noOfCellPerCategory: number,
    ) {}

    get totalBoardCells() {
        return this.noOfCategories * this.noOfCellPerCategory
    }

    categoryPositionFor(categoryIndex: number) {
        return arrayFrom(0, this.noOfCellPerCategory).map(
            (i) => i * this.noOfCategories + categoryIndex,
        )
    }
}
