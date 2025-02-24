<template>
  <ol>
    <li v-for="j in list1" :key="j">{{ j }}</li>
    <button @click="addItem">새 항목 추가</button>
    <button v-on:click="handleclick">click</button>
    <p>{{ message }}</p>
    <input v-model="message"/>
  </ol>
  
</template>

<script>
export default {
  data() {
    return {
      message:'초기 메시지',
      list: ['사과', '딸기', '바나나'],
      list1: ['사과', '포도', '얍']
    };
  },
  methods: {
    addItem() {
      this.list.push('포도');  // '포도'라는 항목을 추가
    },

    handleclick() {
      alert('button clicked');
    }
  }
};
</script>
