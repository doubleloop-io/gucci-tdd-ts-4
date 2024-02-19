import { expect, test } from "vitest"
import { QuestionsDeck } from "./questions-deck"

test("Pop category", () => {
    const deck = new QuestionsDeck()

    expect(deck.currentCategoryFor(0)).toBe("Pop")
    expect(deck.currentCategoryFor(4)).toBe("Pop")
    expect(deck.currentCategoryFor(8)).toBe("Pop")
})

test("Science category", () => {
    const deck = new QuestionsDeck()

    expect(deck.currentCategoryFor(1)).toBe("Science")
    expect(deck.currentCategoryFor(5)).toBe("Science")
    expect(deck.currentCategoryFor(9)).toBe("Science")
})
