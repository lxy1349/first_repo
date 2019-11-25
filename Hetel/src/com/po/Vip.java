package com.po;

public class Vip {
private String vipName;
private String vipIdNum;
private String radioMan;
private long phoneNum;
/**
 * @return the vipName
 */
public String getVipName() {
	return vipName;
}
/**
 * @param vipName the vipName to set
 */
public void setVipName(String vipName) {
	this.vipName = vipName;
}

/**
 * @return the vipIdNum
 */
public String getVipIdNum() {
	return vipIdNum;
}
/**
 * @param vipIdNum the vipIdNum to set
 */
public void setVipIdNum(String vipIdNum) {
	this.vipIdNum = vipIdNum;
}
/**
 * @return the radioMan
 */
public String getRadioMan() {
	return radioMan;
}
/**
 * @param radioMan the radioMan to set
 */
public void setRadioMan(String radioMan) {
	this.radioMan = radioMan;
}
/**
 * @return the phoneNum
 */
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
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "Vip [vipName=" + vipName + ", vipIdNum=" + vipIdNum + ", radioMan=" + radioMan + ", phoneNum=" + phoneNum
			+ "]";
}


}
