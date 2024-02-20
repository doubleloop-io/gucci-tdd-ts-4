import { expect, test } from "vitest"
import { Board } from "./board"

test.each([
    ["Pop", [0, 4, 8]],
    ["Science", [1, 5, 9]],
    ["Sports", [2, 6, 10]],
    ["Rock", [3, 7, 11]],
])("%s category at %s", (category: string, places: number[]) => {
    const board = new Board(["Pop", "Science", "Sports", "Rock"], 3)

    expect(board.categoryAt(places[0])).toBe(category)
    expect(board.categoryAt(places[1])).toBe(category)
    expect(board.categoryAt(places[2])).toBe(category)
})

test("Out of bound position", () => {
    const board = new Board(["Pop", "Science", "Sports", "Rock"], 3)

    expect(() => board.categoryAt(12)).toThrow(/Invalid position.*12/)
    expect(() => board.categoryAt(99)).toThrow(/Invalid position.*99/)
    expect(() => board.categoryAt(-1)).toThrow(/Invalid position.*-1/)
    expect(() => board.categoryAt(-27)).toThrow(/Invalid position.*-27/)
})
