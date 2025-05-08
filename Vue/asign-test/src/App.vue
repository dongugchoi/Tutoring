<template>
  <div>
    <p>이름: {{ user.name }}</p>
    <p>나이: {{ user.age }}</p>
    <p v-if="user.city">도시 :{{user.city }}</p>
    <button @click="updateUser">유저 정보 업데이트</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '홍길동',
        age: 25
      },
      newUserData: {
        age: 30,
        city: 'Seoul'
      }
    };
  },
  methods: {
    updateUser() {
      // 기존 user 객체를 변경
      Object.assign(this.user, this.newUserData);
    }
  }
};
</script>
