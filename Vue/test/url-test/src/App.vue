<template>
  <div class="app">
    <h1>이미지 미리보기 예제</h1>
    <input type="file" @change="onFileChange" accept="image/*" />
    <div v-if="previewUrl">
      <p>미리보기:</p>
      <img :src="previewUrl" alt="preview" style="max-width: 300px;" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewUrl: null,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      // 이전 URL 제거
      if (this.previewUrl) {
        URL.revokeObjectURL(this.previewUrl);
      }

      // 새로운 URL 생성
      this.previewUrl = URL.createObjectURL(file);
    },
  },
  beforeUnmount() {
    // 컴포넌트가 파괴될 때 URL 해제
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
    }
  },
};
</script>

<style scoped>
.app {
  padding: 20px;
  font-family: sans-serif;
}
</style>
