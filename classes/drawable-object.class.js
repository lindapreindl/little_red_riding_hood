class DrawableObject {
    x = 0;
    y = 70;
    height = 80;
    width = 90;
    img;
    currentImage = 0;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();  //dasselbe wie <img> Tag im HTML + document.getElementById.src = xy
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Werewolf || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }
}