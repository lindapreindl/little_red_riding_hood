class BackgroundOject extends MovableObject {
    width = 300;
    height = 135;

constructor(imagePath, x, y){
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
}
}