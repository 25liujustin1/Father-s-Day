let scrollerID;
let paused = true;
let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 5;

function startScroll() {
    let id = setInterval(function() {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function(event) {
    if (event.which == 13 || event.keyCode == 13) {
        // It's the 'Enter' key
        if (paused == true) {
            scrollerID = startScroll();
            paused = false;
        } else {
            stopScroll();
            paused = true;
        }
    }
}, true);

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        document.getElementById('audio').play();
    }
});
// let music = document.querySelector('audio');
// music.addEventListener('keydown', function(key) {
//     if (key.keyCode === 13) {
//         music.play();
//         console.log('music is playing');
//     };
//     console.log('this function has been run.');
// });