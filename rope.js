class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length: 200
        }
        
        this.Rope= Constraint.create(options);
        World.add(world, this.Rope);
    }

      display(){
                var pointA = this.Rope.bodyA.position;
                var pointB = this.Rope.bodyB.position;

                strokeWeight(4);

                var Anchor1X = pointA.x;
                var Anchor1X = pointA.x;

                var Anchor2X = pointB.x + offsetX;
                var Anchor2Y = pointB.y + offsetY;

                line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      }
}