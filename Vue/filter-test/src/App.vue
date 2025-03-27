<template>
  <div class="custom-select">
    <select v-model="selectedCategory">
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <p>선택된 카테고리: {{ selectedCategory }}</p>

    <ul>
      <li v-for="item in filteredItems()" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      categories: ['전체', '채소', '과일', '곡물'],
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
  methods: {
    filteredItems() {
      if (this.selectedCategory === '' || this.selectedCategory === '전체') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedCategory);
    }
  }
};
</script>

<style scoped>
select {
  width: 250px;
  padding: 8px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

option {
  white-space: nowrap;
}
</style>
