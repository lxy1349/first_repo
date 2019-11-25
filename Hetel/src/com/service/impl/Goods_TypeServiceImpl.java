package com.service.impl;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.mapper.GoodsMapper;
import com.mapper.Goods_TypeMapper;
import com.po.Goods;
import com.po.Goods_Type;

import com.service.Goods_TypeService;
@Service("goods_typeService")
@Transactional()
public class Goods_TypeServiceImpl implements Goods_TypeService{
	@Resource
	private Goods_TypeMapper goods_typeMapper;
	@Override
	public List<Goods_Type> find_all() {
		// TODO Auto-generated method stub
		return goods_typeMapper.find_all();
	}

	@Override
	public int add_goods_type(Goods_Type goods_type) {
		// TODO Auto-generated method stub
		return goods_typeMapper.add_goods_type(goods_type);
	}

	@Override
	public int deleteGoods_TypeById(int goods_type_id) {
		// TODO Auto-generated method stub
		return goods_typeMapper.deleteGoods_TypeById(goods_type_id);
	}

	@Override
	public int updateDiscount(Goods_Type goods_type) {
		// TODO Auto-generated method stub
		return goods_typeMapper.updateDiscount(goods_type);
	}

	@Override
	public List<Goods_Type> findById(int goods_type_id) {
		// TODO Auto-generated method stub
		return goods_typeMapper.findById(goods_type_id);
	}

	@Override
	public List<Goods_Type> findByName(String goods_type_name) {
		// TODO Auto-generated method stub
		return goods_typeMapper.findByName(goods_type_name);
	}

}
