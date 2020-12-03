class Particle{
constructor(x,y,radius){
var opt={
restitution:0.4,
}
this.radius=radius;

this.body=Bodies.circle(x,y,this.radius,opt);
this.color=color(random(0,255),random(0,255), random(0, 255));
World.add(world,this.body);

}

display(){

    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    stroke(0)
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius,this.radius);
    pop();
}








};