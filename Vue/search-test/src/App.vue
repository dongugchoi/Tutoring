<template>
  <div id="app">
    <input :value="searchQuery" @input="handleInput" type="text" placeholder="검색어를 입력하세요" />
    <ul>
      <li v-for="item in filteredItems" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', 
      items: ['사과', '배', '오렌지', '포도', '망고', '키위'], 
      filteredItems: [], 
    };
  },
  methods: {
    // input 이벤트 핸들러
    handleInput(event) {
      this.searchQuery = event.target.value;
      this.filterItems(); 
    },
    
    // 검색어에 맞는 항목만 필터링
    filterItems() {
      this.filteredItems = this.items.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  mounted() {
    // 컴포넌트 생성 시 초기 필터링 실행
    this.filterItems();
  }
};
</script>

<style scoped>

</style>
