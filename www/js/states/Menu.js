let menuState = {
    create:  () => {
        game.stage.backgroundColor = "#4488AA";
        game.add.text(80, 80, 'Demo game phaser in android',
                    { font: '50px Arial', fill: '#FFFFFF'});

        game.add.button(game.world.centerX - 60, game.world.centerY + 50, 'startbtn', () => {
            menuState.start();
        });
    },

    start: () =>{
        game.state.start('play');
    }
}
