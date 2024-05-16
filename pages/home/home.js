// pages/home/home.js
Page({

  // 用户点击测试
  testClick(e){
    this.setData({
      test: '77777777',
      num: this.data.num + e.target.dataset.info
    })
    console.log(e, 'eeeeeee');
  },
  // 通过编程式导航，去到tabBar我的页面
  goToMine(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
// 通过编程式导航，去到非tabBar我的页面
  goToInfo(){
    wx.navigateTo({
      url: '/pages/info/info?name=ss&age=24',
    })
  },

  // 初始化加载
  getInfo(){
    console.log(66666);
  },

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    test: "hello word",
    code: 66666,
    info: 6,
    bool: true,
    array: ["zs", "ls", "ww"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时候初始化请求加载
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
})