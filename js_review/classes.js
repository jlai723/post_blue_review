//Declare a class example

class Rectangle {
    //When you use "new <Classname>," this is called
    constructor(height, width) {
        // var.height
        this.height = height;
        this.width = width;
    }
    //Static is on the class and you can't access this 
    static retLarger (a, b) {
        if (a.area >= b.area) return a
        return b
    } 

    //This looks like a property but is a function
    get area() {
        return this.calcArea()
    }

    //This is an instance method
    calcArea() {
        return this.height * this.width
    }
}

//  v-- instance  v-- class
let myShape = new Rectangle(5, 6);
let myShape2 = new Rectangle(8, 9);

console.log(Rectangle.retLarger(myShape, myShape2))

console.log(
    myShape,
    myShape2.calcArea(),
);

myShape2.width = 10;
console.log(myShape2.calcArea());
console.log(myShape2.area);