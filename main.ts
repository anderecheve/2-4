basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showNumber(5)
    } else if (input.lightLevel() > 120) {
        basic.showNumber(4)
    } else if (input.lightLevel() > 85) {
        basic.showNumber(3)
    } else if (input.lightLevel() > 30) {
        basic.showNumber(2)
    } else if (input.lightLevel() > 15) {
        basic.showNumber(1)
    }
})
