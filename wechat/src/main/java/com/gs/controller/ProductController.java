package com.gs.controller;

import com.gs.bean.Product;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/product")
public class ProductController {

    @GetMapping("all")
    public List<Product> listAll(){
        List<Product> productList = new ArrayList<>();
        productList.add(new Product(1L, "iPhone X ", "最便宜的X ", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"));
        productList.add(new Product(2L, "小米Note5A", "最便宜小米", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"));
        productList.add(new Product(3L, "华为nova 3e", "最便宜的华为", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"));
        productList.add(new Product(4L, "魅族S6", "最便宜的魅族", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"));
        productList.add(new Product(5L, "三星S10", "最便宜的三星", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"));
        return productList;
    }

    @PostMapping("one/{id}")
    public Product getById(@PathVariable("id") Long id) {
        // 根据id查找商品信息
        return new Product(1L, "iPhone X ", "最便宜的X ", new BigDecimal(9999.0), new BigDecimal(999.9), "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg");
    }

}
