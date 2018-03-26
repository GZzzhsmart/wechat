const app = getApp()

Page({
  data: {
    product: {}
  },
  onLoad: function (option) {
    let self = this;
    wx.request({
      url: 'http://localhost:8080/product/one/' + option.id, //仅为示例，并非真实的接口地址
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        self.setData({
          product: res.data
        })
      }
    })
  }
})
