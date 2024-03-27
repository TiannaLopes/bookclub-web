<template>
  <div id="apps-view" class="container py-5 my-5">
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: #3d0814">Our Apps</h1>
      <p class="lead" style="color: #a6ad73">
        Dedicated to excellence and innovation in our field.
      </p>
    </section>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="app in apps" :key="app.id">
        <div class="card h-100">
          <!-- Using the first screenshot as the app image -->
          <img :src="app.screenshots[0]" class="card-img-top" :alt="app.name" />
          <div class="card-body">
            <h5 class="card-title">{{ app.name }}</h5>
            <p class="card-text">{{ app.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsView',
  data() {
    return {
      // Sample data for BookClub Web application
      apps: [
        {
          id: 1,
          name: 'BookClub Web',
          description:
            'BookClub Web is an online platform that connects book lovers across the globe. Participate in book discussions, join book clubs tailored to your interests, and discover your next great read.',
          screenshots: [
            'https://www.bookclub-web.com/screenshot1.jpg', // Placeholder image URL
            // Additional screenshots can be added here
          ],
          // Other data from your JSON structure can be added here as needed
        },
        // Add other applications here following the same structure
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
#apps-view .card {
  transition: transform 0.2s ease-in-out;
}
#apps-view .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
