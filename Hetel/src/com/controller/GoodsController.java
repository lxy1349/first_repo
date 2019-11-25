package com.controller;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.po.Goods;
import com.po.GoodsAndType;
import com.po.Goods_Type;

import com.service.GoodsService;


import net.sf.json.JSONObject;

@Controller
@RequestMapping("/goods")
public class GoodsController {
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping(value="/find_goods_id",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  List<Goods>  find_goods_id(@RequestBody String str){	
		List<Goods> goods=null;
		JSONObject jsonObject = JSONObject.fromObject(str); 
		String goods_id= jsonObject.getString("goods_id");
	   try {			
		   goods=goodsService.findGoodsById(Integer.parseInt(goods_id));
		}catch(Exception e) {
			System.out.println(e);
			
		}
	   return goods;
	}
	
	@RequestMapping(value="/add_goods",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  Boolean  add_goods_type(@RequestBody Goods goods){	
		if(goods.getGoods_time()==""||goods.getGoods_time()==null) {
			goods.setGoods_time(null);
		}
	   try {			
		   goodsService.addGoods(goods);
		}catch(Exception e) {
			   return false;
		}
	   return true;
	}
	
	@RequestMapping(value="/update_goods",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  update_goods(@RequestBody Goods goods){	
	   try {			
		goodsService.updateGoods(goods);
		}catch(Exception e) {
			System.out.println(e);
			   return"更新失败";
		}
	   return"更新成功";
	}
	
	@RequestMapping(value="/detele_goods",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  detele_goods(@RequestBody String str){	
	   try {			
		   JSONObject jsonObject = JSONObject.fromObject(str); 
			String goods_id= jsonObject.getString("goods_id");
			int i=goodsService.deleteGoodsById(Integer.parseInt(goods_id));
			if(i>0)
				return "删除成功";
		}catch(Exception e) {
			System.out.println(e);
			   return"删除失败";
		}
	   return"删除成功";
	}
	
	@RequestMapping(value="/goods_length",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  String  goods_length(@RequestBody String str){	
		int m=0;
	   try {			
		   JSONObject jsonObject = JSONObject.fromObject(str); 
			String goods_type_id= jsonObject.getString("goods_type_id");
			int i=Integer.parseInt(goods_type_id);;
		
			if(i==0)
				m=goodsService.findGoodsAll().size();
			else m=goodsService.findGoodsTypeAll(i).size();
		
		}catch(Exception e) {
			System.out.println(e);	 
		}
	  return ""+m;
	}
	
	@RequestMapping(value="/goods_paging",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  List<GoodsAndType>  goods_paging(@RequestBody String str){	
		List<GoodsAndType> goods=null;
	   try {			
		   JSONObject jsonObject = JSONObject.fromObject(str); 
			String goods_type_id= jsonObject.getString("goods_type_id");
			String start= jsonObject.getString("start");
			int i=Integer.parseInt(goods_type_id);;
			int j=Integer.parseInt(start);
			if(i==0)
				goods=goodsService.findGoodsAlllimit((j-1)*12);
			else goods=goodsService.findGoodsTypeAlllimit(i, (j-1)*12);
		
		}catch(Exception e) {
			System.out.println(e);
			 
		}
	  return goods;
	}
	
	
	@RequestMapping(value="/goods_find",method=RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public  List<GoodsAndType>  goods_find(@RequestBody String str){	
		List<GoodsAndType> goods=null;
	   try {			
		   JSONObject jsonObject = JSONObject.fromObject(str); 
			String value= jsonObject.getString("value");
			goods=goodsService.findGoods(value);
		
		
		}catch(Exception e) {
			System.out.println(e);
			 
		}
	  return goods;
	}
}
