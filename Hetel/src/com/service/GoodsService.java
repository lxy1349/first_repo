package com.service;

import java.util.List;

import com.po.Goods;
import com.po.GoodsAndType;

public interface GoodsService {
	//�������۶���id��ѯ���۶�����Ϣ
	public List <Goods>  findGoodsById(int goods_id);
	//������ƷID��ѯ��Ϣ
	public List <GoodsAndType>  findGoodsAll();
	//���Ӷ�������
	int addGoods(Goods goods);
	//���ݶ���ɾ�����ۺ���Ʒ
	int deleteGoodsById(int goods_id);
	// ���ݶ�����IDɾ����Ʒ
	int updateGoods(Goods goods);
	//�������е���Ʒ

	public List <GoodsAndType>  findGoods(String value);
	public List <GoodsAndType>  findGoodsAlllimit(int number);
	
	public List <GoodsAndType>  findGoodsTypeAll(int goods_type_id);
	
	public List <GoodsAndType>  findGoodsTypeAlllimit(int goods_type_id,int number);
}