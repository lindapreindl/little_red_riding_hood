class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusBar = new StatusBar();
    gemBar = new GemBar();
    gemcount = 0;
    gemBarColour = 'red';
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run(){
        setInterval(() => {
            
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects(){
        if (this.keyboard.D) {
            let flame = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObject.push(flame);
        }
    }


    checkCollisions(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){
                console.log('Collision with character and',enemy);
                this.character.hit();
                console.log(this.character.energy);
                this.statusBar.setPercentage(this.character.energy);
            }
        })

        //*css*/`
        this.throwableObject.forEach((flame) =>{
            if(this.level.enemies[0].isColliding(flame)){
                console.log('Collision with flame and ENEMY');
            }
           
        })    
        //*css*/`
          

        this.level.gems.forEach((gem) =>{
            if(this.character.isColliding(gem)){
                console.log('Collision with character and', gem);
                
                gem.id = `gem${gem.x}`;
                console.log(gem.id);
                // gemIndex = this.level.gems.indexOf(gem); geht nicht
                // vllt schauen, dass man das anders löst, als immer nur das erste element zu löschen?
                this.level.gems.splice(0, 1); 
                this.addObjectsToMap(this.level.gems);
                console.log('hidden');
                this.gemcount++;
                this.checkGembarColour();
            }
        })
    }

    checkGembarColour(){
        if(this.gemcount >= this.level.total_gemcount - this.level.total_gemcount/2){
            this.gemBarColour = 'orange';
            console.log('changed color');
        }
        if(this.gemcount == this.level.total_gemcount){
            this.gemBarColour = 'white';
            console.log('changed color');
        }
    }


    setWorld() {  //damit Character auf keyboard von world zugreifen kann, wird es miteinander verbunden
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.trees);
        this.addObjectsToMap(this.level.gems);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); 
        //space for fixed objects
        this.addToMap(this.statusBar);
        this.addToMap(this.gemBar);
        
        this.ctx.font = "15px Arial";
        this.ctx.fillStyle = this.gemBarColour;
        this.ctx.fillText(this.gemcount + '/' + this.level.total_gemcount, 120, 18);
        
        // - space end
        this.ctx.translate(this.camera_x, 0); 

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject)
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        //draw wird damit immer wieder aufgerufen, je nachdem, wie gut die Grafikkarte ist
        let self = this;        //hier wird this self zugewiesen, weil in der folgenden funktion this nicht mehr funktioniert
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}