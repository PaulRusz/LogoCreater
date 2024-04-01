// const CLI = require("./lib/cli")


// const cli = new CLI()
// // grabbing user inputs


// let userAnswers = cli.start()
// // plug user inputs into creatshape&color function - console.log(userAnswers) to view inputs
// let shape = cli.createShapeAndSetColor()
// // plug shape variable into generate function
// cli.generateSVG()



const CLI = require("./lib/cli")


const cli = new CLI()
// Start the CLI and handle user input
cli.start().then((userAnswers) => {
    // Displays user inputs
    console.log(userAnswers)

    // Create shape based on user input
    let shape = cli.createShapeAndSetColor(userAnswers.chosenShape, userAnswers.shapeColor);

    // Generate SVG based on user inputs and shape
    cli.generateSVG(userAnswers.text, userAnswers.fontColor, shape)
}).catch((err0r) => {
    console.error("An error occurred:", error)
})