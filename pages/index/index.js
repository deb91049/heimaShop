//Page Object
Page({
    data: {
        swiperList: [],
        categoryList: [],
        floorList: [],
    },
    //options(Object)
    onLoad: function(options) {
        //发送异步请求获取轮播图数据
        wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

            success: (result) => {
                console.log(result);
                this.setData({
                    swiperList: result.data.message
                })
            }

        });
        wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',

            success: (result) => {
                this.setData({
                    categoryList: result.data.message
                })
            },

        });
        wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',

            success: (result) => {
                this.setData({
                    floorList: result.data.message
                })
            },

        });
    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }
});