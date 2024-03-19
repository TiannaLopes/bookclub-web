<template>
  <div id="shop-view" class="container py-5 my-5">
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: #3d0814">Our Store</h1>
    </section>
    <ProductsComponent />
    <CartComponent />
  </div>
</template>

<script>
import CartComponent from '@/components/shop/CartComponent.vue';
import ProductsComponent from '@/components/shop/ProductsComponent.vue';

export default {
  name: 'ShopView',
  components: {
    ProductsComponent,
    CartComponent,
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
