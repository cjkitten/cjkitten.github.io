function convertVideo() {
	const input = document.getElementById('fileInput');
	const video = input.files[0];
	if (!video || !video.type.includes('video/')) {
		alert('Please select a video file!');
		return;
	}

	const reader = new FileReader();
	reader.readAsDataURL(video);
	reader.onload = function() {
		const audio = new Audio(reader.result);
		const audioContext = new AudioContext();
		const mediaSource = audioContext.createMediaElementSource(audio);
		const destinationNode = audioContext.createMediaStreamDestination();
		mediaSource.connect(destinationNode);

		const audioStream = destinationNode.stream;
		const audioBlob = new Blob([audioStream], { type: 'audio/mp3' });
		const audioUrl = URL.createObjectURL(audioBlob);

		const downloadLink = document.getElementById('downloadLink');
		const link = document.createElement('a');
		link.href = audioUrl;
		link.download = video.name.replace(/\.[^/.]+$/, "") + ".mp3";
		link.innerText = "Download Audio";
		downloadLink.appendChild(link);
		link.style.display = "block";
	}
}
