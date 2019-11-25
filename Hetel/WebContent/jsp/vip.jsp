<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="../CSS/FrontDeskOpenRoom.css" type="text/css" />
<script src="../JS/jquery-3.4.1.min.js"></script>
<script src="../JS/jquery.form.js"></script>
<title>Insert title here</title>
</head>
<style type="text/css">
.vipDiv1{
    position: absolute;
    margin-left: 10px;
    width: 1300px;
    height: 670px;
    border: solid 1px;
    border-color: #FFD700;
    background-color:rgba(0,0,0,0.2);
    z-index:100;
}
.vipDiv2{
    position: absolute;
    margin-left: 10px;
    width: 1300px;
    height: 670px;
    border: solid 1px;
    border-color: #FFD700;
    background-color:rgba(0,0,0,0.2);
    z-index:101;
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
.vipForm{
    position: absolute;
    top: 100px;
    left: 300px;
    width: 600px;
    height: 500px;
    border-radius: 5px;
    background:white;
}
.vipText{
    position: relative;
    float:right;
    display:inline-block;
    margin-top:-10px;
    right:150px;
    height: 35px;
    width: 240px;
    border-radius: 3px;
    border: 1px solid #c8cccf;
    color: #6a6f77;
    outline: 0;
}
.vipNameDiv{
   position: relative;
   margin-top: 50px;
}
.vipIDNum{
   position: relative;
   margin-top: 40px;
}
.vipSex{
   position: relative;
   margin-top: 40px;
}
.vipPhoneNum{
   position: relative;
   margin-top: 40px;
}
.vipspan{
   position: relative;
   display:inline-block;
   margin-top:-30px;
   margin-left:460px;
   float:left;
  font-size:12px;
  color:red;
}
#radioMan{
    position: relative;
    margin-left: 80px;
}
.vipName{
position: relative;
margin-left: 105px;
padding-top: 20px;
height: 25px;
font-size: 17px;
color: #6a6f77;
}
.vipFormTitle{
    position: relative;
    margin-top: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
}
.vipPhoneRegerter{
   position: relative;
   margin: 0;

padding: 0;
border: 1px solid;
outline: none;
position: relative;
margin-top: 50px;
margin-left: 205px;
height: 40px;
background: #357eb8;
color: #bcedff;
font-weight: bold;
font-size: 16px;
width: 230px;
border-radius: 3px;
text-align: center;

}
.vipPhoneRegerter:hover{
	background: #00BFFF;
	cursor: pointer;
}
.vipMain{
    position: absolute;
    margin-left: 10px;
    width: 1300px;
    height: 670px;
    border: solid 1px;
    border-color: #FFD700;
    background-color: white; 
}
.vipMain-buttomIndex{
   position: relative;
   margin-left: 900px;
   margin-top: 20px;
   width:500px;
   height:30px;
   
}
.vipMain-buttomRegester{
   position: absolute;
   margin-left: 150px;
   margin-top: 20px;
   width:100px;
   height:30px;
   background: #FF7F50;
    border-radius: 3px;
    color: white;
    text-align: center;
    cursor: pointer;
}
.vipMain-buttomRegester:hover{
  background:#FF4040;
}
.vipMain-buttomIndextext{
   position: relative;
   float:left;
   width:200px;
   height:20px;
   border-radius: 3px;
}
.vipMain-buttomIndextextCheck{
    position: relative;
    float: left;
    width: 80px;
    height: 23px;
    margin-left: 7px;
    background: #FF7F50;
    border-radius: 3px;
    color: white;
    text-align: center;
    cursor: pointer;
}
.vipMain-buttomIndextextCheck:hover{
   background:#FF4040;
}
.vipMain-buttom{
   position: relative;
   width:1300px;
   display: inline-block;
   
}
.vipMain-buttomDiv{
    position: relative;
    margin-top:20px;
   width:1300px;
    height:550px;
    border:solid 1px #EEEEE0; 
    overflow-y:auto;
   overflow-x:hidden;
}
.vipMain-buttomTitle{
   position: relative;
  display:inline-block;
  width:209px;
  text-align: center;
  background: #4f4f4f;
  border-right:solid 5px white;
  color:white;
}
.vipMain-buttom tr{
  position: relative;
  height:30px;
}
.vipMain-buttom tr:nth-child(odd) {
  background: #E8E8E8;
}
.vipMain-buttom tr td{
   position: relative;
  display:inline-block;
  text-align: center;
   width:209px;
}
.vipTableModify{
position: relative;
    float: left;
    margin-left: 23px;
    width: 90px;
    background: #EEB422;
    text-align: center;
    cursor: pointer;
}
.vipTableModify:hover{
   background: #FFB90F;
}
.vipTableDelete{
  position: relative;
    float: left;
    margin-left: 5px;
    width: 90px;
    background: #EEB422;
    text-align: center;
    cursor: pointer;
}
.vipTableDelete:hover {
	  background: #FFB90F;
}
.vipRegerterBack{
 position: relative;
 margin-left:400px;
 margin-top:10px;
   color:blue;
   cursor: pointer;
}
</style>
<body>
<div class="mainPanel">

<div class="vipDivModi"></div>
<div class="vipMain">
     
   <div class="vipMain-buttom">
      <div class="vipMain-buttomRegester" onclick="vipMainRegesterCheck()">会员注册</div>
     <div class="vipMain-buttomIndex">
        <input class="vipMain-buttomIndextext" type="text" placeholder="证件号/姓名"><div class="vipMain-buttomIndextextCheck" onclick="vipIndex()">查询</div>
     </div>
     <div class="vipMain-buttomDiv">
     <table class="vipMain-buttomtable">
        <tr><td class='vipMain-buttomTitle'>序号</td><td class='vipMain-buttomTitle'>姓名</td><td class='vipMain-buttomTitle'>身份证号</td><td class='vipMain-buttomTitle'>性别</td><td class='vipMain-buttomTitle'>手机号</td><td class='vipMain-buttomTitle'>操作</td></tr>
        <c:forEach var="y" begin="1" end='${list.size()}'>
          <tr><td>${y}</td><td>${list[y-1].vipName}</td><td>${list[y-1].vipIdNum}</td><td>${list[y-1].radioMan}</td><td>${list[y-1].phoneNum}</td><td><div class="vipTableModify" onclick="vipTableModify(this)">修改</div><div class="vipTableDelete" onclick="vipTableDelete(this)">删除</div></td></tr>
        </c:forEach>
     </table>
     </div>

   </div>
</div>
</div>

</body>
<script>
function vipTableDelete(ele){
	
   var idNum=$(ele).parents("tr").find("td").eq(2).html()
	$
	.ajax({
		type : "post",
		url : "../user/DeleteVipNum",
		data : {idNum:idNum},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			$(".vipMain-buttomtable").html("")
		       var html=' <tr><td class="vipMain-buttomTitle">序号</td><td class="vipMain-buttomTitle">姓名</td><td class="vipMain-buttomTitle">身份证号</td><td class="vipMain-buttomTitle">性别</td><td class="vipMain-buttomTitle">手机号</td><td class="vipMain-buttomTitle">操作</td></tr>' 
		     for(var i=0;i<list.length;i++){
		      html+='<tr><td>'+(parseInt(i)+1)+'</td><td>'+list[i].vipName+'</td><td>'+list[i].vipIdNum+'</td><td>'+list[i].radioMan+'</td><td>'+list[i].phoneNum+'</td><td><div class="vipTableModify" onclick="vipTableModify(this)">修改</div><div class="vipTableDelete" onclick="vipTableDelete(this)">删除</div></td></tr>' 
			}
		       $(".vipMain-buttomtable").html(html);
		       alert("删除成功")
		}});
}
function vipIndex(){
	var val=$(".vipMain-buttomIndextext").val()+"";
	$
	.ajax({
		type : "post",
		url : "../user/CheckvipNum",
		data : {val:val},
		dataType : "json",
		success : function(data) {
			var json = JSON.stringify(data);
			var list = eval(json);
			$(".vipMain-buttomtable").html("")
		       var html=' <tr><td class="vipMain-buttomTitle">序号</td><td class="vipMain-buttomTitle">姓名</td><td class="vipMain-buttomTitle">身份证号</td><td class="vipMain-buttomTitle">性别</td><td class="vipMain-buttomTitle">手机号</td><td class="vipMain-buttomTitle">操作</td></tr>' 
		     for(var i=0;i<list.length;i++){
		      html+='<tr><td>'+(parseInt(i)+1)+'</td><td>'+list[i].vipName+'</td><td>'+list[i].vipIdNum+'</td><td>'+list[i].radioMan+'</td><td>'+list[i].phoneNum+'</td><td><div class="vipTableModify" onclick="vipTableModify(this)">修改</div><div class="vipTableDelete" onclick="vipTableDelete(this)">删除</div></td></tr>' 
			}
		       $(".vipMain-buttomtable").html(html);
		}});
}
function vipTableModify(ele){
	var html=
		'<div class="vipDiv2">'
   +' <form class="vipForm" id="ModifyvipForm1" action="../user/vipModify" method="post" onsubmit="return vipModufySub()">'
   +' <div class="vipFormTitle">会员修改</div>'
   +' <div class="vipNameDiv"><span class="vipName">姓名</span> <input class="vipText" id="vipName1" type="text" name="vipName"><span class="vipNameSpan vipspan"></span></div>'
   +'  <div class="vipIDNum"><span class="vipName">身份证号</span> <input class="vipText" readonly="readonly" id="vipIdNum1" type="text" name="vipIdNum"><span class="vipIdNumSpan vipspan"></span></div>'
   +'  <div class="vipSex"><span class="vipName">性别</span><input  type="radio" id="radioMan" name="sexradio" value="0"><span class="radioMan">男</span><input type="radio" name="sexradio" value="1"><span class="radioWoMan" >女</span></div>'
   +'  <div class="vipPhoneNum"><span class="vipName">手机号</span><input class="vipText" type="text" id="vipPhoneNum1" name="vipPhoneNum"><span class="vipPhoneNumSpan vipspan"></span></div>'
   +'  <input type="submit" class="vipPhoneRegerter" value="修改">'
   +' <div class="vipRegerterBack" onclick="vipRegerterBack1()">返回</div>'
   +'</form>'
   +'</div>'
    $(".vipDivModi").html(html)
	$("#vipName1").val($(ele).parents("tr").find("td").eq(1).html());
	$("#vipIdNum1").val($(ele).parents("tr").find("td").eq(2).html());
	if($(ele).parents("tr").find("td").eq(3).html()=="男"){
		 $("input[name='sexradio']").eq(0).attr("checked","checked");
	}
	else{
		$("input[name='sexradio']").eq(1).attr("checked","checked");
	}
	$("#vipPhoneNum1").val($(ele).parents("tr").find("td").eq(4).html())
}
 function vipModufySub(){
	if($("#ModifyvipName1")!=""&&$("#vipIdNum1")!=""&&$("#vipPhoneNum1")!=""){
		$("#ModifyvipForm1").ajaxSubmit({
			    dataType : "json",
			    contentType:"application/x-www-form-urlencoded; charset=utf-8",
				success:function(data){
		 			var json = JSON.stringify(data);
					var list = eval(json);
					$(".vipMain-buttomtable").html("")
			       var html=' <tr><td class="vipMain-buttomTitle">序号</td><td class="vipMain-buttomTitle">姓名</td><td class="vipMain-buttomTitle">身份证号</td><td class="vipMain-buttomTitle">性别</td><td class="vipMain-buttomTitle">手机号</td><td class="vipMain-buttomTitle">操作</td></tr>' 
			     for(var i=0;i<list.length;i++){
			      html+='<tr><td>'+(parseInt(i)+1)+'</td><td>'+list[i].vipName+'</td><td>'+list[i].vipIdNum+'</td><td>'+list[i].radioMan+'</td><td>'+list[i].phoneNum+'</td><td><div class="vipTableModify" onclick="vipTableModify(this)">修改</div><div class="vipTableDelete" onclick="vipTableDelete(this)">删除</div></td></tr>' 
				}
			       $(".vipMain-buttomtable").html(html);
			       alert("修改成功")
			       $(".vipDiv2").remove(); 
				}})
	}
	return false;
} 
function vipRegerterBack(){
	$(".vipDiv1").remove();
}
function vipRegerterBack1(){
	$(".vipDiv2").remove();
}
function vipMainRegesterCheck(){
	var html='<div class="vipDiv1">' 
  +' <form class="vipForm" id="vipForm" action="../user/vipCheck" method="post" onsubmit="return vipSubmits()">' 
  +' <div class="vipFormTitle">会员注册</div>' 
  +'  <div class="vipNameDiv"><span class="vipName">姓名</span> <input class="vipText" id="vipName" type="text" name="vipName"><span class="vipNameSpan vipspan"></span></div>' 
  +'   <div class="vipIDNum"><span class="vipName">身份证号</span> <input class="vipText" id="vipIdNum" type="text" name="vipIdNum"><span class="vipIdNumSpan vipspan"></span></div>' 
  +'   <div class="vipSex"><span class="vipName">性别</span><input  type="radio" id="radioMan" name="sexradio" value="0"><span class="radioMan">男</span><input type="radio" name="sexradio" value="1"><span class="radioWoMan" >女</span></div>' 
  +'  <div class="vipPhoneNum"><span class="vipName">手机号</span><input class="vipText" type="text" id="vipPhoneNum" name="vipPhoneNum"><span class="vipPhoneNumSpan vipspan"></span></div>' 
     +'   <input type="submit" class="vipPhoneRegerter" value="注册">' 
     +'    <div class="vipRegerterBack" onclick="vipRegerterBack()">返回</div>' 
     +'  </form>' 
     +'</div>'
     $(".vipDivModi").html(html)
     $("#vipName").blur(function(){
	   var name=$("#vipName").val()+"";
	   if(name==""){
		   $(".vipNameSpan").html("姓名不能为空")
	   }
	   else{
		   $(".vipNameSpan").html("") 
	   }
});
$("#vipIdNum").blur(function(){
		var idnum=$("#vipIdNum").val()+"";
		if(idnum==""){
			$(".vipIdNumSpan").html("身份证号不能为空");
		}
		else{
		var checkIdCard=CheckIdCard(idnum);
		if(checkIdCard!="格式验证通过!"){
			$(".vipIdNumSpan").html(checkIdCard);
		}
		else{
			$(".vipIdNumSpan").html(checkIdCard);
			$(".vipIdNumSpan").css({"color":"green"})
			if(Getsex(idnum)=="男"){
			 $("input[name='sexradio']").eq(0).attr("checked","checked");
			}
			else{
			 $("input[name='sexradio']").eq(1).attr("checked","checked");
			}
		}
		}
	})
	$("#vipPhoneNum").blur(function(){
		var phoneCheck=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var phone=$("#vipPhoneNum").val()+"";
		if(phone==""){
			$(".vipPhoneNumSpan").html("手机号码不能为空")
		}
		else{
			if(phone.match(phoneCheck)==null){
			$(".vipPhoneNumSpan").html("手机号码格式不对")
			}
			else{
				$(".vipPhoneNumSpan").html("格式验证通过!")	
				$(".vipPhoneNumSpan").css({"color":"green"})
			}
		}
	})

}
function vipSubmits(){
 	var name= $(".vipNameSpan").html() +"";
	var idnumspan=$(".vipPhoneNumSpan").html()+"";
	var phoneNum=$(".vipPhoneNumSpan").html()+"";
 	if(name==""&&idnumspan=="格式验证通过!"&&phoneNum=="格式验证通过!"){
  	$("#vipForm").ajaxSubmit(function(data){
			var json = JSON.stringify(data);
			var list = eval(json);
 	if(list[0]==true){
				$(".vipMain-buttomtable").html("")
			       var html=' <tr><td class="vipMain-buttomTitle">序号</td><td class="vipMain-buttomTitle">姓名</td><td class="vipMain-buttomTitle">身份证号</td><td class="vipMain-buttomTitle">性别</td><td class="vipMain-buttomTitle">手机号</td><td class="vipMain-buttomTitle">操作</td></tr>' 
			     for(var i=0;i<list[1].length;i++){
			      html+='<tr><td>'+(parseInt(i)+1)+'</td><td>'+list[1][i].vipName+'</td><td>'+list[1][i].vipIdNum+'</td><td>'+list[1][i].radioMan+'</td><td>'+list[1][i].phoneNum+'</td><td><div class="vipTableModify" onclick="vipTableModify(this)">修改</div><div class="vipTableDelete" onclick="vipTableDelete(this)">删除</div></td></tr>' 
				}
			       $(".vipMain-buttomtable").html(html);
			       alert("新增成功")
			       $(".vipDiv1").remove(); 
				 
			}
			else{
				alert("您已是vip,请勿重复添加")
			}  
		return false;
		}); 
	}
	else{
		alert("请按找正确格式输入")
	} 
	return false;
}

	

function Getsex(psidno){
    var sexno,sex
    if(psidno.length==18){
        sexno=psidno.substring(16,17)
    }else if(psidno.length==15){
        sexno=psidno.substring(14,15)
    }else{
        alert("错误的身份证号码，请核对！")
        return false
    }
    var tempid=sexno%2;
    if(tempid==0){
        sex='女'
    }else{
        sex='男'
    }
    return sex
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

</script>
</html>