class Endboss extends MovableObject {

    height = 150;
    width = 180;
    y = -8;
    speed = 0;

    IMAGES_WALKING = [
        './img/werewolf/White_Werewolf/attack1.png',
        './img/werewolf/White_Werewolf/attack2.png',
        './img/werewolf/White_Werewolf/attack3.png',
        './img/werewolf/White_Werewolf/attack4.png',
        './img/werewolf/White_Werewolf/attack5.png',
        './img/werewolf/White_Werewolf/attack6.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.x = 750;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}