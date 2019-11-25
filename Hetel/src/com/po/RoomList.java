package com.po;

import java.util.ArrayList;

public class RoomList {
	private ArrayList<HetelLogol> hetel1;
	private ArrayList<HetelLogol> hetel2;
	private ArrayList<HetelLogol> hetel3;
	private ArrayList<HetelLogol> hetel4;
	private ArrayList<HetelLogol> hetel5;
	private ArrayList<HetelLogol> hetel6;
	public RoomList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RoomList(ArrayList<HetelLogol> hetel1, ArrayList<HetelLogol> hetel2, ArrayList<HetelLogol> hetel3,
			ArrayList<HetelLogol> hetel4, ArrayList<HetelLogol> hetel5, ArrayList<HetelLogol> hetel6) {
		super();
		this.hetel1 = hetel1;
		this.hetel2 = hetel2;
		this.hetel3 = hetel3;
		this.hetel4 = hetel4;
		this.hetel5 = hetel5;
		this.hetel6 = hetel6;
	}
	/**
	 * @return the hetel1
	 */
	public ArrayList<HetelLogol> getHetel1() {
		return hetel1;
	}
	/**
	 * @param hetel1 the hetel1 to set
	 */
	public void setHetel1(ArrayList<HetelLogol> hetel1) {
		this.hetel1 = hetel1;
	}
	/**
	 * @return the hetel2
	 */
	public ArrayList<HetelLogol> getHetel2() {
		return hetel2;
	}
	/**
	 * @param hetel2 the hetel2 to set
	 */
	public void setHetel2(ArrayList<HetelLogol> hetel2) {
		this.hetel2 = hetel2;
	}
	/**
	 * @return the hetel3
	 */
	public ArrayList<HetelLogol> getHetel3() {
		return hetel3;
	}
	/**
	 * @param hetel3 the hetel3 to set
	 */
	public void setHetel3(ArrayList<HetelLogol> hetel3) {
		this.hetel3 = hetel3;
	}
	/**
	 * @return the hetel4
	 */
	public ArrayList<HetelLogol> getHetel4() {
		return hetel4;
	}
	/**
	 * @param hetel4 the hetel4 to set
	 */
	public void setHetel4(ArrayList<HetelLogol> hetel4) {
		this.hetel4 = hetel4;
	}
	/**
	 * @return the hetel5
	 */
	public ArrayList<HetelLogol> getHetel5() {
		return hetel5;
	}
	/**
	 * @param hetel5 the hetel5 to set
	 */
	public void setHetel5(ArrayList<HetelLogol> hetel5) {
		this.hetel5 = hetel5;
	}
	/**
	 * @return the hetel6
	 */
	public ArrayList<HetelLogol> getHetel6() {
		return hetel6;
	}
	/**
	 * @param hetel6 the hetel6 to set
	 */
	public void setHetel6(ArrayList<HetelLogol> hetel6) {
		this.hetel6 = hetel6;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RoomList [hetel1=" + hetel1 + ", hetel2=" + hetel2 + ", hetel3=" + hetel3 + ", hetel4=" + hetel4
				+ ", hetel5=" + hetel5 + ", hetel6=" + hetel6 + "]";
	}
	
	
	
}
