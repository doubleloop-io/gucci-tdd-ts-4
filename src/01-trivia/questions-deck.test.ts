import { expect, test } from "vitest"
import { QuestionsDeck } from "./questions-deck"

test.each([
    ["Pop", [0, 4, 8]],
    ["Science", [1, 5, 9]],
    ["Sports", [2, 6, 10]],
    ["Rock", [3, 7, 11]],
])("%s category at %s", (category: string, places: number[]) => {
    const deck = new QuestionsDeck()

    expect(deck.categoryAt(places[0])).toBe(category)
    expect(deck.categoryAt(places[1])).toBe(category)
    expect(deck.categoryAt(places[2])).toBe(category)
})

test("Out of bound position", () => {
    const deck = new QuestionsDeck()

    expect(deck.categoryAt(12)).toBe("Rock")
    expect(deck.categoryAt(99)).toBe("Rock")
    expect(deck.categoryAt(-1)).toBe("Rock")
    expect(deck.categoryAt(-27)).toBe("Rock")
})
