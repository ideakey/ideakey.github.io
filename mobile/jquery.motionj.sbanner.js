/**
*
* width : 배너의 너비
* height : 배너 이미지 높이
* speed : 슬라이딩 속도 1000 당 1초.
* delay : 딜레이 시간.
* pause : true 인 경우 자동 모션이 진행 않됨.
**/

(function($){
	$.fn.motionj_slide_banner = function(o){
		o = $.extend({
			width : 640,
			height: 303,
			speed : 300,
			delay : 2000,
			image : './images/',
			pause : false
		}, o || {});

		return this.each(function(){
			var e = $(this);
			var no = 0;
			var dot_over = false;
			var tmpImg;
			var count = e.find('ul li').length - 1;
			if(count < 1) return;

			var dot;
			for(var i=0;i<=count;i++){
				dot += '<img src="'+o.image+'dot_off.gif" alt="" />';
			};
			$('<p></p>').appendTo(e);
			var p = e.find('p');
			$(dot).appendTo(p);

			e.css({position:'relative',width:o.width,height:(o.height+0)});
			e.find('ul').css({position:'absolute',top:0,left:0,width:o.width, height:o.height,overflow:'hidden'});
			e.find('ul li').css({position:'absolute',top:0,left:0});
			e.find('p').css({position:'absolute',top:(o.height-33),left:0,width:'100%',height:'7px','text-align':'center'});
			e.find('p img').css({margin:'0 4px',cursor:'pointer','vertical-align':'top'});

			e.find('ul li:eq('+no+')').siblings('li').css('left',o.width+'px');

			tmpImg = e.find('p img:first').attr('src');
			e.find('p img:first').attr('src',tmpImg.replace('off.gif','on.gif'));

			e.mouseover(function(){dot_over = true;});
			e.mouseleave(function(){dot_over = false;});

			e.find('p img').each(function(i){
				$(this).click(function(){
					if(no != i){
						e.find('ul li:eq('+i+')').animate({left:0}, {duration: o.speed/2});
						e.find('ul li:eq('+no+')').animate({left:-o.width}, {duration: o.speed/2, complete : function(){
							e.find('ul li:eq('+i+')').siblings().css('left',o.width);
						}});
						tmpImg = e.find('p img:eq('+i+')').attr('src');
						e.find('p img:eq('+i+')').attr('src',tmpImg.replace('off.gif','on.gif'));
						tmpImg = e.find('p img:eq('+(no)+')').attr('src');
						e.find('p img:eq('+no+')').attr('src',tmpImg.replace('on.gif','off.gif'));
						no = i;
					};
				});
			});

			var act = function(){
				if(!dot_over){
					if(no === count){
						e.find('ul li:eq('+no+')').animate({left:-o.width}, {duration: o.speed});
						e.find('ul li:first').animate({left:0},{duration: o.speed, complete:function(){
							e.find('ul li:eq('+no+')').siblings().css('left',o.width);
						}});
						no = 0;
					}else{
						e.find('ul li:eq('+no+')').animate({left:-o.width}, {duration: o.speed}).next().animate({left:0},{duration: o.speed, complete:function(){
							e.find('ul li:eq('+no+')').siblings().css('left',o.width);
						}});
						no = no + 1;
					};
					if(no === 0){
						tmpImg = e.find('p img:eq('+no+')').attr('src');
						e.find('p img:eq('+no+')').attr('src',tmpImg.replace('off.gif','on.gif'));
						tmpImg = e.find('p img:last').attr('src');
						e.find('p img:last').attr('src',tmpImg.replace('on.gif','off.gif'));
					}else{
						tmpImg = e.find('p img:eq('+no+')').attr('src');
						e.find('p img:eq('+no+')').attr('src',tmpImg.replace('off.gif','on.gif'));
						tmpImg = e.find('p img:eq('+(no-1)+')').attr('src');
						e.find('p img:eq('+(no-1)+')').attr('src',tmpImg.replace('on.gif','off.gif'));
					};
				};
			};
			if(!o.pause){
				setInterval(act, o.delay);
			};
		});
	};
})(jQuery);