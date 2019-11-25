<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<link rel="stylesheet" href="../CSS/FrontDeskOpenRoom.css"
	type="text/css" />
<link rel="stylesheet" href="../CSS/jisuanji.css" type="text/css" />
<link rel="stylesheet" href="../CSS/addOrder.css" type="text/css" />
<link rel="stylesheet" href="../CSS/CheckIn.css" type="text/css" />
<style type="text/css">
.ResertRoom-NullRoomType{
    position: relative;
    float: left;
    margin-top: 5px;
    margin-left: 10px;
    height: 100px;
    width: 150px;
    background-color: #1874CD;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color: white;
    display: inline;
}
.ResertRoom-OnPanel{
   position: absolute;
   top:200px;
   left:200px;
}
.ResertRoom-OnPanelTop{
	position: relative;
	folat: left;
	top:5px;
	left:20px;
	width: 1350px;
	height: 700px;
	background-color: #F5F5F5;
}
.AddRoomTypeSmallLogolTop{

}
.AddRoomTypeSmallLogol{
   position: absolute;
   top:230px;
   left:250px;
   height:100px;
   width:400px;
   border-radius: 5px;
   border: solid;
}
.AddRoomTypeSmallLogolPanel{
  position: relative;
  height:50px;
  margin-left: 75px;
   margin-top:20px;
}
.AddRoomTypeSmallLogolText{
   position: relative;
   float:left;
   margin-left: 20px;
   
}
#roomDetelType{
   position: relative;
   float:left;
   border:solid 1px  #D3D3D3;
}
.AddRoomTypeSmallLogolOkAndConcel{
   position: relative;
}
.AddRoomTypeSmallLogolOk{
    position: relative;
    float:left;
    margin-left:100px;
    background: #CFCFCF;
    height:25px;
    width:100px;
    cursor: pointer;
    text-align: center;
}
.AddRoomTypeSmallLogolOk:hover {
	background: #B5B5B5;
}
.AddRoomTypeSmallLogolConcel{
    position: relative;
    float:left;
    margin-left:20px;
    background: #CFCFCF;
    height:25px;
    width:100px;
    cursor: pointer;
    text-align: center;
    
}
.AddRoomTypeSmallLogolConcel:hover {
	background: #B5B5B5;
}

</style>
<body>
<div class="AddRoomTypeSmallLogolTop">
<div class="AddRoomTypeSmallLogol">
  <div class="AddRoomTypeSmallLogolPanel">
     <div class="AddRoomTypeSmallLogolText">房间类型</div>
     <input type="text" id="roomDetelType">
   </div>
   <div class="AddRoomTypeSmallLogolOkAndConcel">
   <div class="AddRoomTypeSmallLogolOk">确定</div>
   <div class="AddRoomTypeSmallLogolConcel">取消</div>
   </div>
</div>
</div>
</body>
</html>