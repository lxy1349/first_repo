	var yList;
	var xList;
	var dayList = new Array();
	function getDate(date) {
		var date = new Date(date);
		var year = date.getFullYear();
		var month = date.getMonth() + 1 + "";
		var day = date.getDate() + "";
		if (month.length == 1) {
			month = "0" + month;
		}
		if (day.length == 1) {
			day = "0" + day;
		}
		return year + "-" + month + "-" + day;
	}
	function TopReservations() {
		
		var i = 0;
		$(".roomLeftPanelTopRoomState").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopReservations").css({
			"background" : "#FFD700"
		});
		$(".roomLeftPanelTopCheckIn").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckOut").css({
			"background" : "#EEDD82"
		});
		$(".roomLeftPanelTopCheckOutCheck").css({
			"background" : "#EEDD82"
		});
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

						var listLength = list.length;

						if ((listLength % 15) != 0) {
							var listLength1 = parseInt(listLength / 15);
							all = listLength1 + 1;
						}

						else
							all = list.length / 15;

						$('.roomLeftPanelButtom').empty(); //清空resText里面的所有内容
						var html1 = '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
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
								+ '<div class="roomReservationsTopPanelDetelAdd" onclick="DetelAdd()">新增</div>'
								+ '<div class="roomReservationsTopPanelDetelMore" onclick="DetelMore()">更多>></div>'
								+ '<div class="roomReservationsTopPanelDetelMoreDetel"></div>'
								+ '</div>'
								+ '<div class="roomReservationsButtomPanel">'
								+ '<div class="roomReservationsButtomPanelTitle">'
								+ '<ul class="roomReservationsButtomPanelTitleUl">'
								+ '<li class="roomReservationsButtomPanelTitleList">序号</li>'
								+ '<li class="roomReservationsButtomPanelTitleName">预订人</li>'
								+ '<li class="roomReservationsButtomPanelTitlePhoneNum">手机号码</li>'
								+ '<li class="roomReservationsButtomPanelTitleReserveTime">预定时间</li>'
								+ '<li class="roomReservationsButtomPanelTitleArriveTime">预抵时间</li>'
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
						for (; i < h; i++) {

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
									+ getDate(yList[i].orderDate)
									+ '</li>'
									+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
									+getDate(yList[i].arriveDate)
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
								+ '<div class="roomLeftPanelPageChangeFirstPage" onclick="firstPage1()">首页</div>'
								+ '<div class="roomLeftPanelPageChangeLastPage" onclick="lastPage()">上一页</div>'
								+ '<div class="roomLeftPanelPageChangeNextPage" onclick="nextPage()">下一页</div>'
								+ '<div class="roomLeftPanelPageChangeEndPage" onclick="EndPage()">末页</div>'
								+ '<input type="text" class="roomLeftPanelPageChangeText">'
								+ '<div class="roomLeftPanelPageChangeTo" onclick="GotoPage()">转到</div>'
								+ '</div>'
								+ '</div>'
								+ '</div>'
								+ '</div>'
								+ '</div>'
								+ '<div class="DetelAdddetel"></div>'
								+ '<div class="DetelAdddetelSmallLogal"></div>'
						$('.roomLeftPanelButtom').html(html1);
						
					}
				});
	}
	function getlimitDate() {
		var timestamp1 = Date.parse(new Date());
		var timestamp = parseInt(timestamp1) - 1558000000000;
		return timestamp;
	}
	function TodayOrder() {
		 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
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
			var date2 = new Date(xList[i].arriveDate);

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
		dayChange();

	}
	function TomorrowOrder() {
		 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
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
			var date2 = new Date(xList[i].arriveDate);
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
		dayChange();
	}
	function DayAfterTomorrow() {
		 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
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
			var date2 = new Date(xList[i].arriveDate);
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
		dayChange();
	}

	function dayChange() {
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
					+ getDate(yList[i].orderDate)

					+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
					+ getDate(yList[i].arriveDate)

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
					if(document.getElementsByClassName("CheckInMainPanelDetel")[0]!=null){
					    var startTime = new Date().getTime();
					    var dateOrderL=getDate(yList[i].leaveDate);
					    var dateOrderLS=dateOrderL+' '+12+':'+00+':00'+"";
					    var dateOrderLSM=new Date(dateOrderLS).getTime();
						html1+= '<li class="roomReservationsButtomPanelTitleOperate1">'
							 if(startTime>dateOrderLSM){
							
								 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn1" onclick="OverTimeCheckOut(this)">超时退房</div>'
								
							    }
							 else{
									
								 html1 = html1+ '<div class="roomReservationsButtomPanelTitleOperate1CheckIn2" onclick="Operate1CheckIn(this)">预定入住</div>'
								
							 }
						+'</li>'
					}
					else {html1+='<li class="roomReservationsButtomPanelTitleOperate1">'
					+ '<div class="roomReservationsButtomPanelTitleOperate1Check" onclick="Operate1Check(this)">查看</div>'
					+ '<div class="roomReservationsButtomPanelTitleOperate1Modify" onclick="Operate1Modify(this)">修改</div>'
					+ '<div class="roomReservationsButtomPanelTitleOperate1Detete" onclick="Operate1Detete(this)">删除</div>'
					}
					+ '</li>' + '</ul></td></tr>'
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

	function PreserveModify(){
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
			reserve.orderState = "已预订"

			order[0] = reserve;
	       

			$
					.ajax({
						type : "post",
						dataType : "json",
						async : false,
						url : "../order/ModifyReserveOrder",
						traditional : true,
						data : {
							Demo : JSON.stringify(order),roomOrder: JSON.stringify(Arrlength)
						},
						success : function(data) {
							alert("修改成功");
							$(".DetelAdddetel").html("");
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
							var ylength = yList.length;
							var html1 = "";
							var pageNum = $(
									".roomLeftPanelPageChangeWitchPage2")
									.html();
							var allPageNum = $(
									".roomLeftPanelPageChangeWitchPage4")
									.html();
							if ((ylength - 1) % 15 == 0) {
								$(".roomLeftPanelPageChangeWitchPage2")
										.html(parseInt(pageNum) + 1);
								$(".roomLeftPanelPageChangeWitchPage4")
										.html(parseInt(allPageNum) + 1);
								pageNum = parseInt(pageNum) + 1;

							}
							if (yList.length < 15) {
								var h = yList.length;
							} else
								h = 15 * pageNum;
							if (yList.length < 15 * pageNum) {
								h = yList.length
							}
							$(".roomLeftPanelPageChangeAllRow2").html(
									yList.length);

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
										+ getDate(yList[i].orderDate)
										+ '</li>'
										+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
										+ getDate(yList[i].arriveDate)
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

	}
	}
	function Operate1Modify(ele){ 
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
			url : "../order/indexReserveOrder",
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
					+ '           <div class="adddetelOperateDetelPreserve" onclick="PreserveModify()">修改</div>'
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
	
	function getDate(date) {
		var date = new Date(date);
		var year = date.getFullYear();
		var month = date.getMonth() + 1 + "";
		var day = date.getDate() + "";
		if (month.length == 1) {
			month = "0" + month;
		}
		if (day.length == 1) {
			day = "0" + day;
		}
		return year + "-" + month + "-" + day;
	}
	function Operate1Check(ele){
		var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
		$
		.ajax({
			type : "post",
			url : "../order/CheckReserveOrder",
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
				+ '	      <tr><td>接单员:'+list[0].acceptName+'</td><td>订单状态:'+list[0].orderState+'</td><td>用户身份:'+list[0].vip+'</td><td></tr>' 
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
	function CheckOutBottomBack(){
		$(".CheckOutOperatePanel").remove();
	}
	function Operate1Detete(ele){
		var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
		$.ajax({
			type : "post",
			url : "../order/DeleteReserveOrder",
			data : {orderNumber:orderNumber},
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
				var html1 = '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
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
						+ '<div class="roomReservationsTopPanelDetelAdd" onclick="DetelAdd()">新增</div>'
						+ '<div class="roomReservationsTopPanelDetelMore" onclick="DetelMore()">更多>></div>'
						+ '<div class="roomReservationsTopPanelDetelMoreDetel"></div>'
						+ '</div>'

						+ '<div class="roomReservationsButtomPanel">'
						+ '<div class="roomReservationsButtomPanelTitle">'
						+ '<ul class="roomReservationsButtomPanelTitleUl">'
						+ '<li class="roomReservationsButtomPanelTitleList">序号</li>'
						+ '<li class="roomReservationsButtomPanelTitleName">预订人</li>'
						+ '<li class="roomReservationsButtomPanelTitlePhoneNum">手机号码</li>'
						+ '<li class="roomReservationsButtomPanelTitleReserveTime">预定时间</li>'
						+ '<li class="roomReservationsButtomPanelTitleArriveTime">预抵时间</li>'
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
							+ getDate(yList[i].orderDate)
							+ '</li>'
							+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
							+getDate(yList[i].arriveDate)
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
						+ '<div class="roomLeftPanelPageChangeFirstPage" onclick="firstPage1()">首页</div>'
						+ '<div class="roomLeftPanelPageChangeLastPage" onclick="lastPage()">上一页</div>'
						+ '<div class="roomLeftPanelPageChangeNextPage" onclick="nextPage()">下一页</div>'
						+ '<div class="roomLeftPanelPageChangeEndPage" onclick="EndPage()">末页</div>'
						+ '<input type="text" class="roomLeftPanelPageChangeText">'
						+ '<div class="roomLeftPanelPageChangeTo" onclick="GotoPage()">转到</div>'
						+ '</div>'
						+ '</div>'
						+ '</div>'
						+ '</div>'
						+ '</div>'
						+ '<div class="DetelAdddetel"></div>'
						+ '<div class="DetelAdddetelSmallLogal"></div>'
				$('.roomLeftPanelButtom').html(html1);
			}})
	}
	function allOrder() {
		 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
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
		yList = xList;
		dayChange();
	}
	function changByMyself(){
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
		if(document.getElementsByClassName("changByMyselfMain")[0]!=null){
		    	 $(".roomReservationsTopPanelDateTimePersonalPanel").html(""); 
		     }
		     else {$(".roomReservationsTopPanelDateTimePersonalPanel").html(html); 
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
						 formatTimeS2=parseInt(xList[i].arriveDate)/1000;
						if(formatTimeS2>= formatTimeS1){
							dayList[j]=xList[i];
							j++;
						}
					}
					yList = [];
					yList = dayList;
					dayList = [];
					dayChange();

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
						 formatTimeS3=parseInt(xList[i].arriveDate)/1000;
						if(formatTimeS3>= formatTimeS1&&formatTimeS3<=formatTimeS2){
							dayList[j]=xList[i];
							j++
						}
					}
					yList = [];
					yList = dayList;
					dayList = [];
					dayChange();

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
					 formatTimeS3=parseInt(xList[i].arriveDate)/1000;
					if(formatTimeS3>= formatTimeS1&&formatTimeS3<=formatTimeS2){
						dayList[j]=xList[i];
						j++;
					}
				}
				yList = [];
				yList = dayList;
				dayList = [];
				dayChange();
		 	});
		     }
		
	}
	var reserveDateCatch=[];
	var phoneBool=false;
	var inNumBool=false;
	function DetelAdd() {
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
					+ '    预定'
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
					+ '  <input type="date" class="adddetelReservationInformationDetelDateArriveInput" min='+nowDate1+' onchange="DateArriveInput(this)">'
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
					+ '  <input type="date" class="adddetelReservationInformationDetelDateLeaveInput" onchange="DateLeaveInput(this)">'
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
					+ '           <div class="adddetelOperateDetelPreserve" onclick="PreserveSubmit()">保存</div>'
					+ '           <div class="adddetelOperateDetelConcel" onclick="adddetelOperateDetelConcel1()">取消</div> '
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
		}
	});
	}
	function cardChange(ele){
		var cardId=$(ele).val();

			var idNum=$(".adddetelReservationInformationDetelCardInput").val();
			if(CheckIdCard(idNum)!="格式验证通过!"){
				$(".idNumlogol").html(CheckIdCard(idNum));
			}
			else{
	
		$.ajax({
			type : "post",
			url : "../order/indexCardId",
			data : {cardId:cardId},
			dataType : "json", 
			success : function(data) {
				if(data!=null&&data!=""){
					$(".adddetelReservationInformationDetelCardlogol").html("vip");
					$(".adddetelReservationInformationDetelPhoneInput").val(data.phoneNum);
					$(".adddetelReservationInformationDetelNameInput").val(data.vipName);
					$(".idNumlogol").html('<div class="idcard1"></div>');
				}
				else {
					$(".idNumlogol").html('<div class="idcard1">格式正确</div>');
					$(".idcard1").css({"color":"green"})
					$(".adddetelReservationInformationDetelCardlogol").html("*");
				}
				inNumBool=true;
			}})
		}
		     	$(".adddetelReservationInformationDetelCardlogol").html("*");
	}
	function DateChange(){//
		var orderDate=$(".adddetelReservationInformationDetelDateArriveInput").val()+"";
		var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
		if((orderDate=="")||(leaveDate=="")){
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
				$(".RightBottomTotalPriceText").html(0)
			}});
	}
	}
	function caculate(){
		
		var length=$(".adddetelRoomInformationRightContentRoomType").length;
		var price=0;
		var cashPledge=0;
		for(var i=0;i<length;i++){
			
			var x=$(".adddetelRoomInformationRightContentRoomType").get(i);
			var m=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomNumText").val();

			if(m!=""){
			var rp=$(x).parents("td").find(".adddetelRoomInformationRightContentRoomPrice").html();
			var rc=$(x).parents("td").find(".adddetelRoomInformationRightContentCashPledge").html();
			price=parseInt(price)+parseInt(rp);
			cashPledge=parseInt(cashPledge)+parseInt(rc);

			}
		}
		var days=$(".adddetelReservationInformationDeteldayInput").val();
		if(days%1!=0){
			$(".adddetelReservationInformationDeteldayInput").val(0);
		}
		price=days*price;
		var total=parseInt(price)+parseInt(cashPledge);
        $(".RightBottomCashPledgeText").html(cashPledge);
        $(".RightBottomroomPriceText").html(price);
        $(".RightBottomTotalPriceText").html(total);
	}
	function adddetelOperateDetelDelete(){
		var totalRoom=reserveDateCatch;
		var length = $('.adddCheckBox').find('input[type=checkbox]:checked').length;
		length=parseInt(length);
		for(var i=0;i<totalRoom.length;i++){
			var total=0;
			for(var j=0;j<length;j++){
				var x=$('.adddCheckBox').find('input[type=checkbox]:checked').get(j);
				if(reserveDateCatch[i].length!=0){
					if(totalRoom[i][0].roomStyle==$(x).parents("td").children(".adddetelRoomInformationRightContentRoomType").html()){
						total++;

				  }
				}	
			}
			var m=$(".adddetelRoomInformationLeftContentTwoRoomAlreadyReserve").get(i);
			
			var t=parseInt($(m).html());
			var del=t-total;
			var del1=parseInt($($(".adddetelRoomInformationLeftContentTwoRoomReserve").get(i)).val())-total;
			var m1=$(m).html(); 
			if(m1!=0){
			$(m).html(del);
			}
			if($($(".adddetelRoomInformationLeftContentTwoRoomReserve").get(i)).val()!=0){
				$($(".adddetelRoomInformationLeftContentTwoRoomReserve").get(i)).val(del1)
			}
			
			}
		for(var i=0;i<length;i++){			
			var x=$('.adddCheckBox').find('input[type=checkbox]:checked').get(0);
			var y=$(x).parents("tbody");
		    y.remove();
		}
		caculate();
	}
	function DateLeaveInput(ele){
	
		var orderDate=$(".adddetelReservationInformationDetelDateArriveInput").val()+"";
		var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
		if(orderDate==""){}
		else {
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
		}
		DateChange();
	}
	function DateArriveInput(ele){
		
		var orderDate=$(".adddetelReservationInformationDetelDateArriveInput").val()+"";
		var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
		var leaveDateS1=orderDate+' '+0+':'+0+':00'+"";
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
		if(orderDate==""){}
		else{
			var days=$(".adddetelReservationInformationDeteldayInput").val();
			if(parseInt(days)%1==0){
				var t1=orderDate+' '+0+':'+0+':00'+"";
				var t2=leaveDate+' '+0+':'+0+':00'+"";
				
				var formatTimeS1 = new Date(t1).getTime();
				var formatTimeS2=days* 24 * 3600 * 1000;
				var formatTimeS=formatTimeS2+formatTimeS1;
				var date = new Date(formatTimeS);
				var year = date.getFullYear();
				var month = date.getMonth() + 1 + "";
				var day = date.getDate() + "";
				if (month.length == 1) {
					month = "0" + month;
				}
				if (day.length == 1) {
					day = "0" + day;
				}
				var realityDate= year + "-" + month + "-" + day;
				$(".adddetelReservationInformationDetelDateLeaveInput").val(realityDate);
			}
		}
		DateChange();
		}
	
	function changcday(ele){
		var orderDate=$(".adddetelReservationInformationDetelDateArriveInput").val()+"";
		var leaveDate=$(".adddetelReservationInformationDetelDateLeaveInput").val()+"";
		if($(ele).val()%1!=0){
			$(ele).val(0);
		}else if(parseInt($(ele).val())<0){
			$(ele).val(0);
		}
		
		if(orderDate==""){}
		else{
			var days=$(".adddetelReservationInformationDeteldayInput").val();
			if(parseInt(days)%1==0){
				var t1=orderDate+' '+0+':'+0+':00'+"";
				var t2=leaveDate+' '+0+':'+0+':00'+"";
				
				var formatTimeS1 = new Date(t1).getTime();
				var formatTimeS2=days* 24 * 3600 * 1000;
				var formatTimeS=formatTimeS2+formatTimeS1;
				var date = new Date(formatTimeS);
				var year = date.getFullYear();
				var month = date.getMonth() + 1 + "";
				var day = date.getDate() + "";
				if (month.length == 1) {
					month = "0" + month;
				}
				if (day.length == 1) {
					day = "0" + day;
				}
				var realityDate= year + "-" + month + "-" + day;
				$(".adddetelReservationInformationDetelDateLeaveInput").val(realityDate);
				DateChange();
			}
		}

	}
	function changeTwo(ele){
		var cNum=$(ele).val();
		if(cNum%1!=0){
			$(ele).val(0);
		}
		else{
			var allNum=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomAllReserve").html();
			
			allNum=parseInt(allNum);
			
			
				if(cNum>allNum){
					$(ele).val(allNum);
					cNum=allNum;
				}
				var rLength=$(".adddetelRoomInformationRightContentRoomType").length;
				var realityNum;
				var rst=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoom").html();
				var l1=$(".adddetelRoomInformationRightContentRoomType").length;
				var j=0;
				for(var i=0;i<l1;i++){
					var m=$(".adddetelRoomInformationRightContentRoomType").get(i);
					var m1=$(m).html()+"";
					if(rst==m1){
						j++;
					}
				}
    			var roomType=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoom").html();
				rLength=j;
				if(cNum>rLength){
					realityNum=parseInt(cNum)-parseInt(rLength);
					var length=reserveDateCatch.length;
					var Price="";
					var CashPledge="";
				
					for(var i=0;i<length;i++){
						if(reserveDateCatch[i][0].roomStyle==roomType){
							Price=reserveDateCatch[i][0].roomPrice;
							if($(".adddetelReservationInformationDetelCardlogol").html()=="vip"){
								CashPledge=0;
							}
							else{
							CashPledge=reserveDateCatch[i][0].roomCashPledge;
							}
						}
					}
					for(var i=0;i<realityNum;i++){
						var addElement=document.createElement("tbody");
						addElement.classList.add("eleAdd1");
						addElement.innerHTML='<tr><td><div class="adddCheckBox"><input type="checkbox" class="roonTypeCheckBox"></div>'
						+ '                <div class="adddetelRoomInformationRightContentRoomType">'+roomType+'</div>'
						+ '                <div class="adddetelRoomInformationRightContentRoomNum">'
						+ '                  <input class="adddetelRoomInformationRightContentRoomNumText" >'
						+ '                  <div class="adddetelRoomInformationRightContentRoomNumLogol" onclick="logolSet(this)">...</div>'
						+ '               </div>'
						+ '                    <div class="adddetelRoomInformationRightContentRoomPrice">'+Price+'</div>'
						+ '                    <div class="adddetelRoomInformationRightContentCashPledge">'+CashPledge+'</div>'
						+ '                <div class="adddetelRoomInformationRightContentRoomPriceRemarks">'
						+ '                   <input type="text" class="RemarksDetel">'
						+ '                </div>'
						+ '                </td></tr>'
						 document.getElementById("RightContentTable").appendChild(addElement);
					
				}
				}
				else if(cNum<rLength){
				
					if(cNum<=0){
						$(ele).val(0);
					}
					cNum=$(ele).val();
				 realityNum=parseInt(rLength)-parseInt(cNum);
				 for(var k=0;k<realityNum;k++){
					var length=$(".adddetelRoomInformationRightContentRoomType").length;
					   var specialTypeNum;
					
					   var num=0;
					   for(var i=0;i<length;i++){
						   var x=$(".adddetelRoomInformationRightContentRoomType").get(i);
						   if(roomType==$(x).html()){
							   num++;
							   specialTypeNum=i;
							
						   }
					   }
					
					 if(num!=0){
						var x1=$(".adddetelRoomInformationRightContentRoomType").get(specialTypeNum);
						var y=$(x1).parents("tbody");
						y.remove();
				
					}
				 }
				}
		}
	}
	function TwoarrowUp(ele){
		var CanResveNum=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val();
		if(CanResveNum%1!=0){
			$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val(0);
		}
		else {
		
    	var allNum=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomAllReserve").html();
		allNum=parseInt(allNum);
		CanResveNum=parseInt(CanResveNum);
		if(CanResveNum<allNum){
		var roomType=$(ele).parents("td").find($(".adddetelRoomInformationLeftContentTwoRoom")).html();
		length=reserveDateCatch.length;
		var Price="";
		var CashPledge="";
		for(var i=0;i<length;i++){
			if(reserveDateCatch[i].length!=0){
			if(reserveDateCatch[i][0].roomStyle==roomType){
				Price=reserveDateCatch[i][0].roomPrice;
				if($(".adddetelReservationInformationDetelCardlogol").html()=="vip"){
					CashPledge=0;
				}
				else {
					CashPledge=reserveDateCatch[i][0].roomCashPledge;
				}
			}
		}
		}
		var addElement=document.createElement("tbody");
		addElement.classList.add("eleAdd1");
		addElement.innerHTML='<tr><td><div class="adddCheckBox"><input type="checkbox" class="roonTypeCheckBox"></div>'
		+ '                <div class="adddetelRoomInformationRightContentRoomType">'+roomType+'</div>'
		+ '                <div class="adddetelRoomInformationRightContentRoomNum">'
		+ '                  <input class="adddetelRoomInformationRightContentRoomNumText" >'
		+ '                  <div class="adddetelRoomInformationRightContentRoomNumLogol" onclick="logolSet(this)">...</div>'
		+ '               </div>'
		+ '                    <div class="adddetelRoomInformationRightContentRoomPrice">'+Price+'</div>'
		+ '                    <div class="adddetelRoomInformationRightContentCashPledge">'+CashPledge+'</div>'
		+ '                <div class="adddetelRoomInformationRightContentRoomPriceRemarks">'
		+ '                   <input type="text" class="RemarksDetel">'
		+ '                </div>'
		+ '                </td></tr>'
		 document.getElementById("RightContentTable").appendChild(addElement);
    		CanResveNum=(parseInt(CanResveNum)+1);
			$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val(CanResveNum);
		}
		}
		
	}
	function TwoarrowDown(ele){
		var CanResveNum=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val();
		if(CanResveNum%1!=0){
			$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val(0);
		}
		else {
			if(CanResveNum>0){
		if(document.getElementsByClassName("adddetelRoomInformationRightContentRoomType")[0]!=null){
             var roomType=$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoom").html();
          
			var length=$(".adddetelRoomInformationRightContentRoomType").length;
			   var specialTypeNum;
			   var num=0;
			   for(var i=0;i<length;i++){
				   var x=$(".adddetelRoomInformationRightContentRoomType").get(i);
				   if(roomType==$(x).html()){
					   num++;
					   specialTypeNum=i;
				   }
			   }
			   if(num!=0){
			    var x1=$(".adddetelRoomInformationRightContentRoomType").get(specialTypeNum);
				var y=$(x1).parents("tbody");
				y.remove();
			   }

					CanResveNum--;
					$(ele).parents("td").find(".adddetelRoomInformationLeftContentTwoRoomReserve").val(CanResveNum);
				}
				}
		}
		
	}
	function allCheckboxOp(){
		var checked=0;
		if(document.getElementsByClassName("roonTypeCheckBox")[0]!=null){
		var length=$(".roonTypeCheckBox").length;
		for(var i=0;i<length;i++){
			var x=$(".roonTypeCheckBox").get(i);
			if($(x).is(':checked')){
				checked++;
			}
		}
		if(checked==length){
			$("#allCheckbox").attr("checked","true");
			checkBoxNum++;
		}
		}
	}

	function allCheckbox() {
	if($("#allCheckbox").attr("checked")=="checked"){

			$('.adddCheckBox').find('input[type=checkbox]').attr("checked",
					"true");
		}
	else {
			$('.adddCheckBox').find('input[type=checkbox]').removeAttr(
					"checked");
	
	}
	}
function autoSequence(){//排房功能
	var totalRoom=reserveDateCatch;
		var checkBoxLength = $('.adddCheckBox').find(
		'input[type=checkbox]:checked').length;
var checkBoxLength1 = $('.adddCheckBox').find('input[type=checkbox]').length;
for (var i = 0; i < checkBoxLength - 1; i++) {
	for (var j = i + 1; j < checkBoxLength; j++) {
		var x1 = $('.adddCheckBox')
				.find('input[type=checkbox]:checked').get(i);
		var y1 = $(x1).parents("td").find(
				".adddetelRoomInformationRightContentRoomNumText")
				.val();
		var x2 = $('.adddCheckBox')
				.find('input[type=checkbox]:checked').get(j);
		var y2 = $(x2).parents("td").find(
				".adddetelRoomInformationRightContentRoomNumText")
				.val();
		if (y1 == y2) {
			$(x2).parents("td").find(
					".adddetelRoomInformationRightContentRoomNumText")
					.val("");
		}
	}
}

for (i = 0; i < checkBoxLength; i++) {

	var x = $('.adddCheckBox').find('input[type=checkbox]:checked')
			.get(i);
	var y = $(x).parents("td").children(
			".adddetelRoomInformationRightContentRoomType").html();

	var text = $(x).parents("td").children(
			".adddetelRoomInformationRightContentRoomNum").children(
			".adddetelRoomInformationRightContentRoomNumText").val()
			+ "";
  for (var j = 0; j < totalRoom.length; j++) {
		 bbp: for(var q=0;q<totalRoom[j].length;q++){
			  if((y==totalRoom[j][q].roomStyle)&&(text == "")){
				  for(var m=0;m<checkBoxLength1;m++){ 
						var x1 = $('.adddCheckBox').find('input[type=checkbox]').get(m);
						var text1=$(x1).parents("td").find(".adddetelRoomInformationRightContentRoomNumText").val()+ "";
						if(text1==totalRoom[j][q].hetelId){
							continue bbp;
						}
				  }
					$(x).parents("td").find(".adddetelRoomInformationRightContentRoomNumText").val(totalRoom[j][q].hetelId);
					break;
			  }
			
		  }

	}
}
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
$(m).html(total);
}
caculate();

	}
function adddetelOperateDetelConcel1(){
	$(".adddetel1").remove();
}
function adddetelOperateDetelConcel() {
	if(document.getElementsByClassName("CheckInMainPanelDirectCheckIn")[0]!=null){
	 $(".CheckInMainPanelDirectCheckIn").css({"width":"100px"})
	 $(".CheckInMainPanelReserveCheckIn").css({"width":"150px"})
	 $(".CheckInMainPanelCheckInOperate").css({"width":"100px"})
	 $(".CheckInMainPanelDirectCheckIn").css({"background":"rgb(238, 221, 130)"})
	 $(".CheckInMainPanelReserveCheckIn").css({"background":"rgb(255, 215, 0)"})
	 $(".CheckInMainPanelCheckInOperate").css({"background":"rgb(238, 221, 130)"})
	if(checkinparm==0){
		CheckIn();
		}
	else if(checkinparm==1){
		CheckInOperate();
	}
	
	}
}
var logolSetEle;
function logolSet(ele) {
	var totalRoom=reserveDateCatch;
    var roomType=$(ele).parents("td").find(".adddetelRoomInformationRightContentRoomType").html();
    var floor1=0;
      for(var i=0;i<totalRoom.length;i++){
    	  for(var j=0;j<totalRoom[i].length;j++){
    		  var t1=parseInt(totalRoom[i][j].floor);
    		  if(t1>floor1){
    			  floor1=totalRoom[i][j].floor;
    		  }
    		 
      }
      }

	var html = '<div class="logolFunctionPanel">'
			+ '<div class="logolFunction">'
			+ ' <div class="logolFunctionTitel">'
			+ '    选房'
			+ '   </div>'
			+ '   <div class="logolFunctionOption">'
			+ '     <div class="logolFunctionOptionLeft">'
			+ '    <div class="logolFunctionOptionLeftTitle">房型</div>'
			+ '     <div class="logolFunctionOptionLeftRoomStyle"></div>'
			+ '   </div>'
			+ '   <div class="logolFunctionOptionRight">'
			+ '    <div class="logolFunctionOptionRightTitle">'
			+ '       <div class="logolFunctionOptionRightTitleFloor">楼层</div>'
			+ '     <div class="logolFunctionOptionRightTitleRoomNum">房号</div>'
			+ '    </div>'
			+ '   <div class="logolFunctionOptionRightDetel">'
	
	var f1=[];
	for(var i=0;i<floor1;i++) {
		   var a=[];
		   var q=0;
			 for(var  j=0;j<totalRoom.length;j++) {
			 		for(var m=0;m<totalRoom[j].length;m++){
			 			 var f=parseInt(totalRoom[j][m].floor);
			 		     if((f==parseInt(i+1))&&(totalRoom[j][0].roomStyle==roomType)){
			 		    	 a[q]=totalRoom[j][m];
			 		    	 q++;
			 		     }
			 		  }
			 		}
		f1[i]=a;
	}
		for(var i=0;i<f1.length;i++){
		html = html + '<div class="logolFunctionOptionRightDetelList">'
				+ '<div class="logolFunctionOptionRightDetelFloor">'
				+ (i + 1) + '</div>'
				+ '<div class="logolFunctionOptionRightDetelRoomNum">'
		for (var j = 0; j <f1[i].length; j++) {
		html = html
					+ '<div class="logolFunctionOptionRightDetelRoomNumList">'
					+ '           <input class="checkboxRoomNum1" type="checkbox" onclick="checkboxRoomNum1(this)"/>'
					+ '           <div class="checkboxRoomNum2">'
					+ f1[i][j].hetelId + '</div>' + '  </div>'
		}
		html = html + '</div>' + '</div>'
		}

	html = html + '</div>' + ' </div>' + ' </div>'
			+ '<div class="logolFunctionInAndOut">'
			+ '<div class="logolFunctionIn" onclick="logolFunctionIn()">'
			+ '  确定' + '</div>'
			+ '<div class="logolFunctionOut" onclick="logolFunctionOut()">'
			+ '  取消' + '</div>' + '</div>' + '</div>'
	$(".DetelAdddetelSmallLogal").html(html);
	var roomType = $(ele).parents("td").find(".adddetelRoomInformationRightContentRoomType").html();
	$(".logolFunctionOptionLeftRoomStyle").html(roomType);
	logolSetEle = ele;


}
function logolFunctionIn() {
	var checkboxRoomNum2;
	var x = $('.logolFunctionOptionRightDetel').find(
			'input[type=checkbox]:checked').get(0);
	var checkboxRoomNum2 = $(x).parents(
			".logolFunctionOptionRightDetelRoomNumList").find(
			".checkboxRoomNum2").html();
	$(logolSetEle).parents('td').find(
			'.adddetelRoomInformationRightContentRoomNumText').val(
			checkboxRoomNum2);
	$(".DetelAdddetelSmallLogal").html("");
}
function checkboxRoomNum1(ele) {
	$(ele).parents('.logolFunctionOptionRightDetel').find(
			'input[type=checkbox]').not(this).attr("checked", false);
	$(ele).attr("checked", true);

}
function logolFunctionOut() {
	$(".DetelAdddetelSmallLogal").html("");
}
function DetelMore() {
	allOrder();
	var MoreDetel = $('.roomReservationsTopPanelDetelMoreDetel').html()
			+ "";
	if (MoreDetel == null || MoreDetel == "") {
		var html = '<div class="DetelMoreorderName1">姓名:</div><input type="text" id="DetelMoreorderName">'
				+ '<div class="DetelMorephoneNum1">手机号:</div><input type="text" id="DetelMorephoneNum">'
				+ '<div class="DetelMoreorderNum1">订单编号:</div><input type="text" id="DetelMoreorderNum">'
				+ '<div class="indexDetelMoreorde" onclick="DetelMoreIndex()">查询</div>'
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
		dayChange();
		$('.roomReservationsTopPanelDetelMoreDetel').html("");

	}
} 


function DetelMoreIndex(){
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
		dayChange();

}
function CheckIdCard(idcard){ //功能：检查身份证号码
	var Errors=new Array( 

		"格式验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!",
					"身份证号码校验错误!", "身份证地区非法!");
			var area = {
				11 : "北京",
				12 : "天津",
				13 : "河北",
				14 : "山西",
				15 : "内蒙古",
				21 : "辽宁",
				22 : "吉林",
				23 : "黑龙江",
				31 : "上海",
				32 : "江苏",
				33 : "浙江",
				34 : "安徽",
				35 : "福建",
				36 : "江西",
				37 : "山东",
				41 : "河南",
				42 : "湖北",
				43 : "湖南",
				44 : "广东",
				45 : "广西",
				46 : "海南",
				50 : "重庆",
				51 : "四川",
				52 : "贵州",
				53 : "云南",
				54 : "西藏",
				61 : "陕西",
				62 : "甘肃",
				63 : "青海",
				64 : "宁夏",
				65 : "新疆",
				71 : "台湾",
				81 : "香港",
				82 : "澳门",
				91 : "国外"
			}
			var idcard, Y, JYM;
			var S, M;
			var idcard_array = new Array();
			idcard_array = idcard.split("");
			//地区检验 
			if (area[parseInt(idcard.substr(0, 2))] == null)
				return Errors[4];
			//身份号码位数及格式检验 
			switch (idcard.length) {
			case 15:
				if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0
						|| ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard
								.substr(6, 2)) + 1900) % 4 == 0)) {
					ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性 
				} else {
					ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性 
				}
				if (ereg.test(idcard))
					return Errors[0];
				else
					return Errors[2];
				break;
			case 18:
				//18位身份号码检测 
				//出生日期的合法性检查 
				//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
				//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
				if (parseInt(idcard.substr(6, 4)) % 4 == 0
						|| (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard
								.substr(6, 4)) % 4 == 0)) {
					ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式 
				} else {
					ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式 
				}
				if (ereg.test(idcard)) {//测试出生日期的合法性 
				//计算校验位 
					S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10]))
							* 7
							+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
							* 9
							+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
							* 10
							+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
							* 5
							+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
							* 8
							+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
							* 4
							+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
							* 2 + parseInt(idcard_array[7]) * 1
							+ parseInt(idcard_array[8]) * 6
							+ parseInt(idcard_array[9]) * 3;
					Y = S % 11;
					M = "F";
					JYM = "10X98765432";
					M = JYM.substr(Y, 1);//判断校验位 
					if (M == idcard_array[17])
						return Errors[0]; //检测ID的校验位 
					else
						return Errors[3];
				} else
					return Errors[2];
				break;
			default:
				return Errors[1];
				break;
			}

		}


function PreserveSubmit() {
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
		}
       else {
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
			reserve.orderState = "已预订"

			order[0] = reserve;
	       

			$
					.ajax({
						type : "post",
						dataType : "json",
						async : false,
						url : "../order/addReserveOrder",
						traditional : true,
						data : {
							Demo : JSON.stringify(order),roomOrder: JSON.stringify(Arrlength)
						},
						success : function(data) {
							alert("保存成功");
							$(".DetelAdddetel").html("");
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
							var ylength = yList.length;
							var html1 = "";
							var pageNum = $(
									".roomLeftPanelPageChangeWitchPage2")
									.html();
							var allPageNum = $(
									".roomLeftPanelPageChangeWitchPage4")
									.html();
							if ((ylength - 1) % 15 == 0) {
								$(".roomLeftPanelPageChangeWitchPage2")
										.html(parseInt(pageNum) + 1);
								$(".roomLeftPanelPageChangeWitchPage4")
										.html(parseInt(allPageNum) + 1);
								pageNum = parseInt(pageNum) + 1;

							}
							if (yList.length < 15) {
								var h = yList.length;
							} else
								h = 15 * pageNum;
							if (yList.length < 15 * pageNum) {
								h = yList.length
							}
							$(".roomLeftPanelPageChangeAllRow2").html(
									yList.length);

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
										+ getDate(yList[i].orderDate)
										+ '</li>'
										+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
										+ getDate(yList[i].arriveDate)
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

	}
}

/* 翻页部分 */
function firstPage1() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;

		if (index >= 1) {
			document.getElementById("page-num").innerHTML = 1;
			y = 15;
			html1 = htmChange(1, y);

			$("#data-table").html(html1);
		}
	}
}

function lastPage() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index--;
		if (index >= 1) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			html1 = htmChange(index, y);
			$("#data-table").html(html1);
		}
	}
}
function nextPage() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		if (index <= document.getElementById("page-max").innerHTML) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			if (index * 15 > yList.length) {
				y = yList.length;
			}
			html1 = htmChange(index, y);

			$("#data-table").html(html1);
		}
	}
}
function EndPage() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		var all1 = document.getElementById("page-max").innerHTML;
		if (index <= all1) {
			document.getElementById("page-num").innerHTML = all1;
			y = (all1 * 15);
			if ((all1 * 15) > yList.length) {
				y = yList.length;
			}
			html1 = htmChange(all1, y);
			$("#data-table").html(html1);
		}
	}
}
function GotoPage() {

	var text = $(".roomLeftPanelPageChangeText").val();
	var all1 = $("#page-max").html();

	if (!(text > 0 && text <= all1)) {
		alert("查询页面不存在");
	} else {
		if (yList.length > 15) {

			var y;
			var i;
			var html1 = "";
			document.getElementById("page-num").innerHTML = text;
			y = text * 15;
			if ((text * 15) > yList.length) {
				y = yList.length;
			}

			html1 = htmChange(text, y);

			$("#data-table").html(html1);
		}
	}
}
function firstRealityCheckIn(){
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;

		if (index >= 1) {
			document.getElementById("page-num").innerHTML = 1;
			y = 15;
			html1 = htmRealityCheckIn(1, y);

			$("#data-table").html(html1);
		}
	}
}
function lastRealityCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index--;
		if (index >= 1) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			html1 = htmRealityCheckIn(index, y);
			$("#data-table").html(html1);
		}
	}
}
function nextRealityCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		if (index <= document.getElementById("page-max").innerHTML) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			if (index * 15 > yList.length) {
				y = yList.length;
			}
			html1 = htmRealityCheckIn(index, y);

			$("#data-table").html(html1);
		}
	}
}
function EndRealityCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		var all1 = document.getElementById("page-max").innerHTML;
		if (index <= all1) {
			document.getElementById("page-num").innerHTML = all1;
			y = (all1 * 15);
			if ((all1 * 15) > yList.length) {
				y = yList.length;
			}
			html1 = htmRealityCheckIn(all1, y);
			$("#data-table").html(html1);
		}
	}
}
function GotoRealityCheckIn() {

	var text = $(".roomLeftPanelPageChangeText").val();
	var all1 = $("#page-max").html();

	if (!(text > 0 && text <= all1)) {
		alert("查询页面不存在");
	} else {
		if (yList.length > 15) {

			var y;
			var i;
			var html1 = "";
			document.getElementById("page-num").innerHTML = text;
			y = text * 15;
			if ((text * 15) > yList.length) {
				y = yList.length;
			}

			html1 = htmRealityCheckIn(text, y);

			$("#data-table").html(html1);
		}
	}
}
function htmRealityCheckIn(index, y){
	var html1 = "";
	for (i = (index - 1) * 15; i < y; i++) {
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
					if(document.getElementsByClassName("CheckInMainPanel")[0]!=null){
					
                    html1+='<li class="roomReservationsButtomPanelTitleOperate1">'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Check" onclick="CheckInCheck(this)">查看</div>'
						+ '<div class="roomReservationsButtomPanelTitleOperate1Modify" onclick="CheckInModify(this)">修改</div>'
					+ '</li>' + '</ul></td></tr>'
					}else if(document.getElementsByClassName("CheckDetel")[0]!=null){
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
							+ '</li>' + '</ul></td></tr>'
					}

	}
	return html1;
}
function firstPageCheckIn1() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;

		if (index >= 1) {
			document.getElementById("page-num").innerHTML = 1;
			y = 15;
			html1 = htmChangeCheckIn(1, y);

			$("#data-table").html(html1);
		}
	}
}

function lastPageCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index--;
		if (index >= 1) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			html1 = htmChangeCheckIn(index, y);
			$("#data-table").html(html1);
		}
	}
}
function nextPageCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		if (index <= document.getElementById("page-max").innerHTML) {
			document.getElementById("page-num").innerHTML = index;
			y = index * 15;
			if (index * 15 > yList.length) {
				y = yList.length;
			}
			html1 = htmChangeCheckIn(index, y);

			$("#data-table").html(html1);
		}
	}
}
function EndPageCheckIn() {
	if (yList.length > 15) {
		var y;
		var i;
		var html1 = "";
		var index = document.getElementById("page-num").innerHTML;
		index++;
		var all1 = document.getElementById("page-max").innerHTML;
		if (index <= all1) {
			document.getElementById("page-num").innerHTML = all1;
			y = (all1 * 15);
			if ((all1 * 15) > yList.length) {
				y = yList.length;
			}
			html1 = htmChangeCheckIn(all1, y);
			$("#data-table").html(html1);
		}
	}
}
function GotoPageCheckIn() {

	var text = $(".roomLeftPanelPageChangeText").val();
	var all1 = $("#page-max").html();

	if (!(text > 0 && text <= all1)) {
		alert("查询页面不存在");
	} else {
		if (yList.length > 15) {

			var y;
			var i;
			var html1 = "";
			document.getElementById("page-num").innerHTML = text;
			y = text * 15;
			if ((text * 15) > yList.length) {
				y = yList.length;
			}

			html1 = htmChangeCheckIn(text, y);

			$("#data-table").html(html1);
		}
	}
}
function htmChangeCheckIn(index, y){
	var html1 = "";
	for (i = (index - 1) * 15; i < y; i++) {
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
	return html1;
}
function htmChange(index, y) {
	var html1 = "";
	for (i = (index - 1) * 15; i < y; i++) {
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
				+ getDate(yList[i].orderDate)

				+ '</li>'
				+ '<li class="roomReservationsButtomPanelTitleArriveTime1">'
				+ getDate(yList[i].arriveDate)

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
	return html1;
}
/* 翻页功能结束 */