const videoPlayer = document.getElementById('reels');

    const playlist = ['videos/video-1.mp4', 'videos/video-2.mp4', 'videos/video-3.mp4', 'videos/video-4.mp4', 'videos/video-5.mp4', 'videos/video-6.mp4']; 
    let currentTrack = 0;


    videoPlayer.addEventListener('ended', function() {
        currentTrack++;
        

        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }


        videoPlayer.src = playlist[currentTrack];
        videoPlayer.play();


    });


