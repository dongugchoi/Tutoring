<template>
  <div>
    <categoryFilter />
    <searchFilter />
  </div>
</template>

<script>
import categoryFilter from './components/categoryFilter.vue';
import searchFilter from './components/searchFilter.vue';
export default {
  components:{
    categoryFilter,
    searchFilter
  },
};
</script>

<style scoped>
 div{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
</style>
