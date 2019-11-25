package com.mapper;

import java.util.ArrayList;
import java.util.List;

import com.po.HetelLogol;
import com.po.ReserveOrder;
import com.po.Sign;
import com.po.UserName;
import com.po.Vip;

public interface  UserNameMapper {
	public List<UserName> findUser(UserName user);
	public List<HetelLogol> findHetelLogol();
	public List<ReserveOrder> findHetelid();
	public void updateHetelState(HetelLogol hetellogol);
	public void updateHetelVip(HetelLogol hetellogol);
	public List<HetelLogol> indexByRoomState1(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState2(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState3(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState4(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState5(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState6(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState7(HetelLogol hetel1);
	public List<HetelLogol> indexByRoomState8(HetelLogol hetel1);
	public List<HetelLogol> indexByFormText1(int hetelId);
	public List<HetelLogol> indexByFormText2(String text);
	public int indexfloorNum();
	public void resetRoom(HetelLogol hetelLogol);
	public ArrayList<String> findRoomStyle();
	public void addRoomNum(HetelLogol hetel);
	public List<HetelLogol> findallRoomInforamtion();
	public ArrayList<Integer> checkCandeleteRoomNum();
	public void roomdelete(int hetelId);
	public void addNewRoomType(String newRoomType);
	public ArrayList<String> findOccupyRoomType();
	public void DeteleRoomType(String roomType);
	public void DeteleRoomTypeInfor(String roomType);
	public ArrayList<Integer> findCanDeleteFloor();
	public Integer findFloorNum(int i);
	public Integer findCanDeleteFloor(int i);
	public void deleteCanDeleteFloor(int floor);

	public ArrayList<Sign> findSignInfirmation();
	public ArrayList<String> findSignInfirmationByNAme(Sign sign);
	public void insertSininInfor(Sign sign);
	public ArrayList<String> findSignOutfirmationByNAme(Sign sign);
	public void updateSininInfor(Sign sign);
	public void updateSinOutInfor(Sign sign);
	public void insertSinOutInfor(Sign sign);
	public ArrayList<String> checkUser(String username);
	public void adduser(UserName use);
	
	
	public void insertVip(Vip vip1);
	public Vip vipCheck(String vipIdNum);
	public ArrayList<Vip> getAllVip();
	public void vipModify(Vip vip1);
	public ArrayList<Vip> CheckvipNum(String val);
	public void DeleteVipNum(String idNum);
	public void changeHetelBad(int hetelId);
	public String findRoomState(int hetelId);
	public void changeHetelGood(int hetelId);
}
