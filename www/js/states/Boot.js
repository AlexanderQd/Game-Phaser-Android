const BootState = {
    create: () => {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.state.start('Load');
    }
}