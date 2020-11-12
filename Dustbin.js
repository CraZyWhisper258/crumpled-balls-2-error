class Dustbin
{
	constructor(x,y)
	{
		
		this.dustbinImage = loadImage("sprites/dustbin.png")
		this.x=x;
		this.y=y;
		

	}
	display()
	{
			image(this.dustbinImage,2,2)
			this.dustbinImage.position = 1200
			

			
	}

}