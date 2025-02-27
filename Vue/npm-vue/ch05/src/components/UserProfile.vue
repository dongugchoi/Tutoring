<template>
    <!-- <p>이름: {{ name }}</p>
    <p>나이 : {{ age }}</p> -->
    <!-- 자식컴포넌트에서 전달하는 인자 -->
    <!-- <button @click="$emit('print-hello', '철수', 30)">클릭</button> -->
    <!-- 객체전달방식 -->
    <!-- <button @click="parentEventCall">클릭</button> -->
    <button @click="$emit('print-hello', {name : '철수', age : 30})">클릭</button>
</template>

<script>
export default {
    // props:['name','age'], //사용자 정의 속성인 name, age의 값을 받음
    // 전달된 속성 값이 지정된 자료형이 아니면 콘솔에 경고메시지를 표시해 사용자에게 알려줌
    // props:{
    //     name:String,
    //     age:[String, Number]
    // },

    // props:{
    //     name:{
    //         type:String,
    //         required:true,
    //         validator(value){
    //             if(value.length<2){
    //                 return false
    //             }
    //             return true
    //         }
    //     },
    //     age:{
    //         type:Number,
    //         default : function(){
    //             return 10;
    //         }
    //     }
    // },
    emits:['print-hello'],
    // print-hello 이벤트만 명시했는데 onPrint-hello를 전달시 경고발생
    methods:{
        parentEventCall(){
            // this.$emit('onPrint-hello')
            this.$emit('print-hello', '철수', 30)
        }
    },

    created(){
        console.log(typeof(this.age)) //String
    }
}
</script>

<style scoped>

</style>