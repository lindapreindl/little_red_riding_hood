class Gems extends MovableObject{
    width = 35;
    height = 35;

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}