export class Shape {
    protected color: string;
    protected filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getColor(): string {
        return this.color
    }

    getFilled(): string {
        if (this.filled) {
            return "is filled"
        } else {
            return "is not filled"
        }
    }

    setColor(color: string): void {
        this.color = color
    }

    setFilled(filled: boolean): void {
        this.filled = filled
    }

    toString(): string {
        return `A Shape with color of ${this.getColor()} and ${this.getFilled()}`
    }
}

let shape1 = new Shape("red", true)
console.log(shape1.toString())

