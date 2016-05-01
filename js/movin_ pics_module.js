
function moving_pics(id){
    var image_box=document.getElementById(id);
    console.log(image_box);
    var list=[];
    list.push('url(bg1.JPG)');
    list.push('url(bg2.JPG)');
    i=0;
    console.log(list);
    function movepic(){
		if(i==list.length-1){
			i=-1;
		}
		i=i+1;
        var bg= list[i] ;
        console.log(bg);
        image_box.style.backgroundImage = bg;
	}
    var x=setInterval(movepic, 3000);
}
function myfunction(id1,id2){
	var list=arguments;
	var i=0;
	console.log(list);
	function movepic(){
		console.log("kunal");
		var el=document.getElementById(list[i]);
		console.log(el);
		if(i==list.length-1){
			i=-1;
		}
		var el2=document.getElementById(list[i+1]);
		i=i+1;
		console.log(el2);
		el.style.display="none";
		el2.style.display="flex";
	}
	var x=setInterval(movepic, 4000);
}