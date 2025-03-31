<template>
  <div>
    <categoryFilter />
    <searchFilter />
    <ListRendererComparison />
  </div>
</template>

<script>
import categoryFilter from './components/categoryFilter.vue';
import searchFilter from './components/searchFilter.vue';
import ListRendererComparison from './components/ListRendererComparison.vue';

export default {

  components:{
    categoryFilter,
    searchFilter,
    ListRendererComparison
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
