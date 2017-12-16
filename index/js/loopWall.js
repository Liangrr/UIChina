//creatLoopWall({loopContainer:XXX,imgsPath:XXX,imgWidth:XXXX,imgHeight:XXXX,animTime:XXX,gapTime:XXX});
function creatLoopWall(obj) {
	//放轮播图的容器
	var loopContainer = document.querySelector(obj.loopContainer);
	//图片路径数组
	var imgsPath = obj.imgsPath;
	//轮播图宽度
	var imgWidth = obj.imgWidth;
	//轮播图高度
	var imgHeight = obj.imgHeight;
	//动画播放时间
	var animTime = obj.animTime;
	//每一帧间隔时间
	var gapTime = obj.gapTime;
	//所有的li
	var lis = [];

	var ul = document.createElement("ul");

	for (var i = 0; i < imgsPath.length; i++) {
		var a = document.createElement("a");
		var li = document.createElement("li");
		//把li保存起来
		lis[i] = li;
		var img = document.createElement("img");

		//设置图片
		img.src = imgsPath[i];
		//图片放入li
		li.appendChild(img);
		a.href = "#";
		a.style.display = "block";
		a.style.width = imgWidth + "px";
		a.style.height = imgHeight + "px";
		a.appendChild(li);
		//li放入ul
		ul.appendChild(a);
	}
	//添加到界面
	loopContainer.appendChild(ul);

	for (var i = 0; i < lis.length; i++) {
		if (i == 0) {
			//第一张要放在中间
			lis[i].style.left = "0px";
		} else {
			lis[i].style.left = imgWidth + "px";
		}
		lis[i].style.width = imgWidth + "px";
		lis[i].style.height = imgHeight + "px";
		lis[i].style.listStyle = "none";
		lis[i].style.position = "absolute";
		lis[i].style.top = "0px";
	}
	ul.style.width = imgWidth + "px";
	ul.style.height = imgHeight + "px";
	ul.style.position = "relative";
	ul.style.overflow = "hidden";
	//动画   
	var imgs = lis;
	var index = 0;
	var leftDistance = 0;
	var rightDistance = imgWidth;

	function centerRunLeftAnim(ele) {
		var centerRunLeft = setInterval(function() {
			if (leftDistance <= -imgWidth) {
				//到达最左边，停止动画
				clearInterval(centerRunLeft);
				//同时自己还要回原位。
				ele.style.left = imgWidth + "px";
				//数据还原
				leftDistance = 0;
			} else {
				ele.style.left = (leftDistance = leftDistance - imgWidth / 10) + "px";
			}
		}, obj.animTime);
	}

	function rightRunCenterAnim(ele) {
		var rightRunCenter = setInterval(function() {
			if (rightDistance <= 0) {
				//到达中间，停止动画
				clearInterval(rightRunCenter);
				ele.style.left = "0px";
				//数据还原
				rightDistance = imgWidth;
			} else {
				ele.style.left = (rightDistance = rightDistance - imgWidth / 8) + "px";
			}
		}, obj.animTime);
	}

	var startTask;

	function startAnim() {
		//开始之前要停止
		stopAnim();
		startTask = setInterval(function() {
			centerRunLeftAnim(imgs[index++]);
			if (index == imgs.length - 1) {
				index = 0;
			}
			rightRunCenterAnim(imgs[index]);
		}, obj.gapTime);
	}

	function stopAnim() {
		clearInterval(startTask);
	}
	//通过对象导出
	return {
		start: startAnim,
		stop: stopAnim
	};
}

function LoopWall(obj) {
	//放轮播图的容器
	var loopContainer = document.querySelector(obj.loopContainer);
	//图片路径数组
	var imgsPath = obj.imgsPath;
	//轮播图宽度
	var imgWidth = obj.imgWidth;
	//轮播图高度
	var imgHeight = obj.imgHeight;
	//动画播放时间
	var animTime = obj.animTime;
	//每一帧间隔时间
	var gapTime = obj.gapTime;
	//所有的li
	var lis = [];
	//开始轮播任务
	var startTask;
	
	var ul;

	function creatHtml() {
		ul = document.createElement("ul");
		for (var i = 0; i < imgsPath.length; i++) {
			var li = document.createElement("li");
			//把li保存起来
			lis[i] = li;
			var img = document.createElement("img");
			//设置图片
			img.src = imgsPath[i];
			//图片放入li
			li.appendChild(img);
			//li放入ul
			ul.appendChild(li);
		}
		//添加到界面
		loopContainer.appendChild(ul);
	}

	function setStyle() {
		for (var i = 0; i < lis.length; i++) {
			if (i == 0) {
				//第一张要放在中间
				lis[i].style.left = "0px"
			} else {
				lis[i].style.left = imgWidth + "px"
			}
			lis[i].style.width = imgWidth + "px";
			lis[i].style.height = imgHeight + "px";
			lis[i].style.listStyle = "none";
			lis[i].style.position = "absolute";
			lis[i].style.top = "0px";
		}
		ul.style.width = imgWidth + "px";
		ul.style.height = imgHeight + "px";
		ul.style.position = "relative";
		ul.style.overflow = "hidden";
	}

	//动画
	var imgs = lis;
	var index = 0;
	var leftDistance = 0;
	var rightDistance = imgWidth;

	function centerRunLeftAnim(ele) {
		var centerRunLeft = setInterval(function() {
			if (leftDistance <= -imgWidth) {
				//到达最左边，停止动画
				clearInterval(centerRunLeft);
				//同时自己还要回原位。
				ele.style.left = imgWidth + "px";
				//数据还原
				leftDistance = 0;
			} else {
				ele.style.left = (leftDistance = leftDistance - imgWidth / 8) + "px";
			}
		}, obj.animTime);
	}

	function rightRunCenterAnim(ele) {
		var rightRunCenter = setInterval(function() {
			if (rightDistance <= 0) {
				//到达中间，停止动画
				clearInterval(rightRunCenter);
				ele.style.left = "0px";
				//数据还原
				rightDistance = imgWidth;
			} else {
				ele.style.left = (rightDistance = rightDistance - imgWidth / 8) + "px";
			}
		}, obj.animTime);
	}

    //对外公开就使用this.xxxx=
	this.start = function() {
		//开始之前要停止
		this.stop();
		startTask = setInterval(function() {
			centerRunLeftAnim(imgs[index++]);
			if (index == imgs.length - 1) {
				index = 0;
			}
			rightRunCenterAnim(imgs[index]);
		}, obj.gapTime);
	};

	this.stop = function() {
		clearInterval(startTask);
	};

	function init() {
		creatHtml();
		setStyle();
	}
	init();
	
}