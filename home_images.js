document.querySelectorAll('.photo').forEach(photo => {
    let images = photo.querySelectorAll('img');
    let index = 0;
    let interval;
    let timeout; // We need to track the initial timeout as well

    photo.addEventListener('mouseenter', () => {
        // Function to handle the actual image swapping
        const swapImage = () => {
            images[index].classList.remove('active');
            index = (index + 1) % images.length;
            images[index].classList.add('active');
        };

        // 1. Wait 1 seconds (1000ms) for the FIRST transition
        timeout = setTimeout(() => {
            swapImage(); // Trigger the first swap

            // 2. Then immediately start the 3-second (3000ms) loop for the rest
            interval = setInterval(swapImage, 3000); 
        }, 1000); // 1000 milliseconds = 1 seconds
    });

    photo.addEventListener('mouseleave', () => {
        // Clear BOTH timers when the mouse leaves so it stops completely
        clearTimeout(timeout);
        clearInterval(interval);
    });
});