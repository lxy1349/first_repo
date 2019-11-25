package com.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.po.HetelLogol;
import com.po.ReserveOrder;
import com.po.Sign;
import com.po.UserName;
import com.po.Vip;
import com.service.UserNameService;


@Controller 
@RequestMapping("/user")
public class UserNameController {
	@Autowired
	private UserNameService userNameService;
	@RequestMapping(value = "/findUserById",produces="application/json;charset=UTF-8")
	@ResponseBody
	public UserName checkUserById(String username,String password,HttpServletRequest request){
		List<UserName> user = userNameService.findUser(username,password);
	 if(user.size()!=0) {
		       request.getSession().setAttribute("username",username);
		       return user.get(0);
		}
		else {
			UserName u=new UserName();
			u.setUsername("-1");
			return u;
		}
		
	}
	@RequestMapping(value = "/findUserByGetId",produces="application/json;charset=UTF-8")
	@ResponseBody
	public UserName findUserByGetId(String username,String password1,String password2, Model model,HttpServletRequest request){
		if(userNameService.chenckaddUser(username,password1)) {
			UserName use=new UserName();
			use.setUsername(username);
			use.setPassword(password1);
			return use;
		}
		else {
			UserName u=new UserName();
			u.setUsername("-1");
			return u;
		}
	}
	@RequestMapping(value = "/vipCheck",produces="application/json;charset=UTF-8")
	@ResponseBody  
	public ArrayList<Object> vipCheck(String vipName,String vipIdNum,String sexradio,Long vipPhoneNum){
		String sex="0";
		if(sexradio.equals(sex)) {
			sexradio="ÄÐ";
		}
		else {
			sexradio="Å®";
		}
		boolean vipC=userNameService.vipCheck(vipName,vipIdNum,sexradio,vipPhoneNum);
		ArrayList<Object> list=new ArrayList<Object>();
		
		list.add(vipC);
		list.add(userNameService.findAllVip());
		return list;
	}
	@RequestMapping("/findHetelinformation")
	public String checkUserById(Model model){
		ArrayList<Object> hetelLogol= userNameService.findHetelLogol();
		model.addAttribute("hetelLogol", hetelLogol);
		return "room";
	
	}
	@RequestMapping(value = "/vipModify",produces="application/json;charset=UTF-8")
	@ResponseBody  
	public ArrayList<Vip> vipModify(String vipName,String vipIdNum,String sexradio,Long vipPhoneNum){
		String sex="0";
		if(sexradio.equals(sex)) {
			sexradio="ÄÐ";
		}
		else {
			sexradio="Å®";
		}
		userNameService.vipModify(vipName,vipIdNum,sexradio,vipPhoneNum);
		ArrayList<Vip> list=userNameService.findAllVip();
		
		return list;
	}
	@RequestMapping(value = "/findAllInformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> findAllInformation(Model model){
		
		ArrayList<Object> hetelLogol= userNameService.findAllInformation();
		model.addAttribute("hetelLogol", hetelLogol);
		
		return  hetelLogol;
	
	}
	
	@RequestMapping(value = "/indexByRoomState",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList< ArrayList<HetelLogol>>  indexByRoomState(String state1, String style1,Integer floor1) {
	
		ArrayList<HetelLogol> arrayList=new ArrayList<HetelLogol>();
		HetelLogol h=new HetelLogol();
		ArrayList< ArrayList<HetelLogol>> hetelLogol2=new ArrayList< ArrayList<HetelLogol>>();
		h.setHetelId(1);
		arrayList.add(h);
		hetelLogol2.add(arrayList);
		ArrayList< ArrayList<HetelLogol>> hetelLogol1=userNameService.indexByRoomState(state1, style1, floor1);
		if(!hetelLogol1.isEmpty()) {
			
		return hetelLogol1;
		}
		else { return hetelLogol2;}
	}
	@RequestMapping(value = "/findFormText",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList< ArrayList<HetelLogol>>  indexByRoomState(String text) {
		ArrayList<HetelLogol> arrayList=new ArrayList<HetelLogol>();
		HetelLogol h=new HetelLogol();
		ArrayList< ArrayList<HetelLogol>> hetelLogol2=new ArrayList< ArrayList<HetelLogol>>();
		h.setHetelId(1);
		arrayList.add(h);
		hetelLogol2.add(arrayList);
		ArrayList< ArrayList<HetelLogol>> hetelLogol1=userNameService.indexByFormText(text);
	
		if(!hetelLogol1.isEmpty()) {
			
		return hetelLogol1;
		}
		else { return hetelLogol2;}
	}
	
	@RequestMapping(value = "/findroomType",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<String>  findroomType() {
		ArrayList<String> roomTyleList=userNameService.findroomType();
		return roomTyleList;
	}
	@RequestMapping(value = "/addRoomNum",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ArrayList<HetelLogol>>  addRoomNum(int roomNum,String roomStyle) {
		ArrayList<ArrayList<HetelLogol>> list=userNameService.addRoomNum(roomNum,roomStyle);
		return list;
	}
	@RequestMapping(value = "/findCanDeleteRoom",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ArrayList<HetelLogol>>  findCanDeleteRoom() {
		ArrayList<ArrayList<HetelLogol>> list=userNameService.checkCandeleteRoomNum();
		return list;
	}
	@RequestMapping(value = "/roomdelete",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<ArrayList<HetelLogol>>  roomdelete(int roomid) {
		userNameService.roomdelete(roomid);
		ArrayList<ArrayList<HetelLogol>> list=userNameService.checkCandeleteRoomNum();
		return list;
	}
	@RequestMapping(value = "/addNewRoomType",produces="application/json;charset=UTF-8")
	@ResponseBody
	public Boolean addNewRoomType(String newRoomType) {
		
		return userNameService.addNewRoomType(newRoomType);
	}
	@RequestMapping(value = "/RoomStyleDelete",produces="application/json;charset=UTF-8")
	@ResponseBody
	public Boolean RoomStyleDelete(String roomType) {
		return userNameService.RoomStyleDelete(roomType);
	}
	@RequestMapping(value = "/findCanDeleteFloor",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> findCanDeleteFloor() {
		ArrayList<Object> list= userNameService.findCanDeleteFloor();
		return list;
	}
	@RequestMapping(value = "/deleteCanDeleteFloor",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> deleteCanDeleteFloor(int floor) {
		ArrayList<Object> list=new ArrayList<Object>();
		if(userNameService.deleteCanDeleteFloor(floor)) {
			list= userNameService.findCanDeleteFloor();
		}
		else {
			list.add(0);
		}
		return list;
	}
	@RequestMapping(value = "/changeHetelBad",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object> changeHetelBad(int hetelId) {
		ArrayList<Object> list=new ArrayList<Object>();
		userNameService.changeHetelBad(hetelId);
		return list;
	}
	@RequestMapping(value = "/findsignInformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Sign> findsignInformation() {
         ArrayList<Sign> sign=new ArrayList<Sign>();
			sign= userNameService.findSignInformation();
			return sign;
	}
		@RequestMapping(value = "/AddsignInformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public boolean AddsignInformation(String username) {
		 
			return userNameService.AddsignInformation(username);
	}
	@RequestMapping(value = "/AddsignOutformation",produces="application/json;charset=UTF-8")
	@ResponseBody
	public boolean AddsignOutformation(String username) {
		boolean data=userNameService.AddsignOutformation(username);
				return data;
		}

	@RequestMapping("/findAllVip")
	public String findAllVip(Model model) {
		ArrayList<Vip> list=userNameService.findAllVip();
		System.out.println(11+""+list);
		model.addAttribute("list", list);
				return "vip";
		}
	@RequestMapping(value = "/CheckvipNum",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Vip> CheckvipNum(String val) {
		ArrayList<Vip> vip=userNameService.CheckvipNum(val);
				return vip;
		}
	@RequestMapping(value = "/DeleteVipNum",produces="application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Vip> DeleteVipNum(String idNum) {
		ArrayList<Vip> vip=userNameService.DeleteVipNum(idNum);
				return vip;
		}
}
