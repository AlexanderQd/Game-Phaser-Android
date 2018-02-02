let game;

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        game = new Phaser.Game('99%','99%', Phaser.CANVAS, 'game');

        game.state.add('Boot', BootState);
        game.state.add('Load', LoadState);
        game.state.add('menu', menuState);
        game.state.add('play', playState);
    
        game.state.start('Boot');
    },
   
};

app.initialize();