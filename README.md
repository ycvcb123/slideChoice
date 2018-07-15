# slideChoice
滑动选择组件

### 主要用到小程序中的swiper组件(配置灵活)

官方链接 ：[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html?search-key=%20swiper)

> 可以很好的根据滑动长度，来控制当前选中的是哪一个图片，并且放在屏幕中央。

### 小小的优化点

> 想突出当前选中的图片，所以当前选中的scale为1，未选中的为0.9，但是效果让人感觉有点卡顿的感觉，所以在变化的过程中加入`transition: all .5s ease-out;`完美解决卡顿感的问题。

### 效果如下：

<image src="./choice.gif"></image>
