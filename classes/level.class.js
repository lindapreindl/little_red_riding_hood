class Level {
    enemies;
    clouds;
    backgroundObjects;
    gems;
    total_gemcount;
    trees;
    level_end_x = 900;

    constructor(enemies, clouds, backgroundObjects, gems, total_gemcount, trees){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.gems = gems;
        this.total_gemcount = total_gemcount;
        this.trees = trees;
    }
}