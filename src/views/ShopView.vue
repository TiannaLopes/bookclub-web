<template>
  <div>
    <div>Shopping page...</div>
    <ProductsComponent />
  </div>
</template>
<script>
import ProductsComponent from '@/components/shop/ProductsComponent.vue';
export default {
  name: 'ShopView',
  components: { ProductsComponent },
};
</script>

<style scoped></style>
