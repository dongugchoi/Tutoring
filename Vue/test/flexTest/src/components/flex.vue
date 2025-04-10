<template>
    <div>
      <h3> 컨테이너 크기 조절하며 Grow & Shrink 확인</h3>
  

      <div class="container" :style="{ width: containerWidth + 'px' }">
        <div
          class="box"
          :style="{
            flexBasis: basis1 + 'px',
            flexGrow: grow1,
            flexShrink: shrink1,
            background: 'skyblue',
          }"
        >
          Box 1 (basis: {{ basis1 }}, grow: {{ grow1 }}, shrink: {{ shrink1 }})
        </div>
        <div
          class="box"
          :style="{
            flexBasis: basis2 + 'px',
            flexGrow: grow2,
            flexShrink: shrink2,
            background: 'tomato',
          }"
        >
          Box 2 (basis: {{ basis2 }}, grow: {{ grow2 }}, shrink: {{ shrink2 }})
        </div>
      </div>
  
      <!-- 컨테이너 크기 조절 버튼 -->
      <div class="controls">
        <h4> 부모 컨테이너 크기 조절</h4>
        <button @click="containerWidth += 50">컨테이너+</button>
        <button @click="containerWidth -= 50">컨테이너-</button>
  
        <h4> Box 1 조절</h4>
        <button @click="grow1++">Grow+</button>
        <button @click="grow1 > 0 ? grow1-- : 0">Grow-</button>
        <button @click="shrink1++">Shrink+</button>
        <button @click="shrink1 > 0 ? shrink1-- : 0">Shrink-</button>
  
        <h4> Box 2 조절</h4>
        <button @click="grow2++">Grow+</button>
        <button @click="grow2 > 0 ? grow2-- : 0">Grow-</button>
        <button @click="shrink2++">Shrink+</button>
        <button @click="shrink2 > 0 ? shrink2-- : 0">Shrink-</button>
      </div>
  
        <div>
            <h1>flex-grow</h1>
            **flex-grow**는 부모 컨테이너에 여유 공간이 있을 때, 자식 요소가 얼마나 그 공간을 차지할지를 결정한다.
            값이 클수록 더 많은 공간을 차지하게 된다.
            기본값은 0, 즉 여유 공간을 차지하지 않음.
        </div>
        <br/>
        <div>
            <h1>flex-basis</h1>
            **flex-basis**는 각 요소의 기본 크기를 설정하는 속성이다.
            요소의 크기가 flex-grow와 flex-shrink의 계산을 위한 기준이 된다.
            기본값은 auto, 이 경우 콘텐츠 크기나 width, height에 따라 결정된다.
        </div>
        <br/>
        <div>
            <h1>flex-shrink</h1>
            **flex-shrink**는 부모 컨테이너의 크기가 부족할 때, 자식 요소가 얼마나 줄어들지 결정한다.
            값이 클수록 더 많이 줄어든다.
            기본값은 1, 즉 요소는 공간 부족 시 줄어들 수 있다.
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        containerWidth: 400, // 부모 컨테이너 초기 크기
        basis1: 200, // 기본 크기
        basis2: 200,
        grow1: 1, // grow 기본값
        grow2: 2, // grow가 크면 더 많이 늘어남
        shrink1: 1, // shrink 기본값
        shrink2: 5, // shrink가 크면 더 많이 줄어듦
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    border: 2px solid black;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
  }
  
  .box {
    color: white;
    text-align: center;
    line-height: 50px;
    border: 1px solid white;
  }
  
  .controls {
    margin-top: 10px;
  }
  button {
    margin: 5px;
    padding: 5px;
  }
  </style>
