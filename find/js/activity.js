var imgSrc = "activityImg/";

var li01 = {
	div_h : {
	h_a : "第五届中国用户体验峰会",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2017-10-20 - 2017-11-06",
	},
	imgPath : imgSrc + "1508495367_749.jpeg",
	p_text :"新体验· 新战略；体验经济助力产业升级、战略革新重塑商业价值！"
};

var li02 = {
	div_h : {
	h_a : "九年积淀，筑梦共赢——UI中国第九届用户体验设计大会",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2017-3-28 - 2017-4-22",
	},
	imgPath : imgSrc + "A2.jpeg",
	p_text :"九年积淀，筑梦共赢——UI中国第九届用户体验设计大会"
};

var li03 = {
	div_h : {
	h_a : "2016国际体验设计大会",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2016-05-17 - 2016-07-03",
	},
	imgPath : imgSrc + "A3.jpeg",
p_text :"2016，国际体验设计大会搭建思想碰撞平台，为设计产业下一个商业增长点的构建提供启发和线索，组织大家思考用户体验策划师的价值在哪里？体验设计产业的突破口在哪里？"
};

var li04 = {
	div_h : {
	h_a : "移动交互原型特讲",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2016-06-21 - 2016-06-30",
	},
	imgPath : imgSrc + "A4.jpeg",
	p_text :"移动交互原型工具ProtoPie线下特讲"
};
var li05 = {
	div_h : {
	h_a : "UI中国8周年庆典",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2016-04-05 - 2016-04-23",
	},
	imgPath : imgSrc + "A5.png",
	p_text :"着眼未来，探索创新---暨UI中国8周年庆典。2016年4月23日，UI中国诚邀您欢聚首都北京，不仅是UI中国八周年的年会还是重燃对于行业的激情，掀起未来设计探索创新的头脑风暴！"
};

var li06 = {
	div_h : {
	h_a : "UI中国年度盛典",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2016-01-18 - 2016-03-20",
	},
	imgPath : imgSrc + "A6.png",
	p_text :"UI中国2015年度盛典"
};

var li07 = {
	div_h : {
	h_a : "有志青年，加入UI中国校园大使团队吧！",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-03-27 - 2015-12-31",
	},
	imgPath : imgSrc + "A7.png",
p_text :"UI中国校园大使招募活动开始了，有志青年快来加入组织吧！我们的口号是：U志青年，I 自己，I 生活，I 未来 ！"
};

var li08 = {
	div_h : {
	h_a : "体验驱动大未来",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-10-28 - 2015-11-11",
	},
	imgPath : imgSrc + "A8.jpeg",
	p_text :"全球最具影响力的用户体验行业年度盛典，第十二届用户友好大会User Friendly 2015。"
};
var li09 = {
	div_h : {
	h_a : "从设计师到设计总监，你与他们只差一步！",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-10-10 - 2015-10-16",
	},
	imgPath : imgSrc + "A9.png",
	p_text :"百位优秀设计师与业内大咖面对面"
};

var li10 = {
	div_h : {
	h_a : "创业沙拉",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-06-03 - 2015-07-31",
	},
	imgPath : imgSrc + "A10.jpeg",
	p_text :"创业沙拉——打响52小时创业实战"
};

var li11 = {
	div_h : {
	h_a : "IXDC国际体验设计大会2015",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-06-24 - 2015-07-14",
	},
	imgPath : imgSrc + "A11.jpeg",
p_text :"国际体验设计大会2015，重新定义用户体验。本次大会关注的焦点是反思用户体验，构建用户体验生态圈，学习掌握设计方法在不同行业的应用和创新。通过大会，旨在让新从业者们能了解整个用户体验的范畴和理想，让资深的从业者们能重新反思自己的工作，延伸扩散对用户体"
};

var li12 = {
	div_h : {
	h_a : "GGV专场招聘",
	h_span:"已结束",
	p_time:"投稿时间  ：",
	times:"2015-06-05 - 2015-07-11",
	},
	imgPath : imgSrc + "A12.jpeg",
	p_text :"GGV专场招聘"
};

var lis = [li01,li02,li03,li04,li05,li06,li07,li08,li09,li10,li11,li12];
var lisStr = JSON.stringify(lis);
var lisJson = JSON.parse(lisStr);

var box = document.querySelector(".content");
var ul = document.createElement("ul");
for(var i = 0; i<lis.length; i++){
	var li = document.createElement("li");
	var div = document.createElement("div");
	var h1 = document.createElement("h1");
	var a_text = document.createElement("a");
	var  span = document.createElement("span");
	var p = document.createElement("p");
	var time = document.createElement("time");
	var img = document.createElement("img");
	var p_text = document.createElement("p");
	
	a_text.innerText = lisJson[i].div_h.h_a;
	span.innerHTML = lisJson[i].div_h.h_span;
	p.innerText = lisJson[i].div_h.p_time;
	time.innerHTML = lisJson[i].div_h.times;
	img.src = lisJson[i].imgPath;
	p_text.innerHTML = lisJson[i].p_text;
	
	h1.appendChild(a_text);
	h1.appendChild(span);
	p.appendChild(time);
	div.appendChild(h1);
	div.appendChild(p);
	li.appendChild(div);
	li.appendChild(img);
	li.appendChild(p_text);
	
	ul.appendChild(li);
	
	ul.style.width = 1180 + "px";
	ul.style.height = 2961 + "px";
	ul.style.marginTop = 45 + "px";
	li.style.width = 580 + "px";
	li.style.height = 470 + "px";
	li.style.float = "left";
	li.style.marginBottom = 25 + "px";
	if (i%2!=0) {
		li.style.marginLeft = 20 + "px";
	} else{
		li.style.marginRight = 0;
	}
	
	div.style.width = 580 + "px";
	div.style.height = 40 + "px";
	h1.style.textAlign = "left";
	p.style.textAlign = "left";
	h1.style.fontSize = 16 +"px"
	h1.style.fontWeight = "bold";
	a_text.style.color = "#2c3e50";
	span.style.color = "#ee4b4b";
	span.style.marginLeft = 10 + "px";
	p.style.color = "#b8c4ce";
	time.style.color = "#3498db";
	p.style.marginTop = 10 + "px";
	
	img.style.width = 580 + "px";
	img.style.height = 321 +"px";
	img.style.marginTop = 25 + "px";
	p_text.style.textAlign = "left";
	p_text.style.color = "#2c3e50";
	p_text.style.marginTop = 25 +"px";
}
box.appendChild(ul);

