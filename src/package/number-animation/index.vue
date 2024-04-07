<template>
  <span>
    <span v-for="(item, index) in [formattedValue.integer, formattedValue.decimal ? formattedValue.decimalSeparator : null, formattedValue.decimal]" :key="index">
      {{ item }}
    </span>
  </span>
</template>

<script>
/**
 * active	boolean	true	是否开始动画	
 * duration	number	3000	动画持续时间	
 * from	number	0	数值动画起始值	
 * locale	string	国际化的语言	
 * precision	number	0	精度，保留小数点后几位	
 * show-separator	boolean	false	是否显示分隔符	
 * to	number	undefined	目标值	
 * on-finish	() => void	undefined	动画结束的回调	
 */
 function createRound(methodName) {
    const func = Math[methodName]
    return (number, precision) => {
        precision = precision == null ? 0 : (precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292))
        if (precision) {
            let pair = `${number}e`.split('e')
            const value = func(`${pair[0]}e${+pair[1] + precision}`)

            pair = `${value}e`.split('e')
            return +`${pair[0]}e${+pair[1] - precision}`
        }
        return func(number)
    }
}

const round = createRound('round')

export default {
  name: 'NumberAnimation',
  props: {
    to: {
      type: Number,
      default: 0
    },
    precision: {
      type: Number,
      default: 0
    },
    showSeparator: {
      type: Boolean,
      default: false
    },
    from: { type: Number, default: 0 },
    locale: {
      type: String,
      default: 'en-US'
    },
    active: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    onFinish: {
      type: Object,
      default: ()=>new Function()
    }
  },

  data(){
    return {
      displayedValue: 0,
      animating: false
    }
  },

  computed: {
    mergedLocale(){
      if (this.locale){
        return this.locale
      }
      return ''
    },

    formattedValue(){
      const formatted = round(
        this.displayedValue,
        this.precision
      ).toFixed(this.precision)
      const splitValue = formatted.split('.')
      const numberFormatter = new Intl.NumberFormat(this.mergedLocale)
      const decimalSeparator = numberFormatter
        .formatToParts(0.5)
        .find(part => part.type === 'decimal')?.value
      const integer = this.showSeparator
        ? numberFormatter.format(Number(splitValue[0]))
        : splitValue[0]
      const decimal = splitValue[1]

      return {
        integer,
        decimal,
        decimalSeparator
      }
    }
  },

  methods: {
    easeOut(t){
      return 1 - Math.pow(1 - t, 5)
    },
    onFinishFunc(){
      this.displayedValue = this.to
      this.animating = false
      this.onFinish()
    },
    onUpdate(currentValue){
      this.displayedValue = currentValue
    },
    animate(){
      this.animating = true
      this.displayedValue = this.from

      if (this.from !== this.to){
        this.tween({ from: this.from, to: this.to, duration: this.duration })
      }
    },
    play(){
      if (this.animating){
        return 
      }
      this.animate()
    },
    tween(props) {
      const { from, to, duration } = props
      const tick = () => {
        const current = performance.now()
        const elapsedTime = Math.min(current - startTime, duration)
        const currentValue = from + (to - from) * this.easeOut(elapsedTime / duration)
        if (elapsedTime === duration) {
          this.onFinish()
          return
        }
        this.onUpdate(currentValue)
        requestAnimationFrame(tick)
      }
      const startTime = performance.now()
      tick()
    }

  }
    
}
</script>

