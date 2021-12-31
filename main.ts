SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
basic.forever(function () {
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    SuperBit.RGB_Program().show()
    basic.pause(2000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(2000)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().show()
    basic.pause(2000)
    SuperBit.RGB_Program().showRainbow(1, 360)
    SuperBit.RGB_Program().show()
    basic.showString("I love dad, mom and Ada.")
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
