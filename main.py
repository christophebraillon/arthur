missile_y = 0
missile_x = 0
music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.IN_BACKGROUND)
vaisseau_x = 2
compteur = 0
niveau = 500
arret = 0

def on_forever():
    global missile_x, missile_y, compteur, niveau
    missile_x = randint(0, 4)
    missile_y = 0
    for index in range(5):
        led.plot(missile_x, missile_y)
        basic.pause(niveau)
        led.unplot(missile_x, missile_y)
        while arret != 0:
            pass
        missile_y += 1
    if missile_x == vaisseau_x:
        music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
            music.PlaybackMode.IN_BACKGROUND)
        compteur += 1
        niveau += -10
    else:
        music.play(music.builtin_playable_sound_effect(soundExpression.sad),
            music.PlaybackMode.IN_BACKGROUND)
        basic.clear_screen()
        basic.show_icon(IconNames.SAD)
        basic.pause(1000)
        basic.show_string("" + str((compteur)))
        basic.pause(1000)
        basic.show_string("Game over!")
        basic.pause(1000)
        control.reset()
basic.forever(on_forever)

def on_forever2():
    global vaisseau_x, arret
    led.unplot(vaisseau_x, 4)
    if arret == 0:
        if input.button_is_pressed(Button.A) and vaisseau_x != 0:
            vaisseau_x += -1
        if input.button_is_pressed(Button.B) and vaisseau_x != 4:
            vaisseau_x += 1
        led.plot(vaisseau_x, 4)
        basic.pause(100)
    if input.button_is_pressed(Button.AB):
        if arret != 0:
            arret = 0
            basic.clear_screen()
            basic.pause(1000)
        else:
            arret = 1
            basic.show_leds("""
                . # . # .
                . # . # .
                . # . # .
                . # . # #
                . # . # .
                """)
            basic.pause(1000)
basic.forever(on_forever2)
