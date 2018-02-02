let LoadState = {
    preload: () => {
        game.add.text(100, 100, 'loading...', {font: '30px Courier', fill: '#FFFFFF'})
        game.load.image('player', 'assets/car.png');
        game.load.image('startbtn', 'assets/start.png');
        game.load.image('upbtn', 'assets/up.png');
        game.load.image('downtbtn', 'assets/down.png');
        game.load.image('leftbtn', 'assets/left.png');
        game.load.image('rightbtn', 'assets/right.png');
        
        
    },

    create: () => {
        game.state.start('menu');
    }
};