<template>
  <div id="home">
    <div class="container my-5 py-5">
      <!-- Hero section -->
      <div class="row mb-5 justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="display-4 fw-bold hero-title" style="color: #3D0814;">Welcome to Our Company</h2>
          <p class="lead text-secondary" style="color: #E7FA9A;">
            This is a brief introduction or tagline for the company.
          </p>
        </div>
      </div>

      <!-- About Us section -->
      <div class="row mb-5 align-items-center" id="about">
        <div class="col-md-6">
          <h2 style="color: #C6B38E;">About Us</h2>
          <p class="text-muted" style="color: #A6AD73;">
            Information about the company, its history, mission, and values.
          </p>
        </div>
        <div class="col-md-6">
          <img class="image-size img-fluid" src="../assets/aboutUs.png" @click="navigateToAboutUs()" alt="About Us" />
        </div>
      </div>

      <!-- Our Apps section -->
      <div class="row mb-5 align-items-center" id="apps">
        <div class="col-md-6">
          <h2 style="color: #C6B38E;">Our Apps</h2>
          <p class="text-muted" style="color: #A6AD73;">
            Details about the apps offered by the company.
          </p>
        </div>
        <div class="col-md-6">
          <img class="image-size img-fluid" src="../assets/ourApps.png" @click="navigateToOurApps()" alt="Our Apps" />
        </div>
      </div>

      <!-- Shop section -->
      <div class="row mb-5" id="shop">
        <div class="col text-center">
          <h2 style="color: #C6B38E;">Shop</h2>
          <p class="text-muted" style="color: #A6AD73;">
            Shop the Met at Bookclub store.
          </p>
          <button class="btn btn-dark" @click="navigateToOurShop()" style="background-color: #442F38;">Shop &rarr;</button>
        </div>
      </div>

      <!-- Contact Us section -->
      <div class="row mb-5" id="contact">
        <div class="col-md-6">
          <h2 style="color: #C6B38E;">Contact Us</h2>
        </div>
        <div class="col-md-6">
          <img class="image-size img-fluid" src="../assets/contactUs.png" @click="navigateToContactUs()" alt="Contact Us" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    navigateToAboutUs() {
      this.$router.push({ name: 'About' });
    },
    navigateToContactUs() {
      this.$router.push({ name: 'Contact' });
    },
    navigateToOurApps() {
      this.$router.push({ name: 'Apps' });
    },
    navigateToOurShop() {
      this.$router.push({ name: 'Shop' });
    },
  },
};
</script>

<style scoped>
.image-size {
  max-height: 350px;
  width: auto;
}
</style>
