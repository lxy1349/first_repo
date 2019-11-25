package com.po;


public class Goods {
	
private int goods_id;//商品编号
private String goods_name;//商品名称
private int goods_type_id;//商品分类编号
private int  goods_number;//商品数量
private String goods_time;//商品保质期
private String goods_unit;// 商品单位
private String goods_referred;//商品简称
private String goods_specifications;//商品规格
private int  ceiling_number;//商品数量
private int  under_number;//商品数量

public int getGoods_id() {
	return goods_id;
}
public void setGoods_id(int goods_id) {
	this.goods_id = goods_id;
}
public String getGoods_name() {
	return goods_name;
}
public void setGoods_name(String goods_name) {
	this.goods_name = goods_name;
}
public int getGoods_type_id() {
	return goods_type_id;
}
public void setGoods_type_id(int goods_type_id) {
	this.goods_type_id = goods_type_id;
}
public int getGoods_number() {
	return goods_number;
}
public void setGoods_number(int goods_number) {
	this.goods_number = goods_number;
}
public String getGoods_time() {
	return goods_time;
}
public void setGoods_time(String goods_time) {
	this.goods_time = goods_time;
}
public String getGoods_unit() {
	return goods_unit;
}
public void setGoods_unit(String goods_unit) {
	this.goods_unit = goods_unit;
}
public String getGoods_referred() {
	return goods_referred;
}
public void setGoods_referred(String goods_referred) {
	this.goods_referred = goods_referred;
}
public String getGoods_specifications() {
	return goods_specifications;
}
public void setGoods_specifications(String goods_specifications) {
	this.goods_specifications = goods_specifications;
}
public int getCeiling_number() {
	return ceiling_number;
}
public void setCeiling_number(int ceiling_number) {
	this.ceiling_number = ceiling_number;
}
public int getUnder_number() {
	return under_number;
}
public void setUnder_number(int under_number) {
	this.under_number = under_number;
}
@Override
public String toString() {
	return "Goods [goods_id=" + goods_id + ", goods_name=" + goods_name + ", goods_type_id=" + goods_type_id
			+ ", goods_number=" + goods_number + ", goods_time=" + goods_time + ", goods_unit=" + goods_unit
			+ ", goods_referred=" + goods_referred + ", goods_specifications=" + goods_specifications
			+ ", ceiling_number=" + ceiling_number + ", under_number=" + under_number + "]";
}
public Goods() {
	
}
public Goods(int goods_id, String goods_name, int goods_type_id, int goods_number, String goods_time,
		String goods_unit, String goods_referred, String goods_specifications, int ceiling_number, int under_number) {
	super();
	this.goods_id = goods_id;
	this.goods_name = goods_name;
	this.goods_type_id = goods_type_id;
	this.goods_number = goods_number;
	this.goods_time = goods_time;
	this.goods_unit = goods_unit;
	this.goods_referred = goods_referred;
	this.goods_specifications = goods_specifications;
	this.ceiling_number = ceiling_number;
	this.under_number = under_number;
}






}