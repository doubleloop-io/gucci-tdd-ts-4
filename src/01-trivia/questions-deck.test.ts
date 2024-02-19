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

    expect(() => deck.categoryAt(12)).toThrow(/Invalid position.*12/)
    expect(() => deck.categoryAt(99)).toThrow(/Invalid position.*99/)
    expect(() => deck.categoryAt(-1)).toThrow(/Invalid position.*-1/)
    expect(() => deck.categoryAt(-27)).toThrow(/Invalid position.*-27/)
})

test.each([["Pop"], ["Science"], ["Sports"], ["Rock"]])(
    "category %s, many questions",
    (category: string) => {
        const deck = new QuestionsDeck()

        expect(deck.questionFor(category)).toBe(`${category} Question 0`)
        expect(deck.questionFor(category)).toBe(`${category} Question 1`)
        expect(deck.questionFor(category)).toBe(`${category} Question 2`)
    },
)

test("many categories, one question", () => {
    const deck = new QuestionsDeck()

    expect(deck.questionFor("Pop")).toBe("Pop Question 0")
    expect(deck.questionFor("Science")).toBe("Science Question 0")
    expect(deck.questionFor("Sports")).toBe("Sports Question 0")
    expect(deck.questionFor("Rock")).toBe("Rock Question 0")
})

test("unknown category", () => {
    const deck = new QuestionsDeck()

    expect(() => deck.questionFor("NOT_Pop")).toThrow()
})
