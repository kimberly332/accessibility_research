(() => {
    console.log('fired!');

    let music = document.querySelector("audio");

    var play = document.getElementById("play"),
        pause = document.getElementById("pause"),
        mute = document.getElementById("mute"),
        replay = document.getElementById("replay");
        
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");
    
    function progressLoop() {
        setInterval(function () {
        progress.value = Math.round((music.currentTime / music.duration) * 100);
        timer.innerHTML = Math.round(music.currentTime) + " seconds";
        });
    }

    // custom buttons control function
    play.addEventListener("click", function() {
        music.play();
    })

    pause.addEventListener("click", function() {
        music.pause();
    })

    // mute volume function
    mute.addEventListener("click", function() {
        // console.log(mute);

        if(music.muted == true) {
            music.muted = false;
        } else {
            music.muted = true;
        }

        var mute = document.getElementById("mute");
        mute.classList.toggle("opacity"); 
    })

    replay.addEventListener("click", function() {
        music.currentTime=0;
        music.play();
    })

    music.addEventListener("play", progressLoop);
})();