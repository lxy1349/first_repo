package com.controller;


import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.po.CheckOutorder;
import com.po.HetelLogol;
import com.po.ReserveOrder;
import com.po.RoomOrder;
import com.po.RoomPrice;
import com.po.Store;
import com.po.Vip;
import com.service.ReserveOrderService;

import com.alibaba.fastjson.*;

@Controller
@RequestMapping("/order")
public class ReserveOrderController {
    @Autowired
    private ReserveOrderService reserveOrderService;
    
	@RequestMapping(value = "/findReserveOrder",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ReserveOrder>  findReserveOrder(){
		
		 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
		 orderList=reserveOrderService.getAllReserveOrder();
		 return orderList;
	}
	
	@RequestMapping(value = "/indexAllinformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ArrayList<HetelLogol>>  indexhetelinformation(String nowDate){
		
		 ArrayList<ArrayList<HetelLogol>> list=new  ArrayList<ArrayList<HetelLogol>>();
		 list=reserveOrderService.getAllHetelInformation(nowDate);
		 return  list;
	}
	@RequestMapping(value = "/indexAllinformation1",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ArrayList<HetelLogol>>  indexhetelinformation1(String orderDate,String leaveDate){
		 
		 ArrayList<ArrayList<HetelLogol>> list=new  ArrayList<ArrayList<HetelLogol>>();
		 list=reserveOrderService.getAllHetelInformation1(orderDate,leaveDate);
		 return  list; 
	}
	
	@RequestMapping(value = "/indexCardId",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public Vip indexCardId(String cardId){
		
		if(reserveOrderService.indexCardId(cardId)!=null) {
			System.out.println(reserveOrderService.indexCardId(cardId));
			return reserveOrderService.indexCardId(cardId);
		}
		else return null;
	}
	@RequestMapping(value = "/ReserveCheckIn",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ReserveOrder> ReserveCheckIn(int orderNumber,String nowDate){
	     reserveOrderService.ReserveCheckIn(orderNumber,nowDate);
	     
		 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
		 orderList=reserveOrderService.getAllReserveOrder();
		 return orderList;
		
	    
	}
	@RequestMapping(value = "/indexStoreAndCheckInformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> indexStoreAndCheckInformation(int OrderNumber){    
		ArrayList<Object> arro=new ArrayList<Object>();
		 arro=reserveOrderService.indexStoreAndCheckInformation(OrderNumber);
		 return arro;
	}
	@RequestMapping(value = "/indexStoreAndCheckInformation1",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> indexStoreAndCheckInformation1(int OrderNumber){    
		ArrayList<Object> arro=new ArrayList<Object>();
		 arro=reserveOrderService.indexStoreAndCheckInformation(OrderNumber);
		 return arro;
	}
	@RequestMapping(value = "/insertTotalOrder1",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ReserveOrder> insertTotalOrder1(Integer orderNumber,String roomid,String goodslist,String nowDate){   
	    	Integer[] roomidlist = JSON.parseObject(roomid,Integer[].class);
	    	Store[] store=JSON.parseObject(goodslist,Store[].class);
	    	reserveOrderService.insertTotalOrder(orderNumber,roomidlist,store,nowDate);
	   	    ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
		    orderList=reserveOrderService.findCheckInOrder();
		    return orderList;
	}
	@RequestMapping(value = "/finishOrder",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> finishOrder(int OrderNumber){   
		  ArrayList<Object> all=new ArrayList<Object>();
		  all=reserveOrderService.finishOrder(OrderNumber);
		return all;
	}
	
	@RequestMapping(value = "/addReserveOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder>  addReserveOrder(String Demo,String roomOrder){

	ReserveOrder[] ra = JSON.parseObject(Demo,ReserveOrder[].class);
	RoomOrder[] ro = JSON.parseObject(roomOrder,RoomOrder[].class);
	reserveOrderService.addReserveOrder(ra,ro);
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.getAllReserveOrder();
	 return orderList;
    
}
	@RequestMapping(value = "/addCheckInOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder>  addCheckInOrder(String Demo,String roomOrder){

	ReserveOrder[] ra = JSON.parseObject(Demo,ReserveOrder[].class);
	RoomOrder[] ro = JSON.parseObject(roomOrder,RoomOrder[].class);
	reserveOrderService.addCheckInOrder(ra,ro);
	 ArrayList<ReserveOrder> orderList= new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.getAllReserveOrder();
	 return orderList;
    
}
	@RequestMapping(value = "/indexReserveOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<Object>  indexReserveOrder(int orderNumber,String NowDate){

		 ArrayList<Object> orderList=reserveOrderService.getReserveOrder(orderNumber,NowDate);
	     return orderList;
    
}
	@RequestMapping(value = "/indexCheckInOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<Object>  indexCheckInOrder(int orderNumber,String NowDate){

		 ArrayList<Object> orderList=reserveOrderService.getCheckInOrder(orderNumber,NowDate);
	     return orderList;
    
}
@RequestMapping(value = "/CheckReserveOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<Object>  CheckReserveOrder(int orderNumber){

	 ArrayList<Object> orderList=reserveOrderService.CheckReserveOrder(orderNumber);
     return orderList;

}
@RequestMapping(value = "/CheckCheckInOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<Object>  CheckCheckInOrder(int orderNumber){

	 ArrayList<Object> orderList=reserveOrderService.CheckCheckInOrder(orderNumber);
     return orderList;

}
@RequestMapping(value = "/DeleteReserveOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder>  DeleteReserveOrder(int orderNumber){

	 reserveOrderService.DeleteReserveOrder(orderNumber);
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.getAllReserveOrder();

	 return orderList;
}

@RequestMapping(value = "/findCheckInOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder> findCheckInOrder(){    
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.findCheckInOrder();
	 return orderList;
}
@RequestMapping(value = "/findCheckOutOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder> findCheckOutOrder(){    
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.findCheckOutOrder();
	 return orderList;
}
@RequestMapping(value = "/ModifyReserveOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder>  ModifyReserveOrder(String Demo,String roomOrder){

	ReserveOrder[] ra = JSON.parseObject(Demo,ReserveOrder[].class);
	RoomOrder[] ro = JSON.parseObject(roomOrder,RoomOrder[].class);
	reserveOrderService.ModifyReserveOrder(ra,ro);
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.getAllReserveOrder();
	 return orderList;
    
}

@RequestMapping(value = "/ModifyCheckInAllOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public void  ModifyCheckInOrder(String Demo,String roomOrder){

	ReserveOrder[] ra = JSON.parseObject(Demo,ReserveOrder[].class);
	RoomOrder[] ro = JSON.parseObject(roomOrder,RoomOrder[].class);
	reserveOrderService.ModifyCheckInAllOrder(ra,ro);

}   
@RequestMapping(value = "/deletefinishOrder",produces="application/json;charset=UTF-8")
@ResponseBody
public ArrayList<ReserveOrder> deletefinishOrder(int orderNumber){

	reserveOrderService.deletefinishOrder(orderNumber);
	 ArrayList<ReserveOrder> orderList=new ArrayList<ReserveOrder>();
	 orderList=reserveOrderService.findCheckOutOrder();
	 return orderList;

}
@RequestMapping(value = "/OverTimeCheckOut",produces="application/json;charset=UTF-8")
@ResponseBody
public void OverTimeCheckOut(int orderNumber){
     reserveOrderService.OverTimeCheckOut(orderNumber);

}
}
