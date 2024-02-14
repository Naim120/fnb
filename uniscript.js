document.addEventListener('DOMContentLoaded', () => {
    const wineBottle = document.getElementById('wine-bottle')

    wineBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        wineBottle.style.transform = 'scale(5.5)'
        wineBottle.style.transition = 'transform 1s ease'
        wineBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'wine.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'wine.html'
        }, 1000);
    });

    const whiskyBottle = document.getElementById('whisky-bottle')

    whiskyBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        whiskyBottle.style.transform = 'scale(5.5)'
        whiskyBottle.style.transition = 'transform 1s ease'
        whiskyBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'whisky.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'whisky.html'
        }, 1000);
    });

    const vodkaBottle = document.getElementById('vodka-bottle')

    vodkaBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        vodkaBottle.style.transform = 'scale(5.5)'
        vodkaBottle.style.transition = 'transform 1s ease'
        vodkaBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'vodka.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'vodka.html'
        }, 1000);
    });

    const ginBottle = document.getElementById('gin-bottle')

    ginBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        ginBottle.style.transform = 'scale(5.5)'
        ginBottle.style.transition = 'transform 1s ease'
        ginBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'gin.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'gin.html'
        }, 1000);
    });

    const rumBottle = document.getElementById('rum-bottle')

    rumBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        rumBottle.style.transform = 'scale(5.5)'
        rumBottle.style.transition = 'transform 1s ease'
        rumBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'rum.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'rum.html'
        }, 1000);
    });

     const tequilaBottle = document.getElementById('tequila-bottle')

    tequilaBottle.addEventListener('click', () => {
        // Add the zoom effect using CSS
        tequilaBottle.style.transform = 'scale(5.5)'
        tequilaBottle.style.transition = 'transform 1s ease'
        tequilaBottle.style.zIndex = '1'
        // Change the URL without causing a full page reload
        history.pushState({}, '', 'tequila.html')

        // Redirect to the new page after a short delay
        setTimeout(() => {
            window.location.href = 'tequila.html'
        }, 1000);
    });

});
