package com.po;

public class RoomOrder {
private int roomid;
private int roomPrice;
private String roomStyle;
private int roomCashPledge;
private String roombeizhu;
private int orderNumber;
/**
 * @return the orderNumber
 */
public int getOrderNumber() {
	return orderNumber;
}
/**
 * @param orderNumber the orderNumber to set
 */
public void setOrderNumber(int orderNumber) {
	this.orderNumber = orderNumber;
}
/**
 * @return the roombeizhu
 */
public String getRoombeizhu() {
	return roombeizhu;
}
/**
 * @param roombeizhu the roombeizhu to set
 */
public void setRoombeizhu(String roombeizhu) {
	this.roombeizhu = roombeizhu;
}
/**
 * @return the roomid
 */
public int getRoomid() {
	return roomid;
}
/**
 * @param roomid the roomid to set
 */
public void setRoomid(int roomid) {
	this.roomid = roomid;
}
/**
 * @return the roomPrice
 */
public int getRoomPrice() {
	return roomPrice;
}
/**
 * @param roomPrice the roomPrice to set
 */
public void setRoomPrice(int roomPrice) {
	this.roomPrice = roomPrice;
}
/**
 * @return the roomStyle
 */
public String getRoomStyle() {
	return roomStyle;
}
/**
 * @param roomStyle the roomStyle to set
 */
public void setRoomStyle(String roomStyle) {
	this.roomStyle = roomStyle;
}
/**
 * @return the roomCashPledge
 */
public int getRoomCashPledge() {
	return roomCashPledge;
}
/**
 * @param roomCashPledge the roomCashPledge to set
 */
public void setRoomCashPledge(int roomCashPledge) {
	this.roomCashPledge = roomCashPledge;
}

@Override
public String toString() {
	return "RoomOrder [roomid=" + roomid + ", roomPrice=" + roomPrice + ", roomStyle=" + roomStyle + ", roomCashPledge="
			+ roomCashPledge + ", beizhu=" + roombeizhu + "]";
}

}
