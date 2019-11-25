package com.mapper;

import java.util.ArrayList;

import com.po.RoomPrice;
import com.po.Store;

public interface StoreMapper {
public ArrayList<Store> getStoreInformation();
public ArrayList<RoomPrice> getroomPriceInformation();
public void setRoomStore(Store store);
public void setRoomPrice(RoomPrice roomPrice);
public void deleteStore();
public void deleteRoomPrice();
}
