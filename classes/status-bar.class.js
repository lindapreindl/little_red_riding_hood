class StatusBar extends DrawableObject {
    IMAGES = [
        './img/statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ]

     IMAGES_ENEMY = [
        './img/statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './img/statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ]

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_ENEMY);
        this.x = 10;
        this.y = 0;
        this.width = 80;
        this.height = 20;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}