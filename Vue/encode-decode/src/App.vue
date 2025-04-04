<template>
  <div class="p-4">
    <input
      v-model="inputText"
      placeholder="텍스트를 입력하세요"
      class="border p-2 mb-2 w-full"
    />

    <button @click="encodeText" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">
      인코딩
    </button>
    <button @click="decodeText" class="bg-green-500 text-white px-4 py-2 rounded">
      디코딩
    </button>

    <div class="mt-4">
      <p><strong>인코딩 결과:</strong> {{ encoded }}</p>
      <p><strong>디코딩 결과:</strong> {{ decoded }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      encoded: '',
      decoded: '',
    }
  },
  methods: {
    encodeText() {
      try {
        this.encoded = btoa(this.inputText)
      } catch (e) {
        this.encoded = '인코딩 실패: 유효하지 않은 입력입니다.'
      }
    },
    decodeText() {
      try {
        this.decoded = atob(this.encoded)
      } catch (e) {
        this.decoded = '디코딩 실패: 유효한 Base64 문자열이 아닙니다.'
      }
    },
  },
}
</script>

<style scoped>
input {
  font-size: 1rem;
}
</style>
