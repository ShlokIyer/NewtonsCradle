class Rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		push();
		stroke("black")
        strokeWeight(4);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offSetX; //s needs to be small
        var Anchor2Y = pointB.y + this.offSetY; //s needs to be small

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
		pop();
 }   





}