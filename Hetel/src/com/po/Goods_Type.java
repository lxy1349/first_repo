package com.po;

public class Goods_Type {
private int	goods_type_id;
public Goods_Type()
{

}
public Goods_Type(int goods_type_id, String goods_type_name, String goods_type_annotation) {

	super();
	this.goods_type_id = goods_type_id;
	this.goods_type_name = goods_type_name;
	this.goods_type_annotation = goods_type_annotation;
}
@Override
public String toString() {
	return "Goods_Type [goods_type_id=" + goods_type_id + ", goods_type_name=" + goods_type_name
			+ ", goods_type_annotation=" + goods_type_annotation + "]";
}
public int getGoods_type_id() {
	return goods_type_id;
}
public void setGoods_type_id(int goods_type_id) {
	this.goods_type_id = goods_type_id;
}
public String getGoods_type_name() {
	return goods_type_name;
}
public void setGoods_type_name(String goods_type_name) {
	this.goods_type_name = goods_type_name;
}
public String getGoods_type_annotation() {
	return goods_type_annotation;
}
public void setGoods_type_annotation(String goods_type_annotation) {
	this.goods_type_annotation = goods_type_annotation;
}
private String	goods_type_name;
private String	goods_type_annotation;


	
	
}
