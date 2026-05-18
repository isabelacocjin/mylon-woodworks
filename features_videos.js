const videoPlayer = document.getElementById('reels');
    // List of your video file paths
    const playlist = ['videos/video-1.mp4', 'videos/video-2.mp4', 'videos/video-3.mp4', 'videos/video-4.mp4', 'videos/video-5.mp4', 'videos/video-6.mp4']; 
    let currentTrack = 0;

    // Listen for the current video ending
    videoPlayer.addEventListener('ended', function() {
        currentTrack++;
        
        // Loop back to the first video if at the end of the list
        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }

        // Change the source and play the next video
        videoPlayer.src = playlist[currentTrack];
        videoPlayer.play();


    });


