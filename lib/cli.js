const inquirer = require("inquirer")
const SVG = require("./svg")
const { Circle, Square, Triangle, Oval, Rhombus } = require("./shapes")
const { writeFile } = require("fs/promises")


class CLI {
    start() {
        return inquirer.prompt([
            // First prompt/question
            {
                name: "text",
                type: "input",
                message: "Please enter your logo text (5 characters or less)",
                validate: (text) => text.length <= 5 ||
                    "The logo can only contain 5 characters or less"
            },

            // Second prompt/question
            {
                name: "chosenShape",
                type: "list",
                message: "Choose a shape from the selection below",
                choices: ["circle", "square", "triangle", "oval", "rhombus"],
            },


            // Third prompt/question
            {
                name: "fontColor",
                type: "input",
                message: "Please enter your chosen color for your font",
            },


            // Fourth prompt/question
            {
                name: "shapeColor",
                type: "input",
                message: "Please enter your chosen color for your shape"
            },
        ])


            .then(({ text, chosenShape, fontColor, shapeColor }) => {
                let shape;
                switch (chosenShape) {
                    case "circle":
                        shape = new Circle()
                        break;

                    case "square":
                        shape = new Square()
                        break;

                    case "triangle":
                        shape = new Triangle()
                        break;

                    case "oval":
                        shape = new Oval()
                        break;

                    case "rhombus":
                        shape = new Rhombus()
                        break;
                }
                shape.setColor(shapeColor)

                const svg = new SVG()
                svg.setText(text, fontColor)
                svg.setShape(shape)
                return writeFile("logo.svg", svg.rendeR())
            })

            .then(() => {
                console.log("logo.svg created")
            })

            .catch((error) => {
                console.log(error)
                console.log("Something is wrong.  Please check for errors")
            })

    }
}


module.exports = CLI