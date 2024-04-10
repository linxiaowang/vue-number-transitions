# vue-number-transitions
This component is rewritten using the number-animation component from Naive UI, specifically for Vue 2.x. You can refer to the [Naive UI API documentation](https://www.naiveui.com/zh-CN/os-theme/components/number-animation) to effectively use it in your Vue 2.x project.


### Install

```bash
npm install vue-number-transition
```

### Usage

You can use it in SFC like this:

```vue
<template>
  <div>
    <VueNumberTransitions ref="transitionRef" :to="123" />
  </div>
</template>

<script>
import VueNumberTransitions from 'vue-number-transitions'

export default {
  components: {
    VueNumberTransitions
  },

  mounted(){
    this.$refs.transitionRef.play()
  },
};
</script>
```

## API

### Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| active | `boolean` | `true` | 是否开始动画 |
| duration | `number` | `3000` | 动画持续时间 |
| from | `number` | `0` | 数值动画起始值 |
| locale | `string` | en-us | 国际化的语言 |
| precision | `number` | `0` | 精度，保留小数点后几位 |
| show-separator | `boolean` | `false` | 是否显示分隔符 |
| to | `number` | `undefined` | 目标值 |
| on-finish | `() => void` | `undefined` | 动画结束的回调 |

### Methods

| 名称 | 参数 | 说明     | 版本   |
| ---- | ---- | -------- | ------ |
| play | `()` | 播放动画 | 2.23.2 |
