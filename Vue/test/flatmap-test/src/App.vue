<template>
  <div id="app">
    <h2>map 결과</h2>
    <div v-for="(group, index) in mapped" :key="'map-' + index">
      <p>{{ group }}</p>
    </div>

    <h2>flatMap 결과</h2>
    <div v-for="(item, index) in flatMapped" :key="'flat-' + index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      categories: [
        { name: "Fruit", items: ["Apple", "Banana"] },
        { name: "Vegetable", items: ["Carrot", "Potato"] }
      ]
    };
  },
  computed: {
    mapped() {
      // map을 사용하면 중첩 배열이 됨
      return this.categories.map(c => c.items);
    },
    flatMapped() {
      // flatMap을 사용하면 1차원 배열이 됨
      return this.categories.flatMap(c => c.items);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 20px;
}
h2 {
  margin-top: 20px;
  color: #42b983;
}
</style>
