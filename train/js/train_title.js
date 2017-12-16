		//课程介绍
		var ul = document.createElement("ul");
		
		var h3= document.createElement("h3");
		//课程右边标题加文档加简介
		var div02 = document.createElement("div");
	
		var img = document.createElement("img");
		//整个课程的盒子
		var div01 = document.createElement("div");
		//多个 （整个课程的盒子） 包起来
		var container = document.querySelector("section>.train_section_lesson_left");
		
		
		h3.innerText="Ui/UE设计高级研修班（周末）";
		h3.style.padding="25px 0px 15px 10px";
		div02.appendChild(h3);
		
		var arr_li=["上海","周末班","小班","项目小组式实训"];
		
		for (var i = 0; i < arr_li.length; i++) {
			var li = document.createElement("li");
			
			li.style.listStyle="none";
			li.style.float="left";
			li.style.padding = "5px";
			li.style.margin = "0px 10px 0px 10px";
			li.style.border="1px solid black";
			li.innerText=arr_li[i];
			
			ul.appendChild(li);
		}
		
		div02.appendChild(ul);
		
		var arr_span = ["UEgood课堂","4788","UI中国会员充值50元再抵500元学费"];
		
		for(var j=0;j<arr_span.length;j++){
			var span = document.createElement("span");
			
			span.style.clear="both";
			span.style.display="block";
			span.style.textAlign="center";
			span.style.height="15px";
			span.style.lineHeight="15px";
			span.style.margin="0px 10px 0px 10px";
			span.style.padding="10px 0px 10px 0px";
			span.style.width="100px";
			span.innerText= arr_span[j];
			if(j==2){
				span.style.width="260px";
			}
			div02.appendChild(span);
			
		}
		
		img.src="img/1736.jpg";
		img.style.padding="20px 0px 0px 20px";
		
		div01.style.position="absolute";
		div01.style.width="600px";
		div01.style.height="180px";
		div01.style.border="2px solid white";
		
		div02.style.position="absolute";
		div02.style.left="210px";
		div02.style.top="0px";
		div02.style.width="390px";
		div02.style.height="180px";
		
		div01.appendChild(img);
		div01.appendChild(div02);
		//一个完整的课程标价
        container.appendChild(div01);
        //克隆课程
		container.appendChild(div01.cloneNode(true));        
		container.appendChild(div01.cloneNode(true));        
		container.appendChild(div01.cloneNode(true));        
		container.appendChild(div01.cloneNode(true));        
		container.appendChild(div01.cloneNode(true));
 
