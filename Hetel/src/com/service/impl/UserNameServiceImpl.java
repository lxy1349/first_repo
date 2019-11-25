package com.service.impl;


	
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mapper.ReserveOrderMapper;
import com.mapper.UserNameMapper;
import com.po.HetelLogol;
import com.po.ReserveOrder;
import com.po.RoomidAndUserName;
import com.po.Sign;
import com.po.UserName;
import com.po.Vip;
import com.service.UserNameService;



	@Service("userNameService")
	@Transactional()
	public class UserNameServiceImpl implements UserNameService{
		@Resource
		private UserNameMapper userNameMapper;
		@Resource
		private ReserveOrderMapper reserveOrderMapper;
		
    	@Override
		public List<UserName> findUser(String username,String password) {
			// TODO Auto-generated method stub
    		UserName user = new UserName();
    		user.setUsername(username);
    		user.setPassword(password);
			return userNameMapper.findUser(user);
		}
    	public ArrayList<Object> findAllInformation(){
    		 
    		ArrayList<Object> list=findHetelLogol();
     	    
         	return list;
    	}

		public ArrayList<Object> findHetelLogol(){
    		 ArrayList<ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
    		 List<HetelLogol> listLogol=new ArrayList<HetelLogol>();
    		 List<ReserveOrder> listId=userNameMapper.findHetelid();
    		 listLogol=userNameMapper.findHetelLogol();
    		 Date date = new Date(); 
    		 SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd");
    		 java.sql.Date nowDate=java.sql.Date.valueOf(dateFormat.format(date));
    		 ArrayList<RoomidAndUserName>  RoomidAndUserNameList1=reserveOrderMapper.roomAndName(nowDate);
    		 ArrayList<RoomidAndUserName>  RoomidAndUserNameList2=reserveOrderMapper.CheckInroomAndName();
    		 Set<HetelLogol> roomid=new  HashSet<HetelLogol>();
    		 String badHetel="坏";
    		for(int i=0;i<listLogol.size();i++) {
    			 if( listLogol.get(i).getHetelState().equals(badHetel)) {
    			 }
    			 else {
    			 listLogol.get(i).setHetelState("空");
				 listLogol.get(i).setOrderName("");
				 listLogol.get(i).setVip("");
				 roomid.add(listLogol.get(i));
    			 }
    		}
    		 for(int i=0;i<listLogol.size();i++) {
    			 for(int j=0;j<RoomidAndUserNameList1.size();j++) {
    				 if(listLogol.get(i).getHetelId()==RoomidAndUserNameList1.get(j).getRoomid()) {
    					 listLogol.get(i).setHetelState("定");
    					 listLogol.get(i).setOrderName(RoomidAndUserNameList1.get(j).getOrderName());
    					 listLogol.get(i).setVip(RoomidAndUserNameList1.get(j).getVip());
    					 roomid.add(listLogol.get(i));
    				 }
    			 }
    		 }
    		 for(int i=0;i<listLogol.size();i++) {
    			 for(int j=0;j<RoomidAndUserNameList2.size();j++) {
    				 if(listLogol.get(i).getHetelId()==RoomidAndUserNameList2.get(j).getRoomid()) {
    					 listLogol.get(i).setHetelState("住");
    					 listLogol.get(i).setOrderName(RoomidAndUserNameList2.get(j).getOrderName());
    					 listLogol.get(i).setVip(RoomidAndUserNameList2.get(j).getVip());
    					 roomid.add(listLogol.get(i));
    				 }
    			 }
    		 }
    		 Iterator<HetelLogol> iterator1 = roomid.iterator();
    		 ArrayList<HetelLogol> aList=new  ArrayList<HetelLogol>();
    		 while(iterator1.hasNext()) {
    			 aList.add(iterator1.next());
    		 }
/*    		 ArrayList<HetelLogol> hlist= new ArrayList<HetelLogol>();
    		 ArrayList<Integer> a= new  ArrayList<Integer>();*/
/*    		 for(int j=0;j<aList.size();j++) {
    			 for(int i=0;i<listLogol.size();i++) {
    				 if(listLogol.get(i).getHetelId()==aList.get(j).getHetelId()) {
    					 a.add(i);
    				 }
    				 }
    			
    		}
    		 int k =0;
    		 for(int i=0;i<listLogol.size();i++) {
    			 if(k<a.size()&&a.get(k)==i) {
    				k++;
    			 }else {
    				 listLogol.set();
    			 }
    			 
    		 }*/

    		 for(int i=0;i<listLogol.size();i++) {
    			 userNameMapper.resetRoom(listLogol.get(i));
    		 }
    		 list=listadd(listLogol);
    		 ArrayList<String> roomStyle=userNameMapper.findRoomStyle();
    		 ArrayList<Object> list1=new ArrayList<Object>();
    		 list1.add(list);
    		 list1.add(roomStyle);
    		 
    		 return list1;
    	}
    	
    	public ArrayList< ArrayList<HetelLogol>> indexByRoomState(String state1,String style1,Integer floor1){
    		HetelLogol hetel1=new HetelLogol();
    		List<HetelLogol> listRoomState = new ArrayList<HetelLogol>();
    		ArrayList< ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
        	 ArrayList< ArrayList<HetelLogol>> list1=new ArrayList<ArrayList<HetelLogol>>();
    		
    		hetel1.setHetelState(state1);
    		hetel1.setRoomStyle(style1);
    		hetel1.setFloor(floor1);
           

    		if(hetel1.getHetelState()!=""&&hetel1.getRoomStyle()!=""&&hetel1.getFloor()!=0) {
    			listRoomState=userNameMapper.indexByRoomState1(hetel1);
    			
    		} 
    		else if(hetel1.getHetelState()!=""&&hetel1.getRoomStyle()!=""&&hetel1.getFloor()==0) {
    			listRoomState=userNameMapper.indexByRoomState2(hetel1); 
    			
    		}
    		else if(hetel1.getHetelState()!=""&&hetel1.getRoomStyle()==""&&hetel1.getFloor()!=0) {
    			listRoomState=userNameMapper.indexByRoomState3(hetel1); 
    			
    		}
    		else if(hetel1.getHetelState()!=""&&hetel1.getRoomStyle()==""&&hetel1.getFloor()==0) {
    			
    			listRoomState=userNameMapper.indexByRoomState4(hetel1); 
    		
    		}
    		else if(hetel1.getHetelState()==""&&hetel1.getRoomStyle()!=""&&hetel1.getFloor()!=0) {
    			listRoomState=userNameMapper.indexByRoomState5(hetel1);
    			
    		}
    		else if(hetel1.getHetelState()==""&&hetel1.getRoomStyle()!=""&&hetel1.getFloor()==0) {
    			listRoomState=userNameMapper.indexByRoomState6(hetel1); 
    			
    		}
    		else if(hetel1.getHetelState()==""&&hetel1.getRoomStyle()==""&&hetel1.getFloor()!=0) {
    			listRoomState=userNameMapper.indexByRoomState7(hetel1); 
    			
    		}
    		else if(hetel1.getHetelState()==""&&hetel1.getRoomStyle()==""&&hetel1.getFloor()==0) {
    			
    			listRoomState=userNameMapper.indexByRoomState8(hetel1); 
    			
    		}
    		else {
    			System.out.println("error");
    		}
    		
    		
    		list=listadd(listRoomState);
   
         	 for(int i=0;i<list.size();i++) {
        		 if(!list.get(i).isEmpty()) {
        			 list1.add(list.get(i));
        		 }
	
             }
      
    		return list1;
    		
    	}
    	
    	public ArrayList< ArrayList<HetelLogol>> listadd(List<HetelLogol> listRoomState){
    		 int maxfloor=userNameMapper.indexfloorNum();
    		 ArrayList< ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
    		 ArrayList<HetelLogol> listLogol=new ArrayList<HetelLogol>();
   		   for(int i=0;i<maxfloor;i++) {
       		     for(int j=0;j<listRoomState.size();j++) {
       		    	 if(listRoomState.get(j).getFloor()==(i+1)) { 
          		 listLogol.add(listRoomState.get(j));
       		     }
          	 }
       		 list.add((ArrayList<HetelLogol>) listLogol.clone());
       		 listLogol.clear();
       		
       		 
       		 
      		 }
        		
      	  
            	 return list;
    	}
    	public ArrayList< ArrayList<HetelLogol>>  indexByFormText(String text){
    		List<HetelLogol> listRoomState = new ArrayList<HetelLogol>();
    		ArrayList< ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
    		 ArrayList< ArrayList<HetelLogol>> list1=new ArrayList<ArrayList<HetelLogol>>();
    		 if(text==""||text==null) {listRoomState=userNameMapper.findHetelLogol();}
    		 else if(text.matches("[0-9]+")) {
    			int text1=Integer.parseInt(text);
    			listRoomState=userNameMapper.indexByFormText1(text1);
    		}
    		else {
    			listRoomState=userNameMapper.indexByFormText2(text);
    		}
    		
    		list=listadd(listRoomState);
       
            for(int i=0;i<list.size();i++) {
            		 if(!list.get(i).isEmpty()) {
            			 list1.add(list.get(i));
            		 }
    	
                 }
            
        	return list1;
    	}
    	public ArrayList<String> findroomType(){
    		return(userNameMapper.findRoomStyle());
    	}
    	public ArrayList<ArrayList<HetelLogol>> addRoomNum(int roomNum,String roomStyle) {
    		HetelLogol hetel=new HetelLogol();
    		int floor=roomNum/100;
    		hetel.setHetelId(roomNum);
    		hetel.setRoomStyle(roomStyle);
    		hetel.setHetelState("空");
    		hetel.setFloor(floor);
    		userNameMapper.addRoomNum(hetel);
    		List<HetelLogol> hetelList=userNameMapper.findallRoomInforamtion();
    		ArrayList< ArrayList<HetelLogol>> list=listadd(hetelList);
    		return list;
    	}
    	public ArrayList<ArrayList<HetelLogol>> checkCandeleteRoomNum() {
    		ArrayList<Integer> canDeleteRoom=userNameMapper.checkCandeleteRoomNum();
    		List<HetelLogol> hetelList=userNameMapper.findallRoomInforamtion();
    		for(int i=0;i<canDeleteRoom.size();i++) {
        		for(int j=0;j<hetelList.size();j++) {
        		
        			if(canDeleteRoom.get(i).intValue()==hetelList.get(j).getHetelId()) {
        				hetelList.get(j).setCanDele(true);
        			}
        		}
    		}
    	  ArrayList<ArrayList<HetelLogol>> list=listadd(hetelList);
           return list;
    	}
    	public void  roomdelete(int HetelId) {
    		userNameMapper.roomdelete(HetelId);
    	}
    	public boolean addNewRoomType(String newRoomType) {
    		ArrayList<String> roomTypeList=userNameMapper.findRoomStyle();
    		for(int i=0;i<roomTypeList.size();i++) {
    			if(roomTypeList.get(i).equals(newRoomType)) {
    				return false;
    			}
    		}
    		userNameMapper.addNewRoomType(newRoomType);
    		return true;
    	}
    	public boolean RoomStyleDelete(String roomType) {
    		ArrayList<String> OccupyRoomType=userNameMapper.findOccupyRoomType();
    		for(int i=0;i<OccupyRoomType.size();i++) {
    			if(OccupyRoomType.get(i).equals(roomType)) {
    				return false;
    			}
    		}
    		userNameMapper.DeteleRoomType(roomType);
    		userNameMapper.DeteleRoomTypeInfor(roomType);
    		return true;
    		
    	}
    	public ArrayList<Object> findCanDeleteFloor() {
       		int maxFloor=userNameMapper.indexfloorNum();
    		ArrayList<Integer> CanDeleteFloor =userNameMapper.findCanDeleteFloor();
    		ArrayList<Integer> floorNum= new ArrayList<Integer>();
    		ArrayList<Integer> needfloor= new ArrayList<Integer>();
    		ArrayList<Object> list=new ArrayList<Object>();
    		for(int i=1;i<=maxFloor;i++) {
    			CanDeleteFloor.add(i-1, userNameMapper.findCanDeleteFloor(i));
    		}
    		for(int i=1;i<=maxFloor;i++) {
    			floorNum.add(i-1, userNameMapper.findFloorNum(i));
    		}
    		for(int i=0;i<maxFloor;i++) {
    			if(CanDeleteFloor.get(i).equals(floorNum.get(i))){
    				needfloor.add(i+1);
    			}
    		}
    		ArrayList<ArrayList<HetelLogol>> list1=listadd(userNameMapper.findallRoomInforamtion());
    		list.add(list1);
    		list.add(needfloor);
    		return list;
    		
    	}
    	public Boolean deleteCanDeleteFloor(int floor) {
    		int maxFloor=userNameMapper.indexfloorNum();
    		if(floor<maxFloor) {
    			return false;
    		}
    		else {
    			userNameMapper.deleteCanDeleteFloor(floor);
    			return true;
    		}
    	}
    	public ArrayList<Sign> findSignInformation(){
    		ArrayList<Sign> sign=userNameMapper.findSignInfirmation();
    		System.out.println(sign);
    		return sign;
    	}
   public void changeHetelBad(int hetelId) {
	   String hetelState=userNameMapper.findRoomState(hetelId);
	   String badHetel="坏";
	   if(hetelState.equals(badHetel)) {
		   userNameMapper.changeHetelGood(hetelId);
	   }
	   else {
		   userNameMapper.changeHetelBad(hetelId);
	   }
	   
   }
  public boolean AddsignInformation(String username) {
    		Date date=new Date();
    		Sign sign=new Sign();
    		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    		String nowDate=formatter.format(date);
    		java.sql.Date Date1=java.sql.Date.valueOf(nowDate);
    		
    		
    		java.text.SimpleDateFormat formatter11 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    		String nowDate11=formatter11.format(date);
    		
    		 Calendar calendar = new GregorianCalendar();
    		calendar.setTime(date);
    		calendar.add(calendar.DATE,1);//把日期往后增加一天.整数往后推,负数往前移动
    		date=calendar.getTime(); //这个时间就是日期往后推一天的结果 
    		SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy-MM-dd");
    		String dateString = formatter1.format(date);
    		java.sql.Date Date2=java.sql.Date.valueOf(dateString);
    		sign.setBegin_time(Date1);
    		sign.setEnd_time(Date2);
    		sign.setSign_name(username);

    		sign.setSign_time(nowDate11);
    		ArrayList<String> s=userNameMapper.findSignInfirmationByNAme(sign);
    		ArrayList<String> s1=userNameMapper.findSignOutfirmationByNAme(sign);
   		  if(s.size()>0) {
    			return false;
    		}
    		else {

    			userNameMapper.insertSininInfor(sign);
    			return true;
    		}
    	}
  public boolean AddsignOutformation(String username) {
		Date date=new Date();
		Sign sign=new Sign();
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String nowDate=formatter.format(date);
		java.sql.Date Date1=java.sql.Date.valueOf(nowDate);
		
		
		java.text.SimpleDateFormat formatter11 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String nowDate11=formatter11.format(date);
		
		 Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		calendar.add(calendar.DATE,1);//把日期往后增加一天.整数往后推,负数往前移动
		date=calendar.getTime(); //这个时间就是日期往后推一天的结果 
		SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy-MM-dd");
		String dateString = formatter1.format(date);
		java.sql.Date Date2=java.sql.Date.valueOf(dateString);
		sign.setBegin_time(Date1);
		sign.setEnd_time(Date2);
		sign.setSign_name(username);

		sign.setSign_time(nowDate11);
		ArrayList<String> s=userNameMapper.findSignInfirmationByNAme(sign);
		ArrayList<String> s1=userNameMapper.findSignOutfirmationByNAme(sign);
		  if(s.size()>0) {
			if(s1.size()>0) {
				return false;
			}
			else {
				userNameMapper.updateSinOutInfor(sign);
				return true;
			}
		}
		else {
			userNameMapper.insertSinOutInfor(sign);
           return true;
		}
	}
  public boolean chenckaddUser(String username,String password) {
	  UserName use=new UserName();
	  int size=userNameMapper.checkUser(username).size();
	  if(size==0) {
		  use.setUsername(username);
		  use.setPassword(password);
		  userNameMapper.adduser(use);
    	  return true;
	  }
	  else { 
	   return false;
	  }
	
  }
  public boolean vipCheck(String vipName,String vipIdNum,String radioMan,long phoneNum) {
	  Vip vip=new Vip();
	  vip=userNameMapper.vipCheck(vipIdNum);
	  if(vip!=null) {
		  return false;
	  }
	  else {
		  Vip vip1=new Vip();
		  vip1.setPhoneNum(phoneNum);
		  vip1.setRadioMan(radioMan);
		  vip1.setVipIdNum(vipIdNum);
		  vip1.setVipName(vipName);
		  userNameMapper.insertVip(vip1);
		  return true;
	  }
  }
  public ArrayList<Vip> findAllVip(){
	  ArrayList<Vip> vipList=userNameMapper.getAllVip();
	  return vipList;
  }
  public boolean vipModify(String vipName, String vipIdNum, String sexradio, long vipPhoneNum) {
	  Vip vip1=new Vip();
	  vip1.setPhoneNum(vipPhoneNum);
	  vip1.setRadioMan(sexradio);
	  vip1.setVipIdNum(vipIdNum);
	  vip1.setVipName(vipName);
	  userNameMapper.vipModify(vip1);
	  return true;
  }
  public ArrayList<Vip> CheckvipNum(String val){
	  if(val==""||val==null) {
		  return userNameMapper.getAllVip();
	  }
	  return userNameMapper.CheckvipNum(val);
  }
  public ArrayList<Vip> DeleteVipNum(String idNum){
	  userNameMapper.DeleteVipNum(idNum);
	  return userNameMapper.getAllVip();
  }
	}

