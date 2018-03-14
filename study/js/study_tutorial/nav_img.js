var navimg_src = "img/study_tutorial/nav_img/"
var navimgJSON1 = {
	navimg: navimg_src + "1.jpg",
	//图片超链接
	//a_herf: "http://www.baidu.com",
};
var navimgJSON2 = {
	navimg: navimg_src + "2.jpg"
	//a_herf: "http://www.baidu.com",
};
var navimgJSON3 = {
	navimg: navimg_src + "3.png"
	//a_herf: "http://www.baidu.com",
};
var navimgJSON4 = {
	navimg: navimg_src + "4.png"
	//a_herf: "http://www.baidu.com",
};
var navimgJSON5 = {
//	color: "#6c7981",
	text: "更多专题",
	iconf: "&#xe607;"
};
//把对象转化为JSON对象
var jsons = [navimgJSON1, navimgJSON2, navimgJSON3, navimgJSON4, navimgJSON5];
var strJson = JSON.stringify(jsons);
var lisJson = JSON.parse(strJson);
//标签堆在要实现的地方
var box = document.querySelector(".nav .nav_Img");

//遍历JSON对象里面的对象参数
for (var i = 0; i < lisJson.length; i++) {

	if (i == lisJson.length - 1) {
		var nav_morediv = document.createElement("div");
//		nav_morediv.style.backgroundColor = lisJson[i].color;
		
		var navimg_a = document.createElement("a");
		//图片外嵌套a的超链接
//		navimg_a.href = lisJson[i].a_herf;
//		navimg_a.style.backgroundColor = lisJson[i].color;
		
		var navp = document.createElement("p");
		navp.innerText = lisJson[i].text;

		var naviconf = document.createElement("i");
		naviconf.innerHTML = lisJson[i].iconf;
		naviconf.className = "iconfont2";

		navimg_a.appendChild(navp);
		navimg_a.appendChild(naviconf);
		
		nav_morediv.appendChild(navimg_a);
		box.appendChild(nav_morediv);
	} else {
		var nav_div = document.createElement("div");

		var navimg_a = document.createElement("a");
		//图片外嵌套a的超链接
//		navimg_a.href = lisJson[i].a_herf;
		navimg_a.style.cursor = "pointer";
		
		var navimg = document.createElement("img");
		navimg.src = lisJson[i].navimg;
		
		navimg_a.appendChild(navimg);

		nav_div.appendChild(navimg_a);
		box.appendChild(nav_div);
	}
}