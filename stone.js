class Stone{
	constructor(x,y)
	{
	// assigning options to the stone
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
	
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0, 0, this.width, this.height);
			pop()
	}

}