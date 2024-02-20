import { arrayFrom } from "../support/helpers"

export class Board {
    private categoryAndPositions: { name: string; positions: number[] }[]
    private noOfCategories: number

    constructor(
        categoryNames: string[],
        private noOfCellPerCategory: number,
    ) {
        this.noOfCategories = categoryNames.length
        this.categoryAndPositions = categoryNames.map((name, index) => ({
            name,
            positions: this.categoryPositionFor(index),
        }))
    }

    get totalBoardCells() {
        return this.noOfCategories * this.noOfCellPerCategory
    }

    categoryPositionFor(categoryIndex: number) {
        return arrayFrom(0, this.noOfCellPerCategory).map(
            (i) => i * this.noOfCategories + categoryIndex,
        )
    }

    categoryAt(position: number) {
        const found = this.categoryAndPositions.find((c) =>
            c.positions.includes(position),
        )
        if (!found) throw new Error(`Invalid position ${position}`)

        return found.name
    }
}
