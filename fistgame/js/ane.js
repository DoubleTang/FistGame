var aneObj = function() {
	this.x=[];
	this.len=[];
};
aneObj.prototype.num = 70;
aneObj.prototype.init = function()
{
	for (var i=0;i<this.num;i++) {
		this.x[i] = i*15 + Math.random()*20;
		this.len[i] = 200 + Math.random()*50;
	}
	
};
aneObj.prototype.draw = function()
{
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="puple";
	for (var i=0;i<this.num;i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHight);
		ctx2.lineTo(this.x[i],canHight-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
};

