package com.po;

public class Store {
private String goodsName;
private int goodsPrice;
private int goodsNum;

/**
 * @return the goodsNum
 */
public int getGoodsNum() {
	return goodsNum;
}
/**
 * @param goodsNum the goodsNum to set
 */
public void setGoodsNum(int goodsNum) {
	this.goodsNum = goodsNum;
}
/**
 * @return the goodsName
 */
public String getGoodsName() {
	return goodsName;
}
/**
 * @param goodsName the goodsName to set
 */
public void setGoodsName(String goodsName) {
	this.goodsName = goodsName;
}
/**
 * @return the goodsPrice
 */
public int getGoodsPrice() {
	return goodsPrice;
}
/**
 * @param goodsPrice the goodsPrice to set
 */
public void setGoodsPrice(int goodsPrice) {
	this.goodsPrice = goodsPrice;
}

}
