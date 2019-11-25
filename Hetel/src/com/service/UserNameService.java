package com.service;

import java.util.ArrayList;
import java.util.List;

import com.po.HetelLogol;
import com.po.Sign;
import com.po.UserName;
import com.po.Vip;

public interface UserNameService {
public List<UserName> findUser(String username,String password);
public ArrayList<Object>  findHetelLogol();
public ArrayList< ArrayList<HetelLogol>>indexByRoomState(String state,String style,Integer floor);
public ArrayList< ArrayList<HetelLogol>>  indexByFormText(String text);
public ArrayList<Object> findAllInformation();
public ArrayList<String> findroomType();
public ArrayList<ArrayList<HetelLogol>> addRoomNum(int roomNum, String roomStyle);
public ArrayList<ArrayList<HetelLogol>> checkCandeleteRoomNum();
public void  roomdelete(int HetelId);
public boolean addNewRoomType(String newRoomType);
public boolean RoomStyleDelete(String roomType);
public ArrayList<Object> findCanDeleteFloor();
public Boolean deleteCanDeleteFloor(int floor);
public ArrayList<Sign> findSignInformation();
public boolean AddsignInformation(String username);
public boolean AddsignOutformation(String username);
public boolean chenckaddUser(String username,String password);
public boolean vipCheck(String vipName, String vipIdNum, String radioMan, long phoneNum);
public ArrayList<Vip> findAllVip();
public boolean vipModify(String vipName, String vipIdNum, String sexradio, long vipPhoneNum);
public ArrayList<Vip> CheckvipNum(String val);
public ArrayList<Vip> DeleteVipNum(String idNum);
public void changeHetelBad(int hetelId);
}
