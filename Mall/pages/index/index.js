const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    products:[]
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let self = this;
    wx.request({
      url: 'http://localhost:8080/product/all', //仅为示例，并非真实的接口地址
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        self.setData({
          products:res.data
        })
      }
    })
  },
  showDetail: function (e) {
    // 如何把获取的商品详情信息放入到商品详情页面中？
   wx.navigateTo({
     url: '../detail/detail?id=' + e.target.dataset.id
   })
  },
  /**
   * [{},{}]
   * [
   *  {
   *    product:{}, 
   *    count:1
   *  },
   *  { 
   *    product:{}, 
   *    count:2
   *  }
   * ]
   * 
   */
  addCart: function (e) {
    // 获取需要添加到购物车里的商品对应的索引
    let index = e.target.dataset.index
    // 根据索引获取products数组中的商品信息，此商品信息将来需要添加到购物车
    let currentProduct = this.data.products[index]
    // 从本地存储中获取购物车中的所有商品列表，如果本地存储中没有，则初始化为[]
    // cartProducts的数据结构跟方法前里的注释一致
    let cartProducts = wx.getStorageSync('cart') || []
    // 标记当前商品未添加到购物车里
    let isAddedToCart = false;
      /**
       * cartProduct对应于{
   *    product:{},
   *    count:1
   *  }   （商品信息+数量）
       */
    cartProducts.forEach(function (cartProduct, index) {
      // 判断购物车里是否已经存在指定的商品信息
      if (currentProduct.id === cartProduct.product.id) {
        // 已经在购物车中，做数量的累加，并且把isAddedToCart标记为true
        cartProduct.count++
        isAddedToCart = true
      }
    })
    // 如果原先购物车里没有需要添加的商品
    if (!isAddedToCart) {
      // 组装商品信息+数量 的json对象，由于商品是初次加入购物车，则商品数量初始化为1
      let cartProduct = {
        product: currentProduct,
        count:1
      }
      // 把组装好的（商品信息+数量 ）json对象添加到购物车列表中
      cartProducts.unshift(cartProduct)
    }
    // 把购物车信息存储到本地存储中
    wx.setStorageSync('cart', cartProducts)
  }
})
