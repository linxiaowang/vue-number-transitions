<template>
  <div id="app">
    <NumberAnimation ref="numberAnimationRef" :to="898276791"/>
  </div>
</template>

<script>
import NumberAnimation from './package/number-animation'

export default {
  name: 'App',
  components: {
    NumberAnimation
  },
  mounted(){
    this.$refs.numberAnimationRef.play()
  },
  methods: {
    numberPlay(){
      this.$refs.numberAnimationRef.play()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
