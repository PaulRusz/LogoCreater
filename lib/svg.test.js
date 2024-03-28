const SVG = require("./svg")
const { Circle } = require("./shapes")

test("should render a circle with specific points in a 150x150 SVG", () => {
    const svgExpected =
        "<svg version=\"1.1\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx='150' cy='100' r='80' fill='gold'/></svg>";

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

test("should show an error if the text exceeds 5 characters", () => {
    const errorExpected = new Error("Cannot contain more than 5 characters")
    const svg = new SVG()
    expect(() => svg.setText("Test2", "#555")).toThrow(errorExpected)
})

test("you need to include a shape", () => {
    const svgExpected = '<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="200" height="200" fill="gold" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#555">test</text></svg>';

    const svg = new SVG();
    svg.setText("test", "#555");
    const rectangle = new Rectangle();
    rectangle.setColor("gold");
    svg.setShape(rectangle);

    expect(svg.render()).toEqual(svgExpected);
});