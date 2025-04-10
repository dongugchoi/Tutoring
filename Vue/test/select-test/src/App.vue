<template>
  <div class="custom-select">
    <select v-model="selectedOption">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        '짧은 옵션',
        '긴옵션선택테스트긴옵션선택테스트긴옵션선택테스트긴옵션선택테스트',
        '또 다른 긴 옵션 텍스트입니다',
      ],
      selectedOption: '',
    };
  },
};
</script>

<style scoped>
select {
  width: 250px;
  padding: 8px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

option {
  white-space: nowrap; 
}
</style>
