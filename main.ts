let missile_y = 0
let missile_x = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
let vaisseau_x = 2
let compteur = 0
let niveau = 500
let arret = 0
basic.forever(function () {
    missile_x = randint(0, 4)
    missile_y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(missile_x, missile_y)
        basic.pause(niveau)
        led.unplot(missile_x, missile_y)
        missile_y += 1
        while (arret != 0) {
            basic.pause(100)
        }
    }
    if (missile_x == vaisseau_x) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        compteur += 1
        niveau += -10
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("" + (compteur))
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("Game over!")
        basic.pause(1000)
        control.reset()
    }
})
basic.forever(function () {
    led.unplot(vaisseau_x, 4)
    if (arret == 0) {
        if (input.buttonIsPressed(Button.A) && vaisseau_x != 0) {
            vaisseau_x += -1
        }
        if (input.buttonIsPressed(Button.B) && vaisseau_x != 4) {
            vaisseau_x += 1
        }
        led.plot(vaisseau_x, 4)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (arret != 0) {
            basic.clearScreen()
            basic.pause(1000)
            arret = 0
        } else {
            arret = 1
            basic.clearScreen()
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            basic.pause(1000)
        }
    }
})
