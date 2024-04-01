class Shapes {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}


// Circle Class
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}


// Square Class
class Square extends Shapes {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}


// Triangle Class
class Triangle extends Shapes {
    render() {
        return `<polygon points="150,18 244, 182 56, 182" fill="${this.color}" />`
    }
}


// Oval Class
class Oval extends Shapes {
    render() {
        return `<ellipse cx="150" cy="100" rx="80" ry="50" fill="${this.color}" />`
    }
}


// Rhombus Class
class Rhombus extends Shapes {
    render() {
        return `<polygon points="150,50 200,100 150,150 100,100" fill="${this.color}" />`
    }
}


module.exports = { Circle, Square, Triangle, Oval, Rhombus }