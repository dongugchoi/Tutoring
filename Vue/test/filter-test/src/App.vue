<template>
  <div>
    <categoryFilter />
    <searchFilter />
    <ListRendererComparison />
    <spreadEx />
    <promiseEx />
  </div>
</template>

<script>
import categoryFilter from './components/categoryFilter.vue';
import searchFilter from './components/searchFilter.vue';
import ListRendererComparison from './components/ListRendererComparison.vue';
import spreadEx from './components/spreadEx.vue';
import promiseEx from './components/promiseEx.vue';

export default {

  components:{
    categoryFilter,
    searchFilter,
    ListRendererComparison,
    spreadEx,
    promiseEx
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
