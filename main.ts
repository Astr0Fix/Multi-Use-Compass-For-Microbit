input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Mode: Heading")
    while (true) {
        basic.showNumber(input.compassHeading())
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("Mode: Point North")
    while (true) {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Mode: Magnetic Force")
    while (true) {
        basic.showNumber(input.magneticForce(Dimension.X))
    }
})
basic.showString("Compass Starting")
