export type StringCell = "" | "C"
export type StringGrid = StringCell[][];

class Cell {
    private constructor(private state: "dead" | "alive") {}

    static fromString(stringCell: StringCell): Cell {
        return stringCell === ""
            ? new Cell("dead")
            : new Cell("alive");
    };

    isAlive(): boolean {
        return undefined;
    }

    die(): Cell {

    }

    live(): Cell {
        return undefined;
    }
}

export class Grid {
    constructor(private cells: Cell[][]) {}

    static fromArray(grid: ("" | "C")[][]) {
        const cells: Cell[][] = grid.map(
            row => row.map(Cell.fromString)
        )
        return new Grid(cells);
    }

    toArray() {
        return [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }

    getCells(): Cell[] {
        return this.cells.reduce(() => {}, []);
    }

    getNeighbours(cell: Cell): Cell[] {

    }
}

export class Game {
    constructor(private readonly grid: Grid) {

    }

    nextTick() {
        this.grid.getCells().map(cell => {
            const aliveNeighboursNumber = this.grid
                .getNeighbours(cell)
                .filter(cell => cell.isAlive())
                .length;
            if (aliveNeighboursNumber < 2) return cell.die();
            return cell.live();
        })
    }

    getGrid(): Grid {
        return this.grid;
    }
}