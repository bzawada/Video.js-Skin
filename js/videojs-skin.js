document.addEventListener("DOMContentLoaded", function() {
	var customFullscreenButton = document.createElement('div');
	customFullscreenButton.classList.add('vjs-custom-fullscreen');

	var playerContainer = document.getElementsByClassName('video-js')[0];
	playerContainer.prepend(customFullscreenButton);
	
	customFullscreenButton.addEventListener('click', function() {
		document.getElementsByClassName('vjs-fullscreen-control')[0].click();
	}); 
});
    