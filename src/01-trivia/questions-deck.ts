import { QuestionCategory } from "./question-category"

export class QuestionsDeck {
    private popCategory: QuestionCategory
    private scienceCategory: QuestionCategory
    private sportsCategory: QuestionCategory
    private rockCategory: QuestionCategory

    constructor() {
        this.popCategory = new QuestionCategory("Pop", [0, 4, 8])
        this.scienceCategory = new QuestionCategory("Science", [1, 5, 9])
        this.sportsCategory = new QuestionCategory("Sports", [2, 6, 10])
        this.rockCategory = new QuestionCategory("Rock", [3, 7, 11])
    }

    questionFor(category: string) {
        if (category == this.popCategory.name) {
            return this.popCategory.nextQuestion()
        }
        if (category == this.scienceCategory.name) {
            return this.scienceCategory.nextQuestion()
        }
        if (category == this.sportsCategory.name) {
            return this.sportsCategory.nextQuestion()
        }
        if (category == this.rockCategory.name) {
            return this.rockCategory.nextQuestion()
        }

        throw new Error(`Unknown category ${category}`)
    }

    categoryAt(position: number) {
        if (this.popCategory.isCategoryAt(position))
            return this.popCategory.name
        if (this.scienceCategory.isCategoryAt(position))
            return this.scienceCategory.name
        if (this.sportsCategory.isCategoryAt(position))
            return this.sportsCategory.name
        if (this.rockCategory.isCategoryAt(position))
            return this.rockCategory.name

        throw new Error(`Invalid position ${position}`)
    }
}
