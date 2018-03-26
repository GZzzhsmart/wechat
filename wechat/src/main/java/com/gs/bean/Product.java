package com.gs.bean;

import java.math.BigDecimal;

/**
 * @author xiaopeng
 * @date 2018/3/22 16:05
 */
public class Product {

    private Long id;
    private String title;
    private String des;
    private BigDecimal price;
    private BigDecimal salePrice;
    private String imageUrl;

    public Product() {
    }

    public Product(Long id, String title, String des, BigDecimal price, BigDecimal salePrice, String imageUrl) {
        this.id = id;
        this.title = title;
        this.des = des;
        this.price = price;
        this.salePrice = salePrice;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(BigDecimal salePrice) {
        this.salePrice = salePrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
