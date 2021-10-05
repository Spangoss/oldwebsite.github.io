// Play / Pause Audio Clip
function playAudio(id, color) {
	var audio = document.getElementById(id);
	var cartwallBtn = document.getElementById(id + '-btn');
	var playBackBtn = document.getElementById(id + '-PlaybackState');
	var text = document.getElementById(id + '-text');
	if (audio.paused) {
		audio.play();
		cartwallBtn.classList.add('btn-success');
		cartwallBtn.classList.remove('btn-' + color, 'btn-warning');
		playBackBtn.classList.remove('fa-play');
		playBackBtn.classList.add('fa-pause');
		text.classList.add('invisible');
	} else {
		audio.pause();
		cartwallBtn.classList.add('btn-warning');
		playBackBtn.classList.remove('fa-pause');
		playBackBtn.classList.add('fa-play');
	}
}

// Pause playback and reset the audio clip on right click
function resetAudio(id, color) {
	var audio = document.getElementById(id);
	var cartwallBtn = document.getElementById(id + '-btn');
	var playBackBtn = document.getElementById(id + '-PlaybackState');
	var text = document.getElementById(id + '-text');
	audio.pause();
	audio.currentTime = 0;
	cartwallBtn.classList.remove('btn-warning', 'btn-success');
	cartwallBtn.classList.add('btn-' + color);
	playBackBtn.classList.remove('fa-pause', 'fa-play');
	text.classList.remove('invisible');
}

// Reset styles once clip has finished
function audioEnded(id, color) {
	var audio = document.getElementById(id);
	var cartwallBtn = document.getElementById(id + '-btn');
	var playBackBtn = document.getElementById(id + '-PlaybackState');
	var text = document.getElementById(id + '-text');
	cartwallBtn.classList.add('btn-' + color);
	cartwallBtn.classList.remove('btn-success');
	playBackBtn.classList.remove('fa-pause');
	text.classList.remove('invisible');
	audio.currentTime = 0;
	document.activeElement.blur();
}
