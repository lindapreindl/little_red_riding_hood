let IMAGES_ALL = [
    'img/archer/idle1.png',
    'img/archer/idle2.png',
    'img/archer/idle3.png',
    'img/archer/idle4.png',
    'img/archer/idle5.png',
    'img/archer/idle6.png',
    'img/archer/idle7.png',
    'img/archer/idle8.png',
    'img/archer/idle9.png',
    'img/archer/idle10.png',
    'img/archer/walk1.png',
    'img/archer/walk2.png',
    'img/archer/walk3.png',
    'img/archer/walk4.png',
    'img/archer/walk5.png',
    'img/archer/walk6.png',
    'img/archer/walk7.png',
    'img/archer/walk8.png',
    'img/archer/walk1.png',
    'img/archer/walk2.png',
    'img/archer/walk3.png',
    'img/archer/walk4.png',
    'img/archer/walk5.png',
    'img/archer/walk6.png',
    'img/archer/walk7.png',
    'img/archer/walk8.png',
    'img/archer/jump1.png',
    'img/archer/jump2.png',
    'img/archer/jump3.png',
    'img/archer/jump4.png',
    'img/archer/jump5.png',
    'img/archer/jump6.png',
    'img/archer/jump7.png',
    'img/archer/jump8.png',
    'img/archer/jump9.png',
    'img/archer/walk1.png',
    'img/archer/walk2.png',
    'img/archer/walk3.png',
    'img/archer/walk4.png',
    'img/archer/walk5.png',
    'img/archer/walk6.png',
    'img/archer/walk7.png',
    'img/archer/walk8.png',
    'img/archer/walk1.png',
    'img/archer/walk2.png',
    'img/archer/walk3.png',
    'img/archer/walk4.png',
    'img/archer/walk5.png',
    'img/archer/walk6.png',
    'img/archer/walk7.png',
    'img/archer/walk8.png',
    'img/archer/idle5.png',
    'img/archer/idle6.png',
    'img/archer/idle7.png',
    'img/archer/idle8.png',
    'img/archer/idle9.png',
    'img/archer/idle10.png',
];


currentImage = 0;


function initStart(){
setInterval(() => {
    playAnimation(IMAGES_ALL);
}, 1000/8);


}

function playAnimation(images){
    let archer = document.getElementById('archer');
    let i = this.currentImage % images.length;
    let path = images[i];
    archer.src = path;
    this.currentImage++;
}
