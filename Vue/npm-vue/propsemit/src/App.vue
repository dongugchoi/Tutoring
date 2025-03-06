<!--UI-->
<template>
  <Menu :menu="menu"/>
  <nav>
    <ul>
      <Product v-for="product,i in products" :key="i" v-bind:product="product"/>
    </ul>
  </nav>
</template>

<!--Script-->
<script>
import Menu from './components/Menu.vue';
import Product from './components/Product.vue';

export default {
  name : 'App',
  data (){
    return {
      menu : ['HOME','ABOUT' ,'PRODUCTS', 'ETC'],
      products : [
        {id : '0', title : 'Sample Product1', price : 10000, img : 'https://dummyimage.com/200/F6A9A9/464660'},
        {id : '1', title : 'Sample Product2', price : 50000, img : 'https://dummyimage.com/200/FFBF86/464660'},
        {id : '2', title : 'Sample Product3', price : 30000, img : 'https://dummyimage.com/200/FFF47D/464660'},
        {id : '3', title : 'Sample Product5', price : 70000, img : 'https://dummyimage.com/200/C2F784/464660'},
      ]
    }
  },
  components : {
    //ES6 부터 key, value의 변수명이 같을때 생략이 가능하다
    //Menu : Menu
    Menu,Product
  }
}
</script>

<!--CSS-->
<style>

</style>