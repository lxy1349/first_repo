package com.controller;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.jni.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.po.Goods;

import com.po.Goods_Type;
import com.service.GoodsService;
import com.service.Goods_TypeService;


import net.sf.json.JSONObject;

@Controller
@RequestMapping("/goods_type")
public class Goods_TypeController {
	
	
	@Autowired
	private Goods_TypeService goods_typeService;
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping(value="/goods_type_all",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  List<Goods_Type>  goods_type_all(){	
		return goods_typeService.find_all();
	}
	
	@RequestMapping("/goodsType")
	public String goodsType(ModelMap model, HttpServletRequest request) {
		model.addAttribute("goods_type", goods_typeService.find_all());
		System.out.println(( goods_typeService.find_all())+"111111111111111");
		return "store";
		
	}
	
	@RequestMapping(value="/add_goods_type",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  add_goods_type(@RequestBody String str){	
		try {		
			JSONObject jsonObject = JSONObject.fromObject(str); 
			String add_type_name= jsonObject.getString("add_type_name"); 
			
			System.out.println(add_type_name);
			if(goods_typeService.findByName(add_type_name).size()>0)
				return "该分类已经存在 ";
			System.out.println("sdsd");
			String add_type_annotation= jsonObject.getString("add_type_annotation"); 
		    Goods_Type goods_type=new Goods_Type(1,add_type_name,add_type_annotation);
		    
		    goods_typeService.add_goods_type(goods_type);
		}catch(Exception e) {
			System.out.println(e);
			   return"新增失败";
		}
	   return"新增成功";
	}
	
	@RequestMapping(value="/update_goods_type",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  update_goods_type(@RequestBody Goods_Type goods_type){		
		try {	
		 goods_typeService.updateDiscount(goods_type);
		}catch(Exception e) {
			System.out.println(e);
			   return"更新失败";
		}
	   return"更新成功";
	}
	
	
	@RequestMapping(value="/detele_goods_type",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  detele_goods_type(@RequestBody  String str){		
		try {			
		JSONObject jsonObject = JSONObject.fromObject(str); 
		String goods_type_id= jsonObject.getString("goods_type_id"); 		
	    goods_typeService.deleteGoods_TypeById(Integer.parseInt(goods_type_id));
	}catch(Exception e) {
			System.out.println(e);
			return"删除失败";
		}
	   return"删除成功";
	}
	
	
	@RequestMapping(value="/goods_type_find",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public List<Goods_Type>  goods_type_find(@RequestBody  String str){		
		List<Goods_Type> goods_type=null;
		try {			
		JSONObject jsonObject = JSONObject.fromObject(str); 
		String goods_type_id= jsonObject.getString("goods_type_id"); 		
		goods_type= goods_typeService.findById(Integer.parseInt(goods_type_id));
	    
	}catch(Exception e) {
			System.out.println(e);
		
		}
	   return goods_type;
	}
}
