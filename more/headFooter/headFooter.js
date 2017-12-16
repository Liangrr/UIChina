
//在title下面粘贴：
//<link rel="stylesheet" type="text/css" href="headFooter/headFooter.css"/>

//在body下面粘贴：
//<script src="headFooter/headFooter.js" type="text/javascript"></script>

createHead("header");
createFooter("footer");
createSuspend();

function createHead(box){
	var header = document.querySelector(box);
	
	var box = document.createElement("div");
	box.className = "box";
	var head = document.createElement("div");
	head.className = "head";
	var a_UI = document.createElement("a");
	a_UI.className = "iconfont";
	a_UI.href = "#";
	a_UI.innerHTML = "&#xe607;";
	head.appendChild(a_UI);
	
	var ul_nav = document.createElement("ul");
	ul_nav.className = "nav"
	
	var li_head = document.createElement("li");
	var a_head = document.createElement("a");
	a_head.className = "iconfont";
	a_head.href = "../../index/uiChina.html";
	a_head.innerText = "首页";
	li_head.appendChild(a_head);
	
	var li_find = document.createElement("li");
	li_find.id = "find"
	var a_find = document.createElement("a");
	a_find.href = "#";
	a_find.innerText = "发现";
	var i_find = document.createElement("i");
	i_find.innerHTML = "&#xe501;";
	i_find.className = "iconfont";
	a_find.appendChild(i_find);
	li_find.appendChild(a_find);
	
	var li_learning = document.createElement("li");
	li_learning.id = "learning"
	var a_learning = document.createElement("a");
	a_learning.href = "#";
	a_learning.innerText = "学习";
	var i_learning = document.createElement("i");
	i_learning.innerHTML = "&#xe501;";
	i_learning.className = "iconfont";
	a_learning.appendChild(i_learning);
	li_learning.appendChild(a_learning);
	
	var li_training = document.createElement("li");
	li_training.id = "training"
	var a_training = document.createElement("a");
	a_training.href = "#";
	a_training.innerText = "培训";
	var i_training = document.createElement("i");
	i_training.innerHTML = "&#xe501;";
	i_training.className = "iconfont";
	a_training.appendChild(i_training);
	li_training.appendChild(a_training);
	
	var li_camp = document.createElement("li");
	var a_camp = document.createElement("a");
	a_camp.target = "_blank";
	a_camp.href = "#";
	a_camp.innerText = "训练营";
	li_camp.appendChild(a_camp);
	
	var li_recruit = document.createElement("li");
	var a_recruit = document.createElement("a");
	a_recruit.target = "_blank";
	a_recruit.href = "../../recruit/recruit.html";
	a_recruit.innerText = "招聘";
	li_recruit.appendChild(a_recruit);
//	
	var li_more = document.createElement("li");
	li_more.id = "more"
	var a_more = document.createElement("a");
	a_more.href = "#";
	a_more.innerText = "更多";
	var i_more = document.createElement("i");
	i_more.innerHTML = "&#xe501;";
	i_more.className = "iconfont";
	a_more.appendChild(i_more);
	li_more.appendChild(a_more);
	
	ul_nav.appendChild(li_head);
	ul_nav.appendChild(li_find);
	ul_nav.appendChild(li_learning);
	ul_nav.appendChild(li_training);
	ul_nav.appendChild(li_camp);
	ul_nav.appendChild(li_recruit);
	ul_nav.appendChild(li_more);
	head.appendChild(ul_nav);
	
	var menu = document.createElement("div");
	menu.className = "menu";
	
	var ul_find = document.createElement("ul");
	ul_find.className = "find";
	ul_find.style.zIndex = "10";
	var li_find01 = document.createElement("li");
	var a_find01 = document.createElement("a");
	a_find01.href = "#";
	a_find01.innerText = "作品";
	li_find01.appendChild(a_find01);
	var li_find02 = document.createElement("li");
	var a_find02 = document.createElement("a");
	a_find02.href = "#";
	a_find02.innerText = "文章";
	li_find02.appendChild(a_find02);
	var li_find03 = document.createElement("li");
	var a_find03 = document.createElement("a");
	a_find03.href = "#";
	a_find03.innerText = "线下活动";
	li_find03.appendChild(a_find03);
	var li_find04 = document.createElement("li");
	var a_find04 = document.createElement("a");
	a_find04.href = "#";
	a_find04.innerText = "设计大赛";
	li_find04.appendChild(a_find04);
	ul_find.appendChild(li_find01);
	ul_find.appendChild(li_find02);
	ul_find.appendChild(li_find03);
	ul_find.appendChild(li_find04);
	
	var ul_learning = document.createElement("ul");
	ul_learning.className = "learning";
	ul_learning.style.zIndex = "10";
	var li_learning01 = document.createElement("li");
	var a_learning01 = document.createElement("a");
	a_learning01.href = "#";
	a_learning01.innerText = "教程";
	li_learning01.appendChild(a_learning01);
	var li_learning02 = document.createElement("li");
	var a_learning02 = document.createElement("a");
	a_learning02.href = "#";
	a_learning02.innerText = "专题";
	li_learning02.appendChild(a_learning02);
	var li_learning03 = document.createElement("li");
	var a_learning03 = document.createElement("a");
	a_learning03.href = "#";
	a_learning03.innerText = "书籍";
	li_learning03.appendChild(a_learning03);
	var li_learning04 = document.createElement("li");
	var a_learning04 = document.createElement("a");
	a_learning04.href = "#";
	a_learning04.innerText = "UTalk";
	li_learning04.appendChild(a_learning04);
	var li_learning05 = document.createElement("li");
	var a_learning05 = document.createElement("a");
	a_learning05.href = "#";
	a_learning05.innerText = "每周临摹";
	li_learning05.appendChild(a_learning05);
	ul_learning.appendChild(li_learning01);
	ul_learning.appendChild(li_learning02);
	ul_learning.appendChild(li_learning03);
	ul_learning.appendChild(li_learning04);
	ul_learning.appendChild(li_learning05);
	
	var ul_training = document.createElement("ul");
	ul_training.className = "training";
	ul_training.style.zIndex = "10";
	var li_training01 = document.createElement("li");
	var a_training01 = document.createElement("a");
	a_training01.target = "_blank";
	a_training01.href = "../../train/train.html";
	a_training01.innerText = "线下培训";
	li_training01.appendChild(a_training01);
	var li_training02 = document.createElement("li");
	var a_training02 = document.createElement("a");
	a_training02.target = "_blank";
	a_training02.href = "../../train/train.html";
	a_training02.innerText = "在线课程";
	li_training02.appendChild(a_training02);
	li_training02.appendChild(a_training02);
	ul_training.appendChild(li_training01);
	ul_training.appendChild(li_training02);
	
	var ul_more = document.createElement("ul");
	ul_more.className = "more";
	ul_more.style.zIndex = "10";
	var li_more01 = document.createElement("li");
	var a_more01 = document.createElement("a");
	a_more01.href = "../topic/topic.html";
	a_more01.innerText = "话题";
	li_more01.appendChild(a_more01);
	var li_more02 = document.createElement("li");
	var a_more02 = document.createElement("a");
	a_more02.href = "#";
	a_more02.innerText = "竞赛";
	li_more02.appendChild(a_more02);
	var li_more03 = document.createElement("li");
	var a_more03 = document.createElement("a");
	a_more03.href = "../inspiration/inspiration.html";
	a_more03.innerText = "灵感";
	li_more03.appendChild(a_more03);
	var li_more04 = document.createElement("li");
	var a_more04 = document.createElement("a");
	a_more04.href = "../font/font.html";
	a_more04.innerText = "字库";
	li_more04.appendChild(a_more04);
	var li_more05 = document.createElement("li");
	var a_more05 = document.createElement("a");
	a_more05.href = "#";
	a_more05.innerText = "工具";
	li_more05.appendChild(a_more05);
	var li_more06 = document.createElement("li");
	var a_more06 = document.createElement("a");
	a_more06.href = "#";
	a_more06.innerText = "主题学院";
	li_more06.appendChild(a_more06);
	ul_more.appendChild(li_more01);
	ul_more.appendChild(li_more02);
	ul_more.appendChild(li_more03);
	ul_more.appendChild(li_more04);
	ul_more.appendChild(li_more05);
	ul_more.appendChild(li_more06);
	
	menu.appendChild(ul_find);
	menu.appendChild(ul_learning);
	menu.appendChild(ul_training);
	menu.appendChild(ul_more)
	head.appendChild(menu);
	
	var right_span = document.createElement("span");
	right_span.className = "head_right";
	var right_search = document.createElement("a");
	right_search.href = "#";
	right_search.className = "iconfont";
	right_search.innerHTML =  "&#xe960";
	var right_upload = document.createElement("a");
	right_upload.href = "#";
	right_upload.className = "iconfont";
	right_upload.innerHTML = "&#xe79c;";
	var right_log = document.createElement("a");
	right_log.href = "#";
	right_log.className = "iconfont";
	right_log.innerHTML = "&#xe6a2;";
	var span_log = document.createElement("span");
	span_log.innerText = "登录";
	right_log.appendChild(span_log);
	
	right_span.appendChild(right_search);
	right_span.appendChild(right_upload);
	right_span.appendChild(right_log);
	head.appendChild(right_span);
	
	box.appendChild(head);
	header.appendChild(box);
	
	
	
	
		var find = document.querySelector("#find");
		var learning = document.querySelector("#learning");
		var training = document.querySelector("#training");
		var more = document.querySelector("#more");
		
		find.addEventListener("mousemove",findMove);
		find.addEventListener("mouseleave",findLeave);
		ul_find.addEventListener("mousemove",findMove);
		ul_find.addEventListener("mouseleave",findLeave);
		
		learning.addEventListener("mousemove",learningMove);
		learning.addEventListener("mouseleave",learningLeave);
		ul_learning.addEventListener("mousemove",learningMove);
		ul_learning.addEventListener("mouseleave",learningLeave);
		
		training.addEventListener("mousemove",trainingMove);
		training.addEventListener("mouseleave",trainingLeave);
		ul_training.addEventListener("mousemove",trainingMove);
		ul_training.addEventListener("mouseleave",trainingLeave);
		
		more.addEventListener("mousemove",moreMove);
		more.addEventListener("mouseleave",moreLeave);
		ul_more.addEventListener("mousemove",moreMove);
		ul_more.addEventListener("mouseleave",moreLeave);
		
		function findMove(){
			ul_find.style.display = "block";
			find.style.boxShadow = "0px 0px 1px #bac1c9";
			find.style.backgroundColor = "#ffffff";
			find.style.borderTop = "3px solid #3498db";
		}
		function findLeave(){
			ul_find.style.display = "none";
			find.style.boxShadow = "none";
			find.style.backgroundColor = "#ffffff";
			find.style.borderTop = "3px solid rgba(0,0,0,0)";
		}
		function learningMove(){
			ul_learning.style.display = "block";
			learning.style.boxShadow = "0px 0px 1px #bac1c9";
			learning.style.backgroundColor = "#ffffff";
			learning.style.borderTop = "3px solid #3498db";
		}
		function learningLeave(){
			ul_learning.style.display = "none";
			learning.style.boxShadow = "none";
			learning.style.backgroundColor = "#ffffff";
			learning.style.borderTop = "3px solid rgba(0,0,0,0)";
		}
		function trainingMove(){
			ul_training.style.display = "block";
			training.style.boxShadow = "0px 0px 1px #bac1c9";
			training.style.backgroundColor = "#ffffff";
			training.style.borderTop = "3px solid #3498db";
		}
		function trainingLeave(){
			ul_training.style.display = "none";
			training.style.boxShadow = "none";
			training.style.backgroundColor = "#ffffff";
			training.style.borderTop = "3px solid rgba(0,0,0,0)";
		}
		function moreMove(){
			ul_more.style.display = "block";
			more.style.boxShadow = "0px 0px 1px #bac1c9";
			more.style.backgroundColor = "#ffffff";
			more.style.borderTop = "3px solid #3498db";
		}
		function moreLeave(){
			ul_more.style.display = "none";
			more.style.boxShadow = "none";
			more.style.backgroundColor = "#ffffff";
			more.style.borderTop = "3px solid rgba(0,0,0,0)";
		}
}

function createFooter(box){
	var footer = document.querySelector(box);
	
	var box = document.createElement("div");
	box.className = "footer";
	var footer_content = document.createElement("div");
	footer_content.className = "footer_content";
	
	var footer_content_img = document.createElement("img");
	footer_content_img.src = "../headFooter/ft-wx90.png";
	
	var i_ui = document.createElement("i");
	i_ui.className = "iconfont";
	i_ui.innerHTML = "&#xe607;";
	
	var container = document.createElement("div");
	container.className = "container";
	var ul = document.createElement("ul");
	var li01 = document.createElement("li");
	li01.innerText = "商务合作";
	var li02 = document.createElement("li");
	li02.innerText = "意见反馈";
	var li03 = document.createElement("li");
	li03.innerText = "关于我们";
	var li04 = document.createElement("li");
	li04.innerText = "联系我们";
	var li05 = document.createElement("li");
	li05.innerText = "版权声明";
	var li06 = document.createElement("li");
	li06.innerText = "官方QQ群";
	ul.appendChild(li01);
	ul.appendChild(li02);
	ul.appendChild(li03);
	ul.appendChild(li04);
	ul.appendChild(li05);
	ul.appendChild(li06);
	container.appendChild(ul);
	
	var p = document.createElement("p");
	p.innerText = "京ICP备14007358号-1 / 京公网安备11010802014104号 / Powered by 2008-2018 UI.CN";
	container.appendChild(p);
	
	var share_a = document.createElement("div");
	share_a.className = "share_a";
	var a01 = document.createElement("a");
	a01.href = "#";
	var i01 = document.createElement("i");
	i01.className = "iconfont";
	i01.innerHTML = "&#xe608;";
	var img01 = document.createElement("img");
	img01.src = "../headFooter/ft-wx150.png";
	a01.appendChild(img01);
	a01.appendChild(i01);
	var a02 = document.createElement("a");
	a02.href = "#";
	var i02 = document.createElement("i");
	i02.className = "iconfont";
	i02.innerHTML = "&#xe6f6;";
	a02.appendChild(i02);
	var a03 = document.createElement("a");
	a03.href = "#";
	var i03 = document.createElement("i");
	i03.className = "iconfont";
	i03.innerHTML = "&#xe689;";
	a03.appendChild(i03);
	var a04 = document.createElement("a");
	a04.href = "#";
	var p_a04 = document.createElement("p");
	p_a04.innerText = "安全联盟认证";
	var img_a04 = document.createElement("img");
	img_a04.src = "../headFooter/hy_83x30.png";
	a04.appendChild(p_a04);
	a04.appendChild(img_a04);
	var a05 = document.createElement("a");
	a05.href = "#";
	var img_a05 = document.createElement("img");
	img_a05.src = "../headFooter/cnnic.png";
	a05.appendChild(img_a05);
	
	share_a.appendChild(a01);
	share_a.appendChild(a02);
	share_a.appendChild(a03);
	share_a.appendChild(a04);
	share_a.appendChild(a05);
	container.appendChild(share_a);
	
	footer_content.appendChild(i_ui);
	footer_content.appendChild(container);
	footer_content.appendChild(footer_content_img);
	
	box.appendChild(footer_content);
	footer.appendChild(box);
}

function createSuspend(){
	var li_list = [];
	var a_list = [];
	
	var body = document.querySelector("body");
	var suspend = document.createElement("ul");
	suspend.style.width = "48px";
	suspend.style.height = "140px";
	suspend.style.position = "fixed";
	suspend.style.bottom = "80px";
	suspend.style.right = "50px";
	var li_place = document.createElement("li");
	li_list[1]=li_place;
	var a_place = document.createElement("a");
	a_list[1]=a_place;
	a_place.innerHTML = "&#xe63b;";
	a_place.style.fontSize = "30px";
	li_place.appendChild(a_place);
	var li_qq = document.createElement("li");
	li_list[2]=li_qq;
	var a_qq = document.createElement("a");
	a_list[2]=a_qq;
	a_qq.innerHTML = "&#xe63d;";
	a_qq.style.fontSize = "30px";
	li_qq.appendChild(a_qq);
	var li_couple = document.createElement("li");
	li_list[3]=li_couple;
	var a_couple = document.createElement("a");
	a_list[3]=a_couple;
	a_couple.innerHTML = "反馈";
	a_couple.style.fontSize = "15px";
	li_couple.appendChild(a_couple);
	
	for (var i = 1; i < li_list.length; i++) {
		if(i<li_list.length-1){
			li_list[i].style.marginBottom = "10px";
		}
		li_list[i].style.width = "48px";
		li_list[i].style.height = "40px";
		li_list[i].style.listStyle = "none";
		li_list[i].style.backgroundColor = "rgba(150,150,150,0.4)";
	}
	for (var i = 1; i < a_list.length; i++) {
		a_list[i].href = "#";
		a_list[i].className = "iconfont";
		a_list[i].style.display = "block";
		a_list[i].style.width = "48px";
		a_list[i].style.height = "40px";
		a_list[i].style.textAlign = "center";
		a_list[i].style.lineHeight = "40px";
		a_list[i].style.color = "white";
		a_list[i].addEventListener("mousemove",function(e){
			this.style.color = "#3498db";
		});
		a_list[i].addEventListener("mouseleave",function(e){
			this.style.color = "white";
		});
	}
	
	suspend.appendChild(li_place);
	suspend.appendChild(li_qq);
	suspend.appendChild(li_couple);
	
	body.appendChild(suspend);
}
