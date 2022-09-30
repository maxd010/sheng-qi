
let isRaiseing = false;
let speed = 0;


function playMusic() {
    const flag = document.querySelector('#flag');
    const audio = new Audio();
    audio.src = 'music.wav';
    audio.play();
}

function raiseFlag() {
    let bottom = 0;
    let opacity = 0;
    const pole = document.querySelector('#pole')
    isRaiseing = true;
    speed = pole.clientHeight/(49*100);
    
    const timer = setInterval(() => {
        bottom += speed;
        opacity += 0.1;

        flag.style.bottom = `${bottom}px`;
        console.log(flag.style.bottom)

        if (opacity <= 1) {
            flag.style.opacity = opacity;
        }
        if (bottom >= pole.clientHeight-64) {
            clearInterval(timer);
        }
    }, 10);
   
}

function handleStart () {
    if(isRaiseing !=true){
        playMusic();
        setTimeout(raiseFlag, 1000);
    }  
    
}

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', handleStart, false);
