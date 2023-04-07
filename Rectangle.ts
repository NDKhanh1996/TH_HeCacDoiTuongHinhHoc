import {Shape} from "./Shape";

export class Rectangle extends Shape {
    width: number;
    height: number

    constructor(color: string, filled: boolean, width: number, height: number) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width
    }

    getHeight(): number {
        return this.height
    }

    setWidth(width: number): void {
        this.width = width
    }

    setHeight(height: number): void {
        this.height = height
    }

    getArea(): number {
        return (this.height * this.width)
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2
    }

    toString(): string {
        let yyy = super.toString();
        return `A Rectangle with width = ${this.getWidth()} and length = ${this.getHeight()}, which is a subclass of ${yyy}`
    }
}

let rectangle1 = new Rectangle('green', true, 5, 10)
console.log(rectangle1.toString())