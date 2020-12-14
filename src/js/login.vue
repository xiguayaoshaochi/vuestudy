<template>
  <div>
    <router-link to="/login/login1">login1</router-link>
    <router-link to="/login/login2">login2</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "haha",
    };
  },
  methods: {
    show() {
      console.log("jeje");
    },
  },
  components: {},
};
</script>


<style lang="scss" scoped>
/* 普通的style标签只支持普通的样式,如果想要启用scss或less,需要为stle元素设置lang属性 */
body {
  * {
    background-color: #a67e1c;
  }
}
</style>
