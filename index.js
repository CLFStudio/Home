// _________ .____   ____________________ __            .___.__        
// \_   ___ \|    |  \_   _____/   _____//  |_ __ __  __| _/|__| ____  
// /    \  \/|    |   |    __) \_____  \\   __\  |  \/ __ | |  |/  _ \ 
// \     \___|    |___|     \  /        \|  | |  |  / /_/ | |  (  <_> )
//  \______  /_______ \___  / /_______  /|__| |____/\____ | |__|\____/ 
//         \/        \/   \/          \/                 \/            

import './css/photo.css';
import './css/templatemo-style.css';

import './js/main';
import './js/hideHeader';
import './js/readMore';

window.playPause = function () {
    var myVideo = document.querySelector('.daily-life-video');
    myVideo.paused ? myVideo.play() : myVideo.pause();
}

window.videoPlay = function () {
    $('video').click(
        function () {
            $('video').play();
        }
    );
}
