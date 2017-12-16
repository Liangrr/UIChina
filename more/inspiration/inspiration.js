
//{container:xxx,imgs:xxx,imgWidth:xxx}
function createInspiration(obj){
	var container = document.querySelector(obj.container);
	var imgs = obj.imgs;
	var width = obj.imgWidth;
	var margin = 20;
	var padding = 10;
	var index = 0;
	var ul01 = document.createElement("ul");
	var ul02 = document.createElement("ul");
	var ul03 = document.createElement("ul");
	var ul04 = document.createElement("ul");
	var uls = [ul01,ul02,ul03,ul04];
	var divs = [];
	for (var i = 0; i < imgs.length; i++) {
		if(index==4){
			index = 0;
		}
		var div = document.createElement("div");
		div.style.position = "relative";
		div.style.padding = padding+"px";
		var li = document.createElement("li");
		li.style.listStyle = "none";
		var a = document.createElement("a");
		a.href = "#";
		a.style.display = "block"
		a.style.width = width+"px";
		var img = document.createElement("img");
		img.style.width = width+"px";
		img.src = imgs[i];
		a.appendChild(img);
		li.appendChild(a);
		div.appendChild(li);
		
//		var span = document.createElement("span");
//		span.style.display = "block";
//		span.style.width = (width+padding*2)+"px";
//		span.style.height = "50px";
//		span.style.position = "absolute";
//		span.style.left = "0px";
//		span.style.bottom = "-50px";
//		span.style.backgroundColor = "coral";
//		span.style.zIndex = "1";
//		div.appendChild(span);
		
		uls[index].appendChild(div);
		index++;
		divs[i]=div;
	}
	
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener("mousemove",function(e){
			this.style.boxShadow = "0px 0px 2px black";
		});
		divs[i].addEventListener("mouseleave",function(e){
			this.style.boxShadow = "none";
		});
	}
	
	var box = document.createElement("div");
	box.style.paddingTop = "20px";
	box.style.backgroundColor = "#eff3f5";
	box.style.width = (4*width+8*padding)+"px";
	box.style.margin = "0 auto";
	for (var i = 0; i < 4; i++) {
//		if(i<uls.length-1){
//			uls[i].style.marginRight = margin+"px";
//		}
		uls[i].style.width = (width+padding*2)+"px";
		uls[i].style.float = "left";
		box.appendChild(uls[i]);
	}
	container.appendChild(box);
}
