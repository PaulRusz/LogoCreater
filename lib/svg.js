class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(color, message) {
        if (message.length > 5) {
            throw new Error("Content cannot be more than 5 characters");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;