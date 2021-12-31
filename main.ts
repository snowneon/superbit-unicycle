SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
SuperBit.RGB_Program().show()
SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
basic.forever(function () {
    basic.showString("I love dad, mom and Ada")
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
        . # # # .
        . # . # .
        . # . # .
        `)
    music.playMelody("C5 B A G F E D C ", 120)
})
