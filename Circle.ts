import {Shape} from "./Shape";


class Circle extends Shape {
    private radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return (this.radius * this.radius * Math.PI)
    }

    getPerimeter(): number {
        return (this.radius * 2 * Math.PI)
    }

    toString(): string {
        // console.log(super.toString())
        // return super.toString();
        let yyy = super.toString()
        return `A Circle with radius = ${this.getRadius()}, which is a subclass of ${yyy}`
    }
}

let circle1 = new Circle('red', false, 10);
console.log(circle1.toString())