export default (Vue) => {
  // 注册一个全局自定义指令 `v-drag`
  Vue.directive('drag', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 获取tip
      let tip = document.getElementById('tip')
      // 给当前元素绑定事件
      el.onmousedown = (e) => {
        // 鼠标按下，计算鼠标滑动的距离
        let oX = e.clientX
        let oY = e.clientY
        document.onmousemove = (e) => {
          if (Math.sqrt((oX - e.clientX) * (oX - e.clientX) + (oY - e.clientY) * (oY - e.clientY)) <= 1) {
            return false
          }
          tip.style.display = 'inline-block'
          el.classList.add('activeClass')
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - tip.clientWidth / 2
          let top = e.clientY - tip.clientHeight / 2
          // 移动当前元素
          tip.style.left = left + 'px'
          tip.style.top = top + 'px'
        }
        document.onmouseup = (e) => {
          document.onmousemove = null
          document.onmouseup = null
          tip.style.display = 'none'
          el.classList.remove('activeClass')
        }
      }
    }
  })
}
