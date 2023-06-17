import Player from '@vimeo/player';

//  id="vimeo-player"
//       src="https://player.vimeo.com/video/236203659"
//       width="640"
//       height="360"
//       frameborder="0"
//       allowfullscreen
//       allow="autoplay; encrypted-media"



    const player = new Player(iframe);
    const iframe = document.querySelector('#vimeo-player');
    const onPlay = function(data) {
   
    duration: 61.857
    percent: 0.049
    seconds: 3.034

};

player.on('play', onPlay);
