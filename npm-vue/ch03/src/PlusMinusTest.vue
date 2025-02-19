<template>
  <div>
    <div>{{ num }}</div>
    <button @click="plusBtn">증가</button>
    <button @click="minusBtn">감소</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num : 0,
        }
    },

    methods:{
      plusBtn(){
        if(this.num < 10){
            this.num++
        }
      },
      
      minusBtn(){
        if(this.num > 0){
            this.num--
        }
      }
    }
}
</script>

<style>

</style>