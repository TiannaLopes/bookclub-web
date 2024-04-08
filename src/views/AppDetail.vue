<template>
  <div id="app-detail" class="container py-5 my-5">
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold">{{ app.name }}</h1>
      <img
        :src="require('@/assets/bookclub/icon.png')"
        alt="App image"
        class="mb-3"
      />
      <p class="lead">{{ app.description }}</p>
      <router-link to="/apps" class="btn btn-primary">Back to Apps</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppDetail',
  data() {
    return {
      app: {},
    };
  },
  mounted() {
    const appId = this.$route.query.appId;
    this.fetchAppDetails(appId);
  },
  methods: {
    fetchAppDetails(appId) {
      // Fetch the app details based on appId. Placeholder for fetching logic.
      // This is where you would fetch the app's data, perhaps from a store or an API.
      // For now, we'll just set a placeholder app object.
      this.app = {
        id: appId,
        name: 'Sample App',
        image: '@/assets/placeholder.png',
        description: 'This is a detailed description of the app.',
      };
    },
  },
};
</script>
