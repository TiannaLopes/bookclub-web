import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VITE_PRINTFUL_API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.VITE_PRINTFUL_API_KEY}`,
  },
});

export default {
  // Fetch products from the store
  getProducts() {
    return apiClient.get('/store/products');
  },

  // Fetch detailed information about a specific product
  getProduct(productId) {
    return apiClient.get(`/store/products/${productId}`);
  },

  // Fetch orders
  getOrders() {
    return apiClient.get('/orders');
  },

  // Get details about a specific order
  getOrder(orderId) {
    return apiClient.get(`/orders/${orderId}`);
  },

  // Create a new order
  // Payload example: { recipient: { name, address, ... }, items: [{ id, quantity, ... }] }
  createOrder(payload) {
    return apiClient.post('/orders', payload);
  },

  // Update an existing order
  // Payload example: { recipient: { name, address, ... }, items: [{ id, quantity, ... }] }
  updateOrder(orderId, payload) {
    return apiClient.put(`/orders/${orderId}`, payload);
  },

  // Cancel an order
  cancelOrder(orderId) {
    return apiClient.delete(`/orders/${orderId}`);
  },

  // Fetch information about shipping rates
  // Payload example: { recipient: { country_code, state_code, city, zip }, items: [{ quantity, variant_id }] }
  getShippingRates(payload) {
    return apiClient.post('/shipping/rates', payload);
  },

  // Fetch product list
  getCatalogProducts() {
    return apiClient.get('/products');
  },

  // Fetch detailed information about a specific product in the catalog
  getCatalogProduct(productId) {
    return apiClient.get(`/products/${productId}`);
  },

  // Fetch available print files
  getPrintFiles() {
    return apiClient.get('/files');
  },

  // Upload a print file
  // Payload example: FormData object with file and additional information
  uploadPrintFile(payload) {
    return apiClient.post('/files', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
