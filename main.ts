basic.pause(1000)
basic.showLeds(`
    . . . # .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.pause(2000)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Square)
basic.pause(500)
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Sword)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
}
basic.pause(1000)
for (let index = 0; index < 9; index++) {
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . . . .
        . . # # #
        . . . . .
        `)
}
for (let index = 0; index < 20; index++) {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . # . #
        . . . . #
        . . . . #
        `)
}
for (let index = 0; index < 8; index++) {
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Sword)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
}
for (let index = 0; index < 20; index++) {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . # . #
        . . . . #
        . . . . #
        `)
}
for (let index = 0; index < 8; index++) {
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
basic.showIcon(IconNames.Yes)
basic.pause(3000)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # . . #
        # # # . #
        # # # # #
        # . # # #
        # . . # #
        `)
}
