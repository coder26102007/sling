class SLING{

constructor(bodyA,bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffeness: 0.04,
        length:10
    }
    this.shot = Constraint.create(options)
    World.add(world,this.shot)



}

display(){

    var shot1=this.shot.bodyA.position;
    var shot2=this.shot.bodyB.position;
    strokeWeight(10);
    line(shot1.x,shot1.y,shot2.x,shot2.y);


}



}