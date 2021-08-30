function ventpåNokaks () {
    if (startAks > input.acceleration(Dimension.Strength)) {
        basic.showIcon(IconNames.Heart)
    }
    while (startAks > input.acceleration(Dimension.Strength)) {
        basic.pause(50)
    }
    basic.showIcon(IconNames.Yes)
    timerA = control.millis()
    while (control.millis() < timerA + 3000) {
        avlesing()
    }
    basic.showIcon(IconNames.No)
    basic.pause(2000)
}
input.onButtonPressed(Button.A, function () {
    maksAks = 0
    basic.showIcon(IconNames.No)
})
function avlesing () {
    nåAks = input.acceleration(Dimension.Strength)
    if (nåAks > maksAks) {
        maksAks = nåAks
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maksAks)
    basic.pause(100)
})
let timerA = 0
let startAks = 0
let nåAks = 0
let maksAks = 0
maksAks = 0
nåAks = 0
startAks = 1500
basic.showIcon(IconNames.No)
basic.forever(function () {
    ventpåNokaks()
})
