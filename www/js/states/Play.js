let playState = {

    create: () =>{
        let playerVelocity = 200;

        this.keyboard = game.input.keyboard;
        
        this.player = game.add.sprite(16, 16, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.player.scale.setTo(0.05);

        console.log(game.world.bounds);
        game.add.button(12, game.world.bounds.height - 40, 'upbtn', () => {
            this.player.body.velocity.y -= playerVelocity;
        });
        game.add.button(12, game.world.bounds.height - 20, 'downtbtn', () => {

        });
        game.add.button(2, game.world.bounds.height - 30, 'leftbtn', () => {
            console.log("object");
        });
        game.add.button(22, game.world.bounds.height - 30, 'rightbtn', () => {
            this.player
        });

    },
    update: () => {

    }
}