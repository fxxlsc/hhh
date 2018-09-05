// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img.hb.aicdn.com/068679a7eceddc6d4e2c8a3b962b183da3af14541796c-H4OsNW_fw658',
      'http://img.hb.aicdn.com/139d157c6f4d080040af651a303a836f4b3ab8f3aab8-aQvvV0_fw658',
      'http://img.hb.aicdn.com/1e038ee70e08a204d14bdd166293ad3b5ba2b4ee158a9-KbRZop_fw658',
      'http://img.hb.aicdn.com/87da65d76da2e9818bf0cc955ca1bf3ff86e301415d5d-J5lwTH_fw658',
      'http://img.hb.aicdn.com/3831814587b03e89175222b47f08cc5a94d8b837a9e7-FaXiQT_fw658'
    ],
    latitude: 30.57447,
    longitude: 103.92377,
    markers: [{
      id: 1,
      latitude: 30.57447,
      longitude: 103.92377,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: ''
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: ''
    }],
    indicatorDots: true,
    autoplay: true,
    interval:3000,
    duration: 1000
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function (e) {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  mapViewTap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    console.log('--------下拉刷新-------');

    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000) 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})