const LoadState = {
    preload: () => {
        game.add.text(100, 100, 'loading...', {font: '30px Courier', fill: '#FFFFFF'});

        game.load.image('player', 'assets/player/car.png');

        game.load.image('btnB','assets/GCW-Zero/GCW-Zero_B.png');
        game.load.image('btnUp', 'assets/buttons/up.png');  
        game.load.image('btnDown', 'assets/buttons/down.png');  
        game.load.image('btnLeft', 'assets/buttons/left.png');  
        game.load.image('btnRight', 'assets/buttons/right.png');  
        game.load.image('center', 'assets/buttons/center.png');  
        game.load.image('btnX','assets/GCW-Zero/GCW-Zero_X.png');

        game.load.audio('menuSound', 'assets/music/My_Favorite_Game.mp3');
        game.load.audio('levelSound', 'assets/music/Stone_Temple_Pilots-Sex_Type_Thing.mp3');

        game.load.tilemap('circuit', 'assets/maps/map.csv', null, Phaser.Tilemap.CSV);
        game.load.image('mappatterns', 'assets/maps/circuit.png');

        game.load.atlas('explosion', 'assets/player/explosion.png', 'assets/player/explosion.json');
        game.load.image('dead','assets/maps/dead.png');
    },

    create: () => {
        game.state.start('menu');
    }
};