// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],
  },
//接口返回数据
Cates: [] ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },
  getCates() {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      data: {},
      success: (result) => {
        console.log(result);
        this.Cates=result.data.message;
        let leftMenuList=this.Cates.map(v=>v.cat_name);
        let rightContent=this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      },
    });
  }

})