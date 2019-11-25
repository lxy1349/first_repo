package com.service;

import java.util.ArrayList;
import java.util.Date;

import com.po.HetelLogol;
import com.po.ReserveOrder;
import com.po.RoomOrder;
import com.po.RoomPrice;
import com.po.Store;
import com.po.Vip;

public interface ReserveOrderService {
	public ArrayList<ReserveOrder> getAllReserveOrder();
	public ArrayList<ArrayList<HetelLogol>> getAllHetelInformation(String nowDate);
	public void addReserveOrder(ReserveOrder[] ra,RoomOrder[] ro);
	public void ReserveCheckIn(int orderNumber,String nowDate);
	public ArrayList<ReserveOrder> findCheckInOrder();
	public void ModifyCheckInOrder(ReserveOrder[] ra );
	public ArrayList<ReserveOrder> getAllCheckInOrder();
	public ArrayList<Object> indexStoreAndCheckInformation(int OrderNumber);
	public ArrayList<ArrayList<HetelLogol>> getAllHetelInformation1(String orderDate,String leaveDate);
	 public Vip indexCardId(String cardId);
	public ArrayList<Object> getReserveOrder(int orderNumber, String nowDate); 
	public void ModifyReserveOrder(ReserveOrder[] ra,RoomOrder[] ro);
	public ArrayList<Object> CheckReserveOrder(int orderNumber);
	public void DeleteReserveOrder(int orderNumber);
	public void addCheckInOrder(ReserveOrder[] ra,RoomOrder[] ro);
	public ArrayList<Object> CheckCheckInOrder(int orderNumber);
	public ArrayList<Object>  getCheckInOrder(int orderNumber,String NowDate);
	public void ModifyCheckInAllOrder(ReserveOrder[] ra,RoomOrder[] ro);
	   public void insertTotalOrder(int orderNumber, Integer[] roomidlist, Store[] store,String nowdate);
	public ArrayList<ReserveOrder> findCheckOutOrder();
	public ArrayList<Object> finishOrder(int orderNumber);
	public void deletefinishOrder(int orderNumber);
	public void OverTimeCheckOut(int orderNumber);

}
