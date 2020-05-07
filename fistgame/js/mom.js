var momObj =function()
{
	this.x;
	this.y;
	//定义一个角度
	this.angle;
	
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
};
momObj.prototype.init = function()
{
	this.x=canWidth*0.5;
	this.y=canHight*0.5;
	this.angle=0;
	this.bigEye.src="img/bigEye0.png";
	this.bigBody.src="img/bigSwim0.png";
	this.bigTail.src="img/bigTail0.png";
};
momObj.prototype.draw = function()
{
	//设置   大鱼去的位置 到哪里
	this.x=lerpDistance(mx,this.x,0.96);
	this.y=lerpDistance(my,this.y,0.96);
	//计算角度差
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
	var bate =Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(bate,this.angle,0.9);
	//之作用大鱼
	ctx1.save();
	//原点
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);//绘制尾巴
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);//绘制身体
	ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);//绘制眼睛
	//之作用大约
	ctx1.restore();
};
