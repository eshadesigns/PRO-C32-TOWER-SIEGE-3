class Block{
    constructor(x,y,w,h) {
      var options = {
      restitution: 0.6,
      friction:0.005
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      var pos = this.body.position;
      if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.w,this.h);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
         tint(255,this.Visibility);
         

          if(this.Visibility<0 && this.Visibility>=-50){
            score=score+1;
           } 
           pop();
       }
    }
  };
