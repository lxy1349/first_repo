package com.po;

public class RoomidAndUserName {
private String orderName;
private String vip;
private int roomid;
/**
 * @return the orderName
 */
public String getOrderName() {
	return orderName;
}
/**
 * @param orderName the orderName to set
 */
public void setOrderName(String orderName) {
	this.orderName = orderName;
}
/**
 * @return the vip
 */
public String getVip() {
	return vip;
}
/**
 * @param vip the vip to set
 */
public void setVip(String vip) {
	this.vip = vip;
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
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "RoomidAndUserName [orderName=" + orderName + ", vip=" + vip + ", roomid=" + roomid + "]";
}

}
