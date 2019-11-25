<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>

</head>


<link rel="stylesheet" href="../CSS/store.css" type="text/css" />

<body>
<div class="mainPane">
<div class="storeMainout">
<div class="storeMain">
   <div class="storeMainLeft">
        <div class="storeMainLeftTitle">
          <div class="storeMainLeftTitleAdd" onclick="storeMainLeftTitleAddShow()">新增</div>
          <div class="storeMainLeftTitleModify" onclick="storeMainLeftTitleModifyShow()">修改</div>
          <div class="storeMainLeftTitleDelete"onclick="goods_type_detele()">删除</div>
        </div>
        <div class="storeMainLeftMainPanel">
           <div class="storeMainLeftMainPanelTop">商品分类</div>
           <div class="storeMainLeftMainPanelButtom">
             <div class="storeMainLeftMainPanelButtomAllType" onclick="goods_type(0)" onclick="Allgoods_type()">全部分类</div> 
             <table class="storeMainLeftMainPanelButtomTable"  id="goods_type">
                
                
             </table>
           </div>
        </div>
   </div>
			<div class="storeMainRight">
				<div class="storeMainRightTop">
					<div class="storeMainRightTopAdd" onclick="storeMainRightTopAdd()">新增货品</div>
					<div class="storeMainRightTopIndex">
						<div class="storeMainRightTopIndexText">货品信息</div>
						<input class="storeMainRightTopIndexInput"  id="goods_value"   placeholder="名称/简码">
						<div class="storeMainRightTopIndexReality"onclick="goods_find()">查询</div>
					</div>
				</div>
				<div class="storeMainRightButtom">
					<div class="storeMainRightButtomTitle">
						<div class="storeMainRightButtom-StoreName">货品名称</div>
						<div class="storeMainRightButtom-StoreAbbr">货品简码</div>
						<div class="storeMainRightButtom-StoreClassify">货品分类</div>
						<div class="storeMainRightButtom-StoreNumber">现存个数</div>
						<div class="storeMainRightButtom-StoreUnit">主单位</div>
						<div class="storeMainRightButtom-StoreLowerlimit">库存下限</div>
						<div class="storeMainRightButtom-StoreHighlimit">库存上限</div>
						<div class="storeMainRightButtom-StoreBZQ">保质期</div>
						<div class="storeMainRightButtom-StoreSpecifications">货品规格</div>
						<div class="storeMainRightButtom-StoreState">状态</div>
						<div class="storeMainRightButtom-StoreOperate">操作</div>
					</div>

					<div class="storeMainRightButtomMainPanel">
						<table id="storeMainRightButtomMainPanelTable">
							<tr>
								<td class="storeMainRightButtom-StoreName1">电话</td>
								<td class="storeMainRightButtom-StoreAbbr1">DH</td>
								<td class="storeMainRightButtom-StoreClassify1">棋牌室</td>
								<td class="storeMainRightButtom-StoreNumber1">2</td>
								<td class="storeMainRightButtom-StoreUnit1">个</td>
								<td class="storeMainRightButtom-StoreLowerlimit1">0</td>
								<td class="storeMainRightButtom-StoreHighlimit1">2</td>
								<td class="storeMainRightButtom-StoreBZQ1">2015/12/01</td>
								<td class="storeMainRightButtom-StoreSpecifications1"></td>
								<td class="storeMainRightButtom-StoreState1">正常</td>
								<td class="storeMainRightButtom-StoreOperate1">
									<div class="storeMainRightButtom-StoreOperate1-modify"
										onclick="StoreOperate1Modify(this)">修改</div>
									<div class="storeMainRightButtom-StoreOperate1-delete">删除</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="roomLeftPanelPageChange">

					<div class="roomLeftPanelPageChangeAllRow1">共</div>

					<div class="roomLeftPanelPageChangeAllRow2" id="all_goods_number" >100</div>

					<div class="roomLeftPanelPageChangeAllRow3">行,</div>

					<div class="roomLeftPanelPageChangeEveryPage1">每页</div>

					<div class="roomLeftPanelPageChangeEveryPage2">12</div>

					<div class="roomLeftPanelPageChangeEveryPage3">行,</div>

					<div class="roomLeftPanelPageChangeWitchPage1">第</div>

					<div id="page-num" class="roomLeftPanelPageChangeWitchPage2" >
						1</div>

					<div class="roomLeftPanelPageChangeWitchPage3">/</div>

					<div id="page-max" class="roomLeftPanelPageChangeWitchPage4">
						10</div>

					<div class="roomLeftPanelPageChangeWitchPage5">页</div>

					<div class="roomLeftPanelPageChangeFirstPage"
						onclick="storefirstPage()">首页</div>

					<div class="roomLeftPanelPageChangeLastPage"
						onclick="storelastPage()">上一页</div>

					<div class="roomLeftPanelPageChangeNextPage"
						onclick="storenextPage()">下一页</div>

					<div class="roomLeftPanelPageChangeEndPage"
						onclick="storeEndPage()">末页</div>
					<input type="text" class="roomLeftPanelPageChangeText" id="this_number">
					<div class="roomLeftPanelPageChangeTo" onclick="storeGotoPage()">转到</div>

				</div>

			</div>
		</div>
		
<div class="storeLeftAdd">
  <div class="storeLeftAddPanel">
     <div class="storeLeftAddPanelTitle">新增货品</div>
     <div class="storeLeftAddPanelMain">
           <div class="storeLeftAddPanelMain-SortName">
           <div class="storeLeftAddPanelMain-lastSortText">分类名称:</div>
           <input type="text" class="storeLeftAddPanelMain-SortInputName" id="add_type_name"  >
        </div>
           <div class="storeLeftAddPanelMain-beizhu">
           <div class="storeLeftAddPanelMain-lastSortText">备注:</div>
           <textarea class="storeLeftAddPanelMain-beizhuMain"id="add_type_annotation"></textarea>
        
        </div>
        <div class="storeLeftAddPanelMain-saveandconcel">
          <div class="storeLeftAddPanelMain-save" onclick="goods_type_add()" >保存</div>
          <div class="storeLeftAddPanelMain-concel" onclick="storeLeftAddConcel()">取消</div>
        </div>
     </div>
  </div>
</div>

<div class="storeLeftModify">
  <div class="storeLeftAddPanel">
     <div class="storeLeftAddPanelTitle">修改货品</div>
     <div class="storeLeftAddPanelMain">
           <div class="storeLeftAddPanelMain-SortName">
           <div class="storeLeftAddPanelMain-lastSortText">分类名称:</div>
           <input type="text" class="storeLeftAddPanelMain-SortInputName"id="update_type_name">
        </div>
           <div class="storeLeftAddPanelMain-beizhu">
           <div class="storeLeftAddPanelMain-lastSortText">备注:</div>
           <textarea class="storeLeftAddPanelMain-beizhuMain"id="update_type_annotation"></textarea>
        
        </div>
        <div class="storeLeftAddPanelMain-saveandconcel">
          <div class="storeLeftAddPanelMain-save"onclick="goods_type_update()">修改</div>
          <div class="storeLeftAddPanelMain-concel" onclick="storeLeftModifyConcel()">取消</div>
        </div>
     </div>
  </div>
</div>

<form class="storeRigthtAdd" id="storeRigthtAdd">
  <div class="storeRigthtAddMainPanel">
   <div class="storeRigthtAddTitle">
       新增货品
   </div>
   <div class="storeRigthtAddMain">
     <div class="storeRigthtAddMainLeft">
       <div class="storeRigthtAddMainLeftStoreName">
         <div class="storeRigthtAddMainLeftStoreNameText">货品名称</div>
         <input type="text" class="storeRigthtAddMainLeftStoreNameInput"   id="add_goods_name">
         <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainLeftStoreType">
         <div class="storeRigthtAddMainLeftStoreNameText">货品类别</div>
         <select class="storeRigthtAddMainLeftStoreNameInput"  id="add_goods_type"> 
                
          </select>
          <div class="storeRigthtAddMainLogol">*</div>
       </div>
        <div class="storeRigthtAddMainLeftStoreNumber">
         <div class="storeRigthtAddMainLeftStoreNameText">货品个数</div>
         <input type="text" class="storeRigthtAddMainLeftStoreNameInput" id="add_goods_number">
          <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainLeftStoreLowlimit">
          <div class="storeRigthtAddMainLeftStoreNameText">库存下限</div>
         <input type="text" class="storeRigthtAddMainLeftStoreLowlimitInput" value=0 id="add_under_number">
       </div>
     </div>
      <div class="storeRigthtAddMainRight">
       <div class="storeRigthtAddMainRightStoreSimplifyName">
         <div class="storeRigthtAddMainLeftStoreNameText">货品简码</div>
         <input type="text" class="storeRigthtAddMainLeftStoreSimplifyNameInput"id="add_goods_referred">
         <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainRightStoreBZQ">
         <div class="storeRigthtAddMainLeftStoreNameText">保质期</div>
         <input class="storeRigthtAddMainRightStoreBZQInput" type="date"id="add_goods_time"> 
       </div>
        <div class="storeRigthtAddMainRightStoreUnit">
         <div class="storeRigthtAddMainLeftStoreNameText">单位</div>
         <input type="text" class="storeRigthtAddMainRightStoreUnitInput" id="add_goods_unit">
          <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainRightStoreHighlimit">
          <div class="storeRigthtAddMainLeftStoreNameText">库存上限</div>
         <input type="text" class="storeRigthtAddMainRightStoreHighlimitInput" value=0 id="add_ceiling_number">
       </div>
     </div>
     <div class="storeRigthtAddMainRightStoreSpecifications">
         <div class="storeRigthtAddMainLeftStoreSpecificationsText">规格</div>
         <input type="text" class="storeRigthtAddMainRightStoreSpecificationsInput" id="add_goods_specifications">
     </div>
     <div class="storeRigthtAddSubmit" onclick="goods_add()">保存</div>
     <div class="storeRigthtAddConcel" onclick="storeRigthtAddConcel()">取消</div>
   </div>
</div>
</form>


<form class="storeRigthtModify" id="storeRigthtModify">
  <div class="storeRigthtAddMainPanel">
   <div class="storeRigthtAddTitle">
       修改货品
   </div>
   <input type="hidden" id="update_goods_id">
   <div class="storeRigthtAddMain">
     <div class="storeRigthtAddMainLeft">
       <div class="storeRigthtAddMainLeftStoreName">
         <div class="storeRigthtAddMainLeftStoreNameText">货品名称</div>
         <input type="text" class="storeRigthtAddMainLeftStoreNameInput" id="update_goods_name">
         <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainLeftStoreType">
         <div class="storeRigthtAddMainLeftStoreNameText">货品类别</div>
         <select class="storeRigthtAddMainLeftStoreNameInput"id="update_goods_type" > 
               
          </select>
          <div class="storeRigthtAddMainLogol">*</div>
       </div>
        <div class="storeRigthtAddMainLeftStoreNumber">
         <div class="storeRigthtAddMainLeftStoreNameText">货品个数</div>
         <input type="text" class="storeRigthtAddMainLeftStoreNameInput"id="update_goods_number" >
         <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainLeftStoreLowlimit">
          <div class="storeRigthtAddMainLeftStoreNameText">库存下限</div>
         <input type="text" class="storeRigthtAddMainLeftStoreLowlimitInput" value=0 id="update_under_number">
       </div>
     </div>
      <div class="storeRigthtAddMainRight">
       <div class="storeRigthtAddMainRightStoreSimplifyName">
         <div class="storeRigthtAddMainLeftStoreNameText">货品简码</div>
         <input type="text" class="storeRigthtAddMainLeftStoreSimplifyNameInput"id="update_goods_referred">
       </div>
       <div class="storeRigthtAddMainRightStoreBZQ">
         <div class="storeRigthtAddMainLeftStoreNameText">保质期</div>
         <input class="storeRigthtAddMainRightStoreBZQInput"id="update_goods_time"> 
       </div>
        <div class="storeRigthtAddMainRightStoreUnit">
         <div class="storeRigthtAddMainLeftStoreNameText">单位</div>
         <input type="text" class="storeRigthtAddMainRightStoreUnitInput"id="update_goods_unit">
         <div class="storeRigthtAddMainLogol">*</div>
       </div>
       <div class="storeRigthtAddMainRightStoreHighlimit">
          <div class="storeRigthtAddMainLeftStoreNameText">库存上限</div>
         <input type="text" class="storeRigthtAddMainRightStoreHighlimitInput" value=0 id="update_ceiling_number">
       </div>
     </div>
     <div class="storeRigthtAddMainRightStoreSpecifications">
         <div class="storeRigthtAddMainLeftStoreSpecificationsText">规格</div>
         <input type="text" class="storeRigthtAddMainRightStoreSpecificationsInput" id="update_goods_specifications">
     </div>
     <div  class="storeRigthtAddSubmit" onclick="storeRigthtModifySubmit()">修改</div>
     <div class="storeRigthtAddConcel" onclick="storeRigthtModifyConcel()">取消</div>
   </div>
</div>
</form>
</div>
</div>
</body>
<script>

 function storeRigthtAddSubmit(){
	if($(".storeRigthtAddMainRightStoreUnitInput").val()==""||$(".storeRigthtAddMainLeftStoreNameInput").val()==""||$(".storeRigthtAddMainLeftStoreNameInput").val()==""){
		alert("请输入必要数据")
	}
	else {
		document.getElementById("storeRigthtAdd").submit();
	}
}
function storeRigthtModifySubmit(){
		 var goods_id = $("#update_goods_id").val();
		 alert(goods_id);
		 var goods_name = $("#update_goods_name").val();	 
	 	 var goods_type_id = $("#update_goods_type option:selected").val();  
	 	 var goods_number = $("#update_goods_number").val();	 
	 	 var goods_time = $("#update_goods_time").val(); 
	 	 var goods_unit = $("#update_goods_unit").val();	 
		 var goods_referred = $("#update_goods_referred").val();	
		 var ceiling_number = $("#update_ceiling_number").val();		 
		 var under_number = $("#update_under_number").val();		 
		 var goods_specifications= $("#update_goods_specifications").val();
			$.ajax({
				url: "${pageContext.request.contextPath}/goods/update_goods",
				type: "post",
				data:  JSON.stringify({
					goods_id:goods_id,
					goods_name:goods_name,
					goods_type_id:goods_type_id,
					goods_number:goods_number,
					goods_time:goods_time,
					goods_unit:goods_unit,
					goods_referred:goods_referred,			
					ceiling_number:ceiling_number,
					under_number:under_number,
					goods_specifications:goods_specifications
					}),  
				contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
				dataType: "text",//定义返回数据格式为字符串
				success:function(data){
					
					goods_length();
					goods_paging();
					
					alert(data);				
				}	
		});  
}
function storeRigthtModifyConcel(){
	$(".storeRigthtModify").css({"display":"none"});
}

//修改按钮
function StoreOperate1Modify(goods_id,goods_type_id){
	$(".storeRigthtModify").css({"display":"block"});
	$("#update_goods_id").val(goods_id);
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/goods_type_all",
		type: "post",
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){
			var json= JSON.stringify(data);
		    var list = eval(json);
		    if(list.length>0){
		    var str=$("#update_goods_type");				    
		    str.empty(); 
		    for(var i = 0;i < list.length;i++){//循环遍历数据
				var userinfo = list[i]; 
		        if(goods_type_id==userinfo.goods_type_id)
		        str.append('<option selected value ="'+ userinfo.goods_type_id+ '">' +userinfo.goods_type_name +'</option>');
		        else
				str.append('<option  value ="'+ userinfo.goods_type_id+ '">' +userinfo.goods_type_name +'</option>');
		       }
		    }	    
		}	
	});	
	$.ajax({
		url: "${pageContext.request.contextPath}/goods/find_goods_id",
		type: "post",
		data:  JSON.stringify({
	     goods_id:goods_id
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){		
			var json= JSON.stringify(data);
		    var list = eval(json);
		    if(list.length>0){
		    for(var i = 0;i < list.length;i++){//循环遍历数据
		    	var userinfo = list[i]; 
		    	 $("#update_goods_name").val(userinfo.goods_name);	 
		     	 $("#update_goods_number").val(userinfo.goods_number);	 
		     	 $("#update_goods_time").val(userinfo.goods_time); 
		     	 $("#update_goods_unit").val(userinfo.goods_unit);	 
		    	 $("#update_goods_referred").val(userinfo.goods_referred);	
		    	 $("#update_ceiling_number").val(userinfo.ceiling_number);		 
		    	 $("#update_under_number").val(userinfo.under_number);		 
		    	 $("#update_goods_specifications").val(userinfo.goods_specifications);
		     }
		   }
		    
		    
		    
		}	
	});

}
//清空
function storeRigthtAddConcel(){
	 $(".storeRigthtAdd").css({"display":"none"});
	 $("#add_goods_name").val("");	 
 	 $("#add_goods_number").val("");	 
     $("#add_goods_time").val(""); 
 	 $("#add_goods_unit").val("");	 
	 $("#add_goods_referred").val("");	
	 $("#add_ceiling_number").val("");		 
	 $("#add_under_numbe").val("");		 
	 $("#add_goods_specifications").val("");
}

//新增货品
function storeMainRightTopAdd(){
	$(".storeRigthtAdd").css({"display":"block"});
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/goods_type_all",
		type: "post",
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){
			var json= JSON.stringify(data);
		    var list = eval(json);
		    if(list.length>0){
		    var str=$("#add_goods_type");				    
		    str.empty(); 
		    for(var i = 0;i < list.length;i++){//循环遍历数据
				var userinfo = list[i]; 
				str.append('<option  value ="'+ userinfo.goods_type_id+ '">' +userinfo.goods_type_name +'</option>');
		       }
		    }	    
		}	
	});
		
}
//更新分类
function storeMainLeftTitleModifyShow(){
	$(".storeLeftModify").css({"display":"block"});
	
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/goods_type_find",
		type: "post",
		data:  JSON.stringify({
	     goods_type_id:goods_type_id
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){
			var json= JSON.stringify(data);
		    var list = eval(json);
		    if(list.length>0){
		    for(var i = 0;i < list.length;i++){//循环遍历数据
		    	var userinfo = list[i]; 
		    	$("#update_type_name").val(userinfo.goods_type_name);
		    	$("#update_type_annotation").val(userinfo.goods_type_annotation);
		     }
		   }
		}	
	});
	

}
function storeLeftModifyConcel(){
	$(".storeLeftModify").css({"display":"none"});
}
function storeLeftAddConcel(){
	$(".storeLeftAdd").css({"display":"none"});
}
//添加分类
function storeMainLeftTitleAddShow(){
	$(".storeLeftAdd").css({"display":"block"});	

}

$(function(){
	goods_type_id=0;
    length;
	start=1;
	var str=$("#goods_type");		
	<c:forEach items="${goods_type}" var="item" varStatus="status" >  
	str.append('<tr><td id="'+"${item.goods_type_id}"+'" onclick="goods_type('+"${item.goods_type_id}"+')"  >' +"${item.goods_type_name}" +'</td></tr>');
    </c:forEach>  
    goods_paging();
    goods_length();

})

function goods_type(e){
	if(e==0){
		$(".storeMainLeftMainPanelButtomAllType").css({"background":"#F4A460"})
		$(".storeMainLeftMainPanelButtomTable").find("td").css({"background":"white"})
	}
	else{
	$(".storeMainLeftMainPanelButtomAllType").css({"background":"white"})
	$('#'+e+'').parents(".storeMainLeftMainPanelButtomTable").find("td").css({"background":"white"})
	$('#'+e+'').css({"background":"#F4A460"});
	}
	goods_type_id=e;
	goods_paging();
	goods_length();
}
function goods_type1(ele){
	$(ele).parents(".storeMainLeftMainPanelButtomTable").find("td").css({"background":"white"})
	$(ele).css({"background":"#F4A460"})
}
function goods_type_add(){
	var add_type_name=$("#add_type_name").val();
	var add_type_annotation=$("#add_type_annotation").val();

	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/add_goods_type",
		type: "post",
		data:  JSON.stringify({
			add_type_name:add_type_name,
			add_type_annotation:add_type_annotation
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "text",//定义返回数据格式为字符串
		success:function(data){
		    alert(data);
		    goods_type_all();
		}	
	});
}

function goods_type_detele(){
	if(goods_type_id!=0){
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/detele_goods_type",
		type: "post",
		data:  JSON.stringify({
			goods_type_id:goods_type_id
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "text",//定义返回数据格式为字符串
		success:function(data){
		    alert(data);
		    goods_type_all();
		}	
	});
	}
}

function goods_type_update(){

	if(goods_type_id!=0){
	var add_type_name=$("#update_type_name").val();
	var add_type_annotation=$("#update_type_annotation").val();
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/update_goods_type",
		type: "post",
		data:  JSON.stringify({
			goods_type_id:goods_type_id,
			goods_type_name:add_type_name,
			goods_type_annotation:add_type_annotation
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "text",//定义返回数据格式为字符串
		success:function(data){
		    alert(data);
		    goods_type_all();
		}	
	});
  }
}


function goods_type_all(){
	$.ajax({
		url: "${pageContext.request.contextPath}/goods_type/goods_type_all",
		type: "post",
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){
			var json= JSON.stringify(data);
		    var list = eval(json);
		    var str=$('#goods_type');				    
		    str.empty(); 
		    if(list.length>0){
		  
		    for(var i = 0;i < list.length;i++){//循环遍历数据
				var userinfo = list[i]; 
				str.append('<tr><td id="'+ userinfo.goods_type_id+'" onclick="goods_type('+userinfo.goods_type_id+')" onclick="goods_type1(this)" >' +userinfo.goods_type_name +'</td></tr>');
		       }
		    }	    
		}	
	});
}




//添加商品
function goods_add(){
 	 var goods_name = $("#add_goods_name").val();	 
 	 var goods_type_id = $("#add_goods_type option:selected").val();  
 	 var goods_number = $("#add_goods_number").val();	 
 	 var goods_time = $("#add_goods_time").val(); 
 	 var goods_unit = $("#add_goods_unit").val();	 
	 var goods_referred = $("#add_goods_referred").val();	
	 var ceiling_number = $("#add_ceiling_number").val();		 
	 var under_number = $("#add_under_number").val();		 
	 var goods_specifications= $("#add_goods_specifications").val();
	 if(goods_name==""||goods_type_id==""||goods_number==""||goods_unit==""||goods_referred==""){
		 alert("请输入必要数据")
	 }
	 else{
		$.ajax({
			url: "${pageContext.request.contextPath}/goods/add_goods",
			type: "post",
			data:  JSON.stringify({
				goods_name:goods_name,
				goods_type_id:goods_type_id,
				goods_number:goods_number,
				goods_time:goods_time,
				goods_unit:goods_unit,
				goods_referred:goods_referred,			
				ceiling_number:ceiling_number,
				under_number:under_number,
				goods_specifications:goods_specifications
				}),  
			contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
			dataType: "text",//定义返回数据格式为字符串
			success:function(data){
				goods_length();
				goods_paging();
			   if(data){
				   alert("新增成功")
			   }
			   else{
				   alert("新增失败")
			   }
			}	
		});  
	 }
}



function goods_detele(e){
	 var goods_id=e;
		$.ajax({
			url: "${pageContext.request.contextPath}/goods/detele_goods",
			type: "post",
			data:  JSON.stringify({
				goods_id:goods_id		
				}),  
			contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
			dataType: "text",//定义返回数据格式为字符串
			success:function(data){
				goods_length();
				goods_paging();
			}	
	});  
}



//商品的长度
function goods_length(){
		$.ajax({
			url: "${pageContext.request.contextPath}/goods/goods_length",
			type: "post",
			data:  JSON.stringify({
				goods_type_id:goods_type_id
				}),  
			contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
			async: false,
			dataType: "text",//定义返回数据格式为字符串
			success:function(data){	
				length=Math.ceil(parseInt(data)/12);		
			    if(length<start&&start>1)
			    start=start-1;
			    $("#all_goods_number").empty();
			    $("#all_goods_number").append(''+data);		    
			    $("#page-num").empty();
			    $("#page-num").append(''+start);	    
			    $("#page-max").empty();
			    $("#page-max").append(''+length);	    
			}
		});
       
}

//添加商品
function goods_paging(){
		$.ajax({
			url: "${pageContext.request.contextPath}/goods/goods_paging",
			type: "post",
			data:  JSON.stringify({
				goods_type_id:goods_type_id,
			    start:start
				}),  
			contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
			dataType: "json",//定义返回数据格式为字符串
			success:function(data){	    
				var json= JSON.stringify(data);
			    var list = eval(json);
			    var str=$("#storeMainRightButtomMainPanelTable");					    
			    str.empty();
			    if(list.length>0){					    
			    for(var i = 0;i < list.length;i++){//循环遍历数据
			    
					var userinfo = list[i];
				 	var state;
				     if(userinfo.goods_number>userinfo.ceiling_number)
				    	 state="不正常";
				     else if(userinfo.goods_number<userinfo.under_number)
				    	 state="不正常";
			         else  state="正常";
				     if(userinfo.goods_time==null){
				    	 userinfo.goods_time="";
				     }
					str.append(	'<tr>'+
					'<td class="storeMainRightButtom-StoreName1">'+userinfo.goods_name + '</td>'+
					'<td class="storeMainRightButtom-StoreAbbr1">'+userinfo.goods_referred+'</td>'+	
					'<td class="storeMainRightButtom-StoreClassify1">'+userinfo.goods_type.goods_type_name+'</td>'+	
					'<td class="storeMainRightButtom-StoreNumber1">'+userinfo.goods_number+'</td>'+
					'<td class="storeMainRightButtom-StoreUnit1">'+userinfo.goods_unit+'</td>'+
					'<td class="storeMainRightButtom-StoreLowerlimit1">'+userinfo.under_number+'</td>'+
					'<td class="storeMainRightButtom-StoreHighlimit1">'+userinfo.ceiling_number+'</td>'+			
					'<td class="storeMainRightButtom-StoreBZQ1">'+userinfo.goods_time+'</td>'+
					'<td class="storeMainRightButtom-StoreSpecifications1">'+userinfo.goods_specifications+'</td>'+
					'<td class="storeMainRightButtom-StoreState1">'+state+'</td>'+
					'<td class="storeMainRightButtom-StoreOperate1">'+
						'<div class="storeMainRightButtom-StoreOperate1-modify"'+
						'onclick="StoreOperate1Modify('+userinfo.goods_id+','+userinfo.goods_type_id+')">修改</div>'+
						'<div class="storeMainRightButtom-StoreOperate1-delete" onclick="goods_detele('+userinfo.goods_id+')">删除</div>'+
					'</td>'+			
					'</tr>'			
				       );
			        }	    
			    }				
			}	
		});  
}
//首页
 function storefirstPage(){
	start=1;
	goods_length();
	goods_paging();
}
function storelastPage(){
	if(start==1){
		alert("已经是首页")
	}else{
		start=start-1;
		goods_length();
		goods_paging();
	}
}
function storenextPage(){
	if(start>=length){
		alert("已经是末页")
	}else{
		start=start+1;
		goods_length();
		goods_paging();
	}
}
function storeEndPage(){
	start==length
	goods_length();
	goods_paging();
}

function storeGotoPage(){
	var a=$("#this_number").val();
	var reg =/^[1-9]\d*$/;
	if(reg.test(a)){
		if(a>length)
			alert("请输入小于等于"+length);
		else {
			start=a;
			goods_paging();
		}
			
	}else alert("请输入正整数");
}

//查找商品
function goods_find(){
	var value=$("#goods_value").val();
	$.ajax({
		url: "${pageContext.request.contextPath}/goods/goods_find",
		type: "post",
		data:  JSON.stringify({
			value:value
			}),  
		contentType: "application/json;charset=UTF-8",//定义请求数据格式为JSON字符串
		dataType: "json",//定义返回数据格式为字符串
		success:function(data){	    
			var json= JSON.stringify(data);
		    var list = eval(json);
		    var str=$("#storeMainRightButtomMainPanelTable");					    
		    str.empty();
		    if(list.length>0){					    
		    for(var i = 0;i < list.length;i++){//循环遍历数据
				var userinfo = list[i]; 		 
			   	var state;
			     if(userinfo.goods_number>userinfo.ceiling_number)
			    	 state="不正常";
			     else if(userinfo.goods_number<userinfo.under_number)
			    	 state="不正常";
			     else  state="正常";
				str.append(	'<tr>'+
				'<td class="storeMainRightButtom-StoreName1">'+userinfo.goods_name + '</td>'+
				'<td class="storeMainRightButtom-StoreAbbr1">'+userinfo.goods_referred+'</td>'+	
				'<td class="storeMainRightButtom-StoreClassify1">'+userinfo.goods_type_name+'</td>'+	
				'<td class="storeMainRightButtom-StoreNumber1">'+userinfo.goods_number+'</td>'+
				'<td class="storeMainRightButtom-StoreUnit1">'+userinfo.goods_unit+'</td>'+
				'<td class="storeMainRightButtom-StoreLowerlimit1">'+userinfo.under_number+'</td>'+
				'<td class="storeMainRightButtom-StoreHighlimit1">'+userinfo.ceiling_number+'</td>'+			
				'<td class="storeMainRightButtom-StoreBZQ1">'+userinfo.goods_time+'</td>'+
				'<td class="storeMainRightButtom-StoreSpecifications1">'+userinfo.goods_specifications+'</td>'+
				'<td class="storeMainRightButtom-StoreState1">'+state+'</td>'+
				'<td class="storeMainRightButtom-StoreOperate1">'+
					'<div class="storeMainRightButtom-StoreOperate1-modify"'+
					'onclick="StoreOperate1Modify('+userinfo.goods_id+','+userinfo.goods_type_id+')">修改</div>'+
					'<div class="storeMainRightButtom-StoreOperate1-delete" onclick="goods_detele('+userinfo.goods_id+')">删除</div>'+
				'</td>'+			
				'</tr>'			
			       );
		        }	    
		    }				
		}	
	});  
}  



</script>
</html>