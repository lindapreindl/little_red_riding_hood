class ThrowableObject extends MovableObject {
d

    constructor() {
        super().loadImage('./img/flames/flame10/PNG/00.png');
        //this.x = x;
        //this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw(world.character.x, 60);

    }

    throw(x, y) {
            this.x = x;
        this.y = y;
        this.speedY = 20;
        this.throwXtimes++;
            this.applyGravity();
            setInterval(() => {
                this.x += 10;
            }, 25);
        
        
    }



}


//Fullscreen: canvas.requestFullScreen()