const app = getApp()

Page({
  data: {
    cart:[],
    totalPay:0
  },
  onShow: function () {
    this.setData({
      cart: wx.getStorageSync('cart') || []
    })
    let money = 0
    this.data.cart.forEach(function (cartProduct, index) {
      money += cartProduct.product.salePrice * cartProduct.count
    })
    this.setData({
      totalPay: money
    })
  },
  remove: function (e) {
    // 获取要删除的购物车商品的索引
    let index = e.target.dataset.index
    // 当前购物车里的所有商品信息
    let currentCart = this.data.cart
    let currentProduct = currentCart[index]

    this.setData({
      totalPay: this.data.totalPay - currentProduct.count * currentProduct.product.salePrice
    })

    // 从购物车中移除指定索引的商品信息
    currentCart.splice(index, 1)
    this.setData({
      cart:currentCart
    })
    // 把更新后的商品信息重新保存到本地存储中
    wx.setStorageSync('cart', this.data.cart)
  }
})
