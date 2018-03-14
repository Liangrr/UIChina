var leaf_iconfont = "&#xe65e;";
var maining_articleJSON1 = {
	title: "【设计经验】图标设计初阶要先型",
	name: "milaky",
	person: "258",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON2 = {
	title: "Andriod分辨率适配 ”葵花宝典“",
	name: "14041558",
	person: "135",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON3 = {
	title: "《Gentleman》设计分享",
	name: "Ellideyn",
	person: "103",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON4 = {
	title: "【回音小讲堂】五分钟画视幻 分享人：大礼包",
	name: "gsmike",
	person: "94",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON5 = {
	title: "APP适配IOS8，iPhone6和Plus截图简要说明，有截图下载",
	name: "Youngxkk",
	person: "93",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON6 = {
	title: "设计师这样的工作，可以做一辈子吗？",
	name: "致觉",
	person: "92",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON7 = {
	title: "处女座设计师的一封信",
	name: "BEATERM80",
	person: "92",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON8 = {
	title: "PhotoShop制作时尚五彩缤纷的抽象人像碎片效果教程",
	name: "iconfans佳佳",
	person: "88",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON9 = {
	title: "UI设计师大礼包！2014年最全的ANDROID GUI模板和线框图免费下载",
	name: "songivan",
	person: "68",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};
var maining_articleJSON10 = {
	title: "设计师要画草图",
	name: "NQ-UEC",
	person: "61",
	titlesrc:"http://www.baidu.com",
	usersrc: "http://www.taobao.com"
};

//把对象转化为JSON对象
var jsons = [maining_articleJSON1,maining_articleJSON2,maining_articleJSON3,
				maining_articleJSON4,maining_articleJSON5,maining_articleJSON6,maining_articleJSON7,
				maining_articleJSON8,maining_articleJSON9,maining_articleJSON10];
var strJson = JSON.stringify(jsons);
var lisJson = JSON.parse(strJson);

//标签堆在要实现的地方
var box = document.querySelector(".maining_right .article");

//遍历JSON对象里面的对象参数
for (var i = 0; i < lisJson.length; i++) {
	var json_li = document.createElement("li");
	
	var json_li_h5 = document.createElement("h5");
	var json_li_h5_a = document.createElement("a");
	json_li_h5_a.href = lisJson[i].titlesrc;
	json_li_h5_a.target = "_blank";
	json_li_h5_a.innerText = lisJson[i].title;
	
	json_li_h5.appendChild(json_li_h5_a);
	
	var json_li_p = document.createElement("p");
	
	var json_li_p_a = document.createElement("a");
	json_li_p_a.href = lisJson[i].usersrc;
	json_li_p_a.target = "_blank";
	json_li_p_a.innerText = lisJson[i].name;
	var json_li_p_i = document.createElement("i");
	json_li_p_i.className = "iconfont";
	json_li_p_i.innerHTML = leaf_iconfont + lisJson[i].person;
	
	json_li_p.appendChild(json_li_p_a);
	json_li_p.appendChild(json_li_p_i);
	
	json_li.appendChild(json_li_h5);
	json_li.appendChild(json_li_p);
	
	box.appendChild(json_li);
}