//分数抬头
var  scoreheaderObj = function()
{
	this.x;
	this.y;
	this.scorenumber;
}
scoreheaderObj.prototype.init=function()
{
	this.x=canWidth*0.35;
	this.y=canHight*0.1;
	this.scorenumber=0;
}
scoreheaderObj.prototype.draw=function()
{
	ctx1.font="30px Arial";
    ctx1.fillStyle="#aaaaaa";
    ctx1.fillText("当前分数: "+this.scorenumber,this.x,this.y);
}
