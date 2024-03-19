<template>
  <div id="home">
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col text-center">
          <h2 class="display-4 fw-bold hero-title">Welcome to Our Company</h2>
          <p class="lead">
            This is a brief introduction or tagline for the company.
          </p>
        </div>
      </div>

      <div class="row mb-5" id="about">
        <div class="col">
          <h2>About Us</h2>
          <p>
            Information about the company, its history, mission, and values.
          </p>
          <img
            class="image-size"
            src="../assets/aboutUs.png"
            @click="navigateToAboutUs()"
          />
        </div>
      </div>

      <div class="row mb-5" id="apps">
        <div class="col">
          <h2>Our Apps</h2>
          <p>Details about the apps offered by the company.</p>
          <img
            class="image-size"
            src="../assets/ourApps.png"
            @click="navigateToOurApps()"
          />
        </div>
      </div>

      <div class="row mb-5" id="apps">
        <div class="col">
          <h2>Shop</h2>
          <p>Shop the Met at Bookclub store</p>
          <button @click="navigateToOurShop()">Shop &rarr;</button>
        </div>
      </div>

      <div class="row mb-5" id="contact">
        <div class="col">
          <h2>Contact Us</h2>
          <img
            class="image-size"
            src="../assets/contactUs.png"
            @click="navigateToContactUs()"
          />
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
  height: 350px;
}
</style>
