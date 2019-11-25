package com.po;

public class RoomGoodsOrder {
private String goodsName;
private int goodsPrice;
private int orderNumber;
private String roomid;
private int goodsNum;
/**
 * @return the goodsNum
 */
public int getGoodsNum() {
	return goodsNum;
}
/**
 * @param goodsNum the goodsNum to set
 */
public void setGoodsNum(int goodsNum) {
	this.goodsNum = goodsNum;
}
/**
 * @return the goodsName
 */
public String getGoodsName() {
	return goodsName;
}
/**
 * @param goodsName the goodsName to set
 */
public void setGoodsName(String goodsName) {
	this.goodsName = goodsName;
}
/**
 * @return the goodsPrice
 */
public int getGoodsPrice() {
	return goodsPrice;
}
/**
 * @param goodsPrice the goodsPrice to set
 */
public void setGoodsPrice(int goodsPrice) {
	this.goodsPrice = goodsPrice;
}
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
 * @return the roomid
 */
public String getRoomid() {
	return roomid;
}
/**
 * @param roomid the roomid to set
 */
public void setRoomid(String roomid) {
	this.roomid = roomid;
}
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "RoomGoodsOrder [goodsName=" + goodsName + ", goodsPrice=" + goodsPrice + ", orderNumber=" + orderNumber
			+ ", roomid=" + roomid + ", goodsNum=" + goodsNum + "]";
}



}
