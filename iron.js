class Iron{
	constructor(x,y)
	{
	// assigning options to the stone
	var options={
		'restitution':0.8,
		'friction':3,
		'density':30
	}
	
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 80;
        this.height = 50;

        World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("brown");
			fill("brown");
            rect(0, 0, this.width, this.height);
			pop()
	}

}