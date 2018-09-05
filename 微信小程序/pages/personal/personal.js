// pages/personal/personal.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    shopcarid:"",
    newimages: [{
      id: '1',
      src: 'http://img.hb.aicdn.com/d23cbe968bf32a6383a4abe8469c4850cdfd8932c7dd-NUi9db_fw658',
      name: 199,
      data: '2017/11/1'
    }],
    numer:"",
    images: [
      {
        id: '1',
        src: 'http://img.hb.aicdn.com/d23cbe968bf32a6383a4abe8469c4850cdfd8932c7dd-NUi9db_fw658',
        name: 199,
        data: '2017/11/1'
      }, {
        id: '2',
        src: 'http://img.hb.aicdn.com/efd3b765ab4ec245536c7f0e7d77b257e308e5cf25147-PUMqWE_fw658',
        name: 199,
        data: '2017/11/2'
      }, {
        id: '3',
        src: 'http://img.hb.aicdn.com/cf67253f42788000685bfba92d5d5c1dc25b317a67b91-LUKHOO_fw658',
        name: 199,
        data: '2017/11/3'
      }, {
        id: '4',
        src: 'http://img.hb.aicdn.com/5a87a3897bf11c479de2ad327c7d16f5d481cd9e56fc-DAlmVh_fw658',
        name: 199,
        data: '2017/11/4'
      }, {
        id: '5',
        src: 'https://images.unsplash.com/photo-1505421810888-a940f267b6ca?ixlib=rb-0.3.5&s=eed31d0f34903d34b38f97d5bb24251a&auto=format&fit=crop&w=1833&q=80',
        name: 199,
        data: '2017/11/5'
      }, {
        id: '6',
        src: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-0.3.5&s=103b5228d4006d57335d679fbb420821&auto=format&fit=crop&w=1050&q=80',
        name: 199,
        data: '2017/11/6'
      }, {
        id: '7',
        src: 'https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c18977cd3eb528519a340af8f3d5a07&auto=format&fit=crop&w=662&q=80',
        name: 199,
        data: '2017/11/7'
      }, {
        id: '8',
        src: 'https://images.unsplash.com/photo-1480511361210-b1b966c8d614?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9a4002bcee51dc8258f5cb42060fa3f&auto=format&fit=crop&w=663&q=80',
        name: 199,
        data: '2017/11/8'
      }, {
        id: '9',
        src: 'https://images.unsplash.com/photo-1494336956603-39a3641efa1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f94554232bf4c743544ba5a68c63bb5&auto=format&fit=crop&w=634&q=80',
        name: 199,
        data: '2017/11/9'
      }, {
        id: '10',
        src: 'https://images.unsplash.com/photo-1495121768032-1198a4749565?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f5d01a14f8a52be6c0e88d2f9c1f012&auto=format&fit=crop&w=800&q=80',
        name: 199,
        data: '2017/11/10'
      }, {
        id: '11',
        src: 'https://images.unsplash.com/photo-1501250523374-8f78abda6b86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63457a1902e6df3143c8591e66f9801b&auto=format&fit=crop&w=564&q=80',
        name: 199,
        data: '2017/11/11'
      }, {
        id: '12',
        src: 'http://img.hb.aicdn.com/2cc85e337623d5f0882143d87312f953a8a98fcf7ed1-iQQFPS_fw658',
        name: 199,
        data: '2017/11/12'
      }, {
        id: '13',
        src: 'https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c18977cd3eb528519a340af8f3d5a07&auto=format&fit=crop&w=662&q=80',
        name: 199,
        data: '2017/11/13'
      }, {
        id: '14',
        src: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-0.3.5&s=103b5228d4006d57335d679fbb420821&auto=format&fit=crop&w=1050&q=80',
        name: 199,
        data: '2017/11/14'
      }, {
        id: '15',
        src: 'https://images.unsplash.com/photo-1505421810888-a940f267b6ca?ixlib=rb-0.3.5&s=eed31d0f34903d34b38f97d5bb24251a&auto=format&fit=crop&w=1833&q=80',
        name: 199,
        data: '2017/11/15'
      }, {
        id: '16',
        src: 'https://images.unsplash.com/photo-1508879776347-a8f851b36378?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=463464ffcfacc7fd58617a18b4a06200&auto=format&fit=crop&w=1650&q=80',
        name: 199,
        data: '2017/11/16'
      }, {
        id: '17',
        src: 'http://img.hb.aicdn.com/ebebd28e7917f1d96bd14f0805e6f719e5d3800011c18-0U1cOS_fw658',
        name: 199,
        data: '2017/11/17'
      }, {
        id: '18',
        src: 'http://img.hb.aicdn.com/20bf0d33637bd6bf87663abba041888004187fe013eb9-GiUi4C_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '19',
        src: 'http://img.hb.aicdn.com/6bdbf1df5da071d92509f287b87ff02df3c4b04220357-8sLxeM_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '20',
        src: 'http://img.hb.aicdn.com/4205c583b25410905b80f8cedc5c35c4ee2a7c634d91-Mqo2ZN_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '21',
        src: 'http://img.hb.aicdn.com/39ec9ab77d5d4d38d426bc6c2c9e237b2bac97d36e59-C5EkIA_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '22',
        src: 'http://img.hb.aicdn.com/bcbc82dd914d613e854a90b611e1ee5fc7f7fc0f1a2df-TMK11H_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '23',
        src: 'http://img.hb.aicdn.com/7b22358d57bf824f67c252b6da7196aeabe32509d8cd-gfXzLX_fw658',
        name: 199,
        data: '2017/11/17'
      },
      {
        id: '24',
        src: 'http://img.hb.aicdn.com/8bd2335e21753ed3a727d4503a92f25eaf2993636195c-L8R0HX_fw658',
        name: 199,
        data: '2017/11/17'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
    }, 500) 

    app.globalData.arr='1';

    var orderlist = app.globalData.orderlist;
    var shopid = orderlist[0].shopcarid;
    var price = orderlist[0].price;
    console.log(orderlist[0]);
    var that = this;
    var newshopcar = [];
    this.setData({ shopcarid: decodeURIComponent(shopid) })
    var shopcars = this.data.images;
    for (var i = 0; i < shopcars.length; i++) {
      if (shopcars[i].id == that.data.shopcarid) {
        that.setData({ numer: price / shopcars[i].name });
        shopcars[i].data = (price / shopcars[i].name);
        shopcars[i].name = price;
        newshopcar.push(shopcars[i]);
      }
    }
    that.data.newimages = newshopcar.concat(that.data.newimages);
    that.setData({ newimages: that.data.newimages});
    console.log('haha', that.data.newimages)

    /*获取头像 */
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
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