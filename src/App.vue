<template>
  <div id="app">
    <MyDataTable />
  </div>
</template>

<script>
import MyDataTable from './components/MyDataTable.vue';

export default {
  name: 'App',
  components: {
    MyDataTable,
  },
};
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
