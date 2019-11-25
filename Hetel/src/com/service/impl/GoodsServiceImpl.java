package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mapper.GoodsMapper;

import com.po.Goods;
import com.po.GoodsAndType;
import com.service.GoodsService;
@Service("goodsService")
@Transactional()
public class GoodsServiceImpl implements GoodsService{
	@Resource
	private GoodsMapper goodsMapper;

	@Override
	public List<Goods> findGoodsById(int goods_id) {
		// TODO Auto-generated method stub
		return goodsMapper.findGoodsById(goods_id);
	}

	@Override
	public List<GoodsAndType> findGoodsAll() {
		// TODO Auto-generated method stub
		return goodsMapper.findGoodsAll();
	}

	@Override
	public int addGoods(Goods goods) {
		// TODO Auto-generated method stub
		return goodsMapper.addGoods(goods);
	}

	@Override
	public int deleteGoodsById(int goods_id) {
		// TODO Auto-generated method stub
		return goodsMapper.deleteGoodsById(goods_id);
	}

	@Override
	public int updateGoods(Goods goods) {
		// TODO Auto-generated method stub
		return goodsMapper.updateGoods(goods);
	}

	@Override
	public List<GoodsAndType> findGoodsAlllimit(int number) {
		// TODO Auto-generated method stub
		return goodsMapper.findGoodsAlllimit(number);
	}

	@Override
	public List<GoodsAndType> findGoodsTypeAll(int goods_type_id) {
		// TODO Auto-generated method stub
		return goodsMapper.findGoodsTypeAll(goods_type_id);
	}

	@Override
	public List<GoodsAndType> findGoodsTypeAlllimit(int goods_type_id, int number) {
		// TODO Auto-generated method stub
		return goodsMapper.findGoodsTypeAlllimit(goods_type_id, number);
	}

	@Override
	public List<GoodsAndType> findGoods(String value) {
		// TODO Auto-generated method stub
		return goodsMapper.findGoods(value);
	}


}
