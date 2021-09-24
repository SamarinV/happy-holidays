const video = document.querySelector('.video__file');
const videoText = document.querySelector('.video__text');
video.addEventListener('play', () => {videoText.style.display = ('none')});

var videoBlock = document.querySelector('.video__block'),
videoFile = document.querySelector('.video__file');
videoBlock.addEventListener('click', function() {
if (videoFile.paused) {
  videoFile.play();
  videoBlock.classList.remove('video__paused');
} else {
  videoFile.pause();
  videoBlock.classList.add('video__paused');
};
})