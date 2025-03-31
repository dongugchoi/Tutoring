<template>
    <div>
      <h2>map을 사용한 리스트</h2>
      <ul>
        <li v-for="item in mappedItems" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, text: '사과' },
          { id: 2, text: '바나나' },
          { id: 3, text: '포도' }
        ]
      }
    },
    computed: {
      mappedItems() {
        return this.items.map(item => ({
          ...item,
          text: item.text + ' 🍓'
        }))
      }
    }
  }
  </script>
  