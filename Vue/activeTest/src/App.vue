<template>
  <div>
    <button 
      v-for="(button, idx) in buttons" 
      :key="button.no" 
      :class="{ active: activeNo === button.no }" 
      @click="activeNo = activeNo === button.no ? null : button.no"
    >
      {{ activeNo === button.no ? `버튼 ${button.no + 1} ON` : `버튼 ${button.no + 1} OFF` }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { no: 0 },
        { no: 1 }
      ],
      activeNo: null
    };
  }
};
</script>

<style>
button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.active {
  background-color: #4CAF50;
  color: white;
}
</style>
