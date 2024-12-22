class Cloud extends MovableObject {
    y = 10;
    width = 120;
    height = 40;

    constructor() {
        super().loadImage('./img/clouds/Clouds_black/Shape2/cloud_shape2_1.png')
        this.x = Math.random() * 300;

        this.animate();
    }

    animate(){
        this.moveLeft();
    }

}