//判断大鱼 和果实的距离
function momFruitsCollision()
{
	for (var i=0;i<fruit.num;i++) {
		if(fruit.alive[i]) //状态存活
		{
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l<600)
			{
				if(fruit.funitType[i]=="blue")
				{
					score.scorenumber=0;
					alert("蓝色的果实你也吃？中毒了！游戏结束");
				}
				//清除果实
			    fruit.dead(i);
			}
		}
	}
}
