const menuState = {
    create:  () => {
        game.stage.backgroundColor = "#4488AA";
        game.add.text(80, 80, 'Demo game phaser in android',
                    { font: '30px Arial', fill: '#FFFFFF'});

        game.add.button(game.world.centerX - 60, game.world.centerY + 50, 'btnX', () => {
            menuState.start();
        });
        this.music = game.add.audio('menuSound');
        music.play('', 0, 1, true);
        music.onLoop.add(menuState.playSound, music);
    },

    start: () =>{
        this.music.destroy();
        game.state.start('play');
    },
    playSound: () =>{
        this.music.play('', 0, 1, true);
    }
}
