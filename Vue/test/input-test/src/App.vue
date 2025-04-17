<template>
  <div id="app">
    <input
      type="text"
      :value="message"
      @input="message = $event.target.value"
    />
    <p>입력된 메시지: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: ''
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 2rem;
}
input {
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
