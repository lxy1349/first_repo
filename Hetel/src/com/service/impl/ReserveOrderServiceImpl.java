package com.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mapper.ReserveOrderMapper;
import com.mapper.StoreMapper;
import com.mapper.UserNameMapper;
import com.po.CheckOutorder;
import com.po.Datefind;
import com.po.HetelLogol;
import com.po.IdNum;
import com.po.ReserveOrder;
import com.po.RoomGoodsOrder;
import com.po.RoomOrder;
import com.po.RoomPrice;
import com.po.Store;
import com.po.Vip;
import com.service.ReserveOrderService;

@Service("reserveOrderService")
public class ReserveOrderServiceImpl implements ReserveOrderService{
     
	@Resource
	private ReserveOrderMapper reserveOrderMapper;
	@Resource
	private StoreMapper storeMapper;
	@Resource
	private UserNameMapper userNameMapper;
	
	public ArrayList<ReserveOrder> getAllReserveOrder(){
		ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
		orderList=reserveOrderMapper.getAllReserveOrder();
		return orderList;
	}
	public ArrayList<ReserveOrder> getAllCheckInOrder(){
		ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
		orderList=reserveOrderMapper.getAllCheckInOrder();
		return orderList;
	}
	public ArrayList<ArrayList<HetelLogol>> getAllHetelInformation(String nowDate){//返回可预订的房间类型
		java.sql.Date date1=java.sql.Date.valueOf(nowDate);
		ArrayList<Integer> ReserveOrderNumber=new ArrayList<Integer> ();
		ArrayList<Integer> CheckInOrderNumber=new ArrayList<Integer> ();
		ArrayList<ArrayList<Integer>>  roomidReservelist=new ArrayList<ArrayList<Integer>>();
		ArrayList<ArrayList<Integer>> roomidCheckInlist=new ArrayList<ArrayList<Integer>>();
		ReserveOrder reserveOrder=new ReserveOrder();
		reserveOrder.setArriveDate(date1);

		
		/*ReserveOrderNumber=reserveOrderMapper.getNeedReserveOrderBytime1(reserveOrder);获取符合时间段的订单*/
		CheckInOrderNumber=reserveOrderMapper.getNeedCheckInOrderBytime(reserveOrder);


	   for(int i=0;i<ReserveOrderNumber.size();i++) {
		   roomidReservelist.add(reserveOrderMapper.getNeedReserveRoomBytime(ReserveOrderNumber.get(i)));
	   }
	   for(int j=0;j<CheckInOrderNumber.size();j++) {
		   roomidCheckInlist.add(reserveOrderMapper.getNeedReserveRoomBytime(CheckInOrderNumber.get(j)));
	   }
	   List<Integer> list1=new ArrayList<Integer>();
	   for(int i=0;i<roomidReservelist.size();i++) {//添加预定信息
		   for(int j=0;j<roomidReservelist.get(i).size();j++) {
			   list1.add(roomidReservelist.get(i).get(j));
		   }
	   }
	   for(int i=0;i<roomidCheckInlist.size();i++) {//添加入住信息
		   for(int j=0;j<roomidCheckInlist.get(i).size();j++) {
			   list1.add(roomidCheckInlist.get(i).get(j));
		   }
	   }
	   List<Integer> Number=reserveOrderMapper.getNeedRoom();
	   for(int i=0;i<Number.size();i++) {//添加空信息
		   list1.add(Number.get(i)); 
	   }
	   ArrayList<HetelLogol> hetelList1=new ArrayList<HetelLogol>();
	   for(int i=0;i<list1.size();i++) {
		  HetelLogol hetel=reserveOrderMapper.findHetelbyroomid(list1.get(i));
		  hetelList1.add(hetel);
	   }
        
	   

         
		ArrayList<RoomPrice> room=new ArrayList<RoomPrice>();
		ArrayList<ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
		room=storeMapper.getroomPriceInformation();
		ArrayList<HetelLogol> roomT=new ArrayList<HetelLogol>();
		for(int i=0;i<room.size();i++) {//添加房间信息
		
			 roomT.clear();
			for(int j=0;j<hetelList1.size();j++) {
				String a=room.get(i).getRoomType()+"";
				String b=hetelList1.get(j).getRoomStyle()+"";
				if(a.equals(b)) {
					hetelList1.get(j).setRoomCashPledge(room.get(i).getRoomCashPledge());
					hetelList1.get(j).setRoomPrice(room.get(i).getRoomPrice());
					roomT.add(hetelList1.get(j));
				}
				
			}
			if(!roomT.isEmpty()){
			 list.add((ArrayList<HetelLogol>) roomT.clone());
			 roomT.clear();
			}
		}
		
		return list;
	}
	public ArrayList<ArrayList<HetelLogol>> getAllHetelInformation1(String orderDate,String leaveDate){
		
		 ArrayList<Integer> roomidlist=reserveOrderMapper.getAllRoomid();
		 ArrayList<Datefind> Datelist =reserveOrderMapper.needArriveTime();
		  ArrayList<ArrayList<Long>> totalList= new ArrayList<ArrayList<Long>>();
		 for(int i=0;i<(roomidlist.size());i++) {
			 ArrayList<Long> longlist=new ArrayList<Long>();
			 for(int j=0;j<Datelist.size();j++)
		 if(roomidlist.get(i)==Datelist.get(j).getRoomid()) {
			   SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			   Date Adate = null;
			   Date Ldate = null;
			try {
				Adate = simpleDateFormat.parse(String.valueOf(Datelist.get(j).getArriveDate()));
				Ldate = simpleDateFormat.parse(String.valueOf(Datelist.get(j).getLeaveDate()));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			   long a1=Adate.getTime();
			   long l1=Ldate.getTime();
			   if(longlist.size()==0) {
				   
				   longlist.add(Long.valueOf(roomidlist.get(i)));
				   longlist.add(a1);
				   longlist.add(l1);
			   }
			   else {
				   longlist.add(a1);
				   longlist.add(l1);
			   }
			  
		 }
			 if(!longlist.isEmpty()) {
			 totalList.add(longlist);
			 }
			 longlist=null;
		 }

		 ArrayList<Datefind> zhulist =reserveOrderMapper.needzhuTime();
		  ArrayList<ArrayList<Long>> totalzhuList= new ArrayList<ArrayList<Long>>();
		 for(int i=0;i<(roomidlist.size());i++) {
			 ArrayList<Long> longlist=new ArrayList<Long>();
			 for(int j=0;j<zhulist.size();j++)
		 if(roomidlist.get(i)==zhulist.get(j).getRoomid()) {
			   SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			   Date Adate = null;
			   Date Ldate = null;
			try {
				Adate = simpleDateFormat.parse(String.valueOf(zhulist.get(j).getArriveDate()));
				Ldate = simpleDateFormat.parse(String.valueOf(zhulist.get(j).getLeaveDate()));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			   long a1=Adate.getTime();
			   long l1=Ldate.getTime();
			   if(longlist.size()==0) {
				   
				   longlist.add(Long.valueOf(roomidlist.get(i)));
				   longlist.add(a1);
				   longlist.add(l1);
			   }
			   else {
				   longlist.add(a1);
				   longlist.add(l1);
			   }
			  
		 }
			 if(!longlist.isEmpty()) {
			 totalzhuList.add(longlist);
			 }
			 longlist=null;
		 }
		 

		for(int i=0;i<totalzhuList.size();i++) {
			int para2=0;
			bbq:for(int j=0;j<totalList.size();j++) {
				int para=0;

				if(totalzhuList.get(i).get(0).equals(totalList.get(j).get(0))) {
					
					para2=1;
					for(int m=0;m<totalList.get(j).size();m++) {
						if(m!=0&&m%2==0) {
							if(totalzhuList.get(i).get(1)>=totalList.get(j).get(m)) {
								totalList.get(j).add(m+1,totalzhuList.get(i).get(1));
								totalList.get(j).add(m+2,totalzhuList.get(i).get(2));
								para=1;
								
								break bbq;
							}
						}
					}
					if(para==0) {
						totalList.get(j).add(1,totalzhuList.get(i).get(1));
						totalList.get(j).add(2,totalzhuList.get(i).get(2));
						
						break bbq;
					}
				}
			 }
		if(para2==0) {
			totalList.add(totalzhuList.get(i));
		}
	 }
		 SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		 Date arriveTime=null;
		 Date leaveTime=null;
			try {
				arriveTime=simpleDateFormat.parse(orderDate);
				leaveTime=simpleDateFormat.parse(leaveDate);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		long atime=arriveTime.getTime();
		long ltime=leaveTime.getTime();
	  ArrayList<Integer> aroom=new ArrayList<Integer>();
	  for(int i=0;i<totalList.size();i++) {
		  thefor:for(int j=0;j<totalList.get(i).size();j++) {
                if(j==1) {
                	if(ltime<=totalList.get(i).get(j)) {
                		aroom.add(totalList.get(i).get(0).intValue());
                		break  thefor;
                	}
                }
                else if(j==(totalList.get(i).size()-1)) {
                	if(atime>=totalList.get(i).get(j)) {
                		aroom.add(totalList.get(i).get(0).intValue());
                		break  thefor;
                	}
                }
                else if(j!=0&&j%2==0&&j!=(totalList.get(i).size()-1)){
                	if((atime>=totalList.get(i).get(j))&&(ltime<=totalList.get(i).get(j+1))) {
                		aroom.add(totalList.get(i).get(0).intValue());
                		break  thefor;
                	}
                }
		  }
	  }
	  

	
/*		java.sql.Date date1=java.sql.Date.valueOf(orderDate);
		java.sql.Date date2=java.sql.Date.valueOf(leaveDate);
		ArrayList<Integer> ReserveOrderNumber=new ArrayList<Integer> ();
		ArrayList<Integer> CheckInOrderNumber=new ArrayList<Integer> ();
		ArrayList<ArrayList<Integer>>  roomidReservelist=new ArrayList<ArrayList<Integer>>();
		ArrayList<ArrayList<Integer>> roomidCheckInlist=new ArrayList<ArrayList<Integer>>();
		ReserveOrder reserveOrder=new ReserveOrder();
		reserveOrder.setArriveDate(date1);
		reserveOrder.setLeaveDate(date2);
		
		ReserveOrderNumber=reserveOrderMapper.getNeedReserveOrderBytime(reserveOrder);获取符合时间段的订单
		 CheckInOrderNumber=reserveOrderMapper.getNeedCheckInOrderBytime(reserveOrder);
        

		 
	   for(int i=0;i<ReserveOrderNumber.size();i++) {
		   ArrayList<Integer> a=reserveOrderMapper.getNeedReserveRoomBytime(ReserveOrderNumber.get(i));
		   roomidReservelist.add(reserveOrderMapper.getNeedReserveRoomBytime(ReserveOrderNumber.get(i)));
		
	   }
	   
	 
	   for(int j=0;j<CheckInOrderNumber.size();j++) {
		   roomidCheckInlist.add(reserveOrderMapper.getNeedReserveRoomBytime(CheckInOrderNumber.get(j)));
	   }
	   List<Integer> list1=new ArrayList<Integer>();
	   for(int i=0;i<roomidReservelist.size();i++) {//添加预定信息
		   for(int j=0;j<roomidReservelist.get(i).size();j++) {
			   list1.add(roomidReservelist.get(i).get(j));
		   }
	   }
	   for(int i=0;i<roomidCheckInlist.size();i++) {//添加入住信息
		   for(int j=0;j<roomidCheckInlist.get(i).size();j++) {
			   list1.add(roomidCheckInlist.get(i).get(j));
		   }
	   }*/
	   List<Integer> Number=reserveOrderMapper.getNeedRoom();
	   for(int i=0;i<Number.size();i++) {//添加空信息
		   aroom.add(Number.get(i)); 
	   }
	   ArrayList<HetelLogol> hetelList1=new ArrayList<HetelLogol>();
	   for(int i=0;i<aroom.size();i++) {
		  HetelLogol hetel=reserveOrderMapper.findHetelbyroomid(aroom.get(i));
		  hetelList1.add(hetel);
	   }
		   for ( int i = 0 ; i <  hetelList1.size() - 1 ; i ++ ) {
		     for ( int j =  hetelList1.size() - 1 ; j > i; j -- ) {
		       if ( hetelList1.get(j).equals( hetelList1.get(i))) {
		    	   hetelList1.remove(j);
		       }
		      }
		    }

	   

         
		ArrayList<RoomPrice> room=new ArrayList<RoomPrice>();
		ArrayList<ArrayList<HetelLogol>> list=new ArrayList<ArrayList<HetelLogol>>();
		room=storeMapper.getroomPriceInformation();
		ArrayList<HetelLogol> roomT=new ArrayList<HetelLogol>();
		for(int i=0;i<room.size();i++) {//添加房间信息
		
			 roomT.clear();
			for(int j=0;j<hetelList1.size();j++) {
				String a=room.get(i).getRoomType()+"";
				String b=hetelList1.get(j).getRoomStyle()+"";
				if(a.equals(b)) {
					hetelList1.get(j).setRoomCashPledge(room.get(i).getRoomCashPledge());
					hetelList1.get(j).setRoomPrice(room.get(i).getRoomPrice());
					roomT.add(hetelList1.get(j));
				}
				
			}
			if(!roomT.isEmpty()){
			 list.add((ArrayList<HetelLogol>) roomT.clone());
			 roomT.clear();
			}
		}
		
		return list;
	}
	public void addReserveOrder(ReserveOrder[] ra,RoomOrder[] ro) {
		reserveOrderMapper.addReserveOrder(ra[0]);//预定信息表
		for(int i=0;i<ro.length;i++) {
			reserveOrderMapper.addRoomOrder(ro[i]);//一单多房表
		}
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String aDate = formatter.format(ra[0].getArriveDate());
		String lDate=formatter.format(ra[0].getLeaveDate());
		java.sql.Date arriveDate=java.sql.Date.valueOf(aDate);
		java.sql.Date leaveDate=java.sql.Date.valueOf(lDate);
        

	}

	public void addCheckInOrder(ReserveOrder[] ra,RoomOrder[] ro) {
		reserveOrderMapper.addCheckInOrder(ra[0]);//预定信息表
		for(int i=0;i<ro.length;i++) {
			reserveOrderMapper.addRoomOrder(ro[i]);//一单多房表
		}
		int orderNumber=ra[0].getOrderNumber();

		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String aDate = formatter.format(ra[0].getArriveDate());
		String lDate=formatter.format(ra[0].getLeaveDate());
		java.sql.Date arriveDate=java.sql.Date.valueOf(aDate);
		java.sql.Date leaveDate=java.sql.Date.valueOf(lDate);
		

	}
	public void ModifyReserveOrder(ReserveOrder[] ra,RoomOrder[] ro) {
		reserveOrderMapper.ModifyReserveOrder(ra[0]);//预定信息表
		reserveOrderMapper.deleteRoomOrder(ro[0].getOrderNumber());
		for(int i=0;i<ro.length;i++) {
			reserveOrderMapper.addRoomOrder(ro[i]);//一单多房表
		}
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String aDate = formatter.format(ra[0].getArriveDate());
		String lDate=formatter.format(ra[0].getLeaveDate());
		java.sql.Date arriveDate=java.sql.Date.valueOf(aDate);
		java.sql.Date leaveDate=java.sql.Date.valueOf(lDate);
        

	}
	public void ModifyCheckInAllOrder(ReserveOrder[] ra,RoomOrder[] ro) {
		reserveOrderMapper.ModifyCheckInOrder(ra[0]);//预定信息表
		reserveOrderMapper.deleteRoomOrder(ro[0].getOrderNumber());
		for(int i=0;i<ro.length;i++) {
			reserveOrderMapper.addRoomOrder(ro[i]);//一单多房表
		}
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String aDate = formatter.format(ra[0].getArriveDate());
		String lDate=formatter.format(ra[0].getLeaveDate());
		java.sql.Date arriveDate=java.sql.Date.valueOf(aDate);
		java.sql.Date leaveDate=java.sql.Date.valueOf(lDate);
        

	}
	public ArrayList<Object>  getReserveOrder(int orderNumber,String NowDate){
		ReserveOrder reserveOrder=reserveOrderMapper.ReserveOrderFind(orderNumber);
		 ArrayList<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		 ArrayList<ArrayList<HetelLogol>> list=getAllHetelInformation(NowDate);
		 ArrayList<Object> orderList=new ArrayList<Object>();
		 orderList.add(reserveOrder);
		 orderList.add(roomList);
		 orderList.add(list);
		return orderList;
	}
	public ArrayList<Object>  getCheckInOrder(int orderNumber,String NowDate){
		ReserveOrder reserveOrder=reserveOrderMapper.getOrderNumberCheckInOrder(orderNumber);
		 ArrayList<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		 ArrayList<ArrayList<HetelLogol>> list=getAllHetelInformation(NowDate);
		 ArrayList<Object> orderList=new ArrayList<Object>();
		 orderList.add(reserveOrder);
		 orderList.add(roomList);
		 orderList.add(list);
		return orderList;
	}
	public ArrayList<Object> CheckReserveOrder(int orderNumber){
		ReserveOrder reserveOrder=reserveOrderMapper.ReserveOrderFind(orderNumber);
		 ArrayList<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		 ArrayList<Object> orderList=new ArrayList<Object>();
		 orderList.add(reserveOrder);
		 orderList.add(roomList);
		return orderList;
	}
	public ArrayList<Object> CheckCheckInOrder(int orderNumber){
		ReserveOrder reserveOrder=reserveOrderMapper.getOrderNumberCheckInOrder(orderNumber);
		 ArrayList<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		 ArrayList<Object> orderList=new ArrayList<Object>();
		 orderList.add(reserveOrder);
		 orderList.add(roomList);
		 
		return orderList;
	}
	public void DeleteReserveOrder(int orderNumber) {
		reserveOrderMapper.DeleteReserveOrder(orderNumber);
		List<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		for(int i=0;i<roomList.size();i++) {
			reserveOrderMapper.UpdatepreInfor(roomList.get(i).getRoomid());
		}
		reserveOrderMapper.deleteRoomOrder(orderNumber);
		
	}

	public void ModifyCheckInOrder(ReserveOrder[] ra ) {
		reserveOrderMapper.ModifyCheckInOrder(ra[0]);
	}


	public void ReserveCheckIn(int orderNumber,String nowDate) {
		
		ReserveOrder reserveorder=reserveOrderMapper.ReserveOrderFind(orderNumber);
		java.sql.Date date1=java.sql.Date.valueOf(nowDate);
		reserveorder.setRealityDate(date1);
		reserveorder.setOrderState("已入住");
		reserveOrderMapper.addCheckInOrder(reserveorder);
		reserveOrderMapper.DeleteReserveOrder(orderNumber);
		List<RoomOrder> roomList=reserveOrderMapper.getRoomlListOrder(orderNumber);
		for(int i=0;i<roomList.size();i++) {
			reserveOrderMapper.updateRoomState2(roomList.get(i).getRoomid());
	}
	}

   public ArrayList<ReserveOrder> findCheckInOrder(){
	   ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	   orderList=reserveOrderMapper.getAllCheckInOrder();
	   return orderList;
   }
   
   public ArrayList<ReserveOrder> findCheckOutOrder(){
	   ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	   orderList=reserveOrderMapper.getAllCheckOutOrder();
	   return orderList;
   }
   
   public ArrayList<Object> indexStoreAndCheckInformation(int OrderNumber){
	   ArrayList<Object> arro=new ArrayList<Object>();
	   ArrayList<RoomPrice> roomprice=new ArrayList<RoomPrice>();
	   ArrayList<Store> roomStore=new ArrayList<Store>();
	   ArrayList<RoomOrder> hetelLogolList=new  ArrayList<RoomOrder>();
	   ReserveOrder reserve=reserveOrderMapper.getOrderNumberCheckInOrder(OrderNumber);
	   roomStore=storeMapper.getStoreInformation();
	   hetelLogolList=reserveOrderMapper.getRoomlListOrder(OrderNumber);
	
	 
	   arro.add(0,reserve);
	   arro.add(1, hetelLogolList);
	   arro.add(2,roomStore);
	   return arro;
   }
   public Vip indexCardId(String cardId) {
	   Vip card=reserveOrderMapper.indexCardId(cardId);
	   if(card!=null) {
	    return card;
	   }
	   return null;
   }
   public void insertTotalOrder(int orderNumber, Integer[] roomidlist, Store[] store,String nowdate) {

	   ArrayList<RoomOrder> RoomOrderList=reserveOrderMapper.getRoomlListOrder(orderNumber);
	   System.out.println(roomidlist.length);
	   ReserveOrder reser=reserveOrderMapper.getOrderNumberCheckInOrder(orderNumber);
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String Arrive= formatter.format(reser.getArriveDate());
		String Leave=formatter.format(reser.getLeaveDate());
		String Order=formatter.format(reser.getOrderDate());
		String Reality=formatter.format(reser.getRealityDate());
		
		java.sql.Date arriveDate=java.sql.Date.valueOf(Arrive);
		java.sql.Date leaveDate=java.sql.Date.valueOf(Leave);
		java.sql.Date OrderDate=java.sql.Date.valueOf(Order);
		java.sql.Date RealityDate=java.sql.Date.valueOf(Reality);
		java.sql.Date RealityLeaveDate=java.sql.Date.valueOf(nowdate);
	   if(reserveOrderMapper.findcheckouOrder(orderNumber).size()==0) {
	
			 ReserveOrder newReserve=new  ReserveOrder();
			 newReserve=reser;
			 newReserve.setOrderDate(OrderDate);
			 newReserve.setRealityDate(RealityDate);
			 newReserve.setRealityLeaveDate(RealityLeaveDate);
			 newReserve.setArriveDate(arriveDate);
			newReserve.setLeaveDate(leaveDate);
			newReserve.setOrderState("已完成");
		   reserveOrderMapper.addCheckOutOrder(newReserve);
		   
		   if(RoomOrderList.size()==roomidlist.length) {
			   reserveOrderMapper.DeleteCheckInOrder(orderNumber);
			  
		   }
		 
		   
	       for(int i=0;i<roomidlist.length;i++) {
	    	   RoomOrder room=new RoomOrder();
	    	   room.setOrderNumber(orderNumber);
	    	   room.setRoomid(roomidlist[i]);
	    	   RoomOrder roomOrder=reserveOrderMapper.addfinishOrder(room);
	    	   reserveOrderMapper.insertfinishOrder(roomOrder);
	    	   reserveOrderMapper.DeleteRoomOrder(room);
	    	   reserveOrderMapper.UpdatepreInfor(roomidlist[i]);
	       }

	      
	       for(int i=0;i<store.length;i++) {
	    	   RoomGoodsOrder roomGoodsOrder=new RoomGoodsOrder();
	    	   roomGoodsOrder.setGoodsPrice(store[i].getGoodsPrice());
	    	   roomGoodsOrder.setGoodsName(store[i].getGoodsName());
	    	   roomGoodsOrder.setGoodsNum(store[i].getGoodsNum());
	    	   roomGoodsOrder.setOrderNumber(orderNumber);
	    	   reserveOrderMapper.addStoreInf(roomGoodsOrder); 
	       }
	   }
	   else {
		   ReserveOrder newReserve=new ReserveOrder();
		   newReserve.setRealityLeaveDate(RealityLeaveDate);
		   reserveOrderMapper.updateRealityOrder(newReserve);

	       for(int i=0;i<roomidlist.length;i++) {
	    	   RoomOrder room=new RoomOrder();
	    	   room.setOrderNumber(orderNumber);
	    	   room.setRoomid(roomidlist[i]);
	    	   RoomOrder roomOrder=reserveOrderMapper.addfinishOrder(room);
	    	   reserveOrderMapper.insertfinishOrder(roomOrder);
	    	   reserveOrderMapper.DeleteRoomOrder(room);
	    	   reserveOrderMapper.UpdatepreInfor(roomidlist[i]);
	       }
	       int goodNum=0;
	        ArrayList<RoomGoodsOrder> StoreIn=reserveOrderMapper.getStoreInfor(orderNumber);
	     
	 	       for(int i=0;i<store.length;i++) {
	 	    	   for(int j=0;j<StoreIn.size();j++) {
	 	    		   if(store[i].getGoodsName().equals(StoreIn.get(j).getGoodsName())) {
	 	    			  goodNum=store[i].getGoodsNum()+StoreIn.get(j).getGoodsNum();
	 	    			  store[i].setGoodsNum(goodNum);
	 	    		   }

		       }
	 	       }
	 	      ArrayList<RoomGoodsOrder> Store1=new  ArrayList<RoomGoodsOrder>();
	 	      
	 	       

               
	 	       ArrayList<Integer> a=new ArrayList<Integer>();
	 	       int i1=0;
	 	       for(;i1<store.length;i1++) {
	 	    	   for(int j=0;j<StoreIn.size();j++) {
	 	    		  if(store[i1].getGoodsName().equals(StoreIn.get(j).getGoodsName())) {
	 	    			 a.add(j);
	 	    		  }
		       }
	 	       }
	 	      Store[] store1=java.util.Arrays.copyOf(store,200);
	 	      int k =0;
	    		 for(int m=0;m<StoreIn.size();m++) {
	    			 if(k<a.size()&&a.get(k)==m) {
	    				k++;
	    			 }else {
	    				 
	    				 store1[i1].setGoodsName(StoreIn.get(m).getGoodsName());
	    				 store1[i1].setGoodsNum(StoreIn.get(m).getGoodsNum());
	    				 store1[i1].setGoodsPrice(StoreIn.get(m).getGoodsPrice());
	    				 i1++;
	    			 } 
	    		 }
	        if(store.length>0){
	        	reserveOrderMapper.deleteStoreInf(orderNumber);
		        for(int i=0;i<store.length;i++) {
			    	   RoomGoodsOrder roomGoodsOrder=new RoomGoodsOrder();
			    	   roomGoodsOrder.setGoodsPrice(store1[i].getGoodsPrice());
			    	   roomGoodsOrder.setGoodsName(store1[i].getGoodsName());
			    	   roomGoodsOrder.setGoodsNum(store1[i].getGoodsNum());
			    	   roomGoodsOrder.setOrderNumber(orderNumber);
			    	   reserveOrderMapper.addStoreInf(roomGoodsOrder); 
		        }
	        }

			   if(RoomOrderList.size()==roomidlist.length) {
				   reserveOrderMapper.DeleteCheckInOrder(orderNumber);
			   }
	   }
   }
   public ArrayList<Object> finishOrder(int orderNumber){
	   ReserveOrder fOrder=reserveOrderMapper.finishOrder(orderNumber);
	   ArrayList<RoomOrder>  checkInRoomOrder=reserveOrderMapper.findCehckInRoom(orderNumber);
	   ArrayList<Object> roomorder=new ArrayList<Object>();
	   if(checkInRoomOrder.size()!=0) {
		   roomorder.add(checkInRoomOrder);
	   }
	   ArrayList<RoomOrder> fRoomOrder= reserveOrderMapper.findfRoomOrder(orderNumber);
	   roomorder.add(fRoomOrder);
	   ArrayList<RoomGoodsOrder> goodsOrder=reserveOrderMapper.findDistinctStore(orderNumber);
	   ArrayList<Object> al=new ArrayList<Object>();
	   al.add(fOrder);
	   al.add(roomorder);
	   al.add(goodsOrder);
	   return al;
   }
   public void deletefinishOrder(int orderNumber) {
	   reserveOrderMapper.deletefinishOrder(orderNumber);
	   reserveOrderMapper.deletefinishRoomOrder(orderNumber);
	   reserveOrderMapper.deletefinishstore(orderNumber);
   }

   public void OverTimeCheckOut(int orderNumber) {

		
	   ReserveOrder reser=reserveOrderMapper.ReserveOrderFind(orderNumber);
	   
		Date d = new Date();
		java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date Arrive1=reser.getLeaveDate();
		Date Leave1=reser.getLeaveDate();
		Date Order1=reser.getOrderDate();
		String Arrive=null;
		String Leave=null;
		String Order=null;
		if(Arrive1!=null) {
		Arrive= formatter.format(reser.getArriveDate());
		}
		if(Leave1!=null) {
		Leave=formatter.format(reser.getLeaveDate());
		}
		if(Order1!=null) {
		Order=formatter.format(reser.getOrderDate());
		}
	

		
		java.sql.Date arriveDate=java.sql.Date.valueOf(Arrive);
		java.sql.Date leaveDate=java.sql.Date.valueOf(Leave);
		java.sql.Date OrderDate=java.sql.Date.valueOf(Order);
		java.sql.Date RealityDate=null;
		String nowdate = formatter.format(d);
		java.sql.Date RealityLeaveDate=java.sql.Date.valueOf(nowdate);
		ReserveOrder newReserve=new  ReserveOrder();
		 newReserve=reser;
		 newReserve.setOrderDate(OrderDate);
		 newReserve.setRealityDate(RealityDate);
		 newReserve.setRealityLeaveDate(RealityLeaveDate);
		 newReserve.setArriveDate(arriveDate);
		newReserve.setLeaveDate(leaveDate);
		newReserve.setOrderState("已完成");
	   reserveOrderMapper.addCheckOutOrder(newReserve);
	   ArrayList<Integer> roomidlist=reserveOrderMapper.getNeedReserveRoomBytime(orderNumber);
	   
	   
	 
		   reserveOrderMapper.DeleteReserveOrder(orderNumber);
	
	   
	 
	   
      for(int i=0;i<roomidlist.size();i++) {
   	   RoomOrder room=new RoomOrder();
   	   room.setOrderNumber(orderNumber);
   	   room.setRoomid(roomidlist.get(i));
   	   RoomOrder roomOrder=reserveOrderMapper.addfinishOrder(room);
   	   reserveOrderMapper.insertfinishOrder(roomOrder);
   	   reserveOrderMapper.DeleteRoomOrder(room);
   	   reserveOrderMapper.UpdatepreInfor(roomidlist.get(i));
      }
   }
   
}
