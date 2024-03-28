const SVG = require("./svg")
const { Circle, Triangle } = require("./shapes")

test("should render a circle with specific points in a 150x150 SVG", () => {
    const svgExpected =
        '<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=""/></svg>';

    const circle = new Circle();
    const svg = new SVG();
    svg.setShape(circle);

    expect(svg.render()).toEqual(svgExpected);
});


test("should append text element 'C' in blue color to a 150x150 SVG", () => {
    const svgExpected =
        '<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">C</text></svg>';

    const svg = new SVG();
    svg.setText("C", "blue");

    expect(svg.render()).toEqual(svgExpected);
});


test("should set message 'test' with color '#555' in a 150x150 SVG", () => {
    const svgExpected =
        '<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#555">test</text></svg>'
    const svg = new SVG()
    svg.setText("test", "#555")
    expect(svg.render()).toEqual(svgExpected)
})

test("you need to include a shape", () => {
    const svgExpected = '<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 150,50 250,150" fill="gold" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#555">test</text></svg>';

    const svg = new SVG();
    svg.setText("test", "#555");
    const triangle = new Triangle();
    triangle.setColor("gold");
    svg.setShape(triangle);

    expect(svg.render()).toEqual(svgExpected);
});