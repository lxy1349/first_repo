<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<link rel="stylesheet" href="../CSS/FrontDeskOpenRoom.css" type="text/css" />
<script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
<style type="text/css">
.signIn{
position: absolute;
top:10px;
left:20px;
width: 1300px;
height: 693px;
border: solid 1px #00BFFF;
border-radius: 5px;
background: white;
}
.signInTop{
position:relative;
height:35px;
background:rgba(0, 150, 255, 1.0);
}
.signInTopNowDate{
  text-align: center;
}
.to_leftYearAndMonth{
position: relative;
margin-left: 550px;
margin-top: 5px;
float: left;
width: 0;
height: 0;
border-right: 12px solid #ccc;
border-top: 12px solid transparent;
border-bottom: 12px solid transparent;
cursor: pointer;
}
.to_leftYearAndMonth:hover{
 opacity: 0.5;
}
.to_rightYearAndMonth{
position: relative;
margin-left: 20px;
margin-top: 5px;
float: left;
width: 0;
height: 0;
border-left: 12px solid #cccf;
border-top: 12px solid transparent;
border-bottom: 12px solid transparent;
cursor: pointer;
}
.to_rightYearAndMonth:hover{
opacity: 0.5;
}
.YearAndMonth{
  posotion:relative;
  float:left;
  margin-left: 20px;
  padding-top: 7px;
  cursor: pointer;
}
.signInBottomweek{
  position: relative;
  height:30px;
}
.signInBottom-weekText{
position: relative;
float:left;
width:170px;
text-align: center;
}
#signInBottomday tr td{
position: relative;
float:left;
width:170px;
height:110px;
cursor: pointer;


}
.giveTextDate{
height:100px;
padding-top:10px;
padding-left: 10px;
border:solid 1px gray;
border-radius: 3px;
}
.giveTextsignIn{
position: absolute;
margin-top: -100px;
margin-left: 120px;
text-align:center;
padding-top:10px;
width:40px;
height:30px;
border-radius:50%;
cursor: pointer; 
background:#00FF00;
color:white;
}
.giveTextsignOut{
position: absolute;
margin-top: -50px;
margin-left: 120px;
text-align:center;
padding-top:10px;
width:40px;
height:30px;
border-radius:50%;
cursor: pointer; 
background:#00FF00;
color:white;
}
.giveTextDate:hover {
	background: rgba(51,51,51,0.1);
}
.signInName{
position: relative;
margin-top: 0px;
margin-left: 0px;
text-align:center;
width:120px;
height:35px;
color:gray;
font-size:12px;
}
.giveTextMonth{
 position: relative;
float:left;
width:300px;
height:120px;
font-size: 30px;
padding-top:80px;
text-align:center;
cursor: pointer;
}
.giveTextMonth:hover{
background: rgba(51,51,51,0.1);
}
.signInNameMessage{
position:absolute;
top:30px;
left:5px;
width:130px;
height:70px;
}
.mainPanel{
position: relative;
    folat: left;
    top: 5px;
    left: 20px;
    width: 1350px;
    height: 700px;
    background-color: #F5F5F5;
}

</style>
<body>
<div class="mainPanel">
<input id="work" type="hidden" value='${username}'>

<div class="signIn">
  <div class="signInTop">
     
  </div>
  <div class="signInBottom">
  <div class="signInBottomweek">
     <div class="signInBottom-weekText">星期一</div>
     <div class="signInBottom-weekText">星期二</div>
     <div class="signInBottom-weekText">星期三</div>
     <div class="signInBottom-weekText">星期四</div>
     <div class="signInBottom-weekText">星期五</div>
     <div class="signInBottom-weekText">星期六</div>
     <div class="signInBottom-weekText">星期日</div>
  </div>
  <div class="signInBottomday">
     <table id="signInBottomday">
         
     </table>
  </div>
</div>
</div>
</div>
</body>
<script>
var year,month;
var uname;
$(function(){
    uname=document.getElementById("work").value;
	var date1=new Date();
	year=date1.getFullYear();
	month=date1.getMonth();
	month++;

	var html2='<div class="to_leftYearAndMonth" onclick="to_leftYearAndMonth()"></div>'
	          +'<div class="YearAndMonth" onclick="changeAllPanel()">'
	          +'<span class="YearAndMonth-year">'+year+'</span>年<span class="YearAndMonth-month">'+month+"</span>月"
	          +'</div>'
	          +'<div class="to_rightYearAndMonth" onclick="to_rightYearAndMonth()"></div>';
	          
	$(".signInTop").html(html2);
	var weekDay=getweekDay();
    var allMonthDay=getallMonthDay(month,year);
	var html="";
	var x=1;
	var y=1;
	var z=0;
	var m=0;
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				m++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+m)){
				html+='<td>&nbsp;</td>'
			}
			else {	
			html+='<td><div class="giveTextDate">'+x+'</div><div class="signInNameMessage"></div><div class="giveTextsign"></div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}
	$("#signInBottomday").html(html)
    firstSign();
 
})
function signInByAll(){
	
}
function giveTextsignOutColor(ele){
	$(ele).css({"background":"red"})
    var username=uname;
		$
			.ajax({
				type : "post",
				url : "../user/AddsignOutformation",
				data : {username:username},
				dataType : "json",
				success : function(data) {
				   	if(data){
				   		alert("签退成功")
				   		$(".signInName").remove();
				   		firstSign();
				   	}
				   	else{
				   		alert("您今天已签过到了")
				   	}   
				}});
}
function giveTextsignInColor(ele){
	$(ele).css({"background":"red"})
	    var username=uname;
		$
			.ajax({
				type : "post",
				url : "../user/AddsignInformation",
				data : {username:username},
				dataType : "json",
				success : function(data) {
				   	if(data){
				   		alert("签到成功")
				   		$(".signInName").remove();
				   		firstSign();
				   	}
				   	else{
				   		alert("一天只能签到一次")
				   	}
				}});
				
	
} 
function firstSign(){
	$
	.ajax({
		type : "post",
		url : "../user/findsignInformation",
		data : {},
		dataType : "json",
		success : function(data) {
           
			var json = JSON.stringify(data);
			var list = eval(json);
			
			var date=new Date();
			var year1=date.getFullYear();
			var month1=date.getMonth();
			month1++;
			var day1=date.getDate();
			var length=$("#signInBottomday").find("td").length;
			for(var i=0;i<list.length;i++){
				var year2=list[i].sign_time.slice(0,4);
				var month2=list[i].sign_time.slice(5,7);
				var day2=list[i].sign_time.slice(8,10);
			for(var j=0;j<length;j++){
				var x=$("#signInBottomday").find("td").get(j);			
				if(($(x).find(".giveTextDate").html()==day1)&&($(".YearAndMonth-year").html()==year1)&&($(".YearAndMonth-month").html()==month1)){
					var html='<div class="giveTextsignIn" onclick="giveTextsignInColor(this)">签到</div><div class="giveTextsignOut" onclick="giveTextsignOutColor(this)">签退</div>'
					$(x).find(".giveTextsign").html(html)
					if(day1==day2&&month2==month1&&year1==year2&&(uname==list[i].sign_name)){
						if(list[i].sign_state=="签到"){
							$(".giveTextsignIn").css({"background":"red"})
						}
						if(list[i].sign_stateOut=="签退"){
							$(".giveTextsignOut").css({"background":"red"})
						}
				}
				}
			}
			}
            var month1=parseInt($(".YearAndMonth-month").html());
			for(var i=0;i<list.length;i++){
				var year2=list[i].sign_time.slice(0,4);
				var month2=parseInt(list[i].sign_time.slice(5,7));
				var day2=list[i].sign_time.slice(8,10);
				var time1=list[i].sign_time.slice(11,19);
				var time2=list[i].signout_time.slice(11,19);
				
			var length=$("#signInBottomday").find(".giveTextDate").length;
			for(var j=0;j<length;j++){
			   
				var x=$("#signInBottomday").find(".giveTextDate").get(j);
				var day3=$(x).html();
				if((parseInt(day3)==parseInt(day2)&&(month1==month2)&&year2==($(".YearAndMonth-year").html()))){
					var addElement=document.createElement("div");
					addElement.classList.add("signInName");
					addElement.innerHTML='<span class="signInNameName">'+list[i].sign_name+''+'</span>'
					+'<span class="signInNameTimeIn">'+time1+'签到'+'</span>'
					+'<div class="signInNameTimeOut">'+time2+'签退'+'</div>'
					 document.getElementsByClassName("signInNameMessage")[j].appendChild(addElement);
				}
			}
			}
			
}});
}
function giveTextMonth(x){
	$(".YearAndMonth").html('<span class="YearAndMonth-year">'+year+'</span>'+'年<span class="YearAndMonth-month">'+$(x).html()+"</span>月");
	year=year;
	month=$(x).html();
	var html2='<div class="to_leftYearAndMonth" onclick="to_leftYearAndMonth()"></div>'
	          +'<div class="YearAndMonth" onclick="changeAllPanel()">'
	          +'<span class="YearAndMonth-year">'+year+'</span>'+'年<span class="YearAndMonth-month">'+month+"</span>月"
	          +'</div>'
	          +'<div class="to_rightYearAndMonth" onclick="to_rightYearAndMonth()"></div>';
     
	$(".signInTop").html(html2);
	 var html=' <div class="signInBottomweek">'
	     +'<div class="signInBottom-weekText">星期一</div>'
	     +' <div class="signInBottom-weekText">星期二</div>'
	     +' <div class="signInBottom-weekText">星期三</div>'
	     +' <div class="signInBottom-weekText">星期四</div>'
	     +'  <div class="signInBottom-weekText">星期五</div>'
	     +' <div class="signInBottom-weekText">星期六</div>'
	     +' <div class="signInBottom-weekText">星期日</div>'
	     +' </div>'
	     +'  <div class="signInBottomday">'
	     +'     <table id="signInBottomday">'  
	     +'   </table>'
	     +' </div>'
     $(".signInBottom").html(html);
	var weekDay=getweekDay();
    var allMonthDay=getallMonthDay(month,year);
	var html="";
	var x=1;
	var y=1;
	var z=0;
	var m=0;
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				m++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+m)){
				html+='<td>&nbsp;</td>'
			}
			else {	
			html+='<td><div class="giveTextDate">'+x+'</div><div class="signInNameMessage"></div><div class="giveTextsign"></div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}
	
	$("#signInBottomday").html(html)
	 firstSign();
}
function changeAllPanel(){	
	var html="";
	var x=1;
	var y=1;
	var z=0;
	var m=0;
 	for(var i=0;i<3;i++){
		html+='<tr>'
		for(var j=0;j<4;j++){
			html+='<td><div class="giveTextMonth" onclick="giveTextMonth(this)">'+x+'</div></td>'
			x++;
			}
		html+='</tr>'
		} 
 	
 	var html2='<div class="to_leftYearAndMonth" onclick="to_leftYearAndMonth1()"></div>'
        +'<div class="YearAndMonth">'
        +year
        +'年'
        +'</div>'
        +'<div class="to_rightYearAndMonth" onclick="to_rightYearAndMonth1()"></div>';

            +' </div>' 
	$(".signInTop").html(html2);
	$(".signInBottom").html(html);
	
}

function to_rightYearAndMonth(){
	if(month==12){
		year++;
		month=1;
	}
	else {
		month++;
	}
	
	var weekDay=getweekDay();
    var allMonthDay=getallMonthDay(month,year);
	var html="";
	var x=1;
	var y=1;
	var z=0;
	var m=0;
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				m++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+m)){
				html+='<td>&nbsp;</td>'
			}
			else {	
				html+='<td><div class="giveTextDate">'+x+'</div><div class="signInNameMessage"></div><div class="giveTextsign"></div></td>'
				x++;
				}
			y++;
	}
		html+='</tr>'
}
	$(".YearAndMonth").html('<span class="YearAndMonth-year">'+year+'</span>'+'年<span class="YearAndMonth-month">'+month+"</span>月");
	$("#signInBottomday").html(html);
	 firstSign();
}
function to_leftYearAndMonth1(){
	year--;
	$(".YearAndMonth").html(year+'年');
}
function to_rightYearAndMonth1(){
	year++;
	$(".YearAndMonth").html(year+'年');
}
function to_leftYearAndMonth(){
	if(month==1){
		year--;
		month=12;
	}
	else {
		month--;
	}

	var weekDay=getweekDay();
    var allMonthDay=getallMonthDay(month,year);
  
	var html="";
	var x=1;
	var y=1;
	var z=0;
	var m=0;
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				m++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+m)){
				html+='<td>&nbsp;</td>'
			}
			else {	
				html+='<td><div class="giveTextDate">'+x+'</div><div class="signInNameMessage"></div><div class="giveTextsign"></div></td>'
				x++;
				}
			y++;
	}
		html+='</tr>'
}
	$(".YearAndMonth").html('<span class="YearAndMonth-year">'+year+'</span>'+'年<span class="YearAndMonth-month">'+month+"</span>月");
	$("#signInBottomday").html(html);
	firstSign();
}
 function giveTextDateMove(x){
     
	 x.style.background="rgba(51,51,51,0.1)";

	 x.style.cursor="Default";
}
function giveTextDateOut(x){

	x.style.background="#FFFFFF";
} 
function getweekDay(){ 
	var weekDay=new Date(year + '/' + month + '/' + '01').getDay();
	if(weekDay==0){
		weekDay=7;
	}
	return weekDay;
}
function getallMonthDay(getMonth,getFullYear){
	
	var allMonthDay;
	 if(((getMonth)==1)||((getMonth)==3)||((getMonth)==5)||((getMonth)==7)||((getMonth)==8)||((getMonth)==10)||((getMonth)==12)){
		 allMonthDay=31;
	 }
	 else if(((getMonth)==4)||((getMonth)==6)||((getMonth)==9)||((getMonth)==11)){
		 allMonthDay=30;
	 }
	 else if(getMonth==2){
		 if(((getFullYear%4==0)&&(!(getFullYear%100==0)))||(getFullYear%400==0)){
			 allMonthDay=29;
		 }
		 else{allMonthDay=28;}
	 }
	 else {alert("获取整月天数错误")}
	 return allMonthDay;
}
</script>
</html>
