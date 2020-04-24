import MediaPlayer from '@adrianarroyoc/mediaplayer/MediaPlayer';
import AutoPlay from '@adrianarroyoc/mediaplayer/lib/AutoPlay';
import AutoPause from '@adrianarroyoc/mediaplayer/lib/AutoPause';
import Ads from '@adrianarroyoc/mediaplayer/lib/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

const buttonPlay: HTMLElement = document.querySelector('#play');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('#mute');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}