<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
</head>

<link rel="stylesheet" href="../CSS/FrontDeskOpenRoom.css"
	type="text/css" />
<link rel="stylesheet" href="../CSS/jisuanji.css" type="text/css" />
<link rel="stylesheet" href="../CSS/addOrder.css" type="text/css" />
<link rel="stylesheet" href="../CSS/CheckIn.css" type="text/css" />
<style type="text/css">
</style>
<body>
	<input type="hidden" value='${username}' id="hiddenUserName">
	<div class="mainPanel">
		<div class="roomLeftPanelTop">
			<div class="roomLeftPanelTopRoomState" onclick="RoomState()">房态</div>
			<div class="roomLeftPanelTopReservations" onclick="TopReservations()">预定</div>
			<div class="roomLeftPanelTopCheckIn" onclick="CheckIn()">入住</div>
			<div class="roomLeftPanelTopCheckOut" onclick="CheckOut()">退房</div>
			<div class="roomLeftPanelTopCheckOutCheck" onclick="CheckOutCheck()">退房订单</div>
		</div>
		<div class="roomLeftPanelButtom">
			<div class="roomLeftPanel">
				<c:forEach var="x" begin="1" end="${hetelLogol.get(0).size() }">
				    <div class="roomLeftPanelLableDetel">
					<div class="roomLeftPanelLable">${ hetelLogol.get(0).get(x-1).get(0).getFloor()}</div>
					<div class="roomleftPanelImage1">
						<c:forEach var="y" begin="1" end="${hetelLogol.get(0).get(x-1).size()}">
							<div class="roomleftPanelImage" onclick="changeColor(this)">
								<div class="roomleftPanelImageLable">${hetelLogol.get(0).get(x-1).get(y-1).getHetelId() }</div>
								<div class="roomleftPanelImageStyle">${hetelLogol.get(0).get(x-1).get(y-1).getRoomStyle() }</div>
								<div class="roomleftPanelImageName">${hetelLogol.get(0).get(x-1).get(y-1).getOrderName() }</div>
								<div class="roomleftPanelImageImg"></div>
								<div class="roomleftPanelImageVip">${hetelLogol.get(0).get(x-1).get(y-1).getVip() }</div>
								<div class="roomleftPanelImageRoomState">${hetelLogol.get(0).get(x-1).get(y-1).getHetelState()}</div>
								<div class="roomleftPanelImageRoomDelete"></div>
							</div>

						</c:forEach>
                          <div class="roomResetLogol" onclick="roomResetLogol(this)"></div>
                        </div>
					</div>
				</c:forEach>
			</div>
			<div class="roomRightPanel">
				<form action="roomIndex" name="form">
					<div class="roomRightPanelLable">房间检索</div>
					<div class="roomRightPanelIndex">
						<div class="roomRightPanelIndexDemo">
							<input class="roomRightPanelIndexDemoText" type="text"
								placeholder="房号/姓名" name="Index">
							<div class="roomRightPanelIndexDemopage" onclick="Indexsubmit()">
								<img src="../img/sousuo.jpg">
							</div>
						</div>
					</div>
				</form>
				<div class="roomRightPanelState">
					<div class="roomRightPanelS">房态</div>
					<div class="roomRightPanelStateCheckBox1">
					    <div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">预定</span><span class="colorRoomState1"></span></div>
					    <div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">空</span><span class="colorRoomState2"></span></div>
					    <div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">住人</span><span class="colorRoomState3"></span></div>
					    <div class="checkboxStateMain"><input type="checkbox"><span class="checkboxRoomState">维护</span><span class="colorRoomState4"></span></div> 
					</div>
				</div>
				<div class="roomRightPanelType">
					<div class="roomRightPanelT">房型</div>
					<div class="roomRightPanelStateCheckBox2">
					<c:forEach var="y" begin="1" end="${hetelLogol.get(1).size()}">
					<div class="checkboxTypeMain"><input type="checkbox"><span class="checkboxRoomType">${hetelLogol.get(1).get(y-1)}</span></div>
					</c:forEach>
					</div>
				</div>
				<div class="roomRightPanelFloor">
					<div class="roomRightPanelF">总房数</div>
					<div class="roomRightPanelStateCheckBox3">
					<c:forEach var="y" begin="1" end="${hetelLogol.get(0).size()}">
						<input type="checkbox" value=${ hetelLogol.get(0).get(y-1).get(0).getFloor()}>${ hetelLogol.get(0).get(y-1).get(0).getFloor()}楼<br>
					</c:forEach>
					</div>
				</div>
			</div>

			<div class="roomSet" onclick="roomSet()">房间设置</div>
			<div class="roomBadSet" onclick="roomBadSet()">维护设置</div>
			<div class="roomReSet" onclick="roomReset()">房间重置</div>
			<div class="floorReSet" onclick="floorReset()">楼层重置</div>
		</div>
		
	</div>
    <div class="roomSetMiddleLayer"></div>
    <div class="roomSetMiddleLayer1"></div>
</body>
<script src="../JS/jisuanji.js"></script>
<script src="../JS/room.js"></script>
<script src="../JS/reserveOrder.js"></script>
<script src="../JS/checkout.js"></script>
<script src="../JS/CheckIn.js"></script>
<script language="javascript">
var roomResetLogolAddRoomId;
function roomBadSet(){
	 if(document.getElementById("roomResetLogolCheckC")==null){
			$
			.ajax({
				type : "post",
				url : "../user/findCanDeleteRoom",
				data : {},
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
										if(list[i][j].canDele==true){
										html1+='<div class="roomleftPanelImageRoomBad"><div class="roomleftPanelImageRoomBad1" onclick="roomSetBad(this)">'
										+'<img src="../img/bad.png">'
										+'</div></div>'
										}
										else{
										html1+='<div class="roomleftPanelImageRoomDelete"></div>'
										}
										html1+= '</div>'
							}
							  html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
							html1 = html1 + '</div></div>'
							html1=html1+'<div id="roomResetLogolCheckC"></div>'
						}
						}
						$(".roomLeftPanel").html(html1);
						backColorChange();
					}

				}});
	       }else{
	    	   ajaxLeft();
	       }
}
function roomSetBad(ele){
	var hetelId=$(ele).parents(".roomleftPanelImage").find(".roomleftPanelImageLable").html();
	$
	.ajax({
		type : "post",
		url : "../user/changeHetelBad",
		data : {hetelId:hetelId},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			RoomState(); 
		}});
}
function roomResetLogol(ele){
	
	 var pre=$(ele).prev().find(".roomleftPanelImageLable").html();
	 roomResetLogolAddRoomId=pre;
		$
		.ajax({
			type : "post",
			url : "../user/findroomType",
			data : {},
			dataType : "json",
			success : function(data) {
				var json = JSON.stringify(data);
				var list = eval(json);
	 pre++;		
	 var html='<div class="ResertRoom-OnPanelTop">' 
		 +'<div class="ResertRoom-OnPanel">' 
		 +'<div class="ResertRoom-OnPanelRoomAdd" onclick="ResetRoomStyleAdd()">房间添加</div>'
		 +'<div class="ResertRoom-OnPanelRoomDelete" onclick="ResetRoomStyleDelete()">房型删除</div>'
		 +'<div class="ResertRoom-OnPanelTitle">房型选择</div>'
		 +'<div class="ResertRoom-OnPanelBack" onclick="ResertRoomBack()">返回</div>'
		 +'<div id="ResertRoom-ALLNullRoom">'
	 for(var i=0;i<list.length;i++){
		 html+='  <div class="ResertRoom-NullRoomType" onclick="addRoomNullRoomType(this)">' 
	 +'			<div class="roomleftPanelImageLable">'+pre+'</div>' 
	 +'				<div class="roomleftPanelImageStyle">'+list[i]+'</div>' 
	 +'			<div class="roomleftPanelImageName"></div>' 
	 +'			<div class="roomleftPanelImageImg"></div>' 
	 +'				<div class="roomleftPanelImageVip"></div>' 
	 +'				<div class="roomleftPanelImageRoomState">空</div>' 
	 +'  </div>' 
 		}
		 html+='</div><div class="ResertRoom-NullRoomType" id="addRoomTyper" onclick="addRoomType()"><img src="../img/timg.jpg"></div>'
	    +'</div></div>' 
	 $(".roomSetMiddleLayer").html(html);
			}
		})
	 
}
function RoomStyleDelete(ele){
	var roomType=$(ele).parents(".ResertRoom-NullRoomType").find(".roomleftPanelImageStyle").html();  
	$
	.ajax({
		type : "post",
		url : "../user/RoomStyleDelete",
		data : {roomType:roomType},
		dataType : "json",
		success : function(data) {

			if(data){
				alert("删除成功")
				var parent=$(ele).parents(".ResertRoom-NullRoomType");
				parent.remove();
			}
			else{
				alert("此类房间被占用，不能删除")
			}
			}});
}
function ResetRoomStyleAdd(){
	var pre=roomResetLogolAddRoomId;
	$(".ResertRoom-OnPanelRoomAdd").css({"background":"#FF6347"})
	$(".ResertRoom-OnPanelRoomDelete").css({"background":"#FF0000"})
	$
	.ajax({
		type : "post",
		url : "../user/findroomType",
		data : {},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
 pre++;		
 var html='<div class="ResertRoom-OnPanelTop">' 
	 +'<div class="ResertRoom-OnPanel">' 
	 +'<div class="ResertRoom-OnPanelRoomAdd" onclick="ResetRoomStyleAdd()">房间添加</div>'
	 +'<div class="ResertRoom-OnPanelRoomDelete" onclick="ResetRoomStyleDelete()">房型删除</div>'
	 +'<div class="ResertRoom-OnPanelTitle">房型选择</div>'
	 +'<div class="ResertRoom-OnPanelBack" onclick="ResertRoomBack()">返回</div>'
	 +'<div id="ResertRoom-ALLNullRoom">'
 for(var i=0;i<list.length;i++){
	 html+='  <div class="ResertRoom-NullRoomType" onclick="addRoomNullRoomType(this)">' 
 +'			<div class="roomleftPanelImageLable">'+pre+'</div>' 
 +'				<div class="roomleftPanelImageStyle">'+list[i]+'</div>' 
 +'			<div class="roomleftPanelImageName"></div>' 
 +'			<div class="roomleftPanelImageImg"></div>' 
 +'				<div class="roomleftPanelImageVip"></div>' 
 +'				<div class="roomleftPanelImageRoomState">空</div>' 
 +'  </div>' 
		}
	 html+='</div><div class="ResertRoom-NullRoomType" id="addRoomTyper" onclick="addRoomType()"><img src="../img/timg.jpg"></div>'
    +'</div></div>' 
 $(".roomSetMiddleLayer").html(html);
		}
	})
}
function ResetRoomStyleDelete(){
	$(".ResertRoom-OnPanelRoomAdd").css({"background":"#FF6347"})
	$(".ResertRoom-OnPanelRoomDelete").css({"background":"#FF0000"})
	var html='<img src="../img/back.png">'
	$(".ResertRoom-NullRoomType").unbind("click"); 
	$(".ResertRoom-NullRoomType").css({"cursor":"default"});
	$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").css({"cursor":"pointer"})
	$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageLable").html("");
	$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageRoomState").html("");
	$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").html(html)
	 $("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").css({"position":"absolute"})
	 $("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").css({"top":"-35px"})
	 $("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").css({"left":"70px"})
	 $("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").find("img").css({"height":"15px"})
	$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageImg").find("img").css({"width":"15px"})
	$("#addRoomTyper").remove();
	$(".roomleftPanelImageImg").click(function(){
		var roomType=$(this).parents(".ResertRoom-NullRoomType").find(".roomleftPanelImageStyle").html();  
		$
		.ajax({
			type : "post",
			url : "../user/RoomStyleDelete",
			data : {roomType:roomType},
			dataType : "json",
			success : function(data) {

				if(data){
					alert("删除成功")
					var parent=$(ele).parents(".ResertRoom-NullRoomType");
					parent.remove();
				}
				else{
					alert("此类房间被占用，不能删除")
				}
				}});
	})
}
function ResertRoomBack(){
	roomReset();
	$(".ResertRoom-OnPanelTop").remove();
}
function AddRoomConcel(){
	$(".AddRoomTypeSmallLogolTop").remove();
}
function AddRoomOk(){
	if($("#roomDetelType").val()==""||$("#roomDetelType").val()==null){
		alert("房型不能为空")
	}
	else{
		var newRoomType=$("#roomDetelType").val();
		var roomid=$("#ResertRoom-ALLNullRoom").find(".roomleftPanelImageLable").eq(0).html();
	 	$
		.ajax({
			type : "post",
			url : "../user/addNewRoomType",
			data : {newRoomType:newRoomType},
			dataType : "json",
			success : function(data) {
				if(data){
					var addElement=document.createElement("div");
					addElement.setAttribute("class","ResertRoom-NullRoomType");
					addElement.setAttribute("onclick","addRoomNullRoomType(this)");
					addElement.innerHTML='			<div class="roomleftPanelImageLable">'+roomid+'</div>' 
						 +'				<div class="roomleftPanelImageStyle">'+newRoomType+'</div>' 
						 +'			<div class="roomleftPanelImageName"></div>' 
						 +'			<div class="roomleftPanelImageImg"></div>' 
						 +'				<div class="roomleftPanelImageVip"></div>' 
						 +'				<div class="roomleftPanelImageRoomState">空</div>' 
						
					document.getElementById("ResertRoom-ALLNullRoom").appendChild(addElement);
				    alert("新房型添加成功，请尽快完善本类房间信息！")
				    $(".AddRoomTypeSmallLogolTop").remove();
				}
				else{
					alert("此房间类型已存在")
				}
	          
			}}); 
	}
	
}

function addRoomType(){
	var html='<div class="AddRoomTypeSmallLogolTop">'
	+'<div class="AddRoomTypeSmallLogol">'
	+' <div class="AddRoomTypeSmallLogolPanel">'
	+'    <div class="AddRoomTypeSmallLogolText">房间类型</div>'
	+'    <input type="text" id="roomDetelType">'
	+'  </div>'
	+'  <div class="AddRoomTypeSmallLogolOkAndConcel">'
	+'   <div class="AddRoomTypeSmallLogolOk" onclick="AddRoomOk()">确定</div>'
	+'   <div class="AddRoomTypeSmallLogolConcel" onclick="AddRoomConcel()">取消</div>'
	+'   </div>'
	+'</div>'
	+'</div>'
	  $(".roomSetMiddleLayer1").html(html);
/* 	$
	.ajax({
		type : "post",
		url : "../user/addRoomNum",
		data : {roomNum:roomNum,roomStyle:roomStyle},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
          
		}}); */
}
function addRoomNullRoomType(ele){
	var roomNum=$(ele).find(".roomleftPanelImageLable").html();
	var roomStyle=$(ele).find(".roomleftPanelImageStyle").html();
	$
	.ajax({
		type : "post",
		url : "../user/addRoomNum",
		data : {roomNum:roomNum,roomStyle:roomStyle},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			RoomState();
			alert("房间添加成功")
			$(".ResertRoom-OnPanelTop").remove();
			
			
		}});
}
function roomReset(){	
       if(document.getElementById("roomResetLogolCheckC")==null){
		$
		.ajax({
			type : "post",
			url : "../user/findCanDeleteRoom",
			data : {},
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
									if(list[i][j].canDele==true){
									html1+='<div class="roomleftPanelImageRoomDelete"><div class="roomleftPanelImageRoomDelete1" onclick="roomdelete(this)">'
									+' <img src="../img/back.png">'
									+'</div></div>'
									}
									else{
									html1+='<div class="roomleftPanelImageRoomDelete"></div>'
									}
									html1+= '</div>'
						}
						html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
						html1 = html1 + '</div></div>'
						html1=html1+'<div id="roomResetLogolCheckC"></div>'
					}
					}
					$(".roomLeftPanel").html(html1);
					backColorChange();
				}
				
				 $(".roomResetLogol").css({"height":"100px"})
				 $(".roomResetLogol").css({"width":"150px"})
				 var html='<img src="../img/timg.jpg">'
				 $(".roomResetLogol").html(html)
			}});
       }else{
    	   ajaxLeft();
       }

}
function roomdelete(ele){
	var roomid= $(ele).parents(".roomleftPanelImage").find(".roomleftPanelImageLable").html();
	$
	.ajax({
		type : "post",
		url : "../user/roomdelete",
		data : {roomid:roomid},
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
								if(list[i][j].canDele==true){
								html1+='<div class="roomleftPanelImageRoomDelete"><div class="roomleftPanelImageRoomDelete1" onclick="roomdelete(this)">'
								+' <img src="../img/back.png">'
								+'</div></div>'
								}
								else{
								html1+='<div class="roomleftPanelImageRoomDelete"></div>'
								}
								html1+= '</div>'
					}
					  html1+='<div class="roomResetLogol" onclick="roomResetLogol(this)"></div>'
					html1 = html1 + '</div></div>'

				}
				}

				$(".roomLeftPanel").html(html1);
				backColorChange();
			}
			 $(".roomResetLogol").css({"height":"100px"})
			 $(".roomResetLogol").css({"width":"150px"})
			 var html='<img src="../img/timg.jpg">'
			 $(".roomResetLogol").html(html)
		}});
}
function LableConcelFloor(ele){
	var floor=$(ele).prev().html()
	$
	.ajax({
		type : "post",
		url : "../user/deleteCanDeleteFloor",
		data : {floor:floor},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			if(list[0]!=0){
				if (list.length > 0) {
					$(".roomLeftPanel").empty();
					
					var html1 = "";
					
					if(list[0][0][0].hetelId!=1){
					for (var i = 0; i < list[0].length; i++) {

						html1 = html1 +
						' <div class="roomLeftPanelLableDetel">'
						+' <div class="roomLeftPanelLable">'+ list[0][i][0].floor + ' </div>'
						for(var m=0;m<list[1].length;m++){
							if(list[0][i][0].floor==list[1][m]){
								html1+='<div class="roomLeftPanelLableConcelFloor" onclick="LableConcelFloor(this)"><div class="ConcelFloorLogol">'+
								'<img src="../img/back.png">'+
								'</div></div>'
							}
						}
						
						html1+= '<div class="roomleftPanelImage1">'

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

									html1+='<div class="roomleftPanelImageRoomDelete"></div>'
									
									html1+= '</div>'
						}
						  html1+='<div class="roomResetLogol"></div>'
						html1 = html1 + '</div></div>'
						

					}
					html1=html1+'<div id="roomResetLogolCheckC"></div>'
					}
                   
					$(".roomLeftPanel").html(html1);
					backColorChange();
					 alert("楼层删除成功")
				}
			}
			else {
				alert("请先删除最高层")
			}
		}
	});
}
function RoomFloodAdd(){
	var newRoomNum=parseInt(newFloor)*100+1;
	$
	.ajax({
		type : "post",
		url : "../user/findroomType",
		data : {},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
	 var html='<div class="ResertRoom-OnPanelTop">' 
		 +'<div class="ResertRoom-OnPanel">' 
		 +'<div class="ResertRoom-OnPanelTitle">房型选择</div>'
		 +'<div class="ResertRoom-OnPanelBack" onclick="ResertRoomBack()">返回</div>'
		 +'<div id="ResertRoom-ALLNullRoom">'
	 for(var i=0;i<list.length;i++){
		 html+='  <div class="ResertRoom-NullRoomType" onclick="addRoomNullRoomType(this)">' 
	 +'			<div class="roomleftPanelImageLable">'+newRoomNum+'</div>' 
	 +'				<div class="roomleftPanelImageStyle">'+list[i]+'</div>' 
	 +'			<div class="roomleftPanelImageName"></div>' 
	 +'			<div class="roomleftPanelImageImg"></div>' 
	 +'				<div class="roomleftPanelImageVip"></div>' 
	 +'				<div class="roomleftPanelImageRoomState">空</div>' 
	 +'  </div>' 
 		}
		 html+='</div>'
	    +'</div></div>' 
	 $(".roomSetMiddleLayer").html(html);
		}});
}
var newFloor;
function floorReset(){
	 if(document.getElementById("roomResetLogolCheckC")==null){
			$
			.ajax({
				type : "post",
				url : "../user/findCanDeleteFloor",
				data : {},
				dataType : "json",
				success : function(data) {
	                
					var json = JSON.stringify(data);
					var list = eval(json);
					if (list.length > 0) {
						$(".roomLeftPanel").empty();
						 
						var html1 = "";
						
						if(list[0][0][0].hetelId!=1){
						for (var i = 0; i < list[0].length; i++) {

							html1 = html1 +
							' <div class="roomLeftPanelLableDetel">'
							+' <div class="roomLeftPanelLable">'+ list[0][i][0].floor + ' </div>'
							for(var m=0;m<list[1].length;m++){
								if(list[0][i][0].floor==list[1][m]){
									html1+='<div class="roomLeftPanelLableConcelFloor" onclick="LableConcelFloor(this)"><div class="ConcelFloorLogol">'+
									'<img src="../img/back.png">'+
									'</div></div>'
								}
							}
							
							html1+= '<div class="roomleftPanelImage1">'

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

										html1+='<div class="roomleftPanelImageRoomDelete"></div>'
										
										html1+= '</div>'
							}
							  html1+='<div class="roomResetLogol"></div>'
							html1 = html1 + '</div></div>'
							

						}
						html1=html1+'<div id="roomResetLogolCheckC"></div>'
						}
	                   
						$(".roomLeftPanel").html(html1);
						backColorChange();
						var l=parseInt(list[0].length)-1;
						newFloor=parseInt(list[0][l][0].floor)+1;
						var addElement=document.createElement("div");
						addElement.setAttribute("class","roomLeftPanelLableDetel");
						addElement.innerHTML='<div class="roomLeftPanelLable">'+newFloor+'</div>'+
						                     ' <div class="roomResetLogol" onclick="RoomFloodAdd()"><img src="../img/timg.jpg"></div>'
						document.getElementsByClassName("roomLeftPanel")[0].appendChild(addElement);
					}
                    
					 
				}});
	       }else{
	    	   ajaxLeft();
	       }
}
function CheckOutCheck(){
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
		"background" : "#EEDD82"
	});
	$(".roomLeftPanelTopCheckOutCheck").css({
		"background" : "#FFD700"
	});
	 var html1="";

		$
		.ajax({
			type : "post",
			url : "../order/findCheckOutOrder",
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
				+'<div class="CheckDetel">'
					+'<div class="CheckOutCheckMainPanel1">'
					+'	<div class="CheckInMainPanelDetel">'
						+ '<div class="roomReservationsTopPanel">'
						+ '<div class="roomReservationsTopPanelDate">'
						+ ' <div class="roomReservationsTopPanelDateTime"> 预离时间</div>'
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
							+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutCheckAll(this)">查看</div>'
							+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutDelete(this)">删除</div>'
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
						+'</div>'
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
function CheckoutCheckAll(ele){
	var OrderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
	CheckoutOrderLeaveTime=getNowDate1();
	CheckoutOrderNum=OrderNumber;
	thisCheckoutCheck=ele;
	$
	.ajax({
		type : "post",
		url : "../order/finishOrder",
		data : {OrderNumber:OrderNumber},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			var roomPrice=0;
			for(var i=0;i<list[1].length;i++){
				roomPrice+=list[1][i].roomPrice
			     
			}
			var formatTimeS1=new Date(getDate(list[0].realityLeaveDate)).getTime(getDate(list[0].realityLeaveDate));
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
			+ '	      <tr><td>预抵日期:'+getDate(list[0].arriveDate)+'</td><td>预离日期:'+getDate(list[0].leaveDate)+'</td><td>离开日期:<span class="getNowDays">'+getDate(list[0].realityLeaveDate)+'</span></td><td>预定天数:<span class="redayTimes">'+list[0].dayTimes+'</span></td></tr>'
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
			+ '          <div class="CheckOutOperateMiddleDetel-roomType">房型</div>'
			+ '          <div class="CheckOutOperateMiddleDetel-roomId">房号</div>'
			+ '          <div class="CheckOutOperateMiddleDetel-roomPrice">房价</div>'
			+ '          <div class="CheckOutOperateMiddleDetel-roomCashPledge">押金</div>'
			+ '         <div class="CheckOutOperateMiddleDetel-roomBeizhu">备注</div>'
			+ '       </div>'
			+ '       <div class="CheckOutOperateMiddleDetel-TableDiv">'
			+ '       <table class="CheckOutOperateMiddleDetel-Table">'
			 if(list[1].length==1){ 
			for(var i=0;i<list[1].length;i++){
				for(var j=0;j<list[1][i].length;j++){
			 html+=
				'  <tr><td>'
					+'                 <div class="PriceCheckout">'	 
			+'               <div class="CheckOutOperateMiddleDetel-TableCheckBoxDiv">'
			+'               </div>'
			+ '           <div class="CheckOutOperateMiddleDetel-roomType1">'+list[1][i][j].roomStyle+'</div>'
			+ '           <div class="CheckOutOperateMiddleDetel-roomId1">'+list[1][i][j].roomid+'</div>'
			+ '           <div class="CheckOutOperateMiddleDetel-roomPrice1">'+list[1][i][j].roomPrice+'</div>'
			+ '           <div class="CheckOutOperateMiddleDetel-roomCashPledge1">'+list[1][i][j].roomCashPledge+'</div>'
			+ '            <div class="CheckOutOperateMiddleDetel-roomBeizhu1">'+list[1][i][j].roombeizhu+'</div>'
			+'</div>'
			+ '          </td></tr>'
			}
			}
			 }
			 else{   var m=list[1].length-1;
			        
					for(var i=0;i<list[1].length;i++){
						for(var j=0;j<list[1][i].length;j++){
							if(i==m){
							 html+=
									'  <tr><td>'
								+'                 <div class="PriceCheckout">'	 
								+'               <div class="CheckOutOperateMiddleDetel-TableCheckBoxDiv">'
								+'               </div>'
								+ '           <div class="CheckOutOperateMiddleDetel-roomType1">'+list[1][i][j].roomStyle+'</div>'
								+ '           <div class="CheckOutOperateMiddleDetel-roomId1">'+list[1][i][j].roomid+'</div>'
								+ '           <div class="CheckOutOperateMiddleDetel-roomPrice1">'+list[1][i][j].roomPrice+'</div>'
								+ '           <div class="CheckOutOperateMiddleDetel-roomCashPledge1">'+list[1][i][j].roomCashPledge+'</div>'
								+ '            <div class="CheckOutOperateMiddleDetel-roomBeizhu1">'+list[1][i][j].roombeizhu+'</div>'
								+'</div>'
								+ '          </td></tr>'
						}
							else{
								 html+=
										'  <tr><td>'
										   +'<div class="CheckOutOperateMiddleDetelTableLine">'
									+'               <div class="CheckOutOperateMiddleDetel-TableCheckBoxDiv">'
									+'               </div>'
									+ '           <div class="CheckOutOperateMiddleDetel-roomType1">'+list[1][i][j].roomStyle+'</div>'
									+ '           <div class="CheckOutOperateMiddleDetel-roomId1">'+list[1][i][j].roomid+'</div>'
									+ '           <div class="CheckOutOperateMiddleDetel-roomPrice1">'+list[1][i][j].roomPrice+'</div>'
									+ '           <div class="CheckOutOperateMiddleDetel-roomCashPledge1">'+list[1][i][j].roomCashPledge+'</div>'
									+ '            <div class="CheckOutOperateMiddleDetel-roomBeizhu1">'+list[1][i][j].roombeizhu+'</div></div>'
									+ '          </td></tr>'
									       
							} 
						}
				   }
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
			+ '               <div class="CheckOutOperateBottom-ConsumeTable-storeTypeText">'+list[2][i].goodsNum+'</div>'
			+ '               <div class="CheckOutOperateBottom-ConsumeTable-storePrice">单价</div>'
			+ '               <div class="CheckOutOperateBottom-ConsumeTable-storePriceText">'+list[2][i].goodsPrice+'</div>'
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
			+ '       <div class="CheckOutBottomConcel" onclick="CheckOutBottomConcel()">返回</div>'
			+ '    </div>' + '</div>'
			+'</div>'
			  $(".DetelAdddetel").html(html); 	
              $(".CheckOutBottomConcel").css({"margin-left":"650px"})
			  TableCheckBox2();
			
		}});
}
function CheckoutDelete(ele){
	var orderNumber=$(ele).parents("td").find(".roomReservationsButtomPanelTitleResrveId1").html();
	$
	.ajax({
		type : "post",
		url : "../order/deletefinishOrder",
		data : {orderNumber:orderNumber},
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

			$('.roomSetDetel-Main-goodsOperate').empty(); //清空resText里面的所有内容
			html1 += '<div class="roomReservationsMainMianPanel" id="roomReservationsMainMianPanel">'
			+'<div class="CheckDetel">'
				+'<div class="CheckOutCheckMainPanel1">'
				+'	<div class="CheckInMainPanelDetel">'
					+ '<div class="roomReservationsTopPanel">'
					+ '<div class="roomReservationsTopPanelDate">'
					+ ' <div class="roomReservationsTopPanelDateTime"> 预离时间</div>'
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
						+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutCheckAll(this)">查看</div>'
						+ '<div class="roomReservationsButtomPanelTitleCheckoutCheck" onclick="CheckoutDelete(this)">删除</div>'
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
					+'</div>'
					+'	</div>'
					+ '<div class="DetelAdddetel"></div>'
					+ '<div class="DetelAdddetelSmallLogal"></div>'
			alert("删除成功")
			$(".roomLeftPanelButtom").html(html1);
			$('.roomReservationsMainMianPanel').css({"top":"0px"}) 
 $(".CheckInMainPanelDirectCheckIn").css({"width":"100px"});
 $(".CheckInMainPanelReserveCheckIn").css({"width":"100px"});
 $(".CheckInMainPanelCheckInOperate").css({"width":"150px"});
 $(".CheckInMainPanelDirectCheckIn").css({"background":"rgb(238, 221, 130)"});
 $(".CheckInMainPanelCheckInOperate").css({"background":"rgb(255, 215, 0)"});
 $(".CheckInMainPanelReserveCheckIn").css({"background":"rgb(238, 221, 130)"});
			
			
		}})
}
function TableCheckBox2(){
	var length=$(".PriceCheckout").length;
	var rTotal=0;
	var cTotal=0;
	for(var i=0;i<length;i++){
		var x=$(".PriceCheckout").get(i);
		var roomprice=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomPrice1").html();
		rTotal=parseInt(rTotal)+parseInt(roomprice);
		var roomCashPledge=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomCashPledge1").html();
		cTotal=parseInt(cTotal)+parseInt(roomCashPledge);
	}
	var days=$(".redayTimes").html();
	rTotal=rTotal*parseInt(days);
	$(".CheckOutOperateBottom-cashPledgeNum").html(cTotal);
	$(".CheckOutOperateBottom-roomreConsumeNum").html(rTotal);
	 var length=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").length;
	 var total=0;
	 var h;
	 for(var i=0;i<length;i++){

		 var m=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").get(i);
		 var x=$(m).html();
		 var y1=$(".CheckOutOperateBottom-ConsumeTable-storePriceText").get(i);
		 var y=parseInt($(y1).html());
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
function TableCheckBox1(){
	var length=$(".CheckOutOperateMiddleDetel-roomType1").length;
	var rTotal=0;
	var cTotal=0;
	for(var i=0;i<length;i++){
		var x=$(".CheckOutOperateMiddleDetel-roomType1").get(i);
		var roomprice=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomPrice1").html();
		rTotal=parseInt(rTotal)+parseInt(roomprice);
		var roomCashPledge=$(x).parents("td").find(".CheckOutOperateMiddleDetel-roomCashPledge1").html();
		cTotal=parseInt(cTotal)+parseInt(roomCashPledge);
	}
	var days=$(".redayTimes").html();
	rTotal=rTotal*parseInt(days);
	$(".CheckOutOperateBottom-cashPledgeNum").html(cTotal);
	$(".CheckOutOperateBottom-roomreConsumeNum").html(rTotal);
	 var length=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").length;
	 var total=0;
	 var h;
	 for(var i=0;i<length;i++){

		 var m=$(".CheckOutOperateBottom-ConsumeTable-storeTypeText").get(i);
		 var x=$(m).html();
		 var y1=$(".CheckOutOperateBottom-ConsumeTable-storePriceText").get(i);
		 var y=parseInt($(y1).html());
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
</script>
</html>