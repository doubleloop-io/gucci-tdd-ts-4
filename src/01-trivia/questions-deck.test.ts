import { expect, test } from "vitest"
import { QuestionsDeck } from "./questions-deck"

test("Pop category", () => {
    const deck = new QuestionsDeck()

    expect(deck.currentCategoryFor(0)).toBe("Pop")
    expect(deck.currentCategoryFor(4)).toBe("Pop")
    expect(deck.currentCategoryFor(8)).toBe("Pop")
})
