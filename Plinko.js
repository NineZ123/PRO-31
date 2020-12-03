class Plinko{
constructor(x,y){
var opt={
    restitution:1,
    friction:1,
    isStatic:true
}
this.radius=10;
this.body=Bodies.circle(x,y,this.radius,opt);
World.add(world,this.body);
}
display(){
var pos=this.body.position;

push();
translate(pos.x, pos.y);
stroke(0)
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.radius);
pop();


}





};