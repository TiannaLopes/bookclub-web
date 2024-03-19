<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-for="item in cartItems" :key="item.id" class="cart-item mb-3">
      <div class="row">
        <div class="col-md-8">
          <p>{{ item.name }} - Qty: {{ item.quantity }} - Price: ${{ item.price.toFixed(2) }}</p>
        </div>
        <div class="col-md-4">
          <button @click="removeFromCart(item)" class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
    <!-- Total and Checkout logic would go here -->
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  data() {
    return {
      // This mock data simulates what you might have in a real cart
      cartItems: [
        { id: 1, name: 'T-Shirt', quantity: 2, price: 29.99 },
        { id: 2, name: 'Mug', quantity: 1, price: 15.99 },
        { id: 3, name: 'Notebook', quantity: 3, price: 7.99 },
      ],
    };
  },
  methods: {
    removeFromCart(item) {
      // Here you would implement logic to remove the item from cart
      console.log('Remove item:', item);
    },
  },
};
</script>

<style scoped>
.cart-item {
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
</style>
