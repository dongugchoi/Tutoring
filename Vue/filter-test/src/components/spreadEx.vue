<template>
    <div>
      <h2>병합된 배열 출력</h2>
      <p>배열 1: {{ arr1 }}</p>
      <p>배열 2: {{ arr2 }}</p>
      <p>합쳐진 배열(arr3): {{ arr3 }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArraySpreadExample',
    data() {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
  
      return {
        arr1,
        arr2,
        arr3: [...arr1, ...arr2], 
      };
    },
  };
  </script>
  