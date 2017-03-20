var bootState = {

	preload: function () {
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function() { 
		game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		// Vi checkar vår skalning för mobilt bruk.
		if(!game.device.desktop) {
			
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_All;
			document.body.style.backGroundColor = '#3498db';
			
			game.scale.minWidth = 250;
			game.scale.minHeight = 170;
			game.scale.maxWidth = 1000;
			game.scale.maxHeight = 680;
			
			// Här definerar vi om vi har Portrait eller Landscape mode
			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;
			
			game.scale.setScreenSize(true);
						
		}
		
		
		game.state.start('load');
	}
};