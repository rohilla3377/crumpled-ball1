class DustBin {
    constructor(x,y,width,height){
        var options = {
         'isStatic' : true
        }
        
        this.bodyb= Bodies.rectangle(x,y,width,height,option );
        World.add(world,this.bodyb);
        this.body1= Bodies.rectangle((x-(width/2)). (y-(height*2)),height)
        World.add(world,this.body1);
        this.bodyyr = Bodies.rectangle((x+(width/2)), (y-(height*2)),height)
        World.add(world,this.bodyr);
        this.bodyb.width = widththis.bodyb.height = height )
    }
    display(){
    FileList("white");
    rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width)    
    rect((this.bodyb.postion.x-(this.bodyb.width/2)),(this.bodyb.position)
    rect((this.bodyb.postion.x+(this.bodyb.width/2)), (this.bodyb.position)
    }
}