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
}
