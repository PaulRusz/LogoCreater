const inquirer = require("inquirer")
const SVG = require("./svg")
const path = require("path")
const { Circle, Square, Triangle, Oval, Rhombus } = require("./shapes")
const { writeFile } = require("fs/promises")


class CLI {
    start() {
        return inquirer.prompt([
            // First prompt/question
            {
                name: "text",
                type: "input",
                message: "Please enter your logo text (5 characters or less)!",
                validate: (text) => text.length <= 5 ||
                    "The logo can only contain 5 characters or less"
            },

            // Second prompt/question
            {
                name: "chosenShape",
                type: "list",
                message: "Choose a shape from the selection below:",
                choices: ["circle", "square", "triangle", "oval", "rhombus"],
            },


            // Third prompt/question
            {
                name: "fontColor",
                type: "input",
                message: "Please enter your chosen color for your font:",
            },


            // Fourth prompt/question
            {
                name: "shapeColor",
                type: "input",
                message: "Please enter your chosen color for your shape:"
            },
        ])
    }
    // Function to create shape and color
    createShapeAndSetColor(chosenShape, shapeColor) {

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

        return shape;

    }


    // Function to generate the Scalable Vector Graphics
    async generateSVG(text, fontColor, shape) {
        const svg = new SVG();
        svg.setText(text, fontColor);
        svg.setShape(shape);

        const filePath = path.join(__dirname, "logo.svg"); // Specify the full path for the SVG file

        try {
            await writeFile(filePath, svg.render());
            console.log("SVG file saved successfully as logo.svg");
        } catch (error) {
            console.log("Error saving SVG file", error);
        }
    }
}




// // Define the Circle class
// class Circle {
//     setColor(color) {
//         this.color = color;
//     }
// }

// // Define the Square class
// class Square {
//     setColor(color) {
//         this.color = color;
//     }
// }

// // Define the Triangle class
// class Triangle {
//     setColor(color) {
//         this.color = color;
//     }
// }

// // Define the Oval class
// class Oval {
//     setColor(color) {
//         this.color = color;
//     }
// }

// // Define the Rhombus class
// class Rhombus {
//     setColor(color) {
//         this.color = color;
//     }
// }


// // Function to create shape and color
// function createShapeAndSetColor(chosenShape, shapeColor) {

//     let shape;
//     switch (chosenShape) {
//         case "circle":
//             shape = new Circle()
//             break;

//         case "square":
//             shape = new Square()
//             break;

//         case "triangle":
//             shape = new Triangle()
//             break;

//         case "oval":
//             shape = new Oval()
//             break;

//         case "rhombus":
//             shape = new Rhombus()
//             break;
//     }

//     shape.setColor(shapeColor)

//     return shape;

// }


// // Function to generate the Scalable Vector Graphics
// async function generateSVG(text, fontColor, shape) {
//     const svg = new SVG();
//     svg.setText(text, fontColor);
//     svg.setShape(shape);

//     try {
//         await writeFile("logo.svg", svg.render());
//         console.log("SVG file saved successfully as logo.svg");
//     } catch (error) {
//         console.log("Error saving SVG file", error);
//     }
// }

// //generateSVG()
//     .then(() => {
//         console.log("SVG file generation complete");
//     })
//     .catch((error) => {
//         console.log("Error generating SVG:", error);
//     });

module.exports = CLI;



