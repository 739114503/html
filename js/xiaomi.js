$(function(){
	var bannerimg=$(".tupian img");
	var anniu=$(".banner-right li");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=bannerimg.length){
				index=0;
			}
		}else if(type=="l"){
			index--;
			if(index<=-1){
				index=bannerimg.length-1;
			}
		}
		bannerimg.hide();
		bannerimg.eq(index).fadeIn();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"});
		anniu.eq(index).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
	}
	var t=setInterval(function(){
		demo("r");
	},2000);

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			demo("r");
		},2000);
	})

	$(".bannerbtnleft").click(function(){
		demo("l");
	})
	$(".bannerbtnright").click(function(){
		demo("r");
	})
	anniu.hover(function(){
		var now=$(this).index();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"})
        $(this).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
        bannerimg.hide();
        bannerimg.eq(now).fadeIn();
        index=now;
	},function(){

	})

	/*菜单*/
	$(".yiji").hover(function(){
		$(".erji").stop();
		$(this).find(".erji").show();
	},function(){
		$(".erji").stop();
		$(this).find(".erji").hide();
	})

	/*banner-left*/
	$(".yis").hover(function(){
		$(this).find(".ers").show();
	},function(){
		$(this).find(".ers").hide();
	})
})