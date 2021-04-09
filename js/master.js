(() => {
    console.log('fired!');

    let movie = document.querySelector("video");

    var play = document.getElementById("play"),
        pause = document.getElementById("pause"),
        mute = document.getElementById("mute"),
        expend = document.getElementById("expend");
        
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");
    
    function progressLoop() {
        setInterval(function () {
        progress.value = Math.round((movie.currentTime / movie.duration) * 100);
        timer.innerHTML = Math.round(movie.currentTime) + " seconds";
        });
    }

    expend.addEventListener("click", function() {
        
        if (movie.requestFullscreen) {
            movie.requestFullscreen();
            
        } else if (movie.webkitRequestFullscreen) { /* Safari */
            movie.webkitRequestFullscreen();
        } else if (movie.msRequestFullscreen) { /* IE11 */
            movie.msRequestFullscreen();
        }
    })

    // custom buttons control function
    play.addEventListener("click", function() {
        movie.play();
    })

    pause.addEventListener("click", function() {
        movie.pause();
    })

    // mute volume function
    mute.addEventListener("click", function() {
        // console.log(mute);

        if(movie.muted == true) {
            movie.muted = false;
        } else {
            movie.muted = true;
        }

        var mute = document.getElementById("mute");
        mute.classList.toggle("opacity"); 
    })

    movie.addEventListener("play", progressLoop);
})();