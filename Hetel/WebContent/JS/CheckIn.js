    var checkinparm;
	function CheckIn() {
		checkinparm=0;
		$(".roomLeftPanelTopRoomState").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopReservations").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckIn").css({
			"background" : "#FFD700"
		});
		$(".roomLeftPanelTopCheckOut").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckOutCheck").css({
			"background" : "#EEDD82"
		});
		var html1="";

			$
			.ajax({
				type : "post",
				url : "../order/findReserveOrder",
				data : {},
				dataType : "json",
				success : function(data) {
					
					var json = JSON.stringify(data);
					var list = eval(json);
					var all = 3;

					yList = list;
					xList = list;
                    var html1="";
					var listLength = list.length;

					if ((listLength % 15) != 0) {
						var listLength1 = parseInt(listLength / 15);
						all = listLength1 + 1;
					}

					else
						all = list.length / 15;

					$('.roomLeftPanelButtom').empty(); //清空resText里面的所有内容
					html1 += '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
						+'<div class="CheckInMainPanel">'
						+'<div class="CheckInMainPanelTop">'
						+' <div class="CheckInMainPanelReserveCheckIn" onclick="CheckIn()">预订入住</div>'
						+' <div class="CheckInMainPanelDirectCheckIn" onclick="DirectCheckIn()">直接入住</div>'
						+'  <div class="CheckInMainPanelCheckInOperate" onclick="CheckInOperate()">入住管理</div>'
						+'</div>'
						+'	<div class="CheckInMainPanelDetel">'
							+ '<div class="roomReservationsTopPanel">'
							+ '<div class="roomReservationsTopPanelDate">'
							+ ' <div class="roomReservationsTopPanelDateTime"> 预抵时间</div>'
							+ '<div class="roomReservationsTopPanelDateTimeYesterday" onclick="allOrder()">全部</div>'
							+ ' <div class="roomReservationsTopPanelDateTimeToday" onclick="TodayOrder()">今天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeTomorrow" onclick="TomorrowOrder()">明天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeDayaftertomorrow" onclick="DayAfterTomorrow()">后天</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonal" onclick="changByMyself()">自定义</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonalPanel"></div>'
							+ '</div>'
							+ '</div>'
							+ '<div class="roomReservationsTopPanelDetel">'
							+ '<div class="roomReservationsTopPanelDetelMore" onclick="DetelMore()">更多>></div>'
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
					    var startTime = new Date().getTime();
					    var dateOrderL=getDate(yList[i].leaveDate);
					    var dateOrderLS=dateOrderL+' '+12+':'+00+':00'+"";
					    var dateOrderLSM=new Date(dateOrderLS).getTime();
					   
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
								 if(startTime>dateOrderLSM){
									 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn1" onclick="OverTimeCheckOut(this)">超时退房</div>'
									
								    }
								 else{
										
									 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn2" onclick="Operate1CheckIn(this)">预定入住</div>'
									
								 }
						html1 = html1+ '</li>' + '</ul></td></tr>'
						          
							
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
							+ '<div class="roomLeftPanelPageChangeFirstPage" onclick="firstPageCheckIn1()">首页</div>'
							+ '<div class="roomLeftPanelPageChangeLastPage" onclick="lastPageCheckIn()">上一页</div>'
							+ '<div class="roomLeftPanelPageChangeNextPage" onclick="nextPageCheckIn()">下一页</div>'
							+ '<div class="roomLeftPanelPageChangeEndPage" onclick="EndPageCheckIn()">末页</div>'
							+ '<input type="text" class="roomLeftPanelPageChangeText">'
							+ '<div class="roomLeftPanelPageChangeTo" onclick="GotoPageCheckIn()">转到</div>'
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
				}});	
	}
	function RealityallOrder() {
		$(".roomReservationsTopPanelDateTimeYesterday").css({
			"background" : "#EEB422"
		});
		$(".roomReservationsTopPanelDateTimeToday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeTomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeDayaftertomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimePersonal").css({
			"background" : "#CDC5BF"
		});
		$(".calendarAllFunction").css({
			"display" : "none"
		});

		yList = xList;
		realitydayChange();
	}
	function RealityTodayOrder() {
		$(".roomReservationsTopPanelDateTimeYesterday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeToday").css({
			"background" : "#EEB422"
		});
		$(".roomReservationsTopPanelDateTimeTomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeDayaftertomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimePersonal").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimePersonalDateText").css({
			"display" : "none"
		});
		var j = 0;
		for (var i = 0; i < xList.length; i++) {
			var date1 = new Date();
			var date2=null;
			if(document.getElementsByClassName("CheckDetel")[0]!=null){
				date2 = new Date(xList[i].leaveDate);
			}else{
			date2 = new Date(xList[i].arriveDate);
			}
			if (date2.getFullYear() == date1.getFullYear()) {

				if (date2.getMonth() == date1.getMonth()) {
					if (date2.getDate() == date1.getDate()) {

						dayList[j] = xList[i];

						j++;

					}
				}
			}
		}
		yList = [];
		yList = dayList;
		dayList = [];
		realitydayChange();

	}
	function RealityTomorrowOrder() {

		$(".roomReservationsTopPanelDateTimeYesterday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeToday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeTomorrow").css({
			"background" : "#EEB422"
		});
		$(".roomReservationsTopPanelDateTimeDayaftertomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimePersonal").css({
			"background" : "#CDC5BF"
		});
		$(".calendarAllFunction").css({
			"display" : "none"
		});
		var j = 0;
		for (var i = 0; i < xList.length; i++) {
			var date1 = new Date();
			var date2=null;
			if(document.getElementsByClassName("CheckDetel")[0]!=null){
				date2= new Date(xList[i].leaveDate);
			}else
			{date2 = new Date(xList[i].arriveDate);}
			var getMonth = date1.getMonth();
			var getFullYear = date1.getFullYear();
			var getDate = date1.getDate();
			getMonth++;

			if (((getMonth) == 1) || ((getMonth) == 3) || ((getMonth) == 5)
					|| ((getMonth) == 7) || ((getMonth) == 8)
					|| ((getMonth) == 10) || ((getMonth) == 12)) {
				if (getDate == 31) {
					getDate = 1;
					if ((getMonth) == 12) {
						getFullYear++;
					}
				} else {

					getMonth--;

					getDate++;
				}

			} else if (((getMonth) == 4) || ((getMonth) == 6)
					|| ((getMonth) == 9) || ((getMonth) == 11)) {
				if (getDate == 30) {
					getDate = 1;
				} else {
					getMonth--;
					getDate++;
				}
			} else if ((getMonth) == 2) {
				if (((getFullYear % 4 == 0) && (!(getFullYear % 100 == 0)))
						|| (getFullYear % 400 == 0)) {
					if (getDate == 29) {
						getDate = 1;
					} else {
						getMonth--;
						getDate++;
					}
				} else {
					if (getDate == 28) {
						getDate = 1;
					} else {
						getMonth--;
						getDate++;
					}
				}
			} else {
				alert("error");
			}

			if (date2.getFullYear() == getFullYear) {

				if (date2.getMonth() == getMonth) {
					if (date2.getDate() == getDate) {

						dayList[j] = xList[i];

						j++;

					}
				}
			}
		}
		yList = [];
		yList = dayList;
		dayList = [];
		realitydayChange();
	}
	function RealityDayAfterTomorrow() {

		$(".roomReservationsTopPanelDateTimeYesterday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeToday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeTomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeDayaftertomorrow").css({
			"background" : "#EEB422"
		});
		$(".roomReservationsTopPanelDateTimePersonal").css({
			"background" : "#CDC5BF"
		});
		$(".calendarAllFunction").css({
			"display" : "none"
		});
		var j = 0;
		for (var i = 0; i < xList.length; i++) {
			var date1 = new Date();
			var date2=null;
			if(document.getElementsByClassName("CheckDetel")[0]!=null){
				date2= new Date(xList[i].leaveDate);
			}else
			{date2 = new Date(xList[i].arriveDate);}
			var getMonth = date1.getMonth();
			var getFullYear = date1.getFullYear();
			var getDate = date1.getDate();
			getMonth++;

			if (((getMonth) == 1) || ((getMonth) == 3) || ((getMonth) == 5)
					|| ((getMonth) == 7) || ((getMonth) == 8)
					|| ((getMonth) == 10) || ((getMonth) == 12)) {
				if (getDate == 30) {
					getDate = 1;
					if ((getMonth) == 12) {
						getFullYear++;
					}
				} else if (getDate == 31) {
					getDate = 2;
					if ((getMonth) == 12) {
						getFullYear++;
					}
				} else {

					getMonth--;

					getDate++;
					getDate++;
				}

			} else if (((getMonth) == 4) || ((getMonth) == 6)
					|| ((getMonth) == 9) || ((getMonth) == 11)) {
				if (getDate == 29) {
					getDate = 1;
				} else if (getDate == 30) {
					getDate = 2;
				} else {
					getMonth--;
					getDate++;
					getDate++;
				}
			} else if ((getMonth) == 2) {
				if (((getFullYear % 4 == 0) && (!(getFullYear % 100 == 0)))
						|| (getFullYear % 400 == 0)) {
					if (getDate == 29) {
						getDate = 2;
					} else if (getDate == 28) {
						getDate = 1;
					} else {
						getMonth--;
						getDate++;
						getDate++;
					}
				} else {
					if (getDate == 28) {
						getDate = 2;
					} else if (getDate == 27) {
						getDate = 1;
					} else {
						getMonth--;
						getDate++;
						getDate++;
					}
				}
			} else {
				alert("error");
			}

			if (date2.getFullYear() == getFullYear) {

				if (date2.getMonth() == getMonth) {
					if (date2.getDate() == getDate) {

						dayList[j] = xList[i];

						j++;

					}
				}
			}
		}
		yList = [];
		yList = dayList;
		dayList = [];
		realitydayChange();
	}
	function realityDetelMore() {
		RealityallOrder();
		var MoreDetel = $('.roomReservationsTopPanelDetelMoreDetel').html()
				+ "";
		if (MoreDetel == null || MoreDetel == "") {
			var html = '<div class="DetelMoreorderName1">姓名:</div><input type="text" id="DetelMoreorderName">'
					+ '<div class="DetelMorephoneNum1">手机号:</div><input type="text" id="DetelMorephoneNum">'
					+ '<div class="DetelMoreorderNum1">订单编号:</div><input type="text" id="DetelMoreorderNum">'
					+ '<div class="indexDetelMoreorde" onclick="realityDetelMoreIndex()">查询</div>'
			$('.roomReservationsTopPanelDetelMoreDetel').html(html);
		} else {
			var j = 0
			for (var i = 0; i < xList.length; i++) {
				dayList[j] = xList[i]
				j++;
			}
			yList = [];
			yList = dayList;
			dayList = [];
			realitydayChange();
			$('.roomReservationsTopPanelDetelMoreDetel').html("");

		}
	}
	function realityDetelMoreIndex() {
		var j = 0;
		var name = $("#DetelMoreorderName").val() + "";
		var phoneNum = $("#DetelMorephoneNum").val() + "";
		var orderNum = $("#DetelMoreorderNum").val() + "";
		if ((name != "") && (phoneNum != "") && (orderNum != "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].orderName == name)
						&& (xList[i].phoneNum == phoneNum)
						&& (xList[i].orderNumber == orderNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name != "") && (phoneNum != "") && (orderNum == "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].orderName == name)
						&& (xList[i].phoneNum == phoneNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name != "") && (phoneNum == "") && (orderNum == "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].orderName == name)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name != "") && (phoneNum == "") && (orderNum != "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].orderName == name)
						&& (xList[i].orderNumber == orderNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name == "") && (phoneNum != "") && (orderNum != "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].phoneNum == phoneNum)
						&& (xList[i].orderNumber == orderNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name == "") && (phoneNum == "") && (orderNum != "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].orderNumber == orderNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		} else if ((name == "") && (phoneNum == "") && (orderNum == "")) {
			for (var i = 0; i < xList.length; i++) {

				dayList[j] = xList[i]
				j++;

			}
		} else if ((name == "") && (phoneNum != "") && (orderNum == "")) {
			for (var i = 0; i < xList.length; i++) {
				if ((xList[i].phoneNum == phoneNum)) {
					dayList[j] = xList[i]
					j++;
				}
			}
		}
		yList = [];
		yList = dayList;
		dayList = [];
		realitydayChange();
	}
	function realitydayChange() {
		var html1 = "";
		if (yList.length < 15) {
			var h = yList.length;
		} else
			h = 15;
		for (var i = 0; i < h; i++) {
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
					+ getDate(yList[i].realityDate)

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
					if(document.getElementsByClassName("CheckInMainPanel")[0]!=null){
					
                    html1+='<li class="roomReservationsButtomPanelTitleOperate1">'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Check" onclick="CheckInCheck(this)">查看</div>'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Modify" onclick="CheckInModify(this)">修改</div>'
					+ '</li>' + '</ul></td></tr>'
					}
					else if(document.getElementsByClassName("CheckDetel")[0]!=null){
						html1+= '<li class="roomReservationsButtomPanelTitleOperate1">'
							+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutCheckAll(this)">查看</div>'
							+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutDelete(this)">删除</div>'
							+ '</li>' + '</ul></td></tr>'
						
						}
					else {
	                 html1+='<li class="roomReservationsButtomPanelTitleOperate1">'
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
						html1+='</li>' + '</ul></td></tr>'
					}
		}
		$("#data-table").html(html1);
		var listLength = yList.length;
		var listLength1;
		if ((listLength % 15) != 0) {
			listLength1 = parseInt(listLength / 15);
			all = listLength1 + 1;
		} else
			all = listLength1;
		$("#page-max").html(all);
		$(".roomLeftPanelPageChangeAllRow2").html(listLength);
	}
function CheckInOperate(){
	 checkinparm=1;
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
				$('.roomLeftPanelButtom').empty(); //清空resText里面的所有内容
				html1 += '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
					+'<div class="CheckInMainPanel">'
					+'<div class="CheckInMainPanelTop">'
					+' <div class="CheckInMainPanelReserveCheckIn" onclick="CheckIn()">预订入住</div>'
					+' <div class="CheckInMainPanelDirectCheckIn" onclick="DirectCheckIn()">直接入住</div>'
					+'  <div class="CheckInMainPanelCheckInOperate" onclick="CheckInOperate()">入住管理</div>'
					+'</div>'
					+'	<div class="CheckInMainPanelDetel">'
						+ '<div class="roomReservationsTopPanel">'
						+ '<div class="roomReservationsTopPanelDate">'
						+ ' <div class="roomReservationsTopPanelDateTime"> 预抵时间</div>'
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
							+ '<div class="roomReservationsButtomPanelTitleOperate1Check" onclick="CheckInCheck(this)">查看</div>'
							+ '<div class="roomReservationsButtomPanelTitleOperate1Modify" onclick="CheckInModify(this)">修改</div>'
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
	 $(".CheckInMainPanelDirectCheckIn").css({"width":"100px"})
	 $(".CheckInMainPanelReserveCheckIn").css({"width":"100px"})
	 $(".CheckInMainPanelCheckInOperate").css({"width":"150px"})
	 $(".CheckInMainPanelDirectCheckIn").css({"background":"rgb(238, 221, 130)"})
	 
	 $(".CheckInMainPanelCheckInOperate").css({"background":"rgb(255, 215, 0)"})
	 $(".CheckInMainPanelReserveCheckIn").css({"background":"rgb(238, 221, 130)"})
	 $(".roomReservationsButtomPanelTitleOperate1Check").css({"margin-left":"30px"});
	 $(".roomReservationsButtomPanelTitleOperate1Modify").css({"margin-left":"30px"});
			}});
}
var ele1;

function CheckInCheck(ele){
	var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
	$
	.ajax({
		type : "post",
		url : "../order/CheckCheckInOrder",
		data : {orderNumber:orderNumber},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);

			var html ='<div class="CheckOutOperatePanel">'
	        +'<div class="CheckOutOperate">'
			+ '  <div class="CheckOutOperateTopTitle">退房</div>'
			+ '     <div class="CheckOutOperateMiddleTitle">'
			+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
			+ '   <div class="CheckOutOperateMiddleTitleText">订单信息</div>'
			+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
			+ '	  </div>'
			+ '	  <table class="CheckOutOperateTop-Table">'
		    + '     <tr><td>订单号:'+list[0].orderNumber+'</td><td>姓名:'+list[0].orderName+'</td><td>手机号:'+list[0].phoneNum+'</td><td>身份证号:'+list[0].idnum+'</td></tr>'
			+ '	      <tr><td>预定日期:'+getDate(list[0].orderDate)+'</td><td>预抵日期:'+getDate(list[0].arriveDate)+'</td><td>预离日期:'+getDate(list[0].leaveDate)+'</td><td>预定天数:'+list[0].dayTimes+'</td></tr>'
			+ '	      <tr><td>接单员:'+list[0].acceptName+'</td><td>订单状态:'+list[0].orderState+'</td><td>用户身份:'+list[0].vip+'</td><td></td></tr>' 
			+ '	      <tr></td><td></td><td></td></tr>'
			+ '	  </table>'
			+ '	  <div class="CheckOutOperateMiddleTitle">'
			+ '  <div class="CheckOutOperateMiddleTitleLeft"></div>'
			+ '  <div class="CheckOutOperateMiddleTitleText">房间信息</div>'
			+ '  <div class="CheckOutOperateMiddleTitleRight"></div>'
			+ '  </div>'
			+ '    <div class="CheckOutOperateMiddle">'
			+ '      <div class="CheckOutOperateMiddleDetel">'
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
			+'             <div class="CheckOutOperateMiddleDetel-TableCheckBox"><div>'
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
			+'<div class="CheckOutBottomBack" onclick="CheckOutBottomBack()">返回</div>'
			+ '   </div>'


$(".DetelAdddetel").html(html);
$(".CheckOutOperate").css({"top":"30px"})
$(".CheckOutOperate").css({"height":"500px"})
$(".CheckOutOperateMiddleDetel-roomType1").css({"margin-left":"25px"})
			}});
}
function CheckInAllModify(){
	if ($(".adddetelReservationInformationDetelNameInput").val() == ""
		|| ($(".adddetelReservationInformationDetelPhoneInput").val() == "")
		|| ($(".adddetelReservationInformationDeteldayInput").val() == "")
		|| ($(".adddetelReservationInformationDetelCardInput").val() == "")
		|| ($(".adddetelReservationInformationDetelDateArriveInput").val() == "")
		|| ($(".adddetelReservationInformationDetelDateLeaveInput").val() == "")) {
	alert("请输入完整数据");
}	
else if(phoneBool==false||inNumBool==false){
	alert("格式有误")
}
else {
	var length=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").length;
	var ll2=0;
	for(var i=0;i<length;i++){
		var x=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").get(i);
		var y=$(x).html();
		if(y==0){
			ll2++;
		}
	}
	if(ll2==length){
		alert("请选择房间");
	} else {
		var reserve = new Object();
		var checkLength = $("#RightContentTable").find(
				".adddetelRoomInformationRightContentRoomNumText").length;
		var m = 0;
		var Arrlength = new Array();
		for (i = 0; i < checkLength; i++) {
			var x = $("#RightContentTable").find(
					".adddetelRoomInformationRightContentRoomNumText")
					.get(i);
			var y = $(x).val();
			var beizhu;
			var orderRoom = {};
			if (y != null && y != "") {
				orderRoom.roomid = y;
				orderRoom.orderNumber=$(".adddetelReservationInformationDetelOrderNumInput").html();
				orderRoom.roombeizhu = $(x).parents("td").find(".RemarksDetel").val();
				orderRoom.roomStyle=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomType").html();
				orderRoom.roomPrice=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomPrice").html();
				orderRoom.roomCashPledge=$(x).parents("td").find(".adddetelRoomInformationRightContentCashPledge").html();
				Arrlength[m] = orderRoom;
				m++;
			}
		}

		var order = new Array();

		var reserve = {};
		reserve.phoneNum = $(
				".adddetelReservationInformationDetelPhoneInput").val();
		reserve.orderNumber =$(".adddetelReservationInformationDetelOrderNumInput").html();
		reserve.orderName = $(
				".adddetelReservationInformationDetelNameInput").val();
		reserve.idnum = $(
				".adddetelReservationInformationDetelCardInput").val();
		reserve.arriveDate=$(".adddetelReservationInformationDetelDateArriveInput").val();
		reserve.leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val();

		reserve.dayTimes = $(
				".adddetelReservationInformationDeteldayInput").val();
		reserve.acceptName = $(
				".adddetelReservationInformationDetelSellernameInput")
				.val();
		reserve.roomNum=$(".adddetelRoomInformationRightContentRoomNum").length;

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
		var hour = date.getHours();
		var minite = date.getMinutes();
		var newDate = year + "-" + month + "-" + day;
		var hourAndhour = hour + ":" + minite;
		reserve.orderDate = newDate;
		reserve.orderDateHour = hourAndhour;
		if($(".adddetelReservationInformationDetelCardlogol").html()=="vip"){
			reserve.vip = "vip";
		}
		reserve.orderState = "已入住"

		order[0] = reserve;
       

		$
				.ajax({
					type : "post",
					dataType : "json",
					async : false,
					url : "../order/ModifyCheckInAllOrder",
					traditional : true,
					data : {
						Demo : JSON.stringify(order),roomOrder: JSON.stringify(Arrlength)
					},
					success : function(data) {
						CheckInOperate();
						alert("修改成功");
						$(".DetelAdddetel").html("");
					}
				});
	}

}
}
function CheckInDetete(ele){
	var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
	$.ajax({
		type : "post",
		url : "../order/DeleteCheckInOrder",
		data : {orderNumber:orderNumber},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			var thisList=$(ele).parents("tr");
			var num=thisList.find(".roomReservationsButtomPanelTitleList1").html();
				if ((num % 15) == 0) {
				var nowpage=$(".roomLeftPanelPageChangeWitchPage2").html();
				if(nowPage>=2){
				$(".roomLeftPanelPageChangeWitchPage2").html(--nowpage);
				}
			}
			thisList.remove();
			var length=$(".roomReservationsButtomPanelTitleList1").length;

			for(var i=1;i<=length;i++){
				var j=i-1;
				var x=$(".roomReservationsButtomPanelTitleList1").get(j);
				$(x).html(i);
			}
			$(".roomLeftPanelPageChangeAllRow2").html(length);
			var list1=[];//修改xList
			var j=0;
			for(var i=0;i<xList.length;i++){
				if(xList[i].orderNumber!=oNum){
				list1[j]=xList[i];
				j++;
				}
			}
			alert("入住成功");
			$(".DetelAdddetel").html("");
			xList=list1;
		}})
}
function CheckInModify(ele){ 
   phoneBool=false;
   inNumBool=false;
	var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
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
	var NowDate=year + "-" + month + "-" + day;
	$
	.ajax({
		type : "post",
		url : "../order/indexCheckInOrder",
		data : {orderNumber:orderNumber,NowDate:NowDate},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			var html = '<div class="adddetel1" id="adddetel1">'
				+ '<div class="adddetel">'
				+ ' <div class="adddetelTitle">'
				+ '    预定修改'
				+ '</div>'
				+ '        <div class="adddetelReservationInformation">'
				+ '         <div class="adddetelReservationInformationTitle">'
				+ '        <div class="adddetelReservationInformationTitleLine1"></div>'
				+ '       <div class="adddetelReservationInformationTitleFont">预定信息</div>'
				+ '      <div class="adddetelReservationInformationTitleLine2"></div>'
				+ '     </div>'
				+ '    <div class="adddetelReservationInformationDetel">'
				+ '      <div class="adddetelReservationInformationDetelLine1">'
				+ '   <div class="adddetelReservationInformationDetelCard">'
				+ '   <div class="adddetelReservationInformationDetelCardText">证件号</div>'
				+ ' <input class="adddetelReservationInformationDetelCardInput" onchange="cardChange(this)">'
				+ '   <div class="adddetelReservationInformationDetelCardlogol">*</div>'
				+ ' </div>'
				+ '  <div class="adddetelReservationInformationDetelPhone">'
				+ '  <div class="adddetelReservationInformationDetelPhoneText">手机号码</div>'
				+ '<input class="adddetelReservationInformationDetelPhoneInput">'
				+ '  <div class="adddetelReservationInformationDetelPhonelogol">*</div>'
				+ '  </div>'
				+ '    <div class="adddetelReservationInformationDetelName">'
				+ '    <div class="adddetelReservationInformationDetelNameText">预订人&nbsp</div>'
				+ '  <input class="adddetelReservationInformationDetelNameInput">'
				+ '   <div class="adddetelReservationInformationDetelNamelogol">*</div>'
				+ '</div>'
				+ ' </div>'
				+ '<div class="adddetelReservationInformationDetelLine2">'
				+ '  <div class="adddetelReservationInformationDetelDate">'
				+ '  <div class="adddetelReservationInformationDetelDateArrive">预抵时间</div>'
				+ '  <input type="date" class="adddetelReservationInformationDetelDateArriveInput" onchange="DateArriveInput(this)" value='+getDate(list[0].arriveDate)+'>'
				+ '   <div class="adddetelReservationInformationDetelDateArriveIlogol">*</div>'
				+ '  '
				+ ' </div>'
				+ '  <div class="adddetelReservationInformationDetelday">'
				+ '  <div class="adddetelReservationInformationDeteldayText">天数</div>'
				+ ' <input class="adddetelReservationInformationDeteldayInput" onchange="changcday(this)">'
				+ ' <div class="adddetelReservationInformationDeteldaylogol">*</div>'
				+ '  '
				+ '</div>'
				+ '  <div class="adddetelReservationInformationDetelDetelLeave">'
				+ '   <div class="adddetelReservationInformationDetelDateLeaveText">预离时间</div>'
				+ '  <input type="date" class="adddetelReservationInformationDetelDateLeaveInput" onchange="DateLeaveInput(this)" value='+getDate(list[0].leaveDate)+'>'
				+ '  <div class="adddetelReservationInformationDetellogol">*</div>'
				+ ' </div>'
				+ ' </div>'
				+ '<div class="adddetelReservationInformationDetelLine3">'
				+ '  <div class="adddetelReservationInformationDetelSellername">'
				+ '   <div class="adddetelReservationInformationDetelSellernameText">接单员</div>'
				+ ' <input class="adddetelReservationInformationDetelSellernameInput"> '
				+ '  </div>'
				+ '    <div class="adddetelReservationInformationDetelOrderNum">'
				+ '    <div class="adddetelReservationInformationDetelOrderNumText">订单编号</div>'
				+ '   <div class="adddetelReservationInformationDetelOrderNumInput">'
				+ list[0].orderNumber
				+ '</div>'
				+ '  </div>'
				    + '  </div>'
				+ ' </div>'
				+ ' '
				+ ' </div>'
				+ ''
				+ '        <div class="adddetelRoomInformation">'
				+ '           <div class="adddetelRoomInformationTitle">'
				+ '            <div class="adddetelRoomInformationTitleLine1"></div>'
				+ '           <div class="adddetelRoomInformationTitleFont">房间信息</div>'
				+ '           <div class="adddetelRoomInformationTitleLine2"></div>'
				+ '           </div>'
				+ '          <div class="adddetelRoomInformationLeftandRight">'
				+ '         <div class="adddetelRoomInformationLeft">'
				+ '            <div class="adddetelRoomInformationLeftTitle">'
				+ '              <div class="adddetelRoomInformationLeftTitleRoomStyle">房间类型</div>'
				+ '                <div class="adddetelRoomInformationLeftTitleAllNum">可定数</div>'
				+ '                <div class="adddetelRoomInformationLeftTitlScheduleNum">预定数</div>'
				+ '                 <div class="adddetelRoomInformationLeftTitlAlreadyeNum">已排房</div>'
				+ '            </div>'
				+ '            <div class="adddetelRoomInformationLeftContent">'
				
		    	+ '               <table class="adddetelRoomInformationLeftContentTable" cellspacing="0">'
				
			for(var i=0;i<list[2].length;i++){
			html+='               <tr><td><div class="adddetelRoomInformationLeftContentTwoRoom">'+list[2][i][0].roomStyle+'</div>'
				+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAllReserve">'+list[2][i].length+'</div>'
				+ '                 <input type="text" class="adddetelRoomInformationLeftContentTwoRoomReserve" value="0" onchange="changeTwo(this)">'
				+ '<div class="Twoarrow">'
				+ '                  <div class="Twoarrow-up" onclick="TwoarrowUp(this)"></div><div class="Twoarrow-down" onclick="TwoarrowDown(this)"></div></div>'
				+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAlreadyReserve">0</div>'
				+ '               </td></tr>'
					}
				html+='            </table>'
				+ '            </div>'
				+ '            </div>'
				+ '           <div class="adddetelRoomInformationRight">'
				+ '             <div class="adddetelRoomInformationRightTitle">'
				+ '                <div class="adddetelRoomInformationRightTitleAllCheck">'
				+ '                  <input type="checkbox" id="allCheckbox" onclick="allCheckbox()">'
				+ '                </div>'
				+ '                <div class="adddetelRoomInformationRightTitleText">房型</div>'
				+ '                <div class="adddetelRoomInformationRightTitleText">房号</div>'
				+ '                <div class="adddetelRoomInformationRightTitleText">房价</div>'
				+ '                <div class="adddetelRoomInformationRightTitleText">押金</div>'
				+ '                <div class="adddetelRoomInformationRightTitleText1">备注</div>'
				+ '             </div>'
				+ '             <div class="adddetelRoomInformationRightContent">'
				+ '              <table id="RightContentTable"  cellspacing="0">'

				+ '              </table>'
				+ '            </div>'
				+ '      </div>'
				+'         <div class="adddetelRoomInformationRightBottom">'
				+               '<span class="adddetelRoomInformationRightBottomCashPledge">押金总计:<span class="RightBottomCashPledgeText">0</span></span>'
				+               '<span class="adddetelRoomInformationRightBottomroomPrice">房价总计:<span class="RightBottomroomPriceText">0</span></span>'
				+               '<span class="adddetelRoomInformationRightBottomTotalPrice">总计:<span class="RightBottomTotalPriceText">0</span></span>'
				+'</div>'
				+ '      </div>'
				+ '      <div class="adddetelOperate">'
				+ '         <div class="adddetelOperateDetel1">'
				+ '           <div class="adddetelOperateDetelAuto" onclick="autoSequence()">自动排房</div>'
				+ '           <div class="adddetelOperateDetelDelete" onclick="adddetelOperateDetelDelete()">删除</div>'
				+ '           <div class="adddetelOperateDetelPreserve" onclick="CheckInAllModify()">修改</div>'
				+ '           <div class="adddetelOperateDetelConcel" onclick="adddetelOperateDetelConcel()">取消</div> '
				+ '        </div>'
				+ '      </div>'
				+'    <div class="phonelogol"></div>'
				+'    <div class="idNumlogol"></div>'
				+ '    </div>'
				+ '    </div>'
				+ '</div>'

		       $(".DetelAdddetel").html(html);
				$(".adddetelReservationInformationDetelPhoneInput").blur(function(){
					var phoneCheck=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
					var phoneNum=$(".adddetelReservationInformationDetelPhoneInput").val();

					var  days=$(".adddetelReservationInformationDeteldayInput").val();
					
					if(phoneNum.match(phoneCheck)==null){
						$(".phonelogol").html("号码格式错误");
					}
					else{	
						$(".phonelogol").html('<div class="phonenum1">号码格式正确</div>');
						$(".phonenum1").css({"color":"green"})
						phoneBool=true;
					}
					
				})
				var roomPrice=0;
				var roomCashPledge=0;
				
				for(var i=0;i<list[1].length;i++){
					var addElement=document.createElement("tbody");
					addElement.classList.add("eleAdd1");
					addElement.innerHTML='<tr><td><div class="adddCheckBox"><input type="checkbox" class="roonTypeCheckBox"></div>'
					+ '                <div class="adddetelRoomInformationRightContentRoomType">'+list[1][i].roomStyle+'</div>'
					+ '                <div class="adddetelRoomInformationRightContentRoomNum">'
					+ '                  <input class="adddetelRoomInformationRightContentRoomNumText" value='+list[1][i].roomid+'>'
					+ '                  <div class="adddetelRoomInformationRightContentRoomNumLogol" onclick="logolSet(this)">...</div>'
					+ '               </div>'
					+ '                    <div class="adddetelRoomInformationRightContentRoomPrice">'+list[1][i].roomPrice+'</div>'
					+ '                    <div class="adddetelRoomInformationRightContentCashPledge">'+list[1][i].roomCashPledge+'</div>'
					+ '                <div class="adddetelRoomInformationRightContentRoomPriceRemarks">'
					+ '                   <input type="text" class="RemarksDetel" value='+list[1][i].roombeizhu+'>'
					+ '                </div>'
					+ '                </td></tr>'
					 document.getElementById("RightContentTable").appendChild(addElement);
					roomPrice+=parseInt(list[1][i].roomPrice);
					roomCashPledge+=parseInt(list[1][i].roomCashPledge);
					$(".roonTypeCheckBox").attr("checked",true);
				
				}

		    totalPrice=parseInt(roomPrice)+parseInt(roomCashPledge);
		    reserveDateCatch=list[2];
			$(".adddetelReservationInformationDetelNameInput").val(list[0].orderName);	
			$(".adddetelReservationInformationDetelPhoneInput").val(list[0].phoneNum);
			$(".adddetelReservationInformationDetelCardInput").val(list[0].idnum);
			$(".adddetelReservationInformationDetelDateArriveInput").val(getDate(list[0].arriveDate));
			$(".adddetelReservationInformationDeteldayInput").val(list[0].dayTimes);
			$(".adddetelReservationInformationDetelDateLeaveInput").val(getDate(list[0].leaveDate));
			$(".adddetelReservationInformationDetelSellernameInput").val(list[0].acceptName);
		    $(".RightBottomCashPledgeText").html(roomCashPledge);
		    $(".RightBottomroomPriceText").html(roomPrice);
		    $(".RightBottomTotalPriceText").html(totalPrice);
		    var totalRoom=list[2];
		    var checkBoxLength1=$(".adddetelRoomInformationRightContentRoomType").length;
		    for(var i=0;i<totalRoom.length;i++){
		    	var total=0;
		    	for(var j=0;j<checkBoxLength1;j++){
		    		var x=$('.adddCheckBox').find('input[type=checkbox]').get(j);
		    		var t=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomNumText").val()+"";
		    		if(t!=""){
		    			if(reserveDateCatch[i].length!=0){
		    			if(totalRoom[i][0].roomStyle==$(x).parents("td").children(".adddetelRoomInformationRightContentRoomType").html()){
		    				total++;
		    			}
		    		}
		    		}
		    	}

		    	var m=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").get(i);
		    	$(m).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val(total);
		    	$(m).html(total);
		    	}
		}});
}
function CheckInDetete(ele){
	var orderNumber = $(ele).parents("td").find(
	".roomReservationsButtomPanelTitleResrveId1").html()
	+ "";
var eachReserveOrder = [];
for (var j = 0; j < xList.length; j++) {
if (xList[j].orderNumber == orderNumber) {
	eachReserveOrder[0] = xList[j];
}
}

var roomid = eachReserveOrder[0].ohetelid;
var para = "";
$
	.ajax({
		type : "post",
		url : "../order/deleteCheckInOrder",
		data : {
			orderNumber : orderNumber,
			roomid : roomid
		},
		dataType : "json",
		success : function(data) {
			var i = 0;
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

			var html1 = "";
			var pageNum = $(".roomLeftPanelPageChangeWitchPage2")
					.html();
			var allPageNum = $(".roomLeftPanelPageChangeWitchPage4")
					.html();
			var ylength = yList.length;

			if (ylength != 0 && ((ylength) % 15 == 0)) {
				$(".roomLeftPanelPageChangeWitchPage2").html(
						pageNum - 1);
				$(".roomLeftPanelPageChangeWitchPage4").html(
						allPageNum - 1);
				pageNum = pageNum - 1;
			}
			if (yList.length < 15) {
				var h = yList.length;
			} else
				h = 15 * pageNum;
			if (yList.length < 15 * pageNum) {
				h = yList.length
			}
			$(".roomLeftPanelPageChangeAllRow2").html(yList.length);
			for (var i = 15 * (pageNum - 1); i < h; i++) {

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
						+ getDate(yList[i].realityDate)
						+ ' '
						+ yList[i].realityDateHour
						+ '</li>'
						+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
						+ getDate(yList[i].leaveDate)
						+ ' '
						+ yList[i].leaveDateHour
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
						+ '<div class="roomReservationsButtomPanelTitleOperate1Check" onclick="Operate1Check(this)">查看</div>'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Modify" onclick="Operate1Modify(this)">修改</div>'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Detete" onclick="Operate1Detete(this)">删除</div>'
						+ '</li>' + '</ul></td></tr>'
			}

			$("#data-table").html(html1);
		}
	});
}
var phoneBool=false;
var inNumBool=false;
 function DirectCheckIn(){
	 $(".CheckInMainPanelDirectCheckIn").css({"width":"150px"})
	 $(".CheckInMainPanelReserveCheckIn").css({"width":"100px"})
	 $(".CheckInMainPanelCheckInOperate").css({"width":"100px"})
	 $(".CheckInMainPanelDirectCheckIn").css({"background":"rgb(255, 215, 0)"})
	 $(".CheckInMainPanelReserveCheckIn").css({"background":"rgb(238, 221, 130)"})
	 $(".CheckInMainPanelCheckInOperate").css({"background":"rgb(238, 221, 130)"})
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
		$.ajax({
		type : "post",
		url : "../order/indexAllinformation",
		data : {nowDate:nowDate},
		dataType : "json",
		success : function(data) {
			
			var json = JSON.stringify(data);
			var list = eval(json);
			hetelList = list;
			reserveDateCatch=list;
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
			var nowDate1=year+'-'+month+'-'+day;
			var orderN = parseInt(xList.length) + 1;
			var html = '<div class="adddetel1" id="adddetel1">'
					+ '<div class="adddetel">'
					+ ' <div class="adddetelTitle">'
					+ '直接入住'
					+ '</div>'
					+ '        <div class="adddetelReservationInformation">'
					+ '         <div class="adddetelReservationInformationTitle">'
					+ '        <div class="adddetelReservationInformationTitleLine1"></div>'
					+ '       <div class="adddetelReservationInformationTitleFont">入住信息</div>'
					+ '      <div class="adddetelReservationInformationTitleLine2"></div>'
					+ '     </div>'
					+ '    <div class="adddetelReservationInformationDetel">'
					+ '      <div class="adddetelReservationInformationDetelLine1">'
					+ '   <div class="adddetelReservationInformationDetelCard">'
					+ '   <div class="adddetelReservationInformationDetelCardText">证件号</div>'
					+ ' <input class="adddetelReservationInformationDetelCardInput" onchange="cardChange(this)">'
					+ '   <div class="adddetelReservationInformationDetelCardlogol">*</div>'
					+ ' </div>'
					+ '  <div class="adddetelReservationInformationDetelPhone">'
					+ '  <div class="adddetelReservationInformationDetelPhoneText">手机号码</div>'
					+ '<input class="adddetelReservationInformationDetelPhoneInput">'
					+ '  <div class="adddetelReservationInformationDetelPhonelogol">*</div>'
					+ '  </div>'
					+ '    <div class="adddetelReservationInformationDetelName">'
					+ '    <div class="adddetelReservationInformationDetelNameText">预订人&nbsp</div>'
					+ '  <input class="adddetelReservationInformationDetelNameInput">'
					+ '   <div class="adddetelReservationInformationDetelNamelogol">*</div>'
					+ '</div>'
					+ ' </div>'
					+ '<div class="adddetelReservationInformationDetelLine2">'
					+ '  <div class="adddetelReservationInformationDetelDate">'
					+ '  <div class="adddetelReservationInformationDetelDateArrive">预抵时间</div>'
					+ '  <div class="adddetelReservationInformationDetelDateArriveText">'+nowDate+'</div>'
					+ '   <div class="adddetelReservationInformationDetelDateArriveIlogol">*</div>'
					+ '  '
					+ ' </div>'
					+ '  <div class="adddetelReservationInformationDetelday">'
					+ '  <div class="adddetelReservationInformationDeteldayText">天数</div>'
					+ ' <input class="adddetelReservationInformationDeteldayInput" onchange="CheckInchangcday(this)">'
					+ ' <div class="adddetelReservationInformationDeteldaylogol">*</div>'
					+ '  '
					+ '</div>'
					+ '  <div class="adddetelReservationInformationDetelDetelLeave">'
					+ '   <div class="adddetelReservationInformationDetelDateLeaveText">预离时间</div>'
					+ '  <input type="date" class="adddetelReservationInformationDetelDateLeaveInput"  onchange="CheckInDateLeaveInput(this)">'
					+ '  <div class="adddetelReservationInformationDetellogol">*</div>'
					+ ' </div>'
					+ ' </div>'
					+ '<div class="adddetelReservationInformationDetelLine3">'
					+ '  <div class="adddetelReservationInformationDetelSellername">'
					+ '   <div class="adddetelReservationInformationDetelSellernameText">接单员</div>'
					+ ' <input class="adddetelReservationInformationDetelSellernameInput"> '
					+ '  </div>'
					+ '    <div class="adddetelReservationInformationDetelOrderNum">'
					+ '    <div class="adddetelReservationInformationDetelOrderNumText">订单编号</div>'
					+ '   <div class="adddetelReservationInformationDetelOrderNumInput">'
					+ getlimitDate()
					+ '</div>'
					+ '  </div>'
			    	+ '  </div>'
					+ ' </div>'
					+ ' '
					+ ' </div>'
					+ ''
					+ '        <div class="adddetelRoomInformation">'
					+ '           <div class="adddetelRoomInformationTitle">'
					+ '            <div class="adddetelRoomInformationTitleLine1"></div>'
					+ '           <div class="adddetelRoomInformationTitleFont">房间信息</div>'
					+ '           <div class="adddetelRoomInformationTitleLine2"></div>'
					+ '           </div>'
					+ '          <div class="adddetelRoomInformationLeftandRight">'
					+ '         <div class="adddetelRoomInformationLeft">'
					+ '            <div class="adddetelRoomInformationLeftTitle">'
					+ '              <div class="adddetelRoomInformationLeftTitleRoomStyle">房间类型</div>'
					+ '                <div class="adddetelRoomInformationLeftTitleAllNum">可定数</div>'
					+ '                <div class="adddetelRoomInformationLeftTitlScheduleNum">预定数</div>'
					+ '                 <div class="adddetelRoomInformationLeftTitlAlreadyeNum">已排房</div>'
					+ '            </div>'
					+ '            <div class="adddetelRoomInformationLeftContent">'
					
			    	+ '               <table class="adddetelRoomInformationLeftContentTable" cellspacing="0">'
					
				for(var i=0;i<list.length;i++){
				html+='               <tr><td><div class="adddetelRoomInformationLeftContentTwoRoom">'+list[i][0].roomStyle+'</div>'
					+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAllReserve">'+list[i].length+'</div>'
					+ '                 <input type="text" class="adddetelRoomInformationLeftContentTwoRoomReserve" value="0" onchange="changeTwo(this)">'
					+ '<div class="Twoarrow">'
					+ '                  <div class="Twoarrow-up" onclick="TwoarrowUp(this)"></div><div class="Twoarrow-down" onclick="TwoarrowDown(this)"></div></div>'
					+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAlreadyReserve">0</div>'
					+ '               </td></tr>'
						}
					html+='            </table>'
					+ '            </div>'
					+ '            </div>'
					+ '           <div class="adddetelRoomInformationRight">'
					+ '             <div class="adddetelRoomInformationRightTitle">'
					+ '                <div class="adddetelRoomInformationRightTitleAllCheck">'
					+ '                  <input type="checkbox" id="allCheckbox" onclick="allCheckbox()">'
					+ '                </div>'
					+ '                <div class="adddetelRoomInformationRightTitleText">房型</div>'
					+ '                <div class="adddetelRoomInformationRightTitleText">房号</div>'
					+ '                <div class="adddetelRoomInformationRightTitleText">房价</div>'
					+ '                <div class="adddetelRoomInformationRightTitleText">押金</div>'
					+ '                <div class="adddetelRoomInformationRightTitleText1">备注</div>'
					+ '             </div>'
					+ '             <div class="adddetelRoomInformationRightContent">'
					+ '              <table id="RightContentTable"  cellspacing="0">'
					+ '              </table>'
					+ '            </div>'
					+ '      </div>'
					+'         <div class="adddetelRoomInformationRightBottom">'
					+               '<span class="adddetelRoomInformationRightBottomCashPledge">押金总计:<span class="RightBottomCashPledgeText">0</span></span>'
					+               '<span class="adddetelRoomInformationRightBottomroomPrice">房价总计:<span class="RightBottomroomPriceText">0</span></span>'
					+               '<span class="adddetelRoomInformationRightBottomTotalPrice">总计:<span class="RightBottomTotalPriceText">0</span></span>'
					+'</div>'
					+ '      </div>'
					+ '      <div class="adddetelOperate">'
					+ '         <div class="adddetelOperateDetel1">'
					+ '           <div class="adddetelOperateDetelAuto" onclick="autoSequence()">自动排房</div>'
					+ '           <div class="adddetelOperateDetelDelete" onclick="adddetelOperateDetelDelete()">删除</div>'
					+ '           <div class="adddetelOperateDetelPreserve" onclick="CheckInSubmit()">保存</div>'
					+ '           <div class="adddetelOperateDetelConcel" onclick="adddetelOperateDetelConcel()">取消</div> '
					+ '        </div>'
					+ '      </div>'
					+'    <div class="phonelogol"></div>'
					+'    <div class="idNumlogol"></div>'
					+ '    </div>'
					+ '    </div>' 
					+ '</div>'

			$(".DetelAdddetel").html(html);
					$(".adddetelReservationInformationDetelSellernameInput").val($("#hiddenUserName").val());
					$(".adddetelReservationInformationDetelPhoneInput").blur(function(){
						var phoneCheck=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
						var phoneNum=$(".adddetelReservationInformationDetelPhoneInput").val();

						var  days=$(".adddetelReservationInformationDeteldayInput").val();
						
						if(phoneNum.match(phoneCheck)==null){
							$(".phonelogol").html("号码格式错误");
						}
						else{	
							$(".phonelogol").html('<div class="phonenum1">号码格式正确</div>');
							$(".phonenum1").css({"color":"green"})
							phoneBool=true;
						}
						
					})
					var leaveDateS1=nowDate+' '+0+':'+0+':00'+"";
					var leaveDateS11 = new Date(leaveDateS1).getTime();
					var leaveDateS2=1* 24 * 3600 * 1000;
					var leaveDateS=leaveDateS11+leaveDateS2;
					var date = new Date(leaveDateS);
					var year = date.getFullYear();
					var month = date.getMonth() + 1 + "";
					var day = date.getDate() + "";
					if (month.length == 1) {
						month = "0" + month;
					}
					if (day.length == 1) {
						day = "0" + day;
					}
					var orderDateTom= year + "-" + month + "-" + day;
					$(".adddetelReservationInformationDetelDateLeaveInput").attr("min",orderDateTom);
		}
	});
    }
 function CheckInSubmit(){
		if ($(".adddetelReservationInformationDetelNameInput").val() == ""
			|| ($(".adddetelReservationInformationDetelPhoneInput").val() == "")
			|| ($(".adddetelReservationInformationDeteldayInput").val() == "")
			|| ($(".adddetelReservationInformationDetelCardInput").val() == "")
			|| ($(".adddetelReservationInformationDetelDateArriveInput").val() == "")
			|| ($(".adddetelReservationInformationDetelDateLeaveInput").val() == "")) {
		alert("请输入完整数据");
	}	
	else if(phoneBool==false||inNumBool==false){
		alert("格式有误")
	}
	else {
		var length=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").length;
		var ll2=0;
		for(var i=0;i<length;i++){
			var x=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").get(i);
			var y=$(x).html();
			if(y==0){
				ll2++;
			}
		}
		if(ll2==length){
			alert("请选择房间");
		}else {
			var reserve = new Object();
			var checkLength = $("#RightContentTable").find(
					".adddetelRoomInformationRightContentRoomNumText").length;
			var m = 0;
			var Arrlength =[];
			for (i = 0; i < checkLength; i++) {
				var x =$(".adddetelRoomInformationRightContentRoomNumText").get(i);
				var y = $(x).val();
				var beizhu;
				var orderRoom = {};
				if (y != null && y != "") {
					orderRoom.roomid = y;
					orderRoom.orderNumber=$(".adddetelReservationInformationDetelOrderNumInput").html();
					orderRoom.roombeizhu = $(x).parents("td").find(".RemarksDetel").val();
					orderRoom.roomStyle=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomType").html();
					orderRoom.roomPrice=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomPrice").html();
					orderRoom.roomCashPledge=$(x).parents("td").find(".adddetelRoomInformationRightContentCashPledge").html();
					Arrlength[m] = orderRoom;
					m++;
				}
			}
       
			var order = new Array();

			var reserve = {};
			reserve.phoneNum = $(
					".adddetelReservationInformationDetelPhoneInput").val();
			reserve.orderNumber =$(".adddetelReservationInformationDetelOrderNumInput").html();
			reserve.orderName = $(
					".adddetelReservationInformationDetelNameInput").val();
			reserve.idnum = $(
					".adddetelReservationInformationDetelCardInput").val();
			reserve.arriveDate=$(".adddetelReservationInformationDetelDateArriveText").html();
			reserve.leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val();

			reserve.dayTimes = $(
					".adddetelReservationInformationDeteldayInput").val();
			reserve.acceptName = $(
					".adddetelReservationInformationDetelSellernameInput")
					.val();
			reserve.roomNum=$(".adddetelRoomInformationRightContentRoomNum").length;
			
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
			var hour = date.getHours();
			var minite = date.getMinutes();
			var newDate = year + "-" + month + "-" + day;
			reserve.orderDate = $(".adddetelReservationInformationDetelDateArriveText").html();
			reserve.realityDate=$(".adddetelReservationInformationDetelDateArriveText").html();
			if($(".adddetelReservationInformationDetelCardlogol").html()=="vip"){
				reserve.vip = "vip";
			}
			reserve.orderState = "已入住"

			order[0] = reserve;
	       
			$
					.ajax({
						type : "post",
						dataType : "json",
						async : false,
						url : "../order/addCheckInOrder",
						traditional : true,
						data : {Demo : JSON.stringify(order),roomOrder:JSON.stringify(Arrlength)},
						success : function(data) {
							alert("保存成功");
							CheckInOperate();
						}
					});
		}

	}
 }
function CheckInDateLeaveInput(ele){
		
		var orderDate=$(".adddetelReservationInformationDetelDateArriveText").html()+"";
		var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
            alert(orderDate);
			if(leaveDate==""){}
			else {
				var leaveDateS1=orderDate+' '+0+':'+0+':00'+"";
				var leaveDateS2=leaveDate+' '+0+':'+0+':00'+"";
				var leaveDateS11 = new Date(leaveDateS1).getTime();
				var leaveDateS22 = new Date(leaveDateS2).getTime();
				var leaveDateS=leaveDateS22-leaveDateS11;
				var days= leaveDateS/(24 * 3600 * 1000);
				$(".adddetelReservationInformationDeteldayInput").val(days);
			}
		
		CheckInDateChange();
	}
function CheckInDateChange(){
	var orderDate=$(".adddetelReservationInformationDetelDateArriveText").html()+"";
	var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
	if(leaveDate==""){
	}
	else{
	$.ajax({
		type : "post",
		url : "../order/indexAllinformation1",
		data : {orderDate:orderDate,leaveDate:leaveDate},
		dataType : "json", 
		success : function(data) {
			
			var json = JSON.stringify(data);
			var list = eval(json);
			hetelList = list;
			reserveDateCatch=list;

			var html="";
			for(var i=0;i<list.length;i++){
				 
				html+='               <tr><td><div class="adddetelRoomInformationLeftContentTwoRoom">'+list[i][0].roomStyle+'</div>'
					+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAllReserve">'+list[i].length+'</div>'
					+ '                 <input type="text" class="adddetelRoomInformationLeftContentTwoRoomReserve" value="0" onchange="changeTwo(this)">'
					+ '<div class="Twoarrow">'
					+ '                  <div class="Twoarrow-up" onclick="TwoarrowUp(this)"></div><div class="Twoarrow-down" onclick="TwoarrowDown(this)"></div></div>'
					+ '                 <div class="adddetelRoomInformationLeftContentTwoRoomAlreadyReserve">0</div>'
					+ '               </td></tr>'
						}
			
			$(".adddetelRoomInformationLeftContentTable").html(html);
			$("#RightContentTable").html("");
			$(".RightBottomCashPledgeText").html(0);
			$(".RightBottomroomPriceText").html(0);
			$(".RightBottomTotalPriceText").html(0);
		
		}});
}
}
 function CheckInchangcday(ele){
	var value=$(ele).val();
	   if(value%1!=0){
		   $(ele).val(0);
	   }
	   
	   else{
		  
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
			var nowDate=year+'-'+month+'-'+day;
		var leaveDateS1=nowDate+' '+0+':'+0+':00'+"";
		var leaveDateS11 = new Date(leaveDateS1).getTime();
		var leaveDateS2=value* 24 * 3600 * 1000;
		var leaveDateS=leaveDateS11+leaveDateS2;
		var date = new Date(leaveDateS);
		var year = date.getFullYear();
		var month = date.getMonth() + 1 + "";
		var day = date.getDate() + "";
		if (month.length == 1) {
			month = "0" + month;
		}
		if (day.length == 1) {
			day = "0" + day;
		}
		var orderDateTom= year + "-" + month + "-" + day;
		$(".adddetelReservationInformationDetelDateLeaveInput").val(orderDateTom);
	   }
		CheckInDateChange();
 }
 function RealitychangByMyself(){
		$(".roomReservationsTopPanelDateTimeYesterday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeToday").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeTomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimeDayaftertomorrow").css({
			"background" : "#CDC5BF"
		});
		$(".roomReservationsTopPanelDateTimePersonal").css({
			"background" : "#EEB422"
		});
		var html='<div class="changByMyselfMain">'
		         +'   <input type="date" class="changByMyselfMainLeft" id="changByMyselfMainLeft">'
		         +'     <div class="changByMyselfMainLeftMiddle">至</div>'
		         +'     <input type="date" class="changByMyselfMainRight">'
		         +'   </div>'
		if(document.getElementsByClassName("changByMyselfMainLeft")[0]!=null){
		    	 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
		    	
		     }
		     else {
		    	 
		    	 $(".roomReservationsTopPanelDateTimePersonalPanel").html(html); 
		 	$("#changByMyselfMainLeft").blur(function() {
		 		if($(".changByMyselfMainLeft").val()==""){}
		 		else{
				if($(".changByMyselfMainRight").val()==""){
					var leftDate=$(".changByMyselfMainLeft").val();
					var t1=leftDate+' '+0+':'+0+':00'+"";
					var j = 0;
					for (var i = 0; i < xList.length; i++) {
						var formatTimeS1 = new Date(t1).getTime();
						 formatTimeS1= formatTimeS1/1000;
							if(document.getElementsByClassName("CheckDetel")[0]!=null){
								formatTimeS2=parseInt(xList[i].leaveDate)/1000;
							}
							else{
						 formatTimeS2=parseInt(xList[i].arriveDate)/1000;
							}
						if(formatTimeS2>= formatTimeS1){
							dayList[j]=xList[i];
							j++;
						}
					}
					yList = [];
					yList = dayList;
					dayList = [];
					realitydayChange();

				}

				else {
					var leftDate=$(".changByMyselfMainLeft").val();
					var rightDate=$(".changByMyselfMainRight").val();
					var t1=leftDate+' '+0+':'+0+':00'+"";
					var t2=rightDate+' '+0+':'+0+':00'+"";

					var j = 0;
					for (var i = 0; i < xList.length; i++) {
						var formatTimeS1 = new Date(t1).getTime();
						 formatTimeS1= formatTimeS1/1000;
							var formatTimeS2 = new Date(t2).getTime();
						formatTimeS2= formatTimeS2/1000;
						if(document.getElementsByClassName("CheckDetel")[0]!=null){
							formatTimeS3=parseInt(xList[i].leaveDate)/1000;
						}
						else{
					    formatTimeS3=parseInt(xList[i].arriveDate)/1000;
						}
						if(formatTimeS3>= formatTimeS1&&formatTimeS3<=formatTimeS2){
							dayList[j]=xList[i];
							j++
						}
					}
					yList = [];
					yList = dayList;
					dayList = [];
					realitydayChange();

				}
		 		}
			});
		 	$(".changByMyselfMainRight").blur(function() {
				var leftDate=$(".changByMyselfMainLeft").val();
				var rightDate=$(".changByMyselfMainRight").val();
				var t1=leftDate+' '+0+':'+0+':00'+"";
				var t2=rightDate+' '+0+':'+0+':00'+"";

				var j = 0;
				for (var i = 0; i < xList.length; i++) {
					var formatTimeS1 = new Date(t1).getTime();
					 formatTimeS1= formatTimeS1/1000;
						var formatTimeS2 = new Date(t2).getTime();
					formatTimeS2= formatTimeS2/1000;
					if(document.getElementsByClassName("CheckDetel")[0]!=null){
						formatTimeS3=parseInt(xList[i].leaveDate)/1000;
					}
					else{
				    formatTimeS3=parseInt(xList[i].arriveDate)/1000;
					}
					if(formatTimeS3>= formatTimeS1&&formatTimeS3<=formatTimeS2){
						dayList[j]=xList[i];
						j++;
					}
				}
				yList = [];
				yList = dayList;
				dayList = [];
				realitydayChange();
		 	});
		     }
 }

    function OverTimeCheckOut(ele){
    	var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
    	$.ajax({
    		type : "post",
    		url : "../order/OverTimeCheckOut",
    		data : {orderNumber:orderNumber},
    		success : function(data) {
    			alert("退房成功")
    			CheckIn();
    		}});
    }
	function Operate1CheckIn(ele){
	
		var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
		var nowArray=[];
		for(var i=0;i<xList.length;i++){
			if(xList[i].orderNumber==orderNumber){
				nowArray[0]=xList[i];
			}
		}
		var arriveTime=$(ele).parents("td").find(".roomReservationsButtomPanelTitleReserveTime1").html();
		var leaveTime=$(ele).parents("td").find(".roomReservationsButtomPanelTitleArriveTime1").html();

		var formatTimeS1=new Date(arriveTime).getTime();
		var formatTimeS2=Date.parse(new Date());
		var formatTimeS3=new Date(leaveTime).getTime();

		if(formatTimeS2<formatTimeS1){
			alert("您的预抵日期未到！")
		}
		else if(formatTimeS3<formatTimeS2){
			alert("您已超过预离时间!")
		}
		else if((formatTimeS1<=formatTimeS2)&&(formatTimeS2<formatTimeS3)){
			var formatTime=formatTimeS3-formatTimeS2;
			var days= parseInt(parseInt(formatTime)/(1000 * 60 * 60 * 24));
            days++;
        	alert("您的剩余时间为"+days+"天");
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth() + 1 + "";
			var day = date.getDate() + "";
			var hour=date.getHours()+"";
			if (month.length == 1) {
				month = "0" + month;
			}
			if (day.length == 1) {
				day = "0" + day;
			}
			var nowDate=year + "-" + month + "-" + day;
			$
			.ajax({
				type : "post",
				url : "../order/ReserveCheckIn",
				data : {orderNumber:orderNumber,nowDate:nowDate},
				dataType : "json",
				success : function(data) {
					var json = JSON.stringify(data);
					var list = eval(json);
					var json = JSON.stringify(data);
					var list = eval(json);
					var all = 3;
                    var html1="";
					yList = list;
					xList = list;

					var listLength = list.length;

					if ((listLength % 15) != 0) {
						var listLength1 = parseInt(listLength / 15);
						all = listLength1 + 1;
					}

					else
						all = list.length / 15;

					$('.roomLeftPanelButtom').empty(); //清空resText里面的所有内容
					html1 += '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
						+'<div class="CheckInMainPanel">'
						+'<div class="CheckInMainPanelTop">'
						+' <div class="CheckInMainPanelReserveCheckIn" onclick="CheckIn()">预订入住</div>'
						+' <div class="CheckInMainPanelDirectCheckIn" onclick="DirectCheckIn()">直接入住</div>'
						+'  <div class="CheckInMainPanelCheckInOperate" onclick="CheckInOperate()">入住管理</div>'
						+'</div>'
						+'	<div class="CheckInMainPanelDetel">'
							+ '<div class="roomReservationsTopPanel">'
							+ '<div class="roomReservationsTopPanelDate">'
							+ ' <div class="roomReservationsTopPanelDateTime"> 预抵时间</div>'
							+ '<div class="roomReservationsTopPanelDateTimeYesterday" onclick="allOrder()">全部</div>'
							+ ' <div class="roomReservationsTopPanelDateTimeToday" onclick="TodayOrder()">今天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeTomorrow" onclick="TomorrowOrder()">明天</div>'
							+ '<div class="roomReservationsTopPanelDateTimeDayaftertomorrow" onclick="DayAfterTomorrow()">后天</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonal" onclick="changByMyself()">自定义</div>'
							+ '<div class="roomReservationsTopPanelDateTimePersonalPanel"></div>'
							+ '</div>'
							+ '</div>'
							+ '<div class="roomReservationsTopPanelDetel">'
							+ '<div class="roomReservationsTopPanelDetelMore" onclick="DetelMore()">更多>></div>'
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
					    var startTime = new Date().getTime();
					    var dateOrderL=getDate(yList[i].leaveDate);
					    var dateOrderLS=dateOrderL+' '+12+':'+00+':00'+"";
					    var dateOrderLSM=new Date(dateOrderLS).getTime();
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
								 if(startTime>dateOrderLSM){
									 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn1" onclick="OverTimeCheckOut(this)">超时退房</div>'
									
								    }
								 else{
										
									 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn2" onclick="Operate1CheckIn(this)">预定入住</div>'
									
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
							+ '<div class="roomLeftPanelPageChangeFirstPage" onclick="firstPageCheckIn1()">首页</div>'
							+ '<div class="roomLeftPanelPageChangeLastPage" onclick="lastPageCheckIn()">上一页</div>'
							+ '<div class="roomLeftPanelPageChangeNextPage" onclick="nextPageCheckIn()">下一页</div>'
							+ '<div class="roomLeftPanelPageChangeEndPage" onclick="EndPageCheckIn()">末页</div>'
							+ '<input type="text" class="roomLeftPanelPageChangeText">'
							+ '<div class="roomLeftPanelPageChangeTo" onclick="GotoPageCheckIn()">转到</div>'
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
					alert("入住成功");
					$(".DetelAdddetel").html("");
			}});
		}
		
		
	}