const { Circle, Square, Triangle, Oval, Rhombus } = require('./shapes')

// Circle
describe("Circle", () => {
    test("should render svg for a red circle", () => {
        const svgExpected = '<circle cx="150" cy="100" r="80" fill="red"/>'
        const circle = new Circle()
        circle.setColor("red")
        const svgActually = circle.render()
        expect(svgActually).toEqual(svgExpected)
    })
    test("should allow for a fill color parameter", () => {
        const svgExpected = '<circle cx="150" cy="100" r="80" fill="green"/>'
        const circle = new Circle()
        circle.setColor("green")
        const svgActually = circle.render()
        expect(svgActually).toEqual(svgExpected)
    })
})

// Square
describe("Square", () => {
    test("should render svg for a red square", () => {
        const svgExpected = '<rect x="50" y="50" width="100" height="100" fill="red" />'
        const square = new Square()
        square.setColor("red")
        const svgActually = square.render()
        expect(svgActually).toEqual(svgExpected)
    })
    test("should allow for a fill color parameter", () => {
        const svgExpected = '<rect x="50" y="50" width="100" height="100" fill="green" />'
        const square = new Square()
        square.setColor("green")
        const svgActually = square.render()
        expect(svgActually).toEqual(svgExpected)
    })
})


// Triangle
describe("Triangle", () => {
    test("should render svg for a red Tiangle", () => {
        const svgExpected = '<polygon points="50,150 150,50 250,150" fill="red" />'
        const triangle = new Triangle()
        triangle.setColor("red")
        const svgActually = triangle.render()
        expect(svgActually).toEqual(svgExpected)
    })
    test("should allow for a fill color parameter", () => {
        const svgExpected = '<polygon points="50,150 150,50 250,150" fill="green" />'
        const triangle = new Triangle()
        triangle.setColor("green")
        const svgActually = triangle.render()
        expect(svgActually).toEqual(svgExpected)
    })
})


// Oval
describe("Oval", () => {
    test("should render svg for a red Oval", () => {
        const svgExpected = '<ellipse cx="150" cy="100" rx="80" ry="50" fill="red" />'
        const oval = new Oval()
        oval.setColor("red")
        const svgActually = oval.render()
        expect(svgActually).toEqual(svgExpected)
    })
    test("should allow for a fill color parameter", () => {
        const svgExpected = '<ellipse cx="150" cy="100" rx="80" ry="50" fill="green" />'
        const oval = new Oval()
        oval.setColor("green")
        const svgActually = oval.render()
        expect(svgActually).toEqual(svgExpected)
    })
})

// Rhombus
describe("Rhombus", () => {
    test("should render svg for a red Rhombus", () => {
        const svgExpected = '<polygon points="150,50 200,100 150,150 100,100" fill="red" />'
        const rhombus = new Rhombus()
        rhombus.setColor("red")
        const svgActually = rhombus.render()
        expect(svgActually).toEqual(svgExpected)
    })
    test("should allow for a fill color parameter", () => {
        const svgExpected = '<polygon points="150,50 200,100 150,150 100,100" fill="green" />'
        const rhombus = new Rhombus()
        rhombus.setColor("green")
        const svgActually = rhombus.render()
        expect(svgActually).toEqual(svgExpected)
    })
})