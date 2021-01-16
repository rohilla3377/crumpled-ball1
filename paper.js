class paper {
    constuctor(x,y,radius){
        var option = {
        isStatic:false,
        restitution:0.2,
        friction: 0.3,
        density:1.0,
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);



    }
    display(){
        FileList("yellow");
        ellispeMode(RADIUS);
        ellipse(this.body.position.x,this.body.postion.y,this.radius,this.radius)
    }
    }
