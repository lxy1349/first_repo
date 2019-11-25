package com.po;

public class IdNum {
private long  idNum;
private String name;
private String phoneNum;
/**
 * @return the idNum
 */
public long getIdNum() {
	return idNum;
}
/**
 * @param idNum the idNum to set
 */
public void setIdNum(long idNum) {
	this.idNum = idNum;
}
/**
 * @return the name
 */
public String getName() {
	return name;
}
/**
 * @param name the name to set
 */
public void setName(String name) {
	this.name = name;
}
/**
 * @return the phoneNum
 */
public String getPhoneNum() {
	return phoneNum;
}
/**
 * @param phoneNum the phoneNum to set
 */
public void setPhoneNum(String phoneNum) {
	this.phoneNum = phoneNum;
}
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "IdNum [idNum=" + idNum + ", name=" + name + ", phoneNum=" + phoneNum + "]";
}

}
