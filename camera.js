function openCamera() {
	const supported = 'mediaDevices' in navigator;
	if(!supported) {
		return;
	}
	//<video id="player" controls autoplay></video>
	const holder = document.getElementById("videoHolder");
	holder.innerHTML = '<video id="player" autoplay></video>'
	const player = document.getElementById("player")

  	const constraints = {
    	video: true,
  	};

  	navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
		player.srcObject = stream;
    });
}
