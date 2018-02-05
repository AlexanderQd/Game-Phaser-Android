let right = false;
let left = false;
let b = false;
let x = false;
let currentSpeed = 0;

let playState = {
    
    create: () =>{

        game.world.setBounds(0, 0, 3600, 3600);
        let map = game.add.tilemap('circuit', 12, 12);
        map.addTilesetImage('mappatterns');
        let layer = map.createLayer(0);
        layer.resizeWorld();
        
        this.player = game.add.sprite(200, 200, 'player');
        this.player.scale.setTo(0.1);
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.body.maxVelocity.setTo(120, 120);
        game.camera.follow(player);

        this.txt = game.add.text(100, 200, "Speed: ", {font: '15px Courier', fill: '#FFFFFF'});
        this.txt.fixedToCamera = true;

        let center = game.add.sprite(50,  window.innerHeight - 50, 'center');        
        let up = game.add.sprite(center.position.x,center.position.y - 14, 'btnUp');
        let down = game.add.sprite(center.position.x,center.position.y + 19, 'btnDown');
        let buttonLeft = game.add.button(center.position.x - 14, center.position.y + 0.7, 'btnLeft', null);
        let buttonRight = game.add.button(center.position.x + 19, center.position.y + 0.5, 'btnRight', null);
        let buttonB = game.add.button(window.innerWidth - 150,  window.innerHeight - 50, 'btnB', null);
        let buttonX = game.add.button(window.innerWidth - 100,  window.innerHeight - 100, 'btnX', null);

       let array = [center, up, down, buttonLeft, buttonRight, buttonB, buttonX];
        let buttonGroup = game.add.group();
        array.forEach((button) => {
            buttonGroup.add(button);
        });        
        buttonGroup.fixedToCamera = true;

        buttonB.scale.setTo(0.5);
        buttonX.scale.setTo(0.5);
        center.scale.setTo(0.5);
        up.scale.setTo(0.5);
        down.scale.setTo(0.5);
        buttonLeft.scale.setTo(0.5);
        buttonRight.scale.setTo(0.5);

        buttonB.events.onInputDown.add(() => {b = true});
        buttonB.events.onInputUp.add(() => {b = false});

        buttonX.events.onInputDown.add(() => {x = true});
        buttonX.events.onInputUp.add(() => {x = false});

        buttonLeft.events.onInputDown.add(() => {left = true});
        buttonLeft.events.onInputUp.add(() => {left = false});

        buttonRight.events.onInputDown.add(() => {right = true});
        buttonRight.events.onInputUp.add(() => {right = false});
        
        let music = game.add.audio('menuSound');
        music.play('', 0, 1, true);
        music.onLoop.add(playState.playLevelMusic, music);
    },
    update: () => {

        if(right){
            this.player.angle += 0.5;
        }else if(left){
            this.player.angle -= 0.5;
        }

        if(x){
            if(currentSpeed < 120)
                currentSpeed += 0.5;
        }else{
            if(b){
                if(currentSpeed > 0)
                    currentSpeed -= 2;
            }
        }

        if (currentSpeed > 0)
        {
            game.physics.arcade.velocityFromRotation(this.player.rotation, currentSpeed, this.player.body.velocity);
        }
        this.txt.setText(`Speed: ${Math.floor(this.player.body.speed)}`);
        
    },
    render: () => {
      
        game.debug.text('player x '+ this.player.position.x, 10, 70 );
        
        game.debug.text('player y ' + this.player.position.y, 10, 90);
    },
    playLevelMusic: (music) => {        
        music.play('', 0, 1, true);
    }

}