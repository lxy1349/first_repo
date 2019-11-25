var year,month,textDateId;
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
 function giveTextDateMove(x){
     
	 x.style.background="rgba(51,51,51,0.1)";

	 x.style.cursor="Default";
}
function giveTextDateOut(x){

	x.style.background="#FFFFFF";


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
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				z++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+z)){
				html+='<td>&nbsp;</td>'
			}
			else {
			
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}
	
	$(".YearAndMonth").html(year+'年'+month+'月');
	$(".calendarButtomDetelDay").html(html);
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
	for(var i=0;i<6;i++){
		html+='<tr>'
		for(var j=0;j<7;j++){
			if(y<weekDay){
				z++;
				html+='<td>&nbsp;</td>'}
			else if(y>(allMonthDay+z)){
				html+='<td>&nbsp;</td>'
			}
			else {
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}

    $(".YearAndMonth").html(year+'年'+month+'月');
	$(".calendarButtomDetelDay").html(html);
}
function getEachValue(){
	var textIdele;
	if(textDateId=="changeHhore"){
		textIdele=$("#changeHhore");
	}
	else if(textDateId=="changeHhore1"){
		textIdele=$("#changeHhore1");
	}
	else {alert("ID获取错误")}
	var stmp=textIdele.val();

	var getdate=stmp.slice(8,10);

	$(".giveTextDate").each(function(){
		var x=this;
		if($(x).html()==getdate){
			$(x).css({"color":"rgba(0, 150, 255, 1.0)"});
			$(x).css({"font-weight":"bold"});
		}
	
	});
	var getdate1=stmp.slice(12);

	$(".giveTextHore").each(function(){
		var x=this;
		if($(x).html()==getdate1){
			$(x).css({"color":"rgba(0, 150, 255, 1.0)"});
			$(x).css({"font-weight":"bold"});
		}
	
	});

	

}

function giveTextDate(x){
	var textIdele;
	if(textDateId=="changeHhore"){
		textIdele=$("#changeHhore");
	}
	else if(textDateId=="changeHhore1"){
		textIdele=$("#changeHhore1");
	}
	else {alert("ID获取错误")}
	var day=$(x).html();
	var stmp=textIdele.val();
	var getdate=stmp.slice(12);

    if(day.length==1){
    	day='0'+day;
    }
    var month1=""+month;
    if(month1.length==1){
    	month1='0'+month1;
    }
 	var html1=year+'-'+month1+'-'+day; 
	if(getdate!=""&&getdate!=null){
		html1=html1+'  '+getdate
	}
	textIdele.val(html1);
	$(".giveTextDate").each(function(){
		var y=this;
		$(y).css({"color":"black"});
		$(y).css({"font-weight":"normal"});
	});
	
	$(x).css({"color":"rgba(0, 150, 255, 1.0)"});
	$(x).css({"font-weight":"bold"});

}
function giveTextHore(x){
	var textIdele;
	if(textDateId=="changeHhore"){
		textIdele=$("#changeHhore");
	}
	else if(textDateId=="changeHhore1"){
		textIdele=$("#changeHhore1");
	}
	else {alert("ID获取错误")}
 	var stmp=textIdele.val();
	var getdate=stmp.slice(0,10);
	var html2=getdate+'  '+$(x).html();
	textIdele.val(html2); 
	var stmp=textIdele.val();

 
	$(".giveTextHore").each(function(){
		var y=this;
		$(y).css({"color":"black"});
		$(y).css({"font-weight":"normal"});
	});
	
	$(x).css({"color":"rgba(0, 150, 255, 1.0)"});
	$(x).css({"font-weight":"bold"});

	
}
function giveTextMonth(x){
	
	$(".YearAndMonth").html(year+'年'+$(x).html()+"月");
	year=year;
	month=$(x).html();
	var html2='<div class="to_leftYearAndMonth"onclick="to_leftYearAndMonth()"></div>'
	          +'<div class="YearAndMonth" onclick="changeAllPanel()">'
	          +year
	          +'年'
	          +month
	          +'月'
	          +'</div>'
	          +'<div class="to_rightYearAndMonth" onclick="to_rightYearAndMonth()"></div>';
	
	$(".calendarTop").html(html2);
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
				
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}
    var html1 ='<div class="calendarButtomWeek">'
        +'<div class="calendarButtomWeek1">周一</div>'
        +'<div class="calendarButtomWeek1">周二</div>'
        +'<div class="calendarButtomWeek1">周三</div>'
        +'<div class="calendarButtomWeek1">周四</div>'
        +'<div class="calendarButtomWeek1">周五</div>'
        +'<div class="calendarButtomWeek1">周六</div>'
        +'<div class="calendarButtomWeek1">周日</div>'
        +'<table class="calendarButtomDetelDay"  border="0"  cellspacing="0" >'
        + html
        +'</table>'
	$(".calendarButtomLeft").html(html1);
        

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
			html+='<td><div class="giveTextMonth" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextMonth(this)">'+x+'</div></td>'
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
	$(".calendarTop").html(html2);
	$(".calendarButtomLeft").html(html);
	
}
function to_leftYearAndMonth1(){
	year--;
	$(".YearAndMonth").html(year+'年');
}
function to_rightYearAndMonth1(){
	year++;
	$(".YearAndMonth").html(year+'年');
}
function changeTextDate(ele){

	textDateId="";
	textDateId=ele.id;
	alert(textDateId)
	var date1=new Date();
	year=date1.getFullYear();
	month=date1.getMonth();
	month++;
	var html2='<div class="to_leftYearAndMonth" onclick="to_leftYearAndMonth()"></div>'
	          +'<div class="YearAndMonth" onclick="changeAllPanel()">'
	          +year
	          +'年'
	          +month
	          +'月'
	          +'</div>'
	          +'<div class="to_rightYearAndMonth" onclick="to_rightYearAndMonth()"></div>';
	          
	$(".calendarTop").html(html2);
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
				
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			y++;
		}
		html+='</tr>'
	}

	$(".calendarButtomDetelDay").html(html);
	var html1;
	for(var i=0;i<6;i++){
		 html1+='<tr>'
		for(var j=0;j<4;j++){
			html1+='<td><div class="giveTextHore" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextHore(this)">'+z+':00</div></td>'
			z++;
		}
		 html1+='</tr>'
	}
	$(".calendarButtomRight").html(html1);
	var textIdele;
	if(textDateId=="ArriveInput"){
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(0).css({"left":"110px"});
		$(".calendarFunction").children(".calendar").eq(0).css({"top":"190px"});
		
		
	}
	else if(textDateId=="LeaveInput"){
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(1).css({"left":"680px"});
		$(".calendarFunction").children(".calendar").eq(1).css({"top":"190px"});
	}


}
function addevent() {
	if(textDateId=="ArriveInput"){
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"none"});
	}
	else if(textDateId=="changeHhore1"){
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"none"});
	}
	
   
	  var j=0;
	  for(var i=0;i<xList.length;i++){
	  var m=false;
	  var getdate=getDate(xList[i].arriveDate)+'  '+xList[i].arriveDateHour+"";

	  if((textDateId=="changeHhore")&&($("#changeHhore1").val())==""){
		  m=TimePeriod1(getdate,$("#changeHhore").val());
	
	   } 
	  else if((textDateId=="changeHhore")&&($("#changeHhore1").val())!=""){
		  m=TimePeriod(getdate,$("#changeHhore").val(),$("#changeHhore1").val());
	   }
	   else if(textDateId=="changeHhore1"){
		  m=TimePeriod(getdate,$("#changeHhore").val(),$("#changeHhore1").val());  
	   }
	  if(m==true){
			dayList[j]=xList[i];
			j++;
		
	  }
	  }
	yList=[];
	yList=dayList;
	dayList=[];
	dayChange();
	document.getElementById("roomReservationsMainMianPanel").removeEventListener("click",addevent,true);
}
function closeCalendar(){
/*	document.getElementsByClassName("roomReservationsMainMianPanel").addEventListener("click", function() {
	    alert("你点击了 DIV2 元素 !");
	}, true);*/
	document.getElementById("roomReservationsMainMianPanel").addEventListener("click",addevent,true);
	
}
function TimePeriod1(time1,time2){

	var year1=time1.slice(0,4);
	var month1=time1.slice(5,7);
	var day1=time1.slice(8,10);
	var hour1,minite1;
	if(time1.slice(13,14)+""==":"){
		hour1=time1.slice(12,13);
		minite1=time1.slice(14,16);
	}
	else {
		minite1=time1.slice(15,17);
		hour1=time1.slice(12,14);}
	
	var year2=time2.slice(0,4);
	var month2=time2.slice(5,7);
	var day2=time2.slice(8,10);
	var hour2,minite2;
	if(time2.slice(13,14)+""==":"){
		hour2=time2.slice(12,13);
		minite2=time2.slice(14,16);
	}	
	else {
		minite2=time2.slice(15,17);
		hour2=time2.slice(12,14);}

	var t1=year1+'-'+month1+'-'+day1+' '+hour1+':'+minite1+':00'+"";
	var t2=year2+'-'+month2+'-'+day2+' '+hour2+':'+minite2+':00'+"";
	var formatTimeS1 = new Date(t1).getTime();
	var formatTimeS2 = new Date(t2).getTime();
    if(formatTimeS1>=formatTimeS2){
    	return true;
    }
    else return false;
}
function TimePeriod(time1,time2,time3){
	var year1=time1.slice(0,4);
	var month1=time1.slice(5,7);
	var day1=time1.slice(8,10);
	var hour1,minite1;
	if(time1.slice(13,14)+""==":"){
		hour1=time1.slice(12,13);
		minite1=time1.slice(14,16);
	}
	else {
		minite1=time1.slice(15,17);
		hour1=time1.slice(12,14);}
	
	var year2=time2.slice(0,4);
	var month2=time2.slice(5,7);
	var day2=time2.slice(8,10);
	var hour2,minite2;
	if(time2.slice(13,14)+""==":"){
		hour2=time2.slice(12,13);
		minite2=time2.slice(14,16);
	}
	else {
		minite2=time2.slice(15,17);
		hour2=time2.slice(12,14);}
	
	var year3=time3.slice(0,4);
	var month3=time3.slice(5,7);
	var day3=time3.slice(8,10);
	var hour3,minite3;
	if(time3.slice(13,14)+""==":"){
		hour3=time3.slice(12,13);
		minite3=time3.slice(14,16);
	}
	else {
		minite3=time3.slice(15,17);
		hour3=time3.slice(12,14);}
	

	var t1=year1+'-'+month1+'-'+day1+' '+hour1+':'+minite1+':00'+"";
	var t2=year2+'-'+month2+'-'+day2+' '+hour2+':'+minite2+':00'+"";
	var t3=year3+'-'+month3+'-'+day3+' '+hour3+':'+minite3+':00'+"";
	var formatTimeS1 = new Date(t1).getTime();
	var formatTimeS2 = new Date(t2).getTime();
	var formatTimeS3 = new Date(t3).getTime();
	if((formatTimeS1>=formatTimeS2)&&(formatTimeS1<=formatTimeS3)){
		return true;
	}
	else return false;
}
 