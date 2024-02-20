import { QuestionCategory } from "./question-category"

export class QuestionsDeck {
    private categories: QuestionCategory[]

    constructor(categories: QuestionCategory[]) {
        this.categories = categories
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
