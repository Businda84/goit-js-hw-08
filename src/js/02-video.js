import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
    console.log(iframe);

    iframe.addEventListener("timeupdate", (e) => {
        console.log(e);
    })

const player = new Player(iframe);
    let isCurrentTime = localStorage.getItem("videoplayer-current-time");
console.log(isCurrentTime);
if (isCurrentTime) {
    player.setCurrentTime(isCurrentTime)
}
    player.on('play', function() {
        console.log('played the video!');
    });
player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(time) {
   localStorage.setItem("videoplayer-current-time", time.seconds);
};


player.setCurrentTime(isCurrentTime).then(function(seconds) {
   
})

