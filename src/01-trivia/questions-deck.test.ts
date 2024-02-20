import { expect, test } from "vitest"
import { QuestionsDeck } from "./questions-deck"
import { QuestionCategory } from "./question-category"

test.each([["Pop"], ["Science"], ["Sports"], ["Rock"]])(
    "category %s, many questions",
    (category: string) => {
        const deck = new QuestionsDeck([
            new QuestionCategory("Pop"),
            new QuestionCategory("Science"),
            new QuestionCategory("Sports"),
            new QuestionCategory("Rock"),
            // new QuestionCategory("History", [4, 8, ??]),
        ])

        expect(deck.questionFor(category)).toBe(`${category} Question 0`)
        expect(deck.questionFor(category)).toBe(`${category} Question 1`)
        expect(deck.questionFor(category)).toBe(`${category} Question 2`)
    },
)

test("many categories, one question", () => {
    const deck = new QuestionsDeck([
        new QuestionCategory("Pop"),
        new QuestionCategory("Science"),
        new QuestionCategory("Sports"),
        new QuestionCategory("Rock"),
    ])

    expect(deck.questionFor("Pop")).toBe("Pop Question 0")
    expect(deck.questionFor("Science")).toBe("Science Question 0")
    expect(deck.questionFor("Sports")).toBe("Sports Question 0")
    expect(deck.questionFor("Rock")).toBe("Rock Question 0")
})

test("unknown category", () => {
    const deck = new QuestionsDeck([
        new QuestionCategory("Pop"),
        new QuestionCategory("Science"),
        new QuestionCategory("Sports"),
        new QuestionCategory("Rock"),
        // new QuestionCategory("History", [4, 8, ??]),
    ])

    expect(() => deck.questionFor("NOT_Pop")).toThrow()
})
