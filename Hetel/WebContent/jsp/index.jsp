<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
</head>

<style type="text/css">
.content{
     position:absolute;
     left:150px;
     top:0px;
     width:1300px;
     height:700px;

}
.body{
    position:relative;
    margin-top:0px;
    margin-left:0px;

    }
.leftMain{
     position:absolute;
     margin-left:0px;
     margin-top:-23px; 
     background-color: #4F4F4F;
     width:160px;
     height:700px;

}
.leftMainLogol{
     position:relative;
     left:10px;
     top:10px;
     width:130px;
     height:130px;
     border:solid 5px;
     border-color:white;
     border-radius:50%;
}
.leftMainLogol img{
 position:absolute;
  left:5px;
  top:5px;
    width:110px;
    height:110px;
}
.rightTopMain{
     position:absolute;
     left:150px;
     top:0px;
     width:1500px;
     height:100px;
     background-color:#F5F5F5;
     overflow: hidden;
}
.rightBottomMain{
     position:absolute;
     left:160px;
     top:100px;
     width:1500px;
     height:600px;
     background-color: #DCDCDC;
     overflow: hidden;
     
}
.leftMainControlList{
     position:relative;
     margin:0px;
     padding:0px;
     list-style:none;
     top:100px;
     height:400px;
}
.leftMainControlList li{
     position:relative;
     margin:0px;
     padding:0px;
     margin-top:10px;
     margin-left:0px;
     height:40px;
     cursor: pointer;
     font-family:"Microsoft YaHei";
     font-size: 20px;
     color:white;
     text-align: center;
     padding-top:10px;
     
}
#Frontdeskopen{
     background-color:#1874CD; 
}

</style>
<body>
 <input type="text" id="text" value='${session.getAttribute(username)}'>
</body>
 <script type="text/javascript">

$(function() {
    $(".leftMainControlList").on("click", "li", function() {
        var sId = $(this).attr('id'); //获取data-id的值
    	 $(this).css({"background": "#1874CD"}); 
        window.location.hash = sId; //设置锚点
        loadInner(sId);
    });
    function loadInner(sId) {
        var sId = window.location.hash;
        var pathn, i;
        switch(sId) {
            case "#Frontdeskopen":
             	$("#Inventorymanagement").css({"background": "#4F4F4F"});
                $("#vipControl").css({"background": "#4F4F4F"});
                $("#CheckInManagement").css({"background": "#4F4F4F"});
                pathn = "user/findHetelinformation";
                i = 0;
                
                break;
            case "#Inventorymanagement":
            
            	$("#Frontdeskopen").css({"background": "#4F4F4F"});
                $("#vipControl").css({"background": "#4F4F4F"});
                $("#CheckInManagement").css({"background": "#4F4F4F"});
                pathn = "goods_type/goodsType";
                i = 1;
                break;
            case "#vipControl":
             	
            	$("#Frontdeskopen").css({"background": "#4F4F4F"});
                $("#Inventorymanagement").css({"background": "#4F4F4F"});
                $("#CheckInManagement").css({"background": "#4F4F4F"});
                pathn = "user/findAllVip";
                i = 2;
                break;
            case "#CheckInManagement":
            	  $("#Frontdeskopen").css({"background": "#4F4F4F"});
            	  $("#Inventorymanagement").css({"background": "#4F4F4F"});
                  $("#vipControl").css({"background": "#4F4F4F"});
                pathn = "jsp/work.jsp";
                i = 3;
                break;
            default:
                pathn = "user/findHetelinformation";
                i = 0;
                break;
        }
        
        $(".content").load("../"+pathn); //加载相对应的内容

        $(".leftMainControlList li").eq(i).addClass("leftMainControlListli").siblings().removeClass("leftMainControlListli"); //当前列表高亮
 
    }
   
    var sId = window.location.hash;
    loadInner(sId);
    
  
});
function Inventorymanagement(){
	
}
</script>
<body>

 <div class="body">
<div class="leftMain">
   <div class="leftMainLogol"><img src="../img/login_top_3png.png"></div>
   <div class="leftMainControl">
      <ul class="leftMainControlList">
         <li  class="leftMainControlListli"  id="Frontdeskopen">前台营业</li> 
         <li  id="Inventorymanagement" >库存管理</li>
         <li  id="vipControl">会员管理</li>
         <li  id="CheckInManagement">员工签到</div>
      </ul>
   </div>
</div>
<div class="content">

</div>

</body>

</html>
</html>