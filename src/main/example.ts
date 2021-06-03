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
        this.grid.getCells().map(cell => {
            const neighbours = cell.getNeighbours().filter(cell => cell.);
            if (neighbours < 2) return cell.die();
            return cell.live();
        })
    }

    getGrid(): Grid {
        return this.grid;
    }
}