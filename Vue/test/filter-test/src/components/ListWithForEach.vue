<template>
    <div>
      <h2>forEach를 사용한 리스트 (비추천)</h2>
      <ul>
        <li v-for="item in processedItems" :key="item.id">
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
      processedItems() {
        const result = []
        this.items.forEach(item => {
          result.push({
            ...item,
            text: item.text + ' 🍌'
          })
        })
        return result
      }
    }
  }
  </script>
  