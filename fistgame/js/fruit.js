var  funitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	//图片长度
    this.l=[];
	//上浮速度
	this.spd=[];
    //
    this.funitType=[];
    
	//果实图像
	this.orange=new Image();
	this.blue=new Image();
};

funitObj.prototype.num=30;
funitObj.prototype.init=function()
{
	//给果实状态成不成长
	for (var i=0;i<this.num;i++) {
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.funitType[i]="";		
		this.spd[i]=Math.random()*0.01+0.05; //从0.05到0.01之间之歌值
		this.born(i);
	}	
	this.orange.src="img/fruit.png";
	this.blue.src="img/blue.png";
};
//画画
funitObj.prototype.draw=function()
{
	for (var i=0;i<this.num;i++) {
		if(this.alive[i])
		{
			if(this.funitType[i]=="blue")
			{
				var  pic=this.blue;
			}else
			{
				var pic=this.orange;
			}
			if(this.l[i]<=15)
			{
				this.l[i] += this.spd[i] * deltatime;	
			}else
			{
				this.y[i]-=this.spd[i]*1*deltatime;
			}
			//首先找到海葵  然后生长
			ctx2.drawImage(pic,this.x[i] - this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
	}
}
//产生
funitObj.prototype.born=function(i)
{
	//海葵ID
    var aneId=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneId];
    this.y[i]=canHight-ane.len[aneId];
    this.l[i]=0;
    this.alive[i]=true;
    
    var ran=Math.random();
    if(ran<0.2)
    {
    	this.funitType[i]="blue";
    }else
    {
    	this.funitType[i]="orange";
    }
   
}


var scorenumber=0;
//让果实消失 
funitObj.prototype.dead=function(i)
{
  this.alive[i]=false;	
  scorenumber=scorenumber+10;
  score.scorenumber=scorenumber;
}

function  fruitMonitor()
{
	var num=0;
    for (var  i=0;i<fruit.num;i++) {
    	if(fruit.alive[i])
    	{
    		num++;
    	}
    }	
    //长到第十五个果实
	if(num<15)
	{
		sendFruit();
		return;
	}

}
//让果实上浮
function sendFruit()
{
	for (var  i=0;i<fruit.num;i++) {
    	if(!fruit.alive[i])
    	{
    		fruit.born(i);
    		return;
    	}
    }	
}
