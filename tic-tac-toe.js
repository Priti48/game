var count=1;
	function fill(control)
	{
		if(count<=9)
		{
			if(count%2!=0)
			{
				putdata(control.id,"X");
			}
			else
			{
				putdata(control.id,"0");
			}
			count++;
		}
		if(count>9)
		{
			document.getElementById("demo").innerHTML ="OOps.......This game is draw";
			document.getElementById("btn").style.visibility = "visible";
			//alert("Match draw");
			//reset();
		}
		if(checkwin())
		{
				document.getElementById("demo").innerHTML = "Congrats.......you are winner";
				document.getElementById("btn").style.visibility = "visible";
				//alert("Winner")
				//reset();
		}
		
	}
	function reset()
	{
		for(var i=1;i<=9;i++)
		{
			document.getElementById('d'+i).innerHTML="";
			document.getElementById("demo").innerHTML="";
			document.getElementById("btn").style.visibility= "hidden"
		}
		count=1;
	}
	function checkwin()
	{
		if(checkcondition('d1','d2','d3') || checkcondition('d1','d5','d9') || checkcondition('d1','d4','d7') || checkcondition('d2','d5','d8') || checkcondition('d3','d6','d9') ||checkcondition('d3','d5','d7') ||checkcondition('d4','d5','d6') || checkcondition('d7','d8','d9'))
			{
				return true;
			}
	}
	function checkcondition(div1,div2,div3)
	{
		if(getdata(div1)!="" && getdata(div2)!="" && getdata(div3)!="" && getdata(div1)==getdata(div2) && getdata(div2)==getdata(div3))
		{
			return true;
		}
	}
	function getdata(div)
	{
		return document.getElementById(div).innerHTML;
	}
	function putdata(div,data)
	{
		document.getElementById(div).innerHTML=data;
	}