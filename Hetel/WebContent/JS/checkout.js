function roomSet(){

        $.ajax({
  				type : "post",
  				url : "../store/findgoodsAndroom",
  				data : {},
  				dataType : "json",
  				success : function(data) {
  					var json = JSON.stringify(data);
  					var list = eval(json);
  					var roomLength=list[0].length;
  					var StoreLength=list[1].length;
  					var html='<div class="roomSetDetelTopLayer">'
  					   +'   <div class="roomSetDetel">'
  				       +' <div class="roomSetDetel-Title">房间设置</div>'
  				       +'   <div class="roomSetDetel-roomCheck">'
  				       +'     <span class="roomSetDetel-roomCheckRoomStyle">房间类型</span>'
  				       +'            <span class="roomSetDetel-roomCheckRoomPrice">房间价格</span>'
  				       +'            <span class="roomSetDetel-roomcashPledgeRoomPrice">房间押金</span>'
  				       +'  </div>'
  				       +'  <div class="roomSetDetel-roomSet">'
  				      for(var i=0;i<roomLength;i++){
  				       html+='    <div class="roomSetDetel-roomSetroomEach">'
  				       +'        <span class="roomSetDetel-roomSetroomType">'+list[0][i].roomType+'</span>'
  				       +'       <input type="text" class="roomSetDetel-roomSetroomPrice">'
  				       +'       <input type="text" class="roomSetDetel-roomSetcashPledge">'
  				       +'    </div>'
  				      }
  				     html+='   </div>'
  				             +'   <div class="roomSetDetel-goodsMain">'
  				             +'      <div class="roomSetDetel-Main-goodsType">房间货品</div>'
  				             +'      <div class="roomSetDetel-Main-goodsOperate">'
  				             +'     <div class="roomSetDetel-Main-goodsOperateDetel">'
  				             +'       <span class="roomSetDetel-Main-goodsName">货品名称</span>'
  				             +'      <input type="text" class="roomSetDetel-Main-goodsNameText">'
  				             +'       <span class="roomSetDetel-Main-goodsPrice">货品价格</span>'
  				              +'       <input type="text" class="roomSetDetel-Main-goodsPriceText">'
  				              +'        <span class="roomSetDetel-Main-goodsAdd">+</span>'
  				              +'        <span class="roomSetDetel-Main-goodsSub">-</span>'
  				              +'      </div>'
  				              +'    </div>'
  				              +'   </div> '  
  				             +' <div class="roomSetDetel-saveAndConcel">'
  				             +'  <span class="roomSetDetel-save" onclick="roomSetDetelSave()">保存</span>'
  				             +' <span class="roomSetDetel-concel" onclick="roomSetDetelConcel()">取消</span>'
  				             +'</div> '
  				              +'  </div>'
  				              +'</div>'
  				            $(".roomSetMiddleLayer").html(html);    
  					for(var i=0;i<roomLength;i++){
  						for(var j=0;j<roomLength;j++){
  						var x=$(".roomSetDetel-roomSetroomType").get(j);
  						if(list[0][i].roomType==$(x).html()){
  							$(x).parents(".roomSetDetel-roomSetroomEach").find(".roomSetDetel-roomSetroomPrice").val(list[0][i].roomPrice);
  							$(x).parents(".roomSetDetel-roomSetroomEach").find(".roomSetDetel-roomSetcashPledge").val(list[0][i].roomCashPledge);
  						}
  						}
  					}
  					$(".roomSetDetel-Main-goodsOperate").html("");
  					var html="";
  					if(StoreLength==0){
  						var addElement = document.createElement("div");
  						addElement.classList.add("roomSetDetel-Main-goodsOperateDetel");
  						addElement.innerHTML =    
  			             '       <span class="roomSetDetel-Main-goodsName">货品名称</span>'
  			             +'      <input type="text" class="roomSetDetel-Main-goodsNameText">'
  			             +'       <span class="roomSetDetel-Main-goodsPrice">货品价格</span>'
  			              +'       <input type="text" class="roomSetDetel-Main-goodsPriceText">'
  			              +'        <span class="roomSetDetel-Main-goodsAdd" onclick="roomStoreAdd(this)">+</span>'
  			              +'        <span class="roomSetDetel-Main-goodsSub" onclick="roomStoreSub(this)">-</span>'
		            document.getElementsByClassName("roomSetDetel-Main-goodsOperate")[0].appendChild(addElement);
  					  var x=$(".roomSetDetel-Main-goodsOperateDetel").get(i);
			            $(x).find(".roomSetDetel-Main-goodsNameText").val(list[1][i].goodsName);
			            $(x).find(".roomSetDetel-Main-goodsPriceText").val(list[1][i].goodsPrice);
  					}
  					
  					
  					
  					for(var i=0;i<StoreLength;i++){
  						var addElement = document.createElement("div");
  						addElement.classList.add("roomSetDetel-Main-goodsOperateDetel");
  						addElement.innerHTML =    
  			             '       <span class="roomSetDetel-Main-goodsName">货品名称</span>'
  			             +'      <input type="text" class="roomSetDetel-Main-goodsNameText">'
  			             +'       <span class="roomSetDetel-Main-goodsPrice">货品价格</span>'
  			              +'       <input type="text" class="roomSetDetel-Main-goodsPriceText">'
  			              +'        <span class="roomSetDetel-Main-goodsAdd" onclick="roomStoreAdd(this)">+</span>'
  			              +'        <span class="roomSetDetel-Main-goodsSub" onclick="roomStoreSub(this)">-</span>'
		            document.getElementsByClassName("roomSetDetel-Main-goodsOperate")[0].appendChild(addElement);
  					  var x=$(".roomSetDetel-Main-goodsOperateDetel").get(i);
			            $(x).find(".roomSetDetel-Main-goodsNameText").val(list[1][i].goodsName);
			            $(x).find(".roomSetDetel-Main-goodsPriceText").val(list[1][i].goodsPrice);
  					}
                     
  				}});
}

function roomSetDetelSave(){
     var length=$(".roomSetDetel-Main-goodsOperateDetel").length;
     var length1=$(".roomSetDetel-roomSetroomEach").length;
     var m=0;
     for(var i=0;i<length-1;i++){
    	 for(var j=i+1;j<length;j++)
    	 if($($(".roomSetDetel-Main-goodsOperateDetel").get(i)).find(".roomSetDetel-Main-goodsNameText").val()==$($(".roomSetDetel-Main-goodsOperateDetel").get(j)).find(".roomSetDetel-Main-goodsNameText").val()){
    		 alert("输入的货品名称重复请重新输入！")
    		 m++;
    		 $($(".roomSetDetel-Main-goodsOperateDetel").get(j)).find(".roomSetDetel-Main-goodsNameText").val("");
    	 }
     }
     for(var i=0;i<length;i++){
    	 if($($(".roomSetDetel-Main-goodsOperateDetel").get(i)).find(".roomSetDetel-Main-goodsNameText").val()==""||$($(".roomSetDetel-Main-goodsOperateDetel").get(i)).find(".roomSetDetel-Main-goodsPriceText").val()==""){
    		 alert("请输入完整数据");
    		 m++;
    	 }
     }
     var a=[];
     var b=[];
     var data=[];
     var room= new Object();
     var store=new Object();
     if(m==0){
    	 for(var i=0;i<length1;i++){
    		 room={}
    		 var x=$(".roomSetDetel-roomSetroomType").get(i)
    		 room.roomType=$(x).html();
    		 room.roomPrice=$(x).parents(".roomSetDetel-roomSetroomEach").find(".roomSetDetel-roomSetroomPrice").val();
    		 room.roomCashPledge=$(x).parents(".roomSetDetel-roomSetroomEach").find(".roomSetDetel-roomSetcashPledge").val();
    		 a[i]=room;
    	 }
    	 for(var i=0;i<length;i++){
    		 store={}
    		 var y=$(".roomSetDetel-Main-goodsNameText").get(i);
    		 store.goodsName=$(y).val();
    		 store.goodsPrice=$(y).parents(".roomSetDetel-Main-goodsOperateDetel").find(".roomSetDetel-Main-goodsPriceText").val();
    		 b[i]=store;
    	 }

    		$
			.ajax({
				type : "post",
				url : "../store/ChangegoodsAndroom",
				data : {a : JSON.stringify(a),b:JSON.stringify(b)},
				dataType : "json",
				success : function(data) {
					var json = JSON.stringify(data);
					var list = eval(json);
					alert("保存成功")
				   $(".roomSetDetelTopLayer").remove();
				}});
     }
}
function roomSetDetelConcel(){
	  $(".roomSetDetelTopLayer").remove();
}
function roomStoreAdd(ele){
		var addElement = document.createElement("div");
			addElement.classList.add("roomSetDetel-Main-goodsOperateDetel");
			addElement.innerHTML =    
           '       <span class="roomSetDetel-Main-goodsName">货品名称</span>'
           +'      <input type="text" class="roomSetDetel-Main-goodsNameText">'
           +'       <span class="roomSetDetel-Main-goodsPrice">货品价格</span>'
            +'       <input type="text" class="roomSetDetel-Main-goodsPriceText">'
            +'        <span class="roomSetDetel-Main-goodsAdd" onclick="roomStoreAdd(this)">+</span>'
            +'        <span class="roomSetDetel-Main-goodsSub" onclick="roomStoreSub(this)">-</span>'
            document.getElementsByClassName("roomSetDetel-Main-goodsOperate")[0].appendChild(addElement);
            
}
function roomStoreSub(ele){
	$(ele).parents(".roomSetDetel-Main-goodsOperateDetel").remove();
}
	function CheckOut() {
		checkinparm=1;
		$(".roomLeftPanelTopRoomState").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopReservations").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckIn").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckOut").css({
			"background" : "#FFD700"
		});
		$(".roomLeftPanelTopCheckOutCheck").css({
			"background" : "#EEDD82"
		});
		 var html1="";

			$
			.ajax({
				type : "post",
				url : "../order/findCheckInOrder",
				data : {},
				dataType : "json",
				success : function(data) {
					var json = JSON.stringify(data);
					var list = eval(json);
					var all = 3;

					yList = list;
					xList = list;

					var listLength = list.length;

					if ((listLength % 15) != 0) {
						var listLength1 = parseInt(listLength / 15);
						all = listLength1 + 1;
					}

					else
						all = list.length / 15;

					$('.roomSetDetel-Main-goodsOperate').empty(); //清空resText里面的所有内容
					html1 += '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
						+'<div class="CheckOutMainPanel">'
						+'	<div class="CheckInMainPanelDetel">'
							+ '<div class="roomReservationsTopPanel">'
							+ '<div class="roomReservationsTopPanelDate">'
							+ ' <div class="roomReservationsTopPanelDateTime"> 入住时间</div>'
							+ '<div class="roomReservationsTopPanelDateTimeYesterday" onclick="RealityallOrder()">全部</div>'
							+ ' <div class="roomReservationsTopPanelDateTimeToday" onclick="RealityTodayOrder()">今天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeTomorrow" onclick="RealityTomorrowOrder()">明天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeDayaftertomorrow" onclick="RealityDayAfterTomorrow()">后天</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonal" onclick="RealitychangByMyself()">自定义</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonalPanel"></div>'
							+ '</div>'
							+ '</div>'
							+ '<div class="roomReservationsTopPanelDetel">'
							+ '<div class="roomReservationsTopPanelDetelMore" onclick="realityDetelMore()">更多>></div>'
							+ '<div class="roomReservationsTopPanelDetelMoreDetel"></div>'
							+ '</div>'

							+ '<div class="roomReservationsButtomPanel">'
							+ '<div class="roomReservationsButtomPanelTitle">'
							+ '<ul class="roomReservationsButtomPanelTitleUl">'
							+ '<li class="roomReservationsButtomPanelTitleList">序号</li>'
							+ '<li class="roomReservationsButtomPanelTitleName">预订人</li>'
							+ '<li class="roomReservationsButtomPanelTitlePhoneNum">手机号码</li>'
							+ '<li class="roomReservationsButtomPanelTitleReserveTime">预抵时间</li>'
							+ '<li class="roomReservationsButtomPanelTitleArriveTime">预离时间</li>'
							+ '<li class="roomReservationsButtomPanelTitleDayTimes">天数</li>'
							+ '<li class="roomReservationsButtomPanelTitleRoomNum">间数</li>'
							+ '<li class="roomReservationsButtomPanelTitleResrveId">订单编号</li>'
							+ '<li class="roomReservationsButtomPanelTitleState">状态</li>'
							+ '<li class="roomReservationsButtomPanelTitleOperate">操作</li>'
							+ '</ul>' + '</div>'

					html1 = html1
							+ '<div class="roomReservationsButtomPanelDetel">'
							+ '<table id="data-table" border="0" cellspacing="0">'
					if (yList.length < 15) {
						var h = yList.length;
					} else
						h = 15;
					for (var i=0; i < h; i++) {

						html1 = html1
								+ '<tr> <td><ul class="roomReservationsButtomPanelTitleUl1">'
								+ '<li class="roomReservationsButtomPanelTitleList1">'
								+ (i + 1)
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleName1">'
								+ yList[i].orderName
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitlePhoneNum1">'
								+ yList[i].phoneNum
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleReserveTime1">'
								+ getDate(yList[i].arriveDate)
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
								+ getDate(yList[i].leaveDate)
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleDayTimes1">'
								+ yList[i].dayTimes
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleRoomNum1">'
								+ yList[i].roomNum
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleResrveId1">'
								+ yList[i].orderNumber
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleState1">'
								+ yList[i].orderState
								+ '</li>'
								+ '<li class="roomReservationsButtomPanelTitleOperate1">'
							    var startTime = new Date().getTime();
							    var dateOrderL=getDate(yList[i].leaveDate);
							    var dateOrderLS=dateOrderL+' '+12+':'+00+':00'+"";
							    var dateOrderLSM=new Date(dateOrderLS).getTime();
								if(startTime>dateOrderLSM){
									html1+='<div class="roomReservationsButtomPanelTitleOverTimeCheckoutCheck roomReservationsButtomPanelTitleCheckoutBack"  onclick="OverTimeCheckoutCheck(this)">超时退房</div>'
								}
								else {
									html1+='<div class="roomReservationsButtomPanelTitleCheckoutCheck roomReservationsButtomPanelTitleCheckoutBack"  onclick="CheckoutCheck(this)">退房</div>'
								}
								+ '</li>' + '</ul></td></tr>'
					}
					html1 = html1
							+ '</table>'
							+ '</div>'

							+ '<div class="roomLeftPanelPageChange">'
							+ '<div class="roomLeftPanelPageChangeAllRow1">共</div>'
							+ '<div class="roomLeftPanelPageChangeAllRow2">'
							+ yList.length
							+ '</div>'
							+ '<div class="roomLeftPanelPageChangeAllRow3">行,</div>'
							+ '<div class="roomLeftPanelPageChangeEveryPage1">每页</div>'
							+ '<div class="roomLeftPanelPageChangeEveryPage2">'
							+ 15
							+ '</div>'
							+ '<div class="roomLeftPanelPageChangeEveryPage3">行,</div>'
							+ '<div class="roomLeftPanelPageChangeWitchPage1">第</div>'
							+ '<div id="page-num" class="roomLeftPanelPageChangeWitchPage2">'
							+ 1
							+ '</div>'
							+ '<div class="roomLeftPanelPageChangeWitchPage3">/</div>'
							+ '<div id="page-max" class="roomLeftPanelPageChangeWitchPage4">'
							+ all
							+ '</div>'
							+ '<div class="roomLeftPanelPageChangeWitchPage5">页</div>'
							+ '<div class="roomLeftPanelPageChangeFirstPage" onclick="firstRealityCheckIn()">首页</div>'
							+ '<div class="roomLeftPanelPageChangeLastPage" onclick="lastRealityCheckIn()">上一页</div>'
							+ '<div class="roomLeftPanelPageChangeNextPage" onclick="nextRealityCheckIn()">下一页</div>'
							+ '<div class="roomLeftPanelPageChangeEndPage" onclick="EndRealityCheckIn()">末页</div>'
							+ '<input type="text" class="roomLeftPanelPageChangeText">'
							+ '<div class="roomLeftPanelPageChangeTo" onclick="GotoRealityCheckIn()">转到</div>'
							+ '</div>'
							+ '</div>'
							+ '</div>'
							+ '</div>'
							+ '</div>'
							+'	</div>'
							+'	</div>'
							+ '<div class="DetelAdddetel"></div>'
							+ '<div class="DetelAdddetelSmallLogal"></div>'
					
					$(".roomLeftPanelButtom").html(html1);
					$('.roomReservationsMainMianPanel').css({"top":"0px"}) 
		 $(".CheckInMainPanelDirectCheckIn").css({"width":"100px"});
		 $(".CheckInMainPanelReserveCheckIn").css({"width":"100px"});
		 $(".CheckInMainPanelCheckInOperate").css({"width":"150px"});
		 $(".CheckInMainPanelDirectCheckIn").css({"background":"rgb(238, 221, 130)"});
		 $(".CheckInMainPanelCheckInOperate").css({"background":"rgb(255, 215, 0)"});
		 $(".CheckInMainPanelReserveCheckIn").css({"background":"rgb(238, 221, 130)"});
				}});
	}
	var CheckoutOrderNum;
	var CheckoutOrderLeaveTime;
	var thisCheckoutCheck;
	var OverTime;
	function OverTimeCheckoutCheck(ele){
		
		if($(ele).parents("td").find(".roomReservationsButtomPanelTitleCheckoutBack").html()=="退房"){
			OverTime=0;
		}
		else {
			OverTime=1;
		}
		var OrderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
		CheckoutOrderLeaveTime=getNowDate1();
		CheckoutOrderNum=OrderNumber;
		thisCheckoutCheck=ele;
		$
		.ajax({
			type : "post",
			url : "../order/indexStoreAndCheckInformation",
			data : {OrderNumber:OrderNumber},
			dataType : "json",
			success : function(data) {
				var json = JSON.stringify(data);
				var list = eval(json);
				var roomPrice=0;
				for(var i=0;i<list[1].length;i++){
					roomPrice+=list[1][i].roomPrice
				     
				}
				var formatTimeS1=new Date(CheckoutOrderLeaveTime).getTime(CheckoutOrderLeaveTime+":00");
				var formatTimeS=formatTimeS1-parseInt(list[0].arriveDate);
			
				var days= parseInt(parseInt(formatTimeS)/(1000 * 60 * 60 * 24));
				
				var html ='<div class="CheckOutOperatePanel">'
		        +'<div class="CheckOutOperate">'
				+ '  <div class="CheckOutOperateTopTitle">退房</div>'
				+ '     <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '   <div class="CheckOutOperateMiddleTitleText">订单信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '	  </div>'
				+ '	  <table class="CheckOutOperateTop-Table">'
			    + '     <tr><td>订单号:<span class="CheckOutOperateTop-orderNumber">'+list[0].orderNumber+'</span></td><td>姓名:'+list[0].orderName+'</td><td>手机号:'+list[0].phoneNum+'</td><td>身份证号:'+list[0].idnum+'</td></tr>'
				+ '	      <tr><td>预抵日期:'+getDate(list[0].arriveDate)+'</td><td>预离日期:'+getDate(list[0].leaveDate)+'</td><td>离开日期:<span class="getNowDays">'+CheckoutOrderLeaveTime+'</span></td><td>预定天数:<span class="redayTimes">'+list[0].dayTimes+'</span></td></tr>'
				+ '	      <tr><td>实际天数:'+days+'</td><td>接单员:'+list[0].acceptName+'</td><td>订单状态:'+list[0].orderState+'</td></tr>' 
				+ '	      <tr><td>用户身份:'+list[0].vip+'</td><td></td><td></td><td></td></tr>'
				+ '	  </table>'
				+ '	  <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '  <div class="CheckOutOperateMiddleTitleText">房间信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '  </div>'
				+ '    <div class="CheckOutOperateMiddle">'
				+ '      <div class="CheckOutOperateMiddleDetel">'
				+'            <div class="CheckOutOperateMiddleDetel-CheckBox"></div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomType">房型</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomId">房号</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomPrice">房价</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomCashPledge">押金</div>'
				+ '         <div class="CheckOutOperateMiddleDetel-roomBeizhu">备注</div>'
				+ '       </div>'
				+ '       <div class="CheckOutOperateMiddleDetel-TableDiv">'
				+ '       <table class="CheckOutOperateMiddleDetel-Table">'
				 for(var i=0;i<list[1].length;i++){
				 html+=
					'  <tr><td>'
				+'               <div class="CheckOutOperateMiddleDetel-TableCheckBoxDiv">'
				+'             <div class="CheckOutOperateMiddleDetel-TableCheckBox"></div>'
				+'               </div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomType1">'+list[1][i].roomStyle+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomId1">'+list[1][i].roomid+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomPrice1">'+list[1][i].roomPrice+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomCashPledge1">'+list[1][i].roomCashPledge+'</div>'
				+ '            <div class="CheckOutOperateMiddleDetel-roomBeizhu1">'+list[1][i].roombeizhu+'</div>'
				+ '          </td></tr>'
				}
				html+= '       </table>'
				+ '      </div>'
				+ '   </div>'
				+ '    <div class="CheckOutOperateBottom">'
				+ '   <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '   <div class="CheckOutOperateMiddleTitleText">消费信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '  </div>'
				+ '         <div class="CheckOutOperateBottom-Consume">'
				+'            <div class="CheckOutOperateBottom-ConsumeTitle">商品信息</div>'
				+ '        <table class="CheckOutOperateBottom-ConsumeTable">'
             
				for(var i=0;i<list[2].length;i++){
				html+= '            <tr><td>'
				+ '              <div class="CheckOutOperateBottom-ConsumeTable-storeType">'+list[2][i].goodsName+'</div>'
				+ '               <input type="text" class="CheckOutOperateBottom-ConsumeTable-storeTypeText" value="0" onchange="storeTypeTextChange(this)">'
				+ '             <div class="Onearrow1"> <div class="Onearrow1-up" onclick="storeNumUp(this)"></div><div class="Onearrow1-down" onclick="storeNumDown(this)"></div></div>'
				+ '               <div class="CheckOutOperateBottom-ConsumeTable-storePrice">单价</div>'
				+ '               <input type="text" class="CheckOutOperateBottom-ConsumeTable-storePriceText" value='+list[2][i].goodsPrice+' onchange="storeTypeTextChange1(this)">'
				+ '               </td></tr>'
				
				}
				var totalConsume=parseInt(list[0].cashPledge)+parseInt(roomPrice);
				var backPrice=parseInt(list[0].cashPledge);
				var realityPrice=parseInt(roomPrice);
				html+= '     </table>'
				
				+ '      </div>'
				+ '      <div class="CheckOutOperateBottom-Total">'
				+ '         <div class="CheckOutOperateBottom-cashPledgPanel">'
				+ '           <div class="CheckOutOperateBottom-cashPledge">押金</div>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '           <div class="CheckOutOperateBottom-cashPledgeNum">'+list[0].cashPledge+'</div>'
				+ '         <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'
				+'           </div>'
				+ '         </div>'
				+ '       <div class="CheckOutOperateBottom-roomreConsumePanel">'
				+ '           <div class="CheckOutOperateBottom-roomreConsume">房费总计</div>'
				+'                <div class="CheckOutOperateBottomBottom">'

				+ '             <div class="CheckOutOperateBottom-roomreConsumeNum">'+roomPrice+'</div>'
				+ '               <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'

				+ '             </div>'
				+ '         </div>'
				+ '          <div class="CheckOutOperateBottom-StorePanel">'
				+ '             <div class="CheckOutOperateBottom-Store">物品总消费</div>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '            <div class="CheckOutOperateBottom-StoreNum">'+0+'</div>'
				+ '              <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'
				+ '         </div>'
				+ '         </div>'
				+ '       <div class="CheckOutOperateBottom-TotalConsumePanel">'
				+ '           <span class="CheckOutOperateBottom-TotalConsumeText">总消费</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '             <span class="CheckOutOperateBottom-TotalConsumeNum">'+totalConsume+'</span>'
				+ '              <span class="CheckOutOperateBottom-BackConsumeYuan">元</span>'
				+ ' </div>'
				+ ' </div>'
				+ '<div class="CheckOutOperateBottom-BackConsumePanel">           '
				+ '     <span class="CheckOutOperateBottom-BackConsumeText">应退</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '           <span class="CheckOutOperateBottom-BackConsumeNum">'+backPrice+'</span>'
				+ '        <span class="CheckOutOperateBottom-BackConsumeYuan">元(押金减去商品消费)</span>'
				+ '      </div>'
				+ '      </div>'
				+ '      <div class="CheckOutOperateBottom-BackConsumePanel">              '
				+ '          <span class="CheckOutOperateBottom-BackConsumeText">总计</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '            <span class="CheckOutOperateBottom-TotalMoney">'+realityPrice+'</span>'
				+ '            <span class="CheckOutOperateBottom-BackConsumeYuan2">元</span>'
				+ '      </div>'
				+ '         </div>' + '        </div>' + '    </div>'
				+ '    <div class="CheckOutBottomSubmitAndConcel">'
				+ '       <div class="CheckOutBottomSubmit" onclick="CheckOutBottomSubmit()">提交</div>'
				+ '       <div class="CheckOutBottomConcel" onclick="CheckOutBottomConcel()">取消</div>'
				+ '    </div>' + '</div>'
				+'</div>'
				  $(".DetelAdddetel").html(html); 	
				
				  TableCheckBox1();
				
			}});
	}
	function CheckoutCheck(ele){
		if($(ele).parents("td").find(".roomReservationsButtomPanelTitleCheckoutBack").html()=="退房"){
			OverTime=0;
		}
		else {
			OverTime=1;
		}
		var OrderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
		CheckoutOrderLeaveTime=getNowDate1();
		CheckoutOrderNum=OrderNumber;
		thisCheckoutCheck=ele;
		$
		.ajax({
			type : "post",
			url : "../order/indexStoreAndCheckInformation",
			data : {OrderNumber:OrderNumber},
			dataType : "json",
			success : function(data) {
				var json = JSON.stringify(data);
				var list = eval(json);
				var roomPrice=0;
				for(var i=0;i<list[1].length;i++){
					roomPrice+=list[1][i].roomPrice
				     
				}
				var formatTimeS1=new Date(CheckoutOrderLeaveTime).getTime(CheckoutOrderLeaveTime+":00");
				var formatTimeS=formatTimeS1-parseInt(list[0].arriveDate);
				var days= parseInt(parseInt(formatTimeS)/(1000 * 60 * 60 * 24));
				var html ='<div class="CheckOutOperatePanel">'
		        +'<div class="CheckOutOperate">'
				+ '  <div class="CheckOutOperateTopTitle">退房</div>'
				+ '     <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '   <div class="CheckOutOperateMiddleTitleText">订单信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '	  </div>'
				+ '	  <table class="CheckOutOperateTop-Table">'
			    + '     <tr><td>订单号:<span class="CheckOutOperateTop-orderNumber">'+list[0].orderNumber+'</span></td><td>姓名:'+list[0].orderName+'</td><td>手机号:'+list[0].phoneNum+'</td><td>身份证号:'+list[0].idnum+'</td></tr>'
				+ '	      <tr><td>预抵日期:'+getDate(list[0].arriveDate)+'</td><td>预离日期:'+getDate(list[0].leaveDate)+'</td><td>离开日期:<span class="getNowDays">'+CheckoutOrderLeaveTime+'</span></td><td>预定天数:<span class="redayTimes">'+list[0].dayTimes+'</span></td></tr>'
				+ '	      <tr><td>实际天数:'+days+'</td><td>接单员:'+list[0].acceptName+'</td><td>订单状态:'+list[0].orderState+'</td></tr>' 
				+ '	      <tr><td>用户身份:'+list[0].vip+'</td><td></td><td></td><td></td></tr>'
				+ '	  </table>'
				+ '	  <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '  <div class="CheckOutOperateMiddleTitleText">房间信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '  </div>'
				+ '    <div class="CheckOutOperateMiddle">'
				+ '      <div class="CheckOutOperateMiddleDetel">'
				+'            <input type="checkbox" class="CheckOutOperateMiddleDetel-CheckBox" onclick="CheckOutCheckBox()">  '
				+ '          <div class="CheckOutOperateMiddleDetel-roomType">房型</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomId">房号</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomPrice">房价</div>'
				+ '          <div class="CheckOutOperateMiddleDetel-roomCashPledge">押金</div>'
				+ '         <div class="CheckOutOperateMiddleDetel-roomBeizhu">备注</div>'
				+ '       </div>'
				+ '       <div class="CheckOutOperateMiddleDetel-TableDiv">'
				+ '       <table class="CheckOutOperateMiddleDetel-Table">'
				 for(var i=0;i<list[1].length;i++){
				 html+=
					'  <tr><td>'
				+'               <div class="CheckOutOperateMiddleDetel-TableCheckBoxDiv">'
				+'             <input type="checkbox" class="CheckOutOperateMiddleDetel-TableCheckBox" onclick="TableCheckBox()">'
				+'               </div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomType1">'+list[1][i].roomStyle+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomId1">'+list[1][i].roomid+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomPrice1">'+list[1][i].roomPrice+'</div>'
				+ '           <div class="CheckOutOperateMiddleDetel-roomCashPledge1">'+list[1][i].roomCashPledge+'</div>'
				+ '            <div class="CheckOutOperateMiddleDetel-roomBeizhu1">'+list[1][i].roombeizhu+'</div>'
				+ '          </td></tr>'
				}
				html+= '       </table>'
				+ '      </div>'
				+ '   </div>'
				+ '    <div class="CheckOutOperateBottom">'
				+ '   <div class="CheckOutOperateMiddleTitle">'
				+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
				+ '   <div class="CheckOutOperateMiddleTitleText">消费信息</div>'
				+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
				+ '  </div>'
				+ '         <div class="CheckOutOperateBottom-Consume">'
				+'            <div class="CheckOutOperateBottom-ConsumeTitle">商品信息</div>'
				+ '        <table class="CheckOutOperateBottom-ConsumeTable">'
             
				for(var i=0;i<list[2].length;i++){
				html+= '            <tr><td>'
				+ '              <div class="CheckOutOperateBottom-ConsumeTable-storeType">'+list[2][i].goodsName+'</div>'
				+ '               <input type="text" class="CheckOutOperateBottom-ConsumeTable-storeTypeText" value="0" onchange="storeTypeTextChange(this)">'
				+ '             <div class="Onearrow1"> <div class="Onearrow1-up" onclick="storeNumUp(this)"></div><div class="Onearrow1-down" onclick="storeNumDown(this)"></div></div>'
				+ '               <div class="CheckOutOperateBottom-ConsumeTable-storePrice">单价</div>'
				+ '               <input type="text" class="CheckOutOperateBottom-ConsumeTable-storePriceText" value='+list[2][i].goodsPrice+' onchange="storeTypeTextChange1(this)">'
				+ '               </td></tr>'
				
				}
				var totalConsume=parseInt(list[0].cashPledge)+parseInt(roomPrice);
				var backPrice=parseInt(list[0].cashPledge);
				var realityPrice=parseInt(roomPrice);
				html+= '     </table>'
				
				+ '      </div>'
				+ '      <div class="CheckOutOperateBottom-Total">'
				+ '         <div class="CheckOutOperateBottom-cashPledgPanel">'
				+ '           <div class="CheckOutOperateBottom-cashPledge">押金</div>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '           <div class="CheckOutOperateBottom-cashPledgeNum">'+list[0].cashPledge+'</div>'
				+ '         <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'
				+'           </div>'
				+ '         </div>'
				+ '       <div class="CheckOutOperateBottom-roomreConsumePanel">'
				+ '           <div class="CheckOutOperateBottom-roomreConsume">房费总计</div>'
				+'                <div class="CheckOutOperateBottomBottom">'

				+ '             <div class="CheckOutOperateBottom-roomreConsumeNum">'+roomPrice+'</div>'
				+ '               <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'

				+ '             </div>'
				+ '         </div>'
				+ '          <div class="CheckOutOperateBottom-StorePanel">'
				+ '             <div class="CheckOutOperateBottom-Store">物品总消费</div>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '            <div class="CheckOutOperateBottom-StoreNum">'+0+'</div>'
				+ '              <span class="CheckOutOperateBottom-BackConsumeYuan1">元</span>'
				+ '         </div>'
				+ '         </div>'
				+ '       <div class="CheckOutOperateBottom-TotalConsumePanel">'
				+ '           <span class="CheckOutOperateBottom-TotalConsumeText">总消费</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '             <span class="CheckOutOperateBottom-TotalConsumeNum">'+totalConsume+'</span>'
				+ '              <span class="CheckOutOperateBottom-BackConsumeYuan">元</span>'
				+ ' </div>'
				+ ' </div>'
				+ '<div class="CheckOutOperateBottom-BackConsumePanel">           '
				+ '     <span class="CheckOutOperateBottom-BackConsumeText">应退</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '           <span class="CheckOutOperateBottom-BackConsumeNum">'+backPrice+'</span>'
				+ '        <span class="CheckOutOperateBottom-BackConsumeYuan">元(押金减去商品消费)</span>'
				+ '      </div>'
				+ '      </div>'
				+ '      <div class="CheckOutOperateBottom-BackConsumePanel">              '
				+ '          <span class="CheckOutOperateBottom-BackConsumeText">总计</span>'
				+'                <div class="CheckOutOperateBottomBottom">'
				+ '            <span class="CheckOutOperateBottom-TotalMoney">'+realityPrice+'</span>'
				+ '            <span class="CheckOutOperateBottom-BackConsumeYuan2">元</span>'
				+ '      </div>'
				+ '         </div>' + '        </div>' + '    </div>'
				+ '    <div class="CheckOutBottomSubmitAndConcel">'
				+ '       <div class="CheckOutBottomSubmit" onclick="CheckOutBottomSubmit()">提交</div>'
				+ '       <div class="CheckOutBottomConcel" onclick="CheckOutBottomConcel()">取消</div>'
				+ '    </div>' + '</div>'
				+'</div>'
				  $(".DetelAdddetel").html(html); 	
				  $(".CheckOutOperateMiddleDetel-TableCheckBox").attr("checked","true");
				  TableCheckBox();
				  $(".CheckOutOperateMiddleDetel-CheckBox").attr("checked","true");
			}});
		
	      
	}
	function CheckOutCheckBox(ele){
        
		if($(".CheckOutOperateMiddleDetel-CheckBox").attr("checked")=="checked"){
			$(".CheckOutOperateMiddleDetel-TableCheckBox").attr("checked","true");
		}
		else{
			$(".CheckOutOperateMiddleDetel-TableCheckBox").removeAttr("checked");
		}
	}
	function CheckOutBottomSubmit(){
       var orderNumber=$(".CheckOutOperateTop-orderNumber").html();
       var roomid=[];
       var goodslist=[];
       var checked;
       alert(OverTime);
       if(OverTime==0){
    	   checked=$(".CheckOutOperateMiddleDetel-TableCheckBox:checked");
       }
       else{
    	   checked=$(".CheckOutOperateMiddleDetel-roomId1");
       }
       var length=checked.length;
       
       for(var i=0;i<length;i++){
    	   var x=checked.get(i);
    	   roomid[i]=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomId1").html();
       }
       var m=0;
       
       for(var j=0;j<$(".CheckOutOperateBottom-ConsumeTable-storeType").length;j++){
    	   
    	   var x=$(".CheckOutOperateBottom-ConsumeTable-storeType").get(j);
    	   var storeNum=$(x).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeTypeText").val();
    	   
    	   if(storeNum==0){
    		   
    	   }
    	   else{
    		   var store={};
    		   store.goodsNum=storeNum;
    		   store.goodsPrice=$(x).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storePriceText").val();
    		   store.goodsName=$(x).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeType").html();
    		   goodslist[m]=store;
    		   m++;
    	   }
       }  
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1 + "";
		var day = date.getDate() + "";
		if (month.length == 1) {
			month = "0" + month;
		}
		if (day.length == 1) {
			day = "0" + day;
		}
		var nowDate=year + "-" + month + "-" + day;
       var roomid=JSON.stringify(roomid);
       var goodslist=JSON.stringify(goodslist);
       
       	$
			.ajax({
				type : "post",
				url : "../order/insertTotalOrder1",
				data : {orderNumber:orderNumber,roomid:roomid,goodslist:goodslist,nowDate:nowDate},
				dataType : "json",
				success : function(data) {
					alert("退房成功")
					CheckOut();	
					
			}})
			
	}
	function TableCheckBox(){

		var length=$(".CheckOutOperateMiddleDetel-TableCheckBox:checked").length;
		var rTotal=0;
		var cTotal=0;
		for(var i=0;i<length;i++){
			var x=$(".CheckOutOperateMiddleDetel-TableCheckBox:checked").get(i);
			var roomprice=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomPrice1").html();
			rTotal=parseInt(rTotal)+parseInt(roomprice);
			var roomCashPledge=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomCashPledge1").html();
			cTotal=parseInt(cTotal)+parseInt(roomCashPledge);
		}
		var days=$(".redayTimes").html();
		rTotal=rTotal*parseInt(days);
		$(".CheckOutOperateBottom-cashPledgeNum").html(cTotal);
		$(".CheckOutOperateBottom-roomreConsumeNum").html(rTotal);
		 storeNumTotal();
	}
	function TableCheckBox1(){

		var length=$(".CheckOutOperateMiddleDetel-roomId1").length;
		var rTotal=0;
		var cTotal=0;
		for(var i=0;i<length;i++){
			var x=$(".CheckOutOperateMiddleDetel-roomId1").get(i);
			var roomprice=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomPrice1").html();
			rTotal=parseInt(rTotal)+parseInt(roomprice);
			var roomCashPledge=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomCashPledge1").html();
			cTotal=parseInt(cTotal)+parseInt(roomCashPledge);
		}
		var days=$(".redayTimes").html();
		rTotal=rTotal*parseInt(days);
		$(".CheckOutOperateBottom-cashPledgeNum").html(cTotal);
		$(".CheckOutOperateBottom-roomreConsumeNum").html(rTotal);
		 storeNumTotal();
	}
	function storeTypeTextChange(ele){
		var num=$(ele).val();
		 if(num%1!=0){
			 $(ele).val(0);
		 }
		 else{
			 storeNumTotal();
		 }
	}
	function storeTypeTextChange1(ele){
		var num=$(ele).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeTypeText").val();
		 if(num%1!=0){
			 $(ele).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeTypeText").val(0);
		 }
		 else{
			 storeNumTotal();
		 }
	}
	function storeNumUp(ele){
		ele=$(ele).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeTypeText");
		var num=parseInt(ele.val());
		 if(num%1!=0){
			 ele.val(0);
		 }
		 else {
			 num++;
			 ele.val(num);
		 }
		 storeNumTotal();
	}
	function storeNumTotal(){
		 var length=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").length;
		 var total=0;
		 var h;
		 for(var i=0;i<length;i++){

			 var m=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").get(i);
			 var x=$(m).val();
			 var y1=$(".CheckOutOperateBottom-ConsumeTable-storePriceText").get(i);
			 var y=parseInt($(y1).val());
			 var param=0;
			 if(y%1!=0){
				 param=1;
				 break;
			 }
			 else{
			 total=parseInt(total)+parseInt(x)*y;
			 }
		 }
		 if(param==1) return;
 		 var cashPledge=$(".CheckOutOperateBottom-cashPledgeNum").html();
		 var ConsumeNum=$(".CheckOutOperateBottom-roomreConsumeNum").html();
		 
		 $(".CheckOutOperateBottom-StoreNum").html(total);
		 $(".CheckOutOperateBottom-TotalConsumeNum").html(parseInt(total)+parseInt(cashPledge)+parseInt(ConsumeNum));
		 $(".CheckOutOperateBottom-BackConsumeNum").html(parseInt(cashPledge)-parseInt(total));
		 $(".CheckOutOperateBottom-TotalMoney").html(parseInt(ConsumeNum)+parseInt(total));
	}
	function storeNumDown(ele){
		ele=$(ele).parents("td").find(".CheckOutOperateBottom-ConsumeTable-storeTypeText")
		var num=parseInt($(ele).val());
		 if(num%1!=0){
			 $(ele).val(0);
		 }
		 else {
			 if(num>0){
			 num--;
			 $(ele).val(num);
			 }
		 }
		 storeNumTotal();
	}
	function getdaytime(date2,date1){
	
		   var formatTimeS=date2-date1;
		 
		   var days= parseInt(parseInt(formatTimeS)/(1000 * 60 * 60 * 24));
		   return days;
	}
	function getNowDate1(){
	   var date=new Date();
	   var year=date.getFullYear();
	   var month=date.getMonth();
	   month++;
	   var day=date.getDate();
	   var hour=date.getHours();
	   var minite=date.getMinutes();
	   year=year+"";
	   month=month+'';
	   day=day+"";
	   hour=hour+'';
	   minite=minite+"";
	   
	   if(month.length==1){
		   month='0'+month;
	   }
	   if(day.length==1){
		   day='0'+day;
	   }
	   if(hour.length==1){
		   hour='0'+hour;
	   }
	   if(minite.length==1){
		   minite='0'+minite;
	   }
	   return year+'-'+month+'-'+day+' '+hour+':'+minite;
	}
	function CheckOutBottomConcel(){
		$(".CheckOutOperatePanel").remove();
	}