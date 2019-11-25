package com.mapper;

import java.util.List;

import com.po.Goods_Type;

public interface Goods_TypeMapper {
	
public List<Goods_Type> findByName(String goods_type_name);
	
public List<Goods_Type> findById(int goods_type_id);

public List<Goods_Type> find_all();

public int add_goods_type(Goods_Type goods_type);

public int deleteGoods_TypeById(int goods_type_id);

public int updateDiscount(Goods_Type goods_type);

}
