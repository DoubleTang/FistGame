//2张画布对象
var  can1;
var  can2;
//2张画布contenx
var  ctx1;
var  ctx2;
//开始时间和结束时间
var lasttime;
var deltatime;
//背景
var  bgPic =new  Image();
//画布宽度和高度
var canWidth;
var canHight;
//body加在完事件
document.body.onload=game();
//海葵
var ane;
//果实
var fruit;
//大鱼
var mom;
//小鱼
var baby;
//鼠标位置
var  mx;
var  my;
//分数
var score;
function game() //主程序入口
{
	init();
	lasttime=Date.now();
	deltatime=0;
	gameloop();
}
//初始化
function init()
{
	can1=document.getElementById("canvas1");//前面的一层
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//后面的一层   z-index 数值越大  越靠前面  否则在后面
	ctx2=can2.getContext("2d");
	//给画布1 添加鼠标移动事件
	can1.addEventListener('mousemove',onMouseMove,false)
    //can1.addEventListener('click',onMouseMove,false)
	bgPic.src="img/background.jpg"
	canWidth=can1.width;
	canHight=can1.height;
	//海葵
	ane = new aneObj();
    ane.init();
	//果实
	fruit = new funitObj();
	fruit.init();
	//大鱼
    mom = new momObj();
    mom.init();
    // 初始化鼠标
    mx=canWidth*0.5;
    my=canHight*0.5;
	//小鱼
	baby= new babyObj();
	baby.init();
	// 分数
	score=new scoreheaderObj();
	score.init();
}

//鼠标移动事件
function onMouseMove(e)
{
	if(e.offsetX || e.layerX)
	{
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
		my=e.offsetY==undefined?e.layerY:e.offsetY;
	}	
}

//刷新页面（游戏循环）
function gameloop()
{
	//当前绘制完成后  根据机器性能 再决定下一帧的时间  
	requestAnimationFrame(gameloop); 
	var now=Date.now();
	deltatime= now - lasttime;
	lasttime=now;
	if(deltatime > 40)
	{
		deltatime=40;
	}
	drawBackground();
	//海葵
	ane.draw();
	//果实
	fruitMonitor();
	fruit.draw();
	//大鱼
	ctx1.clearRect(0,0,canWidth,canHight)
	mom.draw();
	momFruitsCollision();
	//小鱼 
	baby.draw();
	//分数
	score.draw();
}
