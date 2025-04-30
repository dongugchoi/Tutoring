<template>
  <div id="app">
    <h1>다이얼로그 레이아웃 예제</h1>

    <button @click="openDialog('dialog1')"> 다이얼로그 1 열기</button>
    <button @click="openDialog('dialog2')"> 다이얼로그 2 열기</button>
    <button @click="openDialog('dialog3')"> 다이얼로그 3 열기</button>

    <div v-if="currentDialog === 'dialog1'" class="dialog">
      <div class="dialog-content">
        <h2>다이얼로그 1</h2>
        <p>이건 첫 번째 다이얼로그입니다.</p>
        <button @click="closeDialog">닫기</button>
      </div>
    </div>

    <div v-if="currentDialog === 'dialog2'" class="dialog">
      <div class="dialog-content">
        <h2>다이얼로그 2</h2>
        <p>두 번째 다이얼로그입니다.</p>
        <button @click="closeDialog">닫기</button>
      </div>
    </div>

    <div v-if="currentDialog === 'dialog3'" class="dialog">
      <div class="dialog-content">
        <h2>다이얼로그 3</h2>
        <p>세 번째 다이얼로그입니다.</p>
        <button @click="closeDialog">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentDialog: null 
    };
  },
  methods: {
    openDialog(id) {
      this.currentDialog = id;
    },
    closeDialog() {
      this.currentDialog = null;
    }
  }
};
</script>

<style scoped>
button {
  margin: 1rem 1rem 1rem 0;
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
</style>
