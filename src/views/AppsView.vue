<template>
  <div id="apps-view" class="container py-5 my-5">
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: #3D0814;">Our Apps</h1>
      <p class="lead" style="color: #A6AD73;">Dedicated to excellence and innovation in our field.</p>
    </section>  
      <div class="row">
      <div class="col-md-4 mb-4" v-for="app in apps" :key="app.id">
        <div class="card h-100">
          <img :src="app.image" class="card-img-top" :alt="app.name" />
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
      apps: [
        { id: 1, name: 'App One', image: '@/assets/placeholder.png', description: 'An innovative solution to problem X.' },
        { id: 2, name: 'App Two', image: '@/assets/placeholder.png', description: 'A tool for managing Y with ease.' },
        { id: 3, name: 'App Three', image: '@/assets/placeholder.png', description: 'Streamlining Z for better efficiency.' },
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
