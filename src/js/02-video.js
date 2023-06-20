import Player from '@vimeo/player';


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

    document.addEventListener(
  "scroll",
  _.throttle(() => {
    player.on('timeupdate', function (time) {
 

      localStorage.setItem("videoplayer-current-time", time.seconds);
});
  }, 500)
);


player.setCurrentTime(isCurrentTime).then(function(seconds) {
   
})

