class rope{
    constructor(body1, x1, y1){
        
        var options = {
            bodyA: body1,
            pointB:{x:x1, y:y1},
            length:250,
            stiffness:1    
        }
    //this.pointB = pointB    
    this.rope = Constraint.create(options);
    World.add(world,this.rope)
    }

      
    display(){
         
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.pointB   
        line(pointA.x,pointA.y,pointB.x,pointB.y)
     }
    }
