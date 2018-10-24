export default (Vue) => {
  // 注册一个全局自定义指令 `v-drag`
  Vue.directive('drag', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
    // 获取当前元素
      let odiv = el
      odiv.onmousedown = (e) => {
        // 算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft
        let disY = e.clientY - odiv.offsetTop
        document.onmousemove = (e) => {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX
          let top = e.clientY - disY
          // 移动当前元素
          odiv.style.left = left + 'px'
          odiv.style.top = top + 'px'
        }
        document.onmouseup = (e) => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  })
}
