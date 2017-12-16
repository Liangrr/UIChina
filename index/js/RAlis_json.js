var iconBrowse = "&#xe6f8;"; //浏览icon
var iconComments = "&#xe61b;"; //评论icon
var iconLike = "&#xe65e;"; //点赞icon
var imgSrc = "uicn/"; //图片所在的文件夹

var li01={
	imgPath:imgSrc+"R1.png",
	s_title:"设计教程",
	b_title:"用AI设计挥毫泼溅感毛笔字体",
	content:"东方书法的韵味有其自身运笔的独特性和它本身的不可复制性。如果我们能写出这样的字体当然是好事，但需要很长时间的精进磨砺",
	div_content:{
		imgPath:imgSrc+"RH1.png",
		name:"菜心设计铺",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:389,               //浏览数目
		commentsSum:3,             //评论数目
		likeSum:21         //点赞数目
	}
};
var li02={
	imgPath:imgSrc+"R2.png",
	s_title:"经验观点",
	b_title:"视觉设计师的进化 | 设计沙漏分享会02",
	content:"视觉设计师面临修饰者困境，本文将介绍设计冲刺带给视觉设计师全链路认知和体系化思维的有效尝试，助力成为杰出区分者和驱动者",
	div_content:{
		imgPath:imgSrc+"RH2.jpg",
		name:"haze23",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:11044,               //浏览数目
		commentsSum:31,             //评论数目
		likeSum:286         //点赞数目
	}
};
	
var li03={
	imgPath:imgSrc+"R3.jpg",
	s_title:"经验观点",
	b_title:"两步打造2.5D风格 Landing Page",
	content:"这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要走心。还有我是占位符不是简介。",
	div_content:{
		imgPath:imgSrc+"RH3.png",
		name:"tere",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:17273,               //浏览数目
		commentsSum:56,             //评论数目
		likeSum:286         //点赞数目
	}
};

var li04={
	imgPath:imgSrc+"R4.png",
	s_title:"经验观点",
	b_title:"FUI编年史",
	content:"第一部完整中文FUI编年史，希望大家喜欢。不足之处烦请各位勘误，多多指正。",
	div_content:{
		imgPath:imgSrc+"RH4.jpg",
		name:"kingxijian",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:6058,               //浏览数目
		commentsSum:13,             //评论数目
		likeSum:228         //点赞数目
	}
};

var li05={
	imgPath:imgSrc+"R5.png",
	s_title:"经验观点",
	b_title:"动态表情包制作&投稿经验分享",
	content:"前段时间为公司制作了一套动态表情，从构思绘制到平台投稿感受很深，总结一些经验给需要的小伙伴，避免出现我遇到的问题，帮助大家解决一些困惑！",
	div_content:{
		imgPath:imgSrc+"RH5.png",
		name:"货嘀UED",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:11197,               //浏览数目
		commentsSum:37,             //评论数目
		likeSum:546         //点赞数目
	}
};

var li06={
	imgPath:imgSrc+"R6.png",
	s_title:"经验观点",
	b_title:"订单全链路改版思考",
	content:"这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要走心。还有我是占位符不是简介。",
	div_content:{
		imgPath:imgSrc+"RH6.jpg",
		name:"菜心设计铺",
		browse:iconBrowse,
		comments:iconComments,
		like:iconLike,
		browseSum:9638,               //浏览数目
		commentsSum:21,             //评论数目
		likeSum:345         //点赞数目
	}
};
var lis=[li01, li02, li03,li04, li05, li06];

var jsonStr = JSON.stringify(lis);
var lisJson = JSON.parse(jsonStr);

//var box =document.querySelector(".box");
//section .center .center_content .section_left
var section_left =document.querySelector("section .center .center_content .section_left");

for (var i =0;i<lisJson.length;i++) {
	var li = document.createElement("li");
	var div_i = document.createElement("div");
	var a_img = document.createElement("a");
	var img = document.createElement("img");
	var h4 = document.createElement("h4");
	var h3 = document.createElement("h3");
	var content_p = document.createElement("p");
	var div = document.createElement("div");
	var div_img = document.createElement("img");
	var div_name = document.createElement("p");
	var div_b = document.createElement("p");
	var div_c = document.createElement("p");
	var div_like = document.createElement("p");
	var div_bs = document.createElement("p");
	var div_cs = document.createElement("p");
	var div_ls = document.createElement("p");
	
	img.src = lisJson[i].imgPath;
	h4.innerHTML=lisJson[i].s_title;
	h3.innerHTML=lisJson[i].b_title;
	content_p.innerHTML=lisJson[i].content;
	div_img.src=lisJson[i].div_content.imgPath;
	div_name.innerHTML=lisJson[i].div_content.name;
	div_b.className="iconfont";
	div_b.innerHTML=lisJson[i].div_content.browse;
	div_c.className="iconfont";
	div_c.innerHTML=lisJson[i].div_content.comments;
	div_like.className="iconfont";
	div_like.innerHTML=lisJson[i].div_content.like;
	div_bs.innerHTML=lisJson[i].div_content.browseSum;
	div_cs.innerHTML=lisJson[i].div_content.commentsSum;
	div_ls.innerHTML=lisJson[i].div_content.likeSum;
	
	a_img.appendChild(img);
	div_i.appendChild(a_img);
	div.appendChild(div_img);
	div.appendChild(div_name);
	div.appendChild(div_b);
	div.appendChild(div_bs);
	div.appendChild(div_c);
	div.appendChild(div_cs);
	div.appendChild(div_like);
	div.appendChild(div_ls);
	li.appendChild(div_i);
	li.appendChild(h4);
	li.appendChild(h3);
	li.appendChild(content_p);
	li.appendChild(div);
	
	section_left.appendChild(li);
	
}
	
	
	
	