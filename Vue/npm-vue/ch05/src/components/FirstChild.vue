<template>
    <h1>컴포넌트</h1>
    <p>내가 만든 첫 번째 컴포넌트</p>
    <h1>{{ num }}</h1>
</template>

<script>
export default {
    data(){
        return{
            num : 5,
        }
    },

    computed:{
        doubleNum(){
            return this.num * 2
        }
    },

    methods:{
        increment(){
            this.num++
        },
    },

    beforeUnmount(){
        console.log('beforeUnmount');
    },

    unmounted(){
        console.log('unmounted');
    }

}
</script>

<style>
    h1{
        color: blue;
    }

    p{
        color: orange;
    }
</style>

