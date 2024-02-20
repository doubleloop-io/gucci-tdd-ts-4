import { QuestionCategory } from "./question-category"

export class QuestionsDeck {
    private categories: QuestionCategory[]

    constructor() {
        this.categories = [
            new QuestionCategory("Pop", [0, 4, 8]),
            new QuestionCategory("Science", [1, 5, 9]),
            new QuestionCategory("Sports", [2, 6, 10]),
            new QuestionCategory("Rock", [3, 7, 11]),
            // new QuestionCategory("History", [4, 8, ??]),
        ]
    }

    questionFor(category: string) {
        const found = this.categories.find((c) => c.name == category)
        if (!found) throw new Error(`Unknown category ${category}`)

        return found.nextQuestion()
    }

    categoryAt(position: number) {
        const found = this.categories.find((c) => c.isCategoryAt(position))
        if (!found) throw new Error(`Invalid position ${position}`)

        return found.name
    }
}
