let right = false;
let left = false;
let b = false;
let x = false;
let currentSpeed;
let timer, timeEvent;

const playState = {
    
    create: () =>{
        currentSpeed = 0;

        game.world.setBounds(0, 0, 3600, 3600);

        let map = game.add.tilemap('circuit', 12, 12);
        map.addTilesetImage('mappatterns');

        let layer = map.createLayer(0);
        layer.resizeWorld();

        timer = game.time.create();
        timerEvent = timer.add(Phaser.Timer.SECOND * 3, playState.endTimer, this);        
        this.textTime = game.add.text(window.innerWidth + 200, window.innerHeight, "", {font: '60px Courier', fill: '#FFFFFF'});

        this.dead = game.add.sprite(1400, 300, 'dead');
        this.dead.anchor.setTo(0.5);
        game.physics.enable(this.dead, Phaser.Physics.ARCADE);
        game.physics.arcade.enableBody(this.dead);
        
        this.player = game.add.sprite(900, 300, 'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.1);
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        this.player.body.maxVelocity.setTo(200, 200);
        game.camera.follow(player);



        this.txt = game.add.text(20, 10, "Speed: ", {font: '15px Courier', fill: '#FFFFFF'});
        this.txt.fixedToCamera = true;
        

        let center = game.add.sprite(50,  window.innerHeight - 70, 'center');        
        let up = game.add.sprite(center.position.x,center.position.y -20, 'btnUp');
        let down = game.add.sprite(center.position.x,center.position.y + 30, 'btnDown');
        let buttonLeft = game.add.button(center.position.x - 22, center.position.y + 0.7, 'btnLeft', null);
        let buttonRight = game.add.button(center.position.x + 30, center.position.y + 0.5, 'btnRight', null);
        let buttonB = game.add.button(window.innerWidth - 150,  window.innerHeight - 60, 'btnB', null);
        let buttonX = game.add.button(window.innerWidth - 100,  window.innerHeight - 100, 'btnX', null);

       let array = [center, up, down, buttonLeft, buttonRight, buttonB, buttonX];
        let buttonGroup = game.add.group();
        array.forEach((button) => {
            buttonGroup.add(button);
        });        
        buttonGroup.fixedToCamera = true;

        buttonB.scale.setTo(0.5);
        buttonX.scale.setTo(0.5);
        center.scale.setTo(0.8);
        up.scale.setTo(0.8);
        down.scale.setTo(0.8);
        buttonLeft.scale.setTo(0.8);
        buttonRight.scale.setTo(0.8);

        buttonB.events.onInputDown.add(() => {b = true});
        buttonB.events.onInputUp.add(() => {b = false});

        buttonX.events.onInputDown.add(() => {x = true});
        buttonX.events.onInputUp.add(() => {x = false});

        buttonLeft.events.onInputDown.add(() => {left = true});
        buttonLeft.events.onInputUp.add(() => {left = false});

        buttonRight.events.onInputDown.add(() => {right = true});
        buttonRight.events.onInputUp.add(() => {right = false});
        
        this.music = game.add.audio('levelSound');
        music.play('', 0, 1, true);
        music.onLoop.add(playState.playLevelMusic, music);
    },
    update: () => {
    
        game.physics.arcade.overlap(this.player, this.dead, playState.collisionHandlerDead, null, this);

        if(right){
            this.player.angle += 0.5;
        }else if(left){
            this.player.angle -= 0.5;
        }

        if(x){
            if(currentSpeed < 200)
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

        if (timer.running) {
            this.textTime.setText(Math.round((timerEvent.delay - timer.ms) / 1000), 2, 14, "#ff0");
        }else{
            timer.stop();
        }
        
    },    
    playLevelMusic: (music) => {        
        music.play('', 0, 1, true);
    },
    collisionHandlerDead: (player, dead) => {       
        let expl = game.add.sprite(player.position.x, player.position.y, 'explosion');

        this.player.kill();
        
        expl.scale.setTo(2);                
        expl.animations.add('play', Phaser.Animation.generateFrameNames('bubble_explo',0, 10));
        expl.animations.play('play', 5, false);
        expl.animations.currentAnim.onComplete.add(() => {expl.kill()}, this);

        playState.gameOver();

    },
    gameOver: () => {
        timer.start();       
        let prueba = game.add.text(window.innerWidth + 50, window.innerHeight - 100, "Game Over", {font: '60px Courier', fill: '#FFFFFF'});        
        setTimeout(() => {
            game.state.restart();
        }, 3000);
    }
}