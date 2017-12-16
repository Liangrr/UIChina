var imgSrc = "";
var people01 = {
	imgPath:imgSrc+"1.60x60.png",
	a_text:"UI中国管理员-小U妹",
	introduce_text:"我是UI中国管理员，也是大家的小秘书，叫我小U妹~",
	comment_text:"发表了682个评论"
};

var people02 = {
	imgPath:imgSrc+"199809.jpg",
	a_text:"hsher",
	introduce_text:"ui.cn 汤汤君~~",
	comment_text:"发表了386个评论"
};

var people03 = {
	imgPath:imgSrc+"205929.jpg",
	a_text:"qmyaiu",
	introduce_text:"偶尔一口毒鸡汤~~",
	comment_text:"发表了323个评论"
};

var people04 = {
	imgPath:imgSrc+"276080.jpg",
	a_text:"零八二七丶",
	introduce_text:"挣扎在这生存洪流中的小浪花一枚",
	comment_text:"发表了190个评论"
};

var people05 = {
	imgPath:imgSrc+"76465.jpg",
	a_text:"artisan",
	introduce_text:"UI中国巡查小民警",
	comment_text:"发表了177个评论"
};

var people06 = {
	imgPath:imgSrc+"252745.jpg",
	a_text:"原来是肚脐爸爸",
	introduce_text:"爸爸是谁你没必要知道，维护世界的",
	comment_text:"发表了164个评论"
};

var people07 = {
	imgPath:imgSrc+"2.60x60.png",
	a_text:"iconsbox",
	introduce_text:"成功的故事都是成功后写出来的",
	comment_text:"发表了145个评论"
};

var people08 = {
	imgPath:imgSrc+"194628.jpg",
	a_text:"橘子Boy",
	introduce_text:"不入流的菜鸟设计工。",
	comment_text:"发表了122个评论"
};

var peopleS = [people01,people02,people03,people04,people05,people06,people07,people08];
var peopleStr = JSON.stringify(peopleS);

var peopleJsonS = JSON.parse(peopleStr);
var peopleBox = document.querySelector(".people_ul");
for (var i = 0; i < peopleS.length; i++) {
	var li = document.createElement("li");
	var img = document.createElement("img");
	var a = document.createElement("a");
	var p_introduce = document.createElement("p");
	var p_comment = document.createElement("p");
	
	img.src = peopleJsonS[i].imgPath;
	a.innerText = peopleJsonS[i].a_text;
	a.href = "#";
	p_introduce.innerText = peopleJsonS[i].introduce_text;
	p_comment.innerText = peopleJsonS[i].comment_text;
	
	li.appendChild(img);
	li.appendChild(a);
	li.appendChild(p_introduce);
	li.appendChild(p_comment);
	
	peopleBox.appendChild(li);
}


//topic  话题
var topic01 = {
	repli:"10回复",
	h3_con:{
		place:"置顶",
		title:"吐槽UI中国产品经理，求轻虐！"
	},
	info:{
		name:"UI产品_小U弟",
		time:"12-11发布",
		browse:"346浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"大家好，我是UI中国的产品经理小U弟，央求小U妹好久才答应让我出来浪！本着有错就改，有优点就发扬光大的原则，小U弟在这里想问问大家:你们认为UI中国网站哪里存在什么问题，对UI中国有什么建议吗？真诚的.... 展开"
};
var topic02 = {
	repli:"189回复",
	h3_con:{
		place:"置顶",
		title:"学习设计，从懂点设计开始"
	},
	info:{
		name:"UI中国管理员-小U妹",
		time:"7-19发布",
		browse:"70854浏览",
		share:"分享到微博",
		report:"举报 2"
	},
	p_text:"各位UI中国的小伙伴，大家好。感谢大家长久以来对UI中国的支持，为了帮助设计师更轻松地学设计，更好地成长，解答设计学习和工作中的困惑，7月24日，UI中国全新的设计知识服务《懂点设计》发布啦！ #主题.... 展开"
};

var topic03 = {
	repli:"7回复",
	h3_con:{
		place:"",
		title:"UI中国首页banner对设计师开放申请啦！"
	},
	info:{
		name:"UI中国管理员-小U妹",
		time:"12-12发布",
		browse:"113浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"亲爱的胖友们，你想让自己的作品出现在首页banner吗？吸引更多粉丝，获取更多关注，还可以拍照发票圈留（zhuang）念（bi）～UI中国首页banner现在对设计师开放申请啦！只要你的作品被首页推荐.... 展开"
};
var topic04 = {
	repli:"0回复",
	h3_con:{
		place:"",
		title:"【每日一条】复原力，就是生活中遇到很多艰难时刻，能够重整旗鼓，也叫韧性~"
	},
	info:{
		name:"hsher",
		time:"12-12发布",
		browse:"25浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"复原力，就是生活中遇到很多艰难时刻，能够重整旗鼓，也叫韧性~"
};
var topic05 = {
	repli:"2回复",
	h3_con:{
		place:"",
		title:"【每日一条】有的时候我宁愿相信，人生的诸多不顺，只是因为最适合你的那条路尚未出现。BY《北京折叠》"
	},
	info:{
		name:"hsher",
		time:"12-11发布",
		browse:"137浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"有的时候我宁愿相信，人生的诸多不顺，只是因为最适合你的那条路尚未出现。BY《北京折叠》"
};
var topic06 = {
	repli:"7回复",
	h3_con:{
		place:"",
		title:"UI中国首页banner对设计师开放申请啦！"
	},
	info:{
		name:"UI中国管理员-小U妹 ",
		time:"12-12发布",
		browse:"113浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"亲爱的胖友们，你想让自己的作品出现在首页banner吗？吸引更多粉丝，获取更多关注，还可以拍照发票圈留（zhuang）念（bi）～UI中国首页banner现在对设计师开放申请啦！只要你的作品被首页推荐.... 展开"
};
var topic07 = {
	repli:"2回复",
	h3_con:{
		place:"",
		title:"【每日一条】一候鹖鴠不鸣；二候虎始交；三候荔挺出。今日大雪~"
	},
	info:{
		name:"hsher",
		time:"12-7发布",
		browse:"122浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"一候鹖鴠不鸣；二候虎始交；三候荔挺出。今日大雪~"
};
var topic08 = {
	repli:"2回复",
	h3_con:{
		place:"",
		title:"【每日一条】你认真享受的所有时间，都不是浪费。BY约翰·列侬~"
	},
	info:{
		name:"hsher",
		time:"12-8发布",
		browse:"149浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"你认真享受的所有时间，都不是浪费。BY约翰·列侬~"
};
var topic09 = {
	repli:"2回复",
	h3_con:{
		place:"",
		title:"【每日一条】有的时候我宁愿相信，人生的诸多不顺，只是因为最适合你的那条路尚未出现。BY《北京折叠》"
	},
	info:{
		name:"hsher",
		time:"12-11发布",
		browse:"137浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"有的时候我宁愿相信，人生的诸多不顺，只是因为最适合你的那条路尚未出现。BY《北京折叠》"
};
var topic10 = {
	repli:"1回复",
	h3_con:{
		place:"",
		title:"【每日一条】优于别人，并不高贵，真正的高贵应该是优于过去的自已.BYEMH~"
	},
	info:{
		name:"hsher",
		time:"12-6发布",
		browse:"151浏览",
		share:"分享到微博",
		report:"举报 0"
	},
	p_text:"优于别人，并不高贵，真正的高贵应该是优于过去的自已.BYEMH~"
};

var topicS = [topic01,topic02,topic03,topic04,topic05,topic06,topic07,topic08,topic09,topic10];

var topicStr = JSON.stringify(topicS);
var topicJsonS = JSON.parse(topicStr);

var topicBox = document.querySelector(".topic_ul");
for (var i = 0; i < topicJsonS.length; i++) {
	var li = document.createElement("li");
	var repli_span = document.createElement("span");
	var repli_a = document.createElement("a");
	var li_cont_div = document.createElement("div");
	var h3 = document.createElement("h3");
	var place_span = document.createElement("span");
	var title_a = document.createElement("a");
	var info_div = document.createElement("div");
	var name_a = document.createElement("a");
	var time_span = document.createElement("span");
	var browse_span = document.createElement("span");
	var share_span = document.createElement("span");
	var share_a = document.createElement("a");
	var report_span = document.createElement("span");
	var report_a = document.createElement("a");
	var p = document.createElement("p");
	
	if(topicJsonS[i].repli=="0回复"){
		repli_a.style.color = "#FFFFFF"
		repli_span.style.backgroundColor = "#3498db";
	}
	repli_a.innerText = topicJsonS[i].repli;
	repli_a.href = "#";
	repli_span.appendChild(repli_a);
	
	place_span.innerText = topicJsonS[i].h3_con.place;
	title_a.href = "#";
	title_a.innerText = topicJsonS[i].h3_con.title;
	if(topicJsonS[i].h3_con.place!=""){
		h3.appendChild(place_span);
	}
	h3.appendChild(title_a);
	
	name_a.href = "#";
	name_a.innerText = topicJsonS[i].info.name;
	time_span.innerText = topicJsonS[i].info.time;
	browse_span.innerText = topicJsonS[i].info.browse;
	share_a.href = "#";
	share_a.innerText = topicJsonS[i].info.share;
	report_a.href = "#";
	report_a.innerText = topicJsonS[i].info.report;
	share_span.appendChild(share_a);
	report_span.appendChild(report_a);
	info_div.className = "info";
	info_div.appendChild(name_a);
	info_div.appendChild(time_span);
	info_div.appendChild(browse_span);
	info_div.appendChild(share_span);
	info_div.appendChild(report_span);
	
	p.innerText = topicJsonS[i].p_text;
	
	li_cont_div.className = "li_cont";
	li_cont_div.appendChild(h3);
	li_cont_div.appendChild(info_div);
	li_cont_div.appendChild(p);
	
	li.appendChild(repli_span);
	li.appendChild(li_cont_div);
	
	topicBox.appendChild(li);
	/*							<h3>
									<span>置顶</span>
									<a href="#">吐槽UI中国产品经理，求轻虐！</a>
								</h3>
								<div class="info">
									<a href="#">UI产品_小U弟</a>
									<span>12-11发布</span>
									<span>346浏览</span>
									<span><a href="#">分享到微博</a></span>
									<span><a href="#">举报 0</a></span>
								</div>
								<p>*/
}