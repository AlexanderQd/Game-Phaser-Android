let LoadState = {
    preload: () => {
        game.add.text(100, 100, 'loading...', {font: '30px Courier', fill: '#FFFFFF'})
        game.load.image('player', 'assets/car.png');        
        game.load.image('btnB','assets/GCW-Zero/GCW-Zero_B.png');
        game.load.image('btnUp', 'assets/up.png');  
        game.load.image('btnDown', 'assets/down.png');  
        game.load.image('btnLeft', 'assets/left.png');  
        game.load.image('btnRight', 'assets/right.png');  
        game.load.image('center', 'assets/center.png');  
        game.load.image('btnX','assets/GCW-Zero/GCW-Zero_X.png');  
        game.load.audio('menuSound', 'assets/music/Menu.ogg');
        game.load.audio('levelSound', 'assets/music/gameLevel.ogg');
        game.load.tilemap('circuit', 'assets/maps/map.csv', null, Phaser.Tilemap.CSV);
        game.load.image('mappatterns', 'assets/maps/circuit.png');
        
    },

    create: () => {
        game.state.start('menu');
    }
};