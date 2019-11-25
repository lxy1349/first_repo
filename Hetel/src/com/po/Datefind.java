package com.po;

import java.sql.Date;

public class Datefind {
private int roomid;
private Date arriveDate;
private Date leaveDate;
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
 * @return the arriveDate
 */
public Date getArriveDate() {
	return arriveDate;
}
/**
 * @param arriveDate the arriveDate to set
 */
public void setArriveDate(Date arriveDate) {
	this.arriveDate = arriveDate;
}
/**
 * @return the leaveDate
 */
public Date getLeaveDate() {
	return leaveDate;
}
/**
 * @param leaveDate the leaveDate to set
 */
public void setLeaveDate(Date leaveDate) {
	this.leaveDate = leaveDate;
}


}
