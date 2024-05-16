// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    array: [],
    loading: false
  },

  addCount(){
    this.setData({
      count: ++this.data.count
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let test = []
    for (let index = 0; index < 30; index++) {
      test.push(index)  
    }
    this.setData({
      array: test
    })

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
    this.setData({
      count: 0
    })
    // 处理完成后停止下拉刷新
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    console.log('onReachBottom');
    let test = this.data.array
    for (let index = 0; index < 30; index++) {
      test.push(index)  
    }
    this.setData({
      array: test
    })
    setTimeout(() => {
      this.setData({
        loading: false
      })
      wx.hideLoading()
    }, 1000)
    

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})