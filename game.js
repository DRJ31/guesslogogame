var count1=1;
var count2=0;
var count3=0;
function qw(){
	var element1= document.getElementById("q"+count1+"a");
	element1.style.display="block";
}

function quit(){
	var element1=document.getElementById("q"+count1+"a");
	var element2=document.getElementById("q"+count1);
	var element4=document.getElementById("q"+(++count1));
	var element3=document.getElementById("right");
	element1.style.display="none";
	element2.style.display="none";
	element4.style.display="block";
	element3.style.display="none";
}

function right(){
	var element1=document.getElementById("right");
	element1.style.display="block";
	count3=++count3;
}

function again(){
	window.location.reload();
}

function getpack(){
	var element1=document.getElementById("getpack");
	var element2=document.getElementById("result5");
	var element3=document.getElementById("result6");
	var element4=document.getElementById("result7");
	var element5=document.getElementById("result8");
	var element6=document.getElementById("result9");
	element1.style.display="block";
	element2.style.display="none";
	element3.style.display="none";
	element4.style.display="none";
	element5.style.display="none";
	element6.style.display="none";
}

function right9(){
	var element1=document.getElementById("right9");
	element1.style.display="block";
	count3=++count3;
}

function last(){
	var element1=document.getElementById("q9a");
    var element2=document.getElementById("right9");
    element1.style.display="none";
    element2.style.display="none";
	var result=count3;
	switch(result)
	{
		case 0:
		var element=document.getElementById("result0");
		element.style.display="block";
		break;
		case 1:
		var element=document.getElementById("result1");
		element.style.display="block";
		break;
		case 2:
		var element=document.getElementById("result2");
		element.style.display="block";
		break;
		case 3:
		var element=document.getElementById("result3");
		element.style.display="block";
		break;
		case 4:
		var element=document.getElementById("result4");
		element.style.display="block";
		break;
		case 5:
		var element=document.getElementById("result5");
		element.style.display="block";
		break;
		case 6:
		var element=document.getElementById("result6");
		element.style.display="block";
		break;
		case 7:
		var element=document.getElementById("result7");
		element.style.display="block";
		break;
		case 8:
		var element=document.getElementById("result8");
		element.style.display="block";
		break;
		default:
		var element=document.getElementById("result9");
		element.style.display="block";

	}
}