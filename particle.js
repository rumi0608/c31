class particle{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);

      this.body = Bodies.circle(x,y, this.r,options);
      this.color=this.color(random(0,255), random(0,255), random(0,255));
      world.add(world,this.body);
    }
  };