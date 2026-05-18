document.querySelectorAll('.photo').forEach(photo => {
    let images = photo.querySelectorAll('img');
    let index = 0;
    let interval;
    let timeout; 

    photo.addEventListener('mouseenter', () => {
    
        const swapImage = () => {
            images[index].classList.remove('active');
            index = (index + 1) % images.length;
            images[index].classList.add('active');
        };

       
        timeout = setTimeout(() => {
            swapImage(); 

           
            interval = setInterval(swapImage, 3000); 
        }, 1000); 
    });

    photo.addEventListener('mouseleave', () => {

        clearTimeout(timeout);
        clearInterval(interval);
    });
});