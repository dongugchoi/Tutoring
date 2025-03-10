<template>
  <div>
    <h2>상품 찾기</h2>
    <input v-model="searchName" placeholder="상품 이름을 입력하세요" />
    <button @click="findProduct">검색</button>

    <div v-if="foundProduct">
      <p>상품명: {{ foundProduct.name }}</p>
      <p>가격: {{ foundProduct.price }}원</p>
    </div>
    <p v-else-if="searchName">상품을 찾을 수 없습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '스마트폰', price: 800000 },
        { id: 3, name: '태블릿', price: 600000 }
      ],
      searchName: '',
      foundProduct: null
    };
  },
  methods: {
    findProduct() {
      this.foundProduct = this.products.find(
        (product) => product.name === this.searchName
      );
    }
  }
};
</script>

<style scoped>
input {
  margin-right: 8px;
}
</style>
