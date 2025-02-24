<template>
  <div>
    <div>
        <h1>Style css</h1>
        <h3 style="color: red; font-style: italic;">Inline Style</h3>
    </div>
    <div>
        <h1>v-bind 디렉티브와 css 사용</h1>
        <h3 :style="{color: primaryColor, fontStyle: primaryStyle}">Inline Style</h3>
    </div>
    <div>
        <h1>내부 스타일</h1>
        <h4>Internal Style</h4>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            primaryColor: "red",
            primaryStyle: "italic"
        }
    }
}
</script>

<style>
    h4{
        color: red;
        font-style: italic;
    }
</style>