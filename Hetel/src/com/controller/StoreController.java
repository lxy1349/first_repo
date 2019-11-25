package com.controller;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.po.ReserveOrder;
import com.po.RoomPrice;
import com.po.Store;
import com.service.StoreService;

@Controller
@RequestMapping("/store")
public class StoreController {
	@Autowired
	private StoreService storeService;
	
	@RequestMapping(value="/findgoodsAndroom",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public ArrayList<Object>  findgoodsAndroom(){	
		ArrayList<Object> rs= new ArrayList<Object>();
		rs=storeService.getAllrsOrder();
		return rs;
	}
	
	@RequestMapping(value="/ChangegoodsAndroom",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public void  ChangegoodsAndroom(String a,String b){	
	

		RoomPrice[] roomprice = JSON.parseObject(a,RoomPrice[].class);
		Store[] store=JSON.parseObject(b, Store[].class);
		storeService.setRoomStore(roomprice,store);
	}
	
}
