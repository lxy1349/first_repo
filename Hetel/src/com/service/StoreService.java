package com.service;

import java.util.ArrayList;

import com.po.RoomPrice;
import com.po.Store;

public interface StoreService {
	public  ArrayList<Object> getAllrsOrder();
	public void setRoomStore(RoomPrice[] roomprice,Store[] store);

}
