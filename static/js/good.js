function stopTouchendPropagationAfterScroll(){
    var flag = false;
    window.addEventListener('touchmove', function(ev){
        flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    }, false);
    function stopTouchendPropagation(ev){
        ev.stopPropagation();
        setTimeout(function(){
            window.removeEventListener('touchend', stopTouchendPropagation, true);
            flag = false;
        }, 50);
    }
}
$(function(){
	stopTouchendPropagationAfterScroll();
	/*
	加入好家
	*/
	//点击备孕中
	$("#preparePregnant").on("touchend",function(event){
		$(this).addClass("stateSelected");
		$("#isPregnant , #babyWasBron , #other").removeClass("stateSelected");
		$(".babyBirthday , .babySex").hide();
	});
	//点击已怀孕
	$("#isPregnant").on("touchend",function(event){
		$(this).addClass("stateSelected");
		$("#preparePregnant , #babyWasBron , #other").removeClass("stateSelected");
		$(".babyBirthday , .babySex").hide();
	});
	//点击宝宝出生
	$("#babyWasBron").on("touchend",function(event){
		$(this).addClass("stateSelected");
		$("#isPregnant , #preparePregnant , #other").removeClass("stateSelected");
		$(".babyBirthday , .babySex").show();    			
	});
	//点击其他
	$("#other").on("touchend",function(event){
		$(this).addClass("stateSelected");
		$("#isPregnant , #babyWasBron , #preparePregnant").removeClass("stateSelected");
		$(".babyBirthday , .babySex").show();
	});
	//点击获取验证码
	$("#getCheckCodeBtn").on("touchend",function(){
		$(this).css({"color":"#d6d6d6","background":"#999"}).text("( 60 s )");
	});
	/*
	我的积分 
	*/
	//点击积分收入
	$(".meiBeanIn").on("touchend",function(){
		$(this).addClass("meiBeanSelected");
		$(".meiBeanOut").removeClass("meiBeanSelected");
		$("#meiBeanIn").show();
		$("#meiBeanOut").hide();
	});
	//点击积分支出
	$(".meiBeanOut").on("touchend",function(){
		$(this).addClass("meiBeanSelected");
		$(".meiBeanIn").removeClass("meiBeanSelected");
		$("#meiBeanIn").hide();
		$("#meiBeanOut").show();
	});
	//点击规则说明
	$(".integralRule , .integralRuleIcon").on("touchend",function(){
		$(".integralRuleContent,.allScreen").show();
	});
	//关闭规则说明
	$(".close").on("touchend",function(){
		$(".integralRuleContent,.allScreen").hide();
	});
	//计算积分总收入/支出
	var meiBeanInSum=0,meiBeanOut=0;
	$("#meiBeanIn i").each(function(index,element){
		meiBeanInSum+=+$(element).text();
	});
	$("#meiBeanOut i").each(function(index,element){
		meiBeanOut+=+$(element).text();
	});
	$(".meiBeanIn i").text(meiBeanInSum);
	$(".meiBeanOut i").text(meiBeanOut);
	/* 
	积分兑换物订单确认页
	*/
	//点击设置收货地址进入收货地址列表页
	$("dd#to_select_address").on("click",function(){
		$(".integral_exchange_confirm .select_address ,div.address_header").slideDown();
		$("div.address_header").children().slideDown();
	});
	//关闭选择收货地址页
	$("#close_address_list").on("click",function(){
		$(".integral_exchange_confirm .select_address,div.address_header").slideUp();
		$("div.address_header").children().slideUp();
		
	});
	//选中地址关闭选择收货地址页
	$(".select_address li").children().not(".select_addressOfEditBtn").click(function(){
		$(".select_address").slideUp();
		$("div.address_header").children().slideUp();
	});
	//设置为默认地址
	$("#set_default_address").on("touchend",function(){
		if($(this).attr("select")=="false"){
			$(this).attr("select","true");
			$(".setDefault .selected").show();
			$(".setDefault .unselected").hide();
		}else{
			$(this).attr("select","false");
			$(".setDefault .selected").hide();
			$(".setDefault .unselected").show();
		}
	});
	//删除收货地址
	$("#delect_address").on("touchend",function(){
		layer.confirm('确定要删除吗？', { title:''}, function(index){
		    layer.close(index);
		    location.href="integral_exchange_confirm.html";
		});   
	});
	//提交订单
	$(".integral_exchange_confirm #order_submit").on("touchend",function(){
		layer.open({
			title:'',
		    content: '订单提交成功',
		    yes: function(index, layero){
		        //do something
		        layer.close(index); //如果设定了yes回调，需进行手工关闭
				location.href='integral_exchange.html';
		    }
		}); 
	});
	/*
	营养定制 
	*/
	//点击模块
	$(".pregnantWomensNutrition , .lactationMomNutrition ,.babyNutrition,.kidNutrition").on("touchend",function(){
		location.href="nutritionCustomQA.html";
	})
	/* 
	推荐有奖
	*/
	//按下特效
	$(".shareFriend").on("touchstart",function(){});
	//关闭历史积分页
	$("#closeHistoryPage").on("touchend",function(){
		$(".invitationHistoryPage ,.recommendedAwards .allScreen").hide();
	});
	//打开历史积分页
	$("#showHistoryPage").on("touchend",function(){
		$(".invitationHistoryPage ,.recommendedAwards .allScreen").show();    			
	});
	/* 
	我的订单
	*/
	//点击近一个月订单
	$(".leftBtn").on("touchend",function(){
		$("#aMonthOrders").show();
		$("#beforeAMonthOrders").hide();
		$(this).addClass("selectedColor");
		$(".rightBtn").removeClass("selectedColor");
		$(".moveLine").animate({"left":"9%"},500);
	});
	//点击一个月前订单
	$(".rightBtn").on("touchend",function(){
		$("#beforeAMonthOrders").show();
		$("#aMonthOrders").hide();
		$(this).addClass("selectedColor");
		$(".leftBtn").removeClass("selectedColor");
		$(".moveLine").animate({"left":"59%"},500);
	});
	
});