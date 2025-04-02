<template>
  <div>
    <h2>Promise.all 결과</h2>
    <div v-if="loading">로딩 중...</div>
    <div v-else>
      <p>결과 1: {{ results[0] }}</p>
      <p>결과 2: {{ results[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      loading: true,
    };
  },
  methods: {
    fetchData() {
      const fetchOne = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("데이터 A"), 1000);
        });
      };

      const fetchTwo = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("데이터 B"), 1500);
        });
      };

      Promise.all([fetchOne(), fetchTwo()])
        .then((res) => {
          this.results = res;
        })
        .catch((error) => {
          console.error("에러 발생:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
