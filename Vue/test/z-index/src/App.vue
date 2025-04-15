<template>
  <div id="app">
    <div class="box box-red">Red Box (z-index: 1)</div>
    <div class="box box-blue">Blue Box (z-index: 10)</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  position: relative;
  height: 300px;
  background-color: #f0f0f0;
  overflow: hidden;
}

.box {
  position: absolute;
  width: 200px;
  height: 200px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
}

.box-red {
  background-color: red;
  top: 50px;
  left: 50px;
  z-index: 1;
}

.box-blue {
  background-color: blue;
  top: 100px;
  left: 100px;
  z-index: 10;
}
</style>
