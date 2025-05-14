<template>
  <div id="app">
    <h2>날짜 포맷 예제</h2>
    <p>원본 날짜: {{ rawDate }}</p>
    <p>포맷된 날짜: {{ formatDate(rawDate) }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'App',
  data() {
    return {
      rawDate: '2025-05-14T10:30:00Z'
    }
  },
  methods: {
    formatDate(date, format = 'YYYY-MM-DD HH:mm') {
      return moment(date).format(format)
    }
  }
}
</script>

<style>
/* 스타일은 필요에 따라 */
</style>
