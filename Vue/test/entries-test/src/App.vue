<template>
  <div id="app">
    <h1>Entries</h1>
    <ul>
      <li v-for="(entry, index) in entries" :key="index">{{ entry }}</li>
    </ul>

    <input v-model="newEntry" placeholder="Add new entry" />
    <button @click="addEntry">Add Entry</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: ['Entry 1', 'Entry 2', 'Entry 3'],
      newEntry: '',
    };
  },
  methods: {
    addEntry() {
      if (this.newEntry.trim()) {
        this.entries.push(this.newEntry.trim());
        this.newEntry = '';
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

input {
  margin: 10px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
