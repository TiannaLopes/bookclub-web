<template>
  <div class="products">
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    async  fetchProducts() {
    try {
      const response = await PrintfulService.getProducts();
      this.products = response.data;
    } catch (error) {
      console.error("There was an issue fetching the products:", error);
    }
    },
    addToCart(product) {
      // Logic to add product to cart
      console.log(product);
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

