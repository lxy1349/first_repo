package com.service;

import java.util.List;

import com.po.Goods;
import com.po.GoodsAndType;

public interface GoodsService {
	//根据销售订单id查询销售订单信息
	public List <Goods>  findGoodsById(int goods_id);
	//按照商品ID查询信息
	public List <GoodsAndType>  findGoodsAll();
	//增加订货订单
	int addGoods(Goods goods);
	//根据订单删除销售和商品
	int deleteGoodsById(int goods_id);
	// 根据订单和ID删除商品
	int updateGoods(Goods goods);
	//查找所有的商品

	public List <GoodsAndType>  findGoods(String value);
	public List <GoodsAndType>  findGoodsAlllimit(int number);
	
	public List <GoodsAndType>  findGoodsTypeAll(int goods_type_id);
	
	public List <GoodsAndType>  findGoodsTypeAlllimit(int goods_type_id,int number);
}