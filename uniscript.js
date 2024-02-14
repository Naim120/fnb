document.addEventListener('DOMContentLoaded', () => {
    const wineBottle = document.getElementById('wine-bottle')

    wineBottle.addEventListener('click', () => {
        // Check if the device is a mobile device
        if (window.matchMedia('(max-width: 767px)').matches) {
            // Add the zoom effect using CSS for mobile devices
            wineBottle.style.transform = 'translateX(15vw) scale(10.5)'
        } else {
            // Add the zoom effect using CSS for non-mobile devices
            wineBottle.style.transform = 'translateX(30vw) scale(20.5)'
            
        }
        wineBottle.style.transition = 'transform 1s ease'
        wineBottle.style.zIndex = '1'
        history.pushState({}, '', '#')

        setTimeout(() => {
            window.location.href = '#'
        }, 1000)
    });


        const whiskyBottle = document.getElementById('whisky-bottle')
    
        whiskyBottle.addEventListener('click', () => {
            // Check if the device is a mobile device
            if (window.matchMedia('(max-width: 767px)').matches) {
                // Add the zoom effect using CSS for mobile devices
                whiskyBottle.style.transform = 'translateX(0vw) scale(10.5)'
            } else {
                // Add the zoom effect using CSS for non-mobile devices
                whiskyBottle.style.transform = 'translateX(20vw) scale(20.5)'
                
            }
            whiskyBottle.style.transition = 'transform 1s ease'
            whiskyBottle.style.zIndex = '1'
            history.pushState({}, '', '#')
    
            setTimeout(() => {
                window.location.href = '#'
            }, 1000)
    });

        const vodkaBottle = document.getElementById('vodka-bottle')
    
        vodkaBottle.addEventListener('click', () => {
            // Check if the device is a mobile device
            if (window.matchMedia('(max-width: 767px)').matches) {
                // Add the zoom effect using CSS for mobile devices
                vodkaBottle.style.transform = 'translateX(-35vw) scale(10.5)'
            } else {
                // Add the zoom effect using CSS for non-mobile devices
                vodkaBottle.style.transform = 'translateX(0vw) scale(20.5)'
                
            }
            vodkaBottle.style.transition = 'transform 1s ease'
            vodkaBottle.style.zIndex = '1'
            history.pushState({}, '', '#')
    
            setTimeout(() => {
                window.location.href = '#'
            }, 1000)
    });

    const ginBottle = document.getElementById('gin-bottle')
    
        ginBottle.addEventListener('click', () => {
            // Check if the device is a mobile device
            if (window.matchMedia('(max-width: 767px)').matches) {
                // Add the zoom effect using CSS for mobile devices
                ginBottle.style.transform = 'translate(25vw, -30vw) scale(10.5)'
            } else {
                // Add the zoom effect using CSS for non-mobile devices
                ginBottle.style.transform = 'translateX(-10vw) scale(20.5)'
                
            }
            ginBottle.style.transition = 'transform 1s ease'
            ginBottle.style.zIndex = '1'
            history.pushState({}, '', '#')
    
            setTimeout(() => {
                window.location.href = '#'
            }, 1000)
    });

    const rumBottle = document.getElementById('rum-bottle')
    
        rumBottle.addEventListener('click', () => {
            // Check if the device is a mobile device
            if (window.matchMedia('(max-width: 767px)').matches) {
                // Add the zoom effect using CSS for mobile devices
                rumBottle.style.transform = 'translate(-10vw, -50vw) scale(10.5)'
            } else {
                // Add the zoom effect using CSS for non-mobile devices
                rumBottle.style.transform = 'translateX(-20vw) scale(20.5)'
                
            }
            rumBottle.style.transition = 'transform 1s ease'
            rumBottle.style.zIndex = '1'
            history.pushState({}, '', '#')
    
            setTimeout(() => {
                window.location.href = '#'
            }, 1000)
    });

    const tequilaBottle = document.getElementById('tequila-bottle')
    
        tequilaBottle.addEventListener('click', () => {
            // Check if the device is a mobile device
            if (window.matchMedia('(max-width: 767px)').matches) {
                // Add the zoom effect using CSS for mobile devices
                tequilaBottle.style.transform = 'translate(-30vw, -70vw) scale(10.5)'
            } else {
                // Add the zoom effect using CSS for non-mobile devices
                tequilaBottle.style.transform = 'translateX(-30vw) scale(20.5)'
                
            }
            tequilaBottle.style.transition = 'transform 1s ease'
            tequilaBottle.style.zIndex = '1'
            history.pushState({}, '', '#')
    
            setTimeout(() => {
                window.location.href = '#'
            }, 1000)
    });

});
