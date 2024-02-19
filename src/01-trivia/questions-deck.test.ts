import { expect, test } from "vitest"
import { QuestionsDeck } from "./questions-deck"

test.each([
    ["Pop", [0, 4, 8]],
    ["Science", [1, 5, 9]],
    ["Sports", [2, 6, 10]],
    ["Rock", [3, 7, 11]],
])("%s category at %s", (category: string, places: number[]) => {
    const deck = new QuestionsDeck()

    expect(deck.currentCategoryFor(places[0])).toBe(category)
    expect(deck.currentCategoryFor(places[1])).toBe(category)
    expect(deck.currentCategoryFor(places[2])).toBe(category)
})
