SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
basic.forever(function () {
    basic.showString("I love dad")
    basic.showIcon(IconNames.Tortoise)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    music.playMelody("C5 B A G F E D C ", 120)
})
