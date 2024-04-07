import NumberAnimation from "../package/number-animation/index.vue"; 
const components = [NumberAnimation]; 

// 批量组件注册
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用
