import {Rectangle} from "./Rectangle";

class Square extends Rectangle{
    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }
    getSide():number{
        return super.getWidth()
    }
    setSide(side: number): void{
        super.setWidth(side);
        super.setHeight(side);
    }
    toString(): string {
        let yyy = super.toString();
        return `A Square with side = ${this.getSide()}, which is a subclass of ${yyy}`
    }
}
let square1 = new Square('black', false,10)
console.log(square1.toString())