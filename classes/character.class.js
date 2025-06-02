class Character extends MovableObject {

    y = 10;
    width = 100;
    speed = 10;
    
    IMAGES_WALKING = [
        'img/archer/walk1.png',
        'img/archer/walk2.png',
        'img/archer/walk3.png',
        'img/archer/walk4.png',
        'img/archer/walk5.png',
        'img/archer/walk6.png',
        'img/archer/walk7.png',
        'img/archer/walk8.png'
    ];

    IMAGES_JUMPING = [
        'img/archer/jump1.png',
        'img/archer/jump2.png',
        'img/archer/jump3.png',
        'img/archer/jump4.png',
        'img/archer/jump5.png',
        'img/archer/jump6.png',
        'img/archer/jump7.png',
        'img/archer/jump8.png',
        'img/archer/jump9.png'
    ]

    IMAGES_DEAD = [
        'img/archer/dead1.png',
        'img/archer/dead2.png',
        'img/archer/dead3.png'
    ]

    IMAGES_HURT = [
        'img/archer/hurt1.png',
        'img/archer/hurt2.png',
        'img/archer/hurt3.png'
    ]

    world;
    walking_sound = new Audio('./audio/archer_walking.mp3');


    constructor() {
        super().loadImage('img/archer/walk1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }


    stopControl(){
        window.addEventListener('keydown', (event) =>{
            if(event.keyCode == 39){
                keyboard.RIGHT = false;
            }
            if(event.keyCode == 37){
                keyboard.LEFT = false;
            }
            if(event.keyCode == 38){
                keyboard.UP = false;
            }
            if(event.keyCode == 40){
                keyboard.DOWN = false;
            }
            if(event.keyCode == 32){
                keyboard.SPACE = false;
            }
            if(event.keyCode == 68){
                keyboard.D = false;
            }
            
        })
    }
   


    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x;

        }, 1000 / 60)

       setInterval(() => {

            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);

            } else if (this.isAboveGround()) {
                // jump animation
                this.playAnimation(this.IMAGES_JUMPING);

            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT == true) {
                // walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }

            

        }, 50);

        let t = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                    document.getElementById('control').classList.add('d-none');
                    document.getElementById('dead').classList.remove('d-none');
                    this.stopControl();
                    stopAnimation(t);
                    setTimeout(() => {
                        window.location.replace('./game-over.html');
                    }, 10000);
                    
                    

        }
        }, 1000);

        function stopAnimation(x){
            setTimeout(() => {
                clearInterval(x);
            }, 2500);
            
        }
    }

}