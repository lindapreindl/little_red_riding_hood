class Werewolf extends MovableObject {

    energy = 20;    
    height = 70;
    width = 100;
    y = 75;
    
    IMAGES_WALKING = [
        'img/werewolf/Black_Werewolf/run1.png',
        'img/werewolf/Black_Werewolf/run2.png',
        'img/werewolf/Black_Werewolf/run3.png',
        'img/werewolf/Black_Werewolf/run4.png',
        'img/werewolf/Black_Werewolf/run5.png',
        'img/werewolf/Black_Werewolf/run6.png',
        'img/werewolf/Black_Werewolf/run7.png',
        'img/werewolf/Black_Werewolf/run8.png',
        'img/werewolf/Black_Werewolf/run9.png'
    ]

    constructor() {
        super().loadImage('img/werewolf/Black_Werewolf/run1.png')
        this.x = 100 + Math.random() * 300;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.2 + Math.random() * 0.5;
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
        
    }
}