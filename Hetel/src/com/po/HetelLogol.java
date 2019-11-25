package com.po;

import java.util.Date;

public class HetelLogol {
	   private Integer hetelId;
	   private int floor;
	   private String hetelState;
	   private String orderName;
	   private String roomStyle;
	   private String vip;
	   private String pageStage;
	   private int roomPrice;
	   private int roomCashPledge;
	   private Date orderDate;
	   private Date leaveDate;
	   private Boolean canDele;
	   /**
	 * @return the canDele
	 */
	public Boolean getCanDele() {
		return canDele;
	}
	/**
	 * @param canDele the canDele to set
	 */
	public void setCanDele(Boolean canDele) {
		this.canDele = canDele;
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
	private String beizhu;
	   
	   /**
	 * @return the beizhu
	 */
	public String getBeizhu() {
		return beizhu;
	}
	/**
	 * @param beizhu the beizhu to set
	 */
	public void setBeizhu(String beizhu) {
		this.beizhu = beizhu;
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
	 * @param hetelId the hetelId to set
	 */
	public void setHetelId(Integer hetelId) {
		this.hetelId = hetelId;
	}
	public HetelLogol() {
		   
	   }
	/**
	 * @return the hetelId
	 */
	public int getHetelId() {
		return hetelId;
	}
	/**
	 * @return the floor
	 */
	public int getFloor() {
		return floor;
	}
	/**
	 * @param floor the floor to set
	 */
	public void setFloor(int floor) {
		this.floor = floor;
	}
	/**
	 * @return the hetelState
	 */
	public String getHetelState() {
		return hetelState;
	}
	/**
	 * @param hetelState the hetelState to set
	 */
	public void setHetelState(String hetelState) {
		this.hetelState = hetelState;
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
	 * @return the pageStage
	 */
	public String getPageStage() {
		return pageStage;
	}
	/**
	 * @param pageStage the pageStage to set
	 */
	public void setPageStage(String pageStage) {
		this.pageStage = pageStage;
	}
	/**
	 * @param hetelId the hetelId to set
	 */
	public void setHetelId(int hetelId) {
		this.hetelId = hetelId;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "HetelLogol [hetelId=" + hetelId + ", floor=" + floor + ", hetelState=" + hetelState + ", orderName="
				+ orderName + ", roomStyle=" + roomStyle + ", vip=" + vip + ", pageStage=" + pageStage + ", roomPrice="
				+ roomPrice + ", roomCashPledge=" + roomCashPledge + ", orderDate=" + orderDate + ", leaveDate="
				+ leaveDate + ", beizhu=" + beizhu + "]";
	}




		




}
