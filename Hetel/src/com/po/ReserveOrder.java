package com.po;

import java.util.Date;

public class ReserveOrder {
   private int orderNumber;
   private String orderName;
   private Date orderDate;
   private long phoneNum;
   private int dayTimes;
   private int cashPledge;
   private String orderState;
   private String vip;
   private Date arriveDate;
   private String idnum;
   private Date leaveDate;
   private String acceptName;
   private int roomNum;
   private Date realityDate;
   private Date realityLeaveDate;
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
 * @return the orderDate
 */
public Date getOrderDate() {
	return orderDate;
}
/**
 * @param orderDate the orderDate to set
 */
public void setOrderDate(Date orderDate) {
	this.orderDate = orderDate;
}

/**
 * @return the phoneNum
 */
public long getPhoneNum() {
	return phoneNum;
}
/**
 * @param phoneNum the phoneNum to set
 */
public void setPhoneNum(long phoneNum) {
	this.phoneNum = phoneNum;
}
/**
 * @return the dayTimes
 */
public int getDayTimes() {
	return dayTimes;
}
/**
 * @param dayTimes the dayTimes to set
 */
public void setDayTimes(int dayTimes) {
	this.dayTimes = dayTimes;
}
/**
 * @return the cashPledge
 */
public int getCashPledge() {
	return cashPledge;
}
/**
 * @param cashPledge the cashPledge to set
 */
public void setCashPledge(int cashPledge) {
	this.cashPledge = cashPledge;
}
/**
 * @return the orderState
 */
public String getOrderState() {
	return orderState;
}
/**
 * @param orderState the orderState to set
 */
public void setOrderState(String orderState) {
	this.orderState = orderState;
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
 * @return the idnum
 */
public String getIdnum() {
	return idnum;
}
/**
 * @param idnum the idnum to set
 */
public void setIdnum(String idnum) {
	this.idnum = idnum;
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
/**
 * @return the acceptName
 */
public String getAcceptName() {
	return acceptName;
}
/**
 * @param acceptName the acceptName to set
 */
public void setAcceptName(String acceptName) {
	this.acceptName = acceptName;
}
/**
 * @return the roomNum
 */
public int getRoomNum() {
	return roomNum;
}
/**
 * @param roomNum the roomNum to set
 */
public void setRoomNum(int roomNum) {
	this.roomNum = roomNum;
}
/**
 * @return the realityDate
 */
public Date getRealityDate() {
	return realityDate;
}
/**
 * @param realityDate the realityDate to set
 */
public void setRealityDate(Date realityDate) {
	this.realityDate = realityDate;
}
/**
 * @return the realityLeaveDate
 */
public Date getRealityLeaveDate() {
	return realityLeaveDate;
}
/**
 * @param realityLeaveDate the realityLeaveDate to set
 */
public void setRealityLeaveDate(Date realityLeaveDate) {
	this.realityLeaveDate = realityLeaveDate;
}
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "ReserveOrder [orderNumber=" + orderNumber + ", orderName=" + orderName + ", orderDate=" + orderDate
			+ ", phoneNum=" + phoneNum + ", dayTimes=" + dayTimes + ", cashPledge=" + cashPledge + ", orderState="
			+ orderState + ", vip=" + vip + ", arriveDate=" + arriveDate + ", idnum=" + idnum + ", leaveDate="
			+ leaveDate + ", acceptName=" + acceptName + ", roomNum=" + roomNum + ", realityDate=" + realityDate
			+ ", realityLeaveDate=" + realityLeaveDate + "]";
}


}
