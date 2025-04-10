<template>
    <div>
      <ListWithMap />
      <ListWithForEach />
    </div>
  </template>
  
  <script>
  import ListWithMap from './ListWithMap.vue'
  import ListWithForEach from './ListWithForEach.vue'
  
  export default {
    name: 'ListRendererComparison',
    components: {
      ListWithMap,
      ListWithForEach
    }
  }
  </script>
  