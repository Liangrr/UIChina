
//createHexagon({container:".box",color:"#6c6",size:size});
function createHexagon(obj) {
	var container = obj.container;
	var cont = document.querySelectorAll(container);
	var color = obj.color;
	var size = obj.size;

	for (var i = 0; i < cont.length; i++) {
		var box = document.createElement("div");
		var box1 = document.createElement("div");
		var box2 = document.createElement("div");
		var box3 = document.createElement("div");
	
		box1.style.width = "0px";
		box1.style.borderLeft = size + "px solid transparent";
		box1.style.borderRight = size + "px solid transparent";
		box1.style.borderBottom = (0.6 * size) + "px solid " + color;
	
		box2.style.width = (2 * size) + "px";
		box2.style.height = (1.1 * size) + "px";
		box2.style.backgroundColor = color;
	
		box3.style.width = "0";
		box3.style.borderLeft = size + "px solid transparent";
		box3.style.borderRight = size + "px solid transparent";
		box3.style.borderTop = (0.6 * size) + "px solid " + color;
	
		box.style.width = (2 * size) + "px";
		box.style.height = (2.3 * size) + "px";
		box.appendChild(box1);
		box.appendChild(box2);
		box.appendChild(box3);
		box.style.position = "absolute";
		box.style.top = "0px";
		box.style.left = "0px";
		box.style.zIndex = "-1";
		
		cont[i].appendChild(box);
		}

}