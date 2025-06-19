class MovableObject extends DrawableObject {

    speed = 0.025;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    endBossLastHit = 0;
    timeOfDeath = 0;




    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { //damit es immer fällt
            return true;
        } else {
            return this.y < 65;
        }
    }

    jump() {
        this.speedY = 17;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height

        // eig bessere Formel, aber wird nicht erklärt
        // return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
        //     (this.y + this.offsetY + this.height) >= obj.y &&
        //     (this.y + this.offsetY) <= (obj.y + obj.height) &&
        //     obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.


    }

    hit() {
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    dead() {
        this.timeOfDeath = new Date().getTime();
        
    }


    isHurt() {  // new Date ermittelt millisekunden, die seit dem 01.01.1970 vergangen sind
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; //Differnz in sek
        return timepassed < 1;
    }

    
    isDeadAnimation() {
        let timepasse = new Date().getTime() - this.timeOfDeath;
        timepasse = timepasse / 1000; //Differnz in sek
        return this.timepasse < 5;
    }

    isDead(){
        return this.energy == 0;
    }
}
