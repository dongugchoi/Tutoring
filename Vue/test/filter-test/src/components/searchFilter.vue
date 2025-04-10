<template>
    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="농작물 이름을 입력하세요"
        @input="searchQuery = $event.target.value"
      />
  
      <p>검색어: {{ searchQuery }}</p>
  
      <ul>
        <li v-for="item in filteredItems" :key="item.name">
          {{ item.name }} ({{ item.category }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        items: [
          { name: '당근', category: '채소' },
          { name: '사과', category: '과일' },
          { name: '바나나', category: '과일' },
          { name: '쌀', category: '곡물' },
          { name: '브로콜리', category: '채소' },
          { name: '감자', category: '채소' },
          { name: '귀리', category: '곡물' },
          { name: '오렌지', category: '과일' },
          { name: '토마토', category: '채소' },
          { name: '밀', category: '곡물' }
        ]
      };
    },
    computed: {
      filteredItems() {
        if (!this.searchQuery) return this.items;
        return this.items.filter(item =>
          item.name.includes(this.searchQuery)
        );
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    width: 250px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  </style>
  