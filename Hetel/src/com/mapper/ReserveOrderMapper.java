package com.mapper;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.po.CheckOutorder;
import com.po.Datefind;
import com.po.HetelLogol;
import com.po.IdNum;
import com.po.ReserveOrder;
import com.po.RoomGoodsOrder;
import com.po.RoomOrder;
import com.po.RoomidAndUserName;
import com.po.Store;
import com.po.Vip;

public interface ReserveOrderMapper {
	public ArrayList<ReserveOrder> getAllReserveOrder();
	public ArrayList<HetelLogol> getAllHetelInformation(Date date1);
	public ArrayList<HetelLogol> getAllHetelInformation1(HetelLogol hetelLogol);
	public void addReserveOrder(ReserveOrder ro);
	public void ModifyReserveOrder(ReserveOrder ro);
	public void updateRoomPreState(HetelLogol hetel);
	public void updateRoomState1(int hetelId);
	public void updateRoomState2(int hetelId);
	public void updatePreRoomState2(int hetelId);
	public void DeleteReserveOrder(int orderNumber);
	public void addCheckInOrder(ReserveOrder ro);
	public void updateCheckInRoomPreState(HetelLogol hetelpre);
	public ReserveOrder ReserveOrderFind(int orderNumber);
	public void ModifyReserveOrder(int orderNumber);
	public void ModifyCheckInOrder(ReserveOrder ro);
	public ArrayList<ReserveOrder> getAllCheckInOrder();
	public ArrayList<ReserveOrder> getAllCheckOutOrder();
	
	public void DeleteCheckInOrder(int orderNumber);
	public ReserveOrder getOrderNumberCheckInOrder(int orderNumber);
	public CheckOutorder getOrderNumberCheckOutOrder(int orderNumber);
	public void addRoomOrder(RoomOrder roomOrder);
	public Vip indexCardId(String cardId);
	public ArrayList<RoomOrder> getRoomlListOrder(int orderNumber);
	public void deleteRoomOrder(int OrderNumber);
	public void UpdatepreInfor(int hetelId);
	
	public ArrayList<Integer> getNeedReserveOrderBytime(ReserveOrder reserveOrder);
/*	public ArrayList<Integer> getNeedReserveOrderBytime1(ReserveOrder reserveOrder);*/
	public ArrayList<Integer> getNeedCheckInOrderBytime(ReserveOrder reserveOrder);
	public ArrayList<Integer> getNeedReserveRoomBytime(Integer orderNumber);
	public ArrayList<Integer> getNeedRoom();
	public HetelLogol findHetelbyroomid(Integer hetelId);
	public ArrayList<ReserveOrder> findcheckouOrder(int orderNumber);
	public void addStoreInf(RoomGoodsOrder roomGoodsOrder);
	public void addCheckOutOrder(ReserveOrder newReserve);
	public void insertfinishOrder(RoomOrder roomOrder);
	public RoomOrder addfinishOrder(RoomOrder room);
	public void DeleteRoomOrder(RoomOrder room);
	
	public ArrayList<Integer> getAllRoomid(); 
	public ArrayList<Datefind> needArriveTime();
	public ArrayList<Datefind> needzhuTime();
	public ReserveOrder finishOrder(int orderNumber);
	public ArrayList<RoomOrder> findfRoomOrder(int orderNumber);
	public ArrayList<RoomGoodsOrder> findDistinctStore(int orderNumber);
	public ArrayList<RoomOrder> findCehckInRoom(int orderNumber);
	public void updateRealityOrder(ReserveOrder newReserve);
	public ArrayList<RoomGoodsOrder> getStoreInfor(int orderNumber);
	public void deletefinishOrder(int orderNumber);
	public void deletefinishRoomOrder(int orderNumber);
	public void deletefinishstore(int orderNumber);
	
public ArrayList<RoomidAndUserName> roomAndName(Date nowDate);
public ArrayList<RoomidAndUserName> CheckInroomAndName();
public void deleteStoreInf(int orderNumber);
	
}
