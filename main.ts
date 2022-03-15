let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
    if (steps == 10) {
        music.playMelody("- - B A G F G A ", 222)
        steps = 0
    }
})
