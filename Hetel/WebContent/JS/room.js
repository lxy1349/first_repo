
$(function() {
     var changPage1="";
    $(".roomleftPanelImageRoomState").each(function(){
    	if($(this).text()=="定"){
    		$(this).parent().css({"background": "#00CD00"});
    		$(this).parent().children("div[class='roomleftPanelImageImg']").html("<img src='../img/people10.png'>");
    	}
    	else if($(this).text()=="住"){
    		$(this).parent().css({"background": "#7B68EE"});
    		$(this).parent().children("div[class='roomleftPanelImageImg']").html("<img src='../img/people03.png'>");
    	}
    	else if($(this).text()=="坏"){
    		$(this).parent().css({"background": "red"});
    	}
    });
    


});
$(function(){//右侧遍历局部刷新部分   
      
       $('.roomRightPanelStateCheckBox1').find('input[type=checkbox]').bind('click', function(){
    	   $('.roomRightPanelStateCheckBox1').find('input[type=checkbox]').not(this).attr("checked", false);
    	   ajaxLeft();
           
       });
      $('.roomRightPanelStateCheckBox2').find('input[type=checkbox]').bind('click', function(){
        $('.roomRightPanelStateCheckBox2').find('input[type=checkbox]').not(this).attr("checked", false);
        ajaxLeft();
      });
      $('.roomRightPanelStateCheckBox3').find('input[type=checkbox]').bind('click', function(){
          $('.roomRightPanelStateCheckBox3').find('input[type=checkbox]').not(this).attr("checked", false);
          ajaxLeft();
        });

});


function RoomObject(){
	    var room={};
	    if($('.roomRightPanelStateCheckBox1').find('input[type=checkbox]:checked').length==0){
	    	room.state="";
	    }
	    else {
	    var State=$('.roomRightPanelStateCheckBox1').find('input[type=checkbox]:checked').parents(".checkboxStateMain").find(".checkboxRoomState").html();
	    if(State=="预定"||State==" 预定"||State=="预定 "){
	    	State="定"
	    }
	    else if(State=="住人"){
	    	State="住"
	    }
	    else if(State=="维护"){
	    	State="坏"
	    }
	    room.state=State;
	    }
	    if($('.roomRightPanelStateCheckBox2').find('input[type=checkbox]:checked').length==0){
	    	room.style="";
	    }
	    else{
	    	room.style=$('.roomRightPanelStateCheckBox2').find('input[type=checkbox]:checked').parents(".checkboxTypeMain").find(".checkboxRoomType").html();
	    }
	    if($('.roomRightPanelStateCheckBox3').find('input[type=checkbox]:checked').length==0){
	    	room.floor="";
	    }
	    else {
	    	room.floor=$('.roomRightPanelStateCheckBox3').find('input[type=checkbox]:checked').val();
	    }
        return room;
}
function ajaxLeft() {//实现左侧刷新
           
		var room = RoomObject();
		if (room.floor == null || room.floor == "" || room.floor == "undefine") {
			room.floor = 0;
		}
				$.ajax({
					type : "post",
					url : "../user/indexByRoomState",
					data : {
						state1 : room.state,
						style1 : room.style,
						floor1 : room.floor
					},
					dataType : "json",
					success : function(data) {
                        
						var json = JSON.stringify(data);
						var list = eval(json);
						
						if (list.length > 0) {
                            
							$(".roomLeftPanel").empty();

							var html1 = "";
							
							if(list[0][0].hetelId!=1){
							for (var i = 0; i < list.length; i++) {

								html1 = html1 +
								' <div class="roomLeftPanelLableDetel">'
								+' <div class="roomLeftPanelLable">'
										+ list[i][0].floor + ' </div>'
										+ '<div class="roomleftPanelImage1">'

								for (var j = 0; j < list[i].length; j++) {

									if (list[i][j].orderName == null) {
										list[i][j].orderName = "";
									}
									if (list[i][j].vip == null) {
										list[i][j].vip = "";
									}
									html1 = html1
											+ '<div class="roomleftPanelImage" onclick="changeColor(this)">'
											+ ' <div class="roomleftPanelImageLable">'
											+ list[i][j].hetelId
											+ '</div>'
											+ '<div class="roomleftPanelImageStyle">'
											+ list[i][j].roomStyle
											+ '</div>'
											+ ' <div class="roomleftPanelImageName">'
											+ list[i][j].orderName
											+ '</div>'
											+ ' <div class="roomleftPanelImageImg">'
											+ '</div>'
											+ ' <div class="roomleftPanelImageVip">'
											+ list[i][j].vip
											+ '</div>'
											+ '<div class="roomleftPanelImageRoomState">'
											+ list[i][j].hetelState + '</div>'
											+'<div class="roomleftPanelImageRoomDelete"></div>'
											+ '</div>'
								}
								  html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
								html1 = html1 + '</div></div>'

							}
							}

							$(".roomLeftPanel").html(html1);
							backColorChange();
						}
					}
				});
	}
    function backColorChange(){
		$(".roomleftPanelImageRoomState")
		.each(
				function() {//改变背景
					if ($(this).text() == "定") {
						$(this).parent().css({
							"background" : "#00CD00"
						});
					
						$(this)
								.parent()
								.children(
										"div[class='roomleftPanelImageImg']")
								.html(
										"<img src='../img/people10.png'>");
					}
					else if($(this).text() == "住"){
						$(this).parent().css({
							"background" : "#7B68EE"
						});
					
						$(this)
								.parent()
								.children(
										"div[class='roomleftPanelImageImg']")
								.html(
								"<img src='../img/people03.png'>");
					}
					else if($(this).text() == "坏"){
						$(this).parent().css({"background": "red"});
					}
				});
    } 
	function RoomState() {
		$(".roomLeftPanelTopRoomState").css({
			"background" : "#FFD700"
		});
		$(".roomLeftPanelTopReservations").css({
			"background" : "#EEDD82"
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
		$.ajax({
					type : "post",
					url : "../user/findAllInformation",
					data : {},
					dataType : "json",
					success : function(data) {
						var json = JSON.stringify(data);
						var list = eval(json);
						if (list[0].length > 0) {
							$('.roomLeftPanelButtom').empty();
							var html1 = "";
							
							if(list[0][0][0].hetelId!=1){
							for (var i = 0; i < list[0].length; i++) {

								html1 = html1 +
								' <div class="roomLeftPanelLableDetel">'
								+' <div class="roomLeftPanelLable">'
										+ list[0][i][0].floor + ' </div>'
										+ '<div class="roomleftPanelImage1">'

								for (var j = 0; j < list[0][i].length; j++) {

									if (list[0][i][j].orderName == null) {
										list[0][i][j].orderName = "";
									}
									if (list[0][i][j].vip == null) {
										list[0][i][j].vip = "";
									}
									html1 = html1
											+ '<div class="roomleftPanelImage" onclick="changeColor(this)">'
											+ ' <div class="roomleftPanelImageLable">'
											+ list[0][i][j].hetelId
											+ '</div>'
											+ '<div class="roomleftPanelImageStyle">'
											+ list[0][i][j].roomStyle
											+ '</div>'
											+ ' <div class="roomleftPanelImageName">'
											+ list[0][i][j].orderName
											+ '</div>'
											+ ' <div class="roomleftPanelImageImg">'
											+ '</div>'
											+ ' <div class="roomleftPanelImageVip">'
											+ list[0][i][j].vip
											+ '</div>'
											+ '<div class="roomleftPanelImageRoomState">'
											+ list[0][i][j].hetelState + '</div>'
											+'<div class="roomleftPanelImageRoomDelete"></div>'
											+ '</div>'
								}
								  html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
								html1 = html1 + '</div></div>'

							}
							
							var html2='<div class="roomLeftPanel">'	+
							
							html1+'</div>'+
						'<div class="roomRightPanel">'+
							'<form action="roomIndex" name="form">'+
						'		<div class="roomRightPanelLable">房间检索</div>'+
						'		<div class="roomRightPanelIndex">'+
						'			<div class="roomRightPanelIndexDemo">'+
						'				<input class="roomRightPanelIndexDemoText"  type="text"  placeholder="房号/姓名" name="Index">'+
						'				<div class="roomRightPanelIndexDemopage" onclick="Indexsubmit()">'+
						'					<img src="../img/sousuo.jpg">'+
						'				</div>'+
						'			</div>'+
						'		</div>'+
						'	</form>'+
						'	<div class="roomRightPanelState">'+
						'		<div class="roomRightPanelS">房态</div>'+
						'		<div class="roomRightPanelStateCheckBox1">'+
						'			<div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">预定 </span><span class="colorRoomState1"></span></div>'+
						'			<div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">空</span><span class="colorRoomState2"></span></div>'+
						'			<div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">住人</span><span class="colorRoomState3"></span></div>'+
						'           <div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">维护</span><span class="colorRoomState4"></span></div>'+
						'		</div>'+
						'	</div>'+
						'	<div class="roomRightPanelType">'+
						'		<div class="roomRightPanelT">房型</div>'+
						'		<div class="roomRightPanelStateCheckBox2">'
						for(var i=0;i<list[1].length;i++){
						html2+='<div class="checkboxTypeMain"><input type="checkbox"><span class="checkboxRoomType">'+list[1][i]+'</span></div>'
						}
							html2+='		</div>'+
						'	</div>'+
						'	<div class="roomRightPanelFloor">'+
						'		<div class="roomRightPanelF">总房数</div>'+
						'		<div class="roomRightPanelStateCheckBox3">'
				        for(var i=1;i<=list[0].length;i++){
				        	html2+='<input type="checkbox" value="'+i+'">'+i+'楼<br>'
				        }
							html2+='		</div>'+
						'	</div>'+
                        ' </div>'+
                        '<div class="roomSet" onclick="roomSet()">房间设置</div>'+
                        '<div class="roomBadSet" onclick="roomBadSet()">维护设置</div>'+
                        '<div class="roomReSet" onclick="roomReset()">房间重置</div>'+   
                        '<div class="floorReSet" onclick="floorReset()">楼层重置</div>'+
                       
                        '</div>'
							
							}

							$(".roomLeftPanelButtom").html(html2);

						}
						  $('.roomRightPanelStateCheckBox1').find('input[type=checkbox]').bind('click', function(){
					    	   $('.roomRightPanelStateCheckBox1').find('input[type=checkbox]').not(this).attr("checked", false);
					    	   ajaxLeft();
					      
					       });
					      $('.roomRightPanelStateCheckBox2').find('input[type=checkbox]').bind('click', function(){
					        $('.roomRightPanelStateCheckBox2').find('input[type=checkbox]').not(this).attr("checked", false);
					        ajaxLeft();
					      });
					      $('.roomRightPanelStateCheckBox3').find('input[type=checkbox]').bind('click', function(){
					          $('.roomRightPanelStateCheckBox3').find('input[type=checkbox]').not(this).attr("checked", false);
					          ajaxLeft();
					        });
					      backColorChange();
					}
				});

	}

	function Indexsubmit(){
		var text=$(".roomRightPanelIndexDemoText").val();

		$.ajax({
			type : "post",
			url : "../user/findFormText",
			dataType : "json",
			data : {text:text},
			success : function(data) {
				var json = JSON.stringify(data);
				var list = eval(json);
				if (list.length > 0) {

					$(".roomLeftPanel").empty();

					var html1 = "";
					
					if(list[0][0].hetelId!=1){
					for (var i = 0; i < list.length; i++) {

						html1 = html1 +
						 '<div class="roomLeftPanelLableDetel">'
						+' <div class="roomLeftPanelLable">'
								+ list[i][0].floor + ' </div>'
								+ '<div class="roomleftPanelImage1">'

						for (var j = 0; j < list[i].length; j++) {

							if (list[i][j].orderName == null) {
								list[i][j].orderName = "";
							}
							if (list[i][j].vip == null) {
								list[i][j].vip = "";
							}
							html1 = html1
									+ '<div class="roomleftPanelImage" onclick="changeColor(this)">'
									+ ' <div class="roomleftPanelImageLable">'
									+ list[i][j].hetelId
									+ '</div>'
									+ '<div class="roomleftPanelImageStyle">'
									+ list[i][j].roomStyle
									+ '</div>'
									+ ' <div class="roomleftPanelImageName">'
									+ list[i][j].orderName
									+ '</div>'
									+ ' <div class="roomleftPanelImageImg">'
									+ '</div>'
									+ ' <div class="roomleftPanelImageVip">'
									+ list[i][j].vip
									+ '</div>'
									+ '<div class="roomleftPanelImageRoomState">'
									+ list[i][j].hetelState + '</div>'
									+'<div class="roomleftPanelImageRoomDelete"></div>'
									+ '</div>'
						}
                        html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
						html1 = html1 + '</div></div>'

					}
					}

					$(".roomLeftPanel").html(html1);

				}
				
		backColorChange();
			}
			}); 
	}

/*	var OpentingTime = new Date();
	
	function AutoUpdate(){
			var currentTime = new Date();
			if(currentTime.getHours()=="12"&&currentTime.getMinutes()=="0"&&currentTime.getSeconds()=="0"){
				$
				.ajax({
					type : "post",
					url : "../order/changeRoomstate",
					data : {},
					dataType : "json",
					success : function(data) {
						alert("主页面更新")
					}})
			}
			setTimeout(AutoUpdate,1000);
		}
	setTimeout(AutoUpdate,1000);*/