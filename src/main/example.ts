export class Grid {
    constructor(grid: ("" | "C")[][]) {

    }

    toArray() {
        return [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }
}

export class Game {
    constructor(private readonly grid: Grid) {

    }

    nextTick() {

    }

    getGrid(): Grid {
        return this.grid;
    }
}