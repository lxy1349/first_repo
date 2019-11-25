package com.service.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mapper.ReserveOrderMapper;
import com.mapper.StoreMapper;
import com.po.ReserveOrder;
import com.po.RoomPrice;
import com.po.Store;
import com.service.StoreService;

@Service("storeService")
public class StoreServiceImpl implements StoreService{
	@Resource
	private StoreMapper storeMapper;
   
	public  ArrayList<Object> getAllrsOrder(){

		 ArrayList<RoomPrice> rp=new ArrayList<RoomPrice>();
		    ArrayList<Store> st=new ArrayList<Store>();
		    ArrayList<Object> rs=new ArrayList<Object>();
	    st=storeMapper.getStoreInformation();
	    rp=storeMapper.getroomPriceInformation();
		rs.add(0, rp);
	    rs.add(1, st);
	    
		return rs;
	}
	public void setRoomStore(RoomPrice[] roomprice,Store[] store) {
		storeMapper.deleteStore();
		storeMapper.deleteRoomPrice();
		for(int i=0;i<roomprice.length;i++) {
			storeMapper.setRoomPrice(roomprice[i]);
			
		}
		for(int i=0;i<store.length;i++) {
			storeMapper.setRoomStore(store[i]);
		}
	}
	
}
	