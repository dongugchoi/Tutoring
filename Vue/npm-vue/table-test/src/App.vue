<template>
  <div class="container">
      <table class="table" border="1" >
        <thead>
           <tr>
            <td>1열</td>
            <td>2열</td>
            <td>3열</td>
           </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-1</td>
            <td>1-2</td>
            <td>1-3</td>
          </tr>
          <tr>
            <td>2-1</td>
            <td>2-2</td>
            <td>2-3</td>
          </tr>
          <tr>
            <td>3-1</td>
            <td>3-2</td>
            <td>3-3</td>
          </tr>
          <tr>
            <td>4-1</td>
            <td>4-2</td>
            <td>4-3</td>
          </tr>
          <tr>
            <td>5-1</td>
            <td>5-2</td>
            <td>5-3</td>
          </tr>
          <tr>
            <td>6-1</td>
            <td>6-2</td>
            <td>6-3</td>
          </tr>
          <tr>
            <td>7-1</td>
            <td>7-2</td>
            <td>7-3</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.container {
  height: 100vh;
  widows: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.table {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 300px;
  border-collapse: collapse;
  
}

tbody{
  overflow-y: scroll;
}

thead {
  position: sticky;
  top: 0;
  background: #fff;
  margin-right: 18px;
  
}

td {
  text-align: center;
  height: 50px;
  width:100px;
}
</style>
