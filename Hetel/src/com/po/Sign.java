package com.po;

import java.sql.Date;
import java.sql.Timestamp;

public class Sign {
private int  user_id;
private String sign_name;
private String sign_time;
private String signout_time;
private String sign_state;
private String sign_stateOut;
private Date begin_time;
private Date end_time;
/**
 * @return the begin_time
 */
public Date getBegin_time() {
	return begin_time;
}
/**
 * @param begin_time the begin_time to set
 */
public void setBegin_time(Date begin_time) {
	this.begin_time = begin_time;
}


/**
 * @return the end_time
 */
public Date getEnd_time() {
	return end_time;
}
/**
 * @param end_time the end_time to set
 */
public void setEnd_time(Date end_time) {
	this.end_time = end_time;
}
/**
 * @return the sign_stateOut
 */
public String getSign_stateOut() {
	return sign_stateOut;
}
/**
 * @param sign_stateOut the sign_stateOut to set
 */
public void setSign_stateOut(String sign_stateOut) {
	this.sign_stateOut = sign_stateOut;
}
/**
 * @return the user_id
 */
public int getUser_id() {
	return user_id;
}
/**
 * @param user_id the user_id to set
 */
public void setUser_id(int user_id) {
	this.user_id = user_id;
}
/**
 * @return the sign_name
 */
public String getSign_name() {
	return sign_name;
}
/**
 * @param sign_name the sign_name to set
 */
public void setSign_name(String sign_name) {
	this.sign_name = sign_name;
}
/**
 * @return the sign_time
 */
public String getSign_time() {
	return sign_time;
}
/**
 * @param sign_time the sign_time to set
 */
public void setSign_time(String sign_time) {
	this.sign_time = sign_time;
}
/**
 * @return the signout_time
 */
public String getSignout_time() {
	return signout_time;
}
/**
 * @param signout_time the signout_time to set
 */
public void setSignout_time(String signout_time) {
	this.signout_time = signout_time;
}
/**
 * @return the sign_state
 */
public String getSign_state() {
	return sign_state;
}
/**
 * @param sign_state the sign_state to set
 */
public void setSign_state(String sign_state) {
	this.sign_state = sign_state;
}
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "Sign [user_id=" + user_id + ", sign_name=" + sign_name + ", sign_time=" + sign_time + ", signout_time="
			+ signout_time + ", sign_state=" + sign_state + "]";
}

}