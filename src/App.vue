<template>
  <div id="app">
    <img width=500px src=https://4.bp.blogspot.com/-3C4IvuQmu2U/VuKDqFcyugI/AAAAAAAA4vE/wxHz-wwYzmAn4j91H3c-PO8ZLgb2olsGA/s800/building_food_pizza.png />
    <h1>Welcome to AIIT pizza house</h1>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/orders">Order List</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
