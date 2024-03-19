<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import PrintfulService from '@/services/printfulService';

export default {
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    try {
      const response = await PrintfulService.getProducts();
      this.products = response.data;
    } catch (error) {
      console.error("There was an issue fetching the products:", error);
    }
  }
};
</script>
