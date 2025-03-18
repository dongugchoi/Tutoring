<template>
    <div class="container">
      <div class="box red">박스 1</div>
      <div class="box blue">박스 2</div>
      <div class="box green">박스 3</div>
      <div class="box purple">박스 4</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style scoped>
  
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 2px solid black;
  }
  
  
  .box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-bottom: 2px solid black;
  }
  
  .box:last-child {
    border-bottom: none;
  }
  
  .red {
    background-color: red;
  }
  
  .blue {
    background-color: blue;
  }
  
  .green {
    background-color: green;
  }
  
  .purple {
    background-color: purple;
  }
  </style>
  