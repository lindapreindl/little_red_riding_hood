
IMAGES_GAMEOVER = [
    'img/archer/walk1.png',
    'img/archer/walk2.png',
    'img/archer/walk3.png',
    'img/archer/walk4.png',
    'img/archer/walk5.png',
    'img/archer/walk6.png',
    'img/archer/walk7.png',
    'img/archer/walk8.png',
    'img/archer/hurt1.png',
    'img/archer/hurt2.png',
    'img/archer/hurt3.png',
    'img/archer/dead1.png',
    'img/archer/dead2.png',
    'img/archer/dead3.png'
]

currentImage = 0;


function gameOver(){
    interval = setInterval(() => {
        if (currentImage <= 13) {
            playAnimation(IMAGES_GAMEOVER);
            console.log(currentImage);
        } else {
            console.log('stop');
            clearInterval(interval);
        }
    }, 1000/8);  
        
}



function playAnimation(images){
    let archer = document.getElementById('archer-game-over');
    let i = this.currentImage % images.length;
    let path = images[i];
    archer.src = path;
    this.currentImage++;
    
}