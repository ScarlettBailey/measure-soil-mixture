input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.showString("HellO")
})
