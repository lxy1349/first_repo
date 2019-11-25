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
	var date1=new Date();
	year1=date1.getFullYear();
	month1=date1.getMonth();
	month1++;
    var day1=date1.getDate();
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
			if(textDateId=="changeHhore"||textDateId=="changeHhore1"){	
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			 else if(textDateId=="ArriveInput"){
				var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				var formatTimeS1 = new Date(t1).getTime();
				var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				var formatTimeS2 = new Date(t2).getTime();
			  if(formatTimeS1<=formatTimeS2){
			  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			  x++;
			}
			  else {
			   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
			   x++;
			 }
			  
			}
			 else if(textDateId=="CheckInLeaveInput"){
					var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				  if(formatTimeS1<=formatTimeS2){
				  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				  x++;
				}
				  else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
			 else if(textDateId=="LeaveInput"){
				    if($("#ArriveInput").val()==""||$("#ArriveInput").val()==""){
					var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				     if(formatTimeS1<=formatTimeS2){
				    html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				    x++;
				}
				     else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
				    else {
				    	var time1=$("#ArriveInput").val();
				    	var year1=time1.slice(0,4);
				    	var month1=time1.slice(5,7);
				    	var day1=time1.slice(8,10);
				    	var t3=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				    	var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				    	var formatTimeS2 = new Date(t2).getTime();
				    	var formatTimeS3 = new Date(t3).getTime();
				    	if(formatTimeS3<=formatTimeS2){
				    		  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
							    x++;
				    	}
				        else {
							   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
							   x++;
							 }
				    	
				    }
			 }
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
	var date1=new Date();
	year1=date1.getFullYear();
	month1=date1.getMonth();
	month1++;
    var day1=date1.getDate();
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
			if(textDateId=="changeHhore"||textDateId=="changeHhore1"){	
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			 else if(textDateId=="ArriveInput"){
				var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				var formatTimeS1 = new Date(t1).getTime();
				var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				var formatTimeS2 = new Date(t2).getTime();
			  if(formatTimeS1<=formatTimeS2){
			  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			  x++;
			}
			  else {
			   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
			   x++;
			 }
			}
			 else if(textDateId=="CheckInLeaveInput"){
					var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				  if(formatTimeS1<=formatTimeS2){
				  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				  x++;
				}
				  else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
			 else if(textDateId=="LeaveInput"){
				    if($("#ArriveInput").val()==""||$("#ArriveInput").val()==""){
					var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				     if(formatTimeS1<=formatTimeS2){
				    html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				    x++;
				}
				     else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
				    else {
				    	var time1=$("#ArriveInput").val();
				    	var year1=time1.slice(0,4);
				    	var month1=time1.slice(5,7);
				    	var day1=time1.slice(8,10);
				    	var t3=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				    	var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				    	var formatTimeS2 = new Date(t2).getTime();
				    	var formatTimeS3 = new Date(t3).getTime();
				    	if(formatTimeS3<=formatTimeS2){
				    		  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
							    x++;
				    	}
				        else {
							   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
							   x++;
							 }
				    	
				    }
			 }
			}
			y++;
		}
		html+='</tr>'
	
	}
	$(".calendarButtomDetelDay").html(html);
    $(".YearAndMonth").html(year+'年'+month+'月');
	
}
function getEachValue(){
	var textIdele;
	if(textDateId=="changeHhore"){
		textIdele=$("#changeHhore");
	}
	else if(textDateId=="changeHhore1"){
		textIdele=$("#changeHhore1");
	}
	if(textDateId=="ArriveInput"){
		textIdele=$("#ArriveInput");
	}
	else if(textDateId=="LeaveInput"){
		textIdele=$("#LeaveInput");
	}
	else if(textDateId=="CheckInLeaveInput"){
		textIdele=$("#CheckInLeaveInput");
	}

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
	if(textDateId=="ArriveInput"){
		textIdele=$("#ArriveInput");
	}
	else if(textDateId=="LeaveInput"){
		textIdele=$("#LeaveInput");
	}
	else if(textDateId=="CheckInLeaveInput"){
		textIdele=$("#CheckInLeaveInput");
	}
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
	if(NowArriveDate!=$("#ArriveInput").val()){
		ArriveInputchange(); 
	}
	if((textDateId=="ArriveInput")){
	if($(".adddetelReservationInformationDeteldayInput").val()==0){
		$("#LeaveInput").val($("#ArriveInput").val());
	}}
	 if(textDateId=="LeaveInput"){
		
		 var time1=$("#LeaveInput").val()+"";
		 var year1=time1.slice(0,4);
		 var month1=time1.slice(5,7);
		 var day1=time1.slice(8,10); 
		 
		 var time2=$("#ArriveInput").val()+"";
		 var year2=time2.slice(0,4);
		 var month2=time2.slice(5,7);
		 var day2=time2.slice(8,10); 
		 
		var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
		var t2=year2+'-'+month2+'-'+day2+' '+0+':'+0+':00'+"";
		var formatTimeS1 = new Date(t1).getTime();
		var formatTimeS2 = new Date(t2).getTime();
		var formatTimeS=formatTimeS1-formatTimeS2;
		
		var day=parseInt(formatTimeS / (1000 * 60 * 60 * 24));
		$(".adddetelReservationInformationDeteldayInput").val(day);
		
	}
	 if(textDateId=="CheckInLeaveInput"){
		 var time1=$("#CheckInLeaveInput").val()+"";
		 var year1=time1.slice(0,4);
		 var month1=time1.slice(5,7);
		 var day1=time1.slice(8,10); 
		 
		 var time2=new Date();
		 var year2=time2.getFullYear();
		 var month2=parseInt(time2.getMonth())+1;
		 var day2=time2.getDate();
       	var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
       	var t2=year2+'-'+month2+'-'+day2+' '+0+':'+0+':00'+"";
		var formatTimeS2=new Date(t2).getTime();
		var formatTimeS1 = new Date(t1).getTime();
		var formatTimeS=formatTimeS1-formatTimeS2;
		
		var day=parseInt(formatTimeS / (1000 * 60 * 60 * 24));
		$(".adddetelReservationInformationDeteldayInput").val(day);
		
	 }

}
function giveTextHore(x){
	var textIdele;
	if(textDateId=="changeHhore"){
		textIdele=$("#changeHhore");
	}
	else if(textDateId=="changeHhore1"){
		textIdele=$("#changeHhore1");
	}
	if(textDateId=="ArriveInput"){
		textIdele=$("#ArriveInput");
	}
	else if(textDateId=="LeaveInput"){
		textIdele=$("#LeaveInput");
	}
	else if(textDateId=="CheckInLeaveInput"){
		textIdele=$("#CheckInLeaveInput");
	}
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
	
	if(NowArriveDate!=$("#ArriveInput").val()){
		ArriveInputchange();

	}
	if($(".adddetelReservationInformationDeteldayInput").val()==0){
		$("#LeaveInput").val($("#ArriveInput").val());
	}
	if(textDateId=="LeaveInput"){
	 	var stmp=textIdele.val();
		var getdate=stmp.slice(0,10);
		var html2=getdate+'  '+$(x).html();
		$("#LeaveInput").val(html2); 

	}

	
}
function ArriveInputchange(){
	
	if($("#ArriveInput").val()!=null&&$("#ArriveInput").val()!=""){
		var eleVal=parseInt($('.adddetelReservationInformationDeteldayInput').val())
		if(eleVal==null||eleVal==""){
			eleVal=0;
		}
		if(eleVal>=0){
			var time1=$("#ArriveInput").val();
			var getFullYear=time1.slice(0,4);
			var getMonth=time1.slice(5,7);
			var getDate=time1.slice(8,10);
			var hour1,minite1;
			var addDays=eleVal;
			
			var tatalDay=parseInt(addDays)+parseInt(getDate);
			var getDate=parseInt(getDate);
			
			if(time1.slice(13,14)+""==":"){
				hour1=time1.slice(12,13);
				minite1=time1.slice(14,16);
			}
			else {
				minite1=time1.slice(15,17);
				hour1=time1.slice(12,14);
				
			}
			 if(((getMonth)==1)||((getMonth)==3)||((getMonth)==5)||((getMonth)==7)||((getMonth)==8)||((getMonth)==10)||((getMonth)==12)){
		        	if(tatalDay>31){
		        		getDate=tatalDay-31;
		        		if((getMonth)==12){
		        			getFullYear++;
		        		}
		        	}
		        	else {
		        		
		        		getMonth--;
		        		
		        		getDate+=eleVal;}
		        	
		        }
		      else if(((getMonth)==4)||((getMonth)==6)||((getMonth)==9)||((getMonth)==11)){
		        	if(tatalDay>30){
		        	    
		        		getDate=tatalDay-30;
		        	}
		        	else {
		        		 getMonth--;
		        		 getDate+=eleVal;}
		        }
		        else if((getMonth)==2){
		        	if(((getFullYear%4==0)&&(!(getFullYear%100==0)))||(getFullYear%400==0)){
		        	if(tatalDay>29){
		        		getDate=tatalDay-29;
		        	}
		        	else {
		        		getMonth--;
		        		getDate+=eleVal;}
		        }
		        	else {
		        		if(tatalDay>28){
		        		getDate=tatalDay-29;
		            	}
		            	else {
		            	getMonth--;
		            	ggetDate+=eleVal;}
		        	}
		        }  
		        else {alert("error");}
			    getMonth++;
			    getMonth=getMonth+"";
			    getDate= getDate+"";
			    if(getMonth.length==1){
			    	getMonth="0"+getMonth;
			    }
			 
			    if(getDate.length==1){
			    	getDate="0"+getDate;
			    }
			   
			    var t1=getFullYear+'-'+getMonth+'-'+getDate+'  '+hour1+':'+minite1+"";
			    if(t1.length<16){
			    	t1=getFullYear+'-'+getMonth+'-'+getDate+"";
			    }
			    else t1=getFullYear+'-'+getMonth+'-'+getDate+'  '+hour1+':'+minite1+"";
			    $("#LeaveInput").val(t1);
			
		}
		else {
			$('.adddetelReservationInformationDeteldayInput').val(0);
		}
	} 
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
	var date1=new Date();
	year1=date1.getFullYear();
	month1=date1.getMonth();
	month1++;
    var day1=date1.getDate();
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
			if(textDateId=="changeHhore"||textDateId=="changeHhore1"){	
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			 else if(textDateId=="ArriveInput"){
				var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				var formatTimeS1 = new Date(t1).getTime();
				var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				var formatTimeS2 = new Date(t2).getTime();
			  if(formatTimeS1<=formatTimeS2){
			  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			  x++;
			}
			  else {
			   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
			   x++;
			 }
			}
			 else if(textDateId=="CheckInLeaveInput"){
					var t1=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				  if(formatTimeS1<=formatTimeS2){
				  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				  x++;
				}
				  else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
			 else if(textDateId=="LeaveInput"){
				    if($("#ArriveInput").val()==""||$("#ArriveInput").val()==""){
					var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				     if(formatTimeS1<=formatTimeS2){
				    html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				    x++;
				}
				     else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
				    else {
				    	var time1=$("#ArriveInput").val();
				    	var year1=time1.slice(0,4);
				    	var month1=time1.slice(5,7);
				    	var day1=time1.slice(8,10);
				    	var t3=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				    	var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				    	var formatTimeS2 = new Date(t2).getTime();
				    	var formatTimeS3 = new Date(t3).getTime();
				    	if(formatTimeS3<=formatTimeS2){
				    		  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
							    x++;
				    	}
				        else {
							   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
							   x++;
							 }
				    	
				    }
			 }
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
var NowArriveDate;
function changeTextDate(ele){
	
	
	if($("#ArriveInput").val()!=null&&$("#ArriveInput").val()!=""){
		NowArriveDate=$("#ArriveInput").val();
	}

	textDateId="";
	textDateId=ele.id;

	var date1=new Date();
	year=date1.getFullYear();
	month=date1.getMonth();
	month++;
    var day=date1.getDate();
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
			if(textDateId=="changeHhore"||textDateId=="changeHhore1"){	
			html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			x++;
			}
			 else if(textDateId=="CheckInLeaveInput"){
					var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				  if(formatTimeS1<=formatTimeS2){
				  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				  x++;
				}
				  else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
			 else if(textDateId=="ArriveInput"){
				var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
				var formatTimeS1 = new Date(t1).getTime();
				var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				var formatTimeS2 = new Date(t2).getTime();
			  if(formatTimeS1<=formatTimeS2){
			  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
			  x++; 
			}
			  else {
			   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
			   x++;
			 }
			}
			 else if(textDateId=="LeaveInput"){
				    if($("#ArriveInput").val()==""||$("#ArriveInput").val()==""){
					var t1=year+'-'+month+'-'+day+' '+0+':'+0+':00'+"";
					var formatTimeS1 = new Date(t1).getTime();
					var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
					var formatTimeS2 = new Date(t2).getTime();
				     if(formatTimeS1<=formatTimeS2){
				    html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
				    x++;
				}
				     else {
				   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
				   x++;
				 }
			 }
				    else {
				    	if(document.getElementById("ArriveInput")!=null){
				    	
				    	var time1=$("#ArriveInput").val();
				    	var year1=time1.slice(0,4);
				    	var month1=time1.slice(5,7);
				    	var day1=time1.slice(8,10);
				    	var t3=year1+'-'+month1+'-'+day1+' '+0+':'+0+':00'+"";
				    	var t2=year+'-'+month+'-'+x+' '+0+':'+0+':00'+"";
				    	var formatTimeS2 = new Date(t2).getTime();
				    	var formatTimeS3 = new Date(t3).getTime();
				    	if(formatTimeS3<=formatTimeS2){
				    		  html+='<td><div class="giveTextDate" onmousemove="giveTextDateMove(this)" onmouseout="giveTextDateOut(this)" onclick="giveTextDate(this)">'+x+'</div></td>'
							    x++;
				    	}
				        else {
							   html+='<td><div class="giveTextDateDemo">'+x+'</div></td>'
							   x++;
							 }
				     	
				    }

				    }
			 }
			}
			y++;
		}
		html+='</tr>'
	
	}
	$(".calendarButtomDetelDay").html(html);

	var textIdele;
	if(textDateId=="changeHhore"){
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(0).css({"left":"400px"});
		
		
	}
	else if(textDateId=="changeHhore1"){
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(1).css({"left":"600px"});
		
	}
	if(textDateId=="ArriveInput"){
		$(".calendarFunction").children(".calendar").eq(2).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(3).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(2).css({"top":"150px"});
		$(".calendarFunction").children(".calendar").eq(2).css({"left":"255px"});
		$(".calendarFunction").children(".calendar").eq(2).css({"z-index":"200"});
	}
	else if(textDateId=="LeaveInput"){
		$(".calendarFunction").children(".calendar").eq(3).css({"display":"block"});
		$(".calendarFunction").children(".calendar").eq(2).css({"display":"none"});
		$(".calendarFunction").children(".calendar").eq(3).css({"top":"150px"});
		$(".calendarFunction").children(".calendar").eq(3).css({"left":"815px"});
		$(".calendarFunction").children(".calendar").eq(3).css({"z-index":"200"});
		
	}
	if(textDateId=="CheckInLeaveInput"){
		
		$("#CheckInLeaveInput").parents(".calendarFunction").find(".calendar").css({"display":"block"});
		$("#CheckInLeaveInput").parents(".calendarFunction").find(".calendar").css({"top":"150px"});
		$("#CheckInLeaveInput").parents(".calendarFunction").find(".calendar").css({"left":"815px"});
		$("#CheckInLeaveInput").parents(".calendarFunction").find(".calendar").css({"z-index":"200"});
		
	}
	closeCalendar();
	getEachValue();

}

function addevent() {

	if(textDateId=="changeHhore"||textDateId=="changeHhore1"){
	if(textDateId=="changeHhore"){
		$(".calendarFunction").children(".calendar").eq(0).css({"display":"none"});
	}
	else if(textDateId=="changeHhore1"){
		$(".calendarFunction").children(".calendar").eq(1).css({"display":"none"});
	}

	
   
	  var j=0;
	  for(var i=0;i<xList.length;i++){
	  var m=false;
	  var getdate=getDate(xList[i].arriveDate)+'  '+xList[i].arriveDateHour+"";
     
	  if((textDateId=="changeHhore"||textDateId=="changeHhore1")&&($("#changeHhore1").val())==""){
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
	if(checkinparm==1){
		realitydayChange();
	}
	else if(checkinparm==0){
	dayChange();
	}
	document.getElementById("roomReservationsMainMianPanel").removeEventListener("click",addevent,true);
	}
	else if(textDateId=="ArriveInput"||textDateId=="LeaveInput"){
		if(textDateId=="ArriveInput"){
			$(".calendarFunction").children(".calendar").eq(2).css({"display":"none"});
		}
		else if(textDateId=="LeaveInput"){
			$(".calendarFunction").children(".calendar").eq(3).css({"display":"none"});
		}
		document.getElementById("adddetel1").removeEventListener("click",addevent,true);
	}
	else if(textDateId=="CheckInLeaveInput"){
		$("#CheckInLeaveInput").parents(".calendarFunction").find(".calendar").css({"display":"none"});
		document.getElementById("adddetel1").removeEventListener("click",addevent,true);
}
}
function closeCalendar(){
/*	document.getElementsByClassName("roomReservationsMainMianPanel").addEventListener("click", function() {
	    alert("你点击了 DIV2 元素 !");
	}, true);*/

	if(textDateId=="changeHhore"||textDateId=="changeHhore1"){
	document.getElementById("roomReservationsMainMianPanel").addEventListener("click",addevent,true);
	}
	if(textDateId=="ArriveInput"||textDateId=="LeaveInput"){
	document.getElementById("adddetel1").addEventListener("click",addevent,true);
	}
	if(textDateId=="CheckInLeaveInput"){
		document.getElementById("adddetel1").addEventListener("click",addevent,true);
		}
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
