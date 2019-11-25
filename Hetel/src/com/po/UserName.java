package com.po;

public class UserName {
private String	username;
private String 	password;

public UserName() {
	
}


/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	return "UserName [username=" + username + ", password=" + password + "]";
}

/**
 * @return the username
 */
public String getUsername() {
	return username;
}
/**
 * @param username the username to set
 */
public void setUsername(String username) {
	this.username = username;
}
/**
 * @return the password
 */
public String getPassword() {
	return password;
}
/**
 * @param password the password to set
 */
public void setPassword(String password) {
	this.password = password;
}



}
