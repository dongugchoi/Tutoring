<template>
    <div class="container">
      <div v-for="(item, index) in items" :key="index" class="item">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: this.generateItems()
      };
    },
    methods: {
      generateItems() {
        let items = [];
        for (let i = 1; i <= 30; i++) {
          items.push(`Item ${i}`);
        }
        return items;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    overflow-y: auto;
  }
  
  .item {
    flex: 0 0 30%;
    background: lightblue;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
  }
  </style>