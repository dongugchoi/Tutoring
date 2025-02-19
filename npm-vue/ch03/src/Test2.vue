<template>
    <div>
        <h1>계산된 속성 : computed</h1>
        <h3>{{ lastName }} {{ firstName }}</h3>
        <h3>{{ lastName }} {{ firstName }}</h3>
        <h1>{{ fullName }}</h1>

        <h1>{{ evenSum }}</h1>

        <h1>감시자 속성 : watch</h1>
        <input type="text" v-model="inputStr"/>
        <!-- null에서 0이 할당되는 순간 감지하지 못한다. -->
        <input type="text" v-model="num" />
    </div>
</template>

<script>
import { watch } from 'vue';

export default {
    data(){
        return{ 
            firstName : "Gildong",
            lastName : "Hong",
            numArr : [1,2,3,4,5],
            inputStr : '',
            num : 0,
        }
    },

    // 값이 변경되기 전까지 computed 옵션 속성에 의해 캐싱된다.
    computed:{
        fullName(){
            return this.lastName + " " + this.firstName;
        },

        evenSum(){
            return this.numArr
                .filter((v) => v % 2 === 0)
                .reduce((acc, cur) => acc + cur, 0);
        }
    },

    watch:{
            inputStr(newValue, oldValue){
                console.log(`old value: ${oldValue}`);
                console.log(`new value: ${newValue}`);
            },

            num(newValue, oldValue){
                console.log(`old value: ${oldValue}`);
                console.log(`new value: ${newValue}`);
            }
        }
}
</script>

<style>

</style>