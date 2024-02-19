export class Fenerbace {
    currentCategoryFor(currentPlayerPlace: number) {
        if (currentPlayerPlace == 0) return "Pop"
        if (currentPlayerPlace == 4) return "Pop"
        if (currentPlayerPlace == 8) return "Pop"
        if (currentPlayerPlace == 1) return "Science"
        if (currentPlayerPlace == 5) return "Science"
        if (currentPlayerPlace == 9) return "Science"
        if (currentPlayerPlace == 2) return "Sports"
        if (currentPlayerPlace == 6) return "Sports"
        if (currentPlayerPlace == 10) return "Sports"
        return "Rock"
    }
}
