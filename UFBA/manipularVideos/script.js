let video = document.getElementById('my-video');
let playPauseButton = document.getElementById('play-pause-button');
let stopButton = document.getElementById('stop-button');
let muteUnmuteButton = document.getElementById('mute-unmute-button');
let downloadButton = document.getElementById('download-button');
let likeButton = document.getElementById('like-button');
let unlikeButton = document.getElementById('unlike-button');
//var likesCount = document.getElementById('likes-count');
let likeCount = 0;
let unlikeCount = 0;

function handlePlayClick() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
}

function handleLikeClick() {
    likeCount++;
    //likesCount.innerHTML = likeCount + ' Likes';
    likeButton.innerHTML = `Like (${likeCount})`;
}

function handleUnlikeClick() {
    //likeCount = Math.max(0, likeCount - 1);
    //likesCount.innerHTML = likeCount + ' Likes';
    //likeButton.innerHTML = `Like (${likeCount})`;
    unlikeCount++;
    unlikeButton.innerHTML = `Unlike (${unlikeCount})`
}

playPauseButton.addEventListener('click', handlePlayClick);


// essa parte podemos utilzar para colocar um componente de avançar. 
stopButton.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    playPauseButton.innerHTML = 'Play';
});

muteUnmuteButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.innerHTML = 'Mute';
    } else {
        video.muted = true;
        muteUnmuteButton.innerHTML = 'Unmute';
    }
});

downloadButton.addEventListener('click', function() {
    let videoSrc = 'video/Tema.mp4'; // Atualize o caminho conforme necessário :(
    let a = document.createElement('a');
    a.href = videoSrc;
    a.download = 'Tema.mp4';

    let clickEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': false
    });

    a.dispatchEvent(clickEvent);
});

likeButton.addEventListener('click', handleLikeClick);
unlikeButton.addEventListener('click', handleUnlikeClick);

video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});