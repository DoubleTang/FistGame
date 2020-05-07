var babyObj=function()
{
	this.x;
	this.y;
	this.angle;//定义小鱼的角度差
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();
}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHight*0.5+50;
	this.angle=0;
    this.babyEye.src="img/babyEye0.png";
	this.babyBody.src="img/babyFade0.png";
	this.babyTail.src="img/babyTail0.png";
}
babyObj.prototype.draw=function()
{
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	//计算角度差
    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
	var bate =Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(bate,this.angle,0.6);
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);//让小鱼 随着大鱼转
	ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+23,-this.babyTail.height*0.5);
	ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	ctx1.restore();
}
