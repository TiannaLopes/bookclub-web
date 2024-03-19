<template>
  <div id="home">
    <div class="container my-5 py-5">
      <!-- Hero section -->
      <div class="row mb-5 justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="display-4 fw-bold hero-title" style="color: #3d0814">
            Welcome to Our Company
          </h2>
          <p class="lead text-secondary" style="color: #e7fa9a">
            This is a brief introduction or tagline for the company.
          </p>
        </div>
      </div>

      <!-- About Us section -->
      <div class="row mb-5 align-items-center" id="about">
        <div class="col-md-6">
          <h2 style="color: #c6b38e">About Us</h2>
          <p class="text-muted" style="color: #a6ad73">
            Information about the company, its history, mission, and values.
          </p>
            <button
            class="btn btn-dark"
            @click="navigateToAboutUs()"
            style="background-color: #442f38"
          >
            Read about us &rarr;
          </button>
        </div>
        <div class="col-md-6">
          <img
            class="image-size img-fluid"
            src="../assets/aboutUs.png"
            @click="navigateToAboutUs()"
            alt="About Us"
          />
        </div>
      </div>

      <!-- Our Apps section -->
      <div class="row mb-5 align-items-center" id="apps">
        <div class="col-md-6">
          <h2 style="color: #c6b38e">Our Apps</h2>
          <p class="text-muted" style="color: #a6ad73">
            Details about the apps offered by the company.
          </p>
           <button
            class="btn btn-dark"
            @click="navigateToOurApps()"
            style="background-color: #442f38"
          >
            See our apps &rarr;
          </button>
        </div>
        <div class="col-md-6">
          <img
            class="image-size img-fluid"
            src="../assets/ourApps.png"
            @click="navigateToOurApps()"
            alt="Our Apps"
          />
        </div>
      </div>

      <!-- Shop section -->
      <div class="row mb-5" id="shop">
        <div class="col-6">
          <h2 style="color: #c6b38e">Shop</h2>
          <p class="text-muted" style="color: #a6ad73">
            Shop the Met at Bookclub store.
          </p>
          <button
            class="btn btn-dark"
            @click="navigateToOurShop()"
            style="background-color: #442f38"
          >
            Shop &rarr;
          </button>
        </div>
          <div class="col-md-6">
          <img
            class="image-size img-fluid"
            src="../assets/shop.png"
            @click="navigateToOurShop()"
            alt="About Us"
          />
        </div>
      </div>

      <!-- Contact Us section -->
      <div class="row mb-5" id="contact">
        <div class="col-md-6">
          <h2 style="color: #c6b38e">Contact Us</h2>
           <button
            class="btn btn-dark"
            @click="navigateToContactUs()"
            style="background-color: #442f38"
          >
            Contact us &rarr;
          </button>
        </div>
        <div class="col-md-6">
          <img
            class="image-size img-fluid"
            src="../assets/contactUs.png"
            @click="navigateToContactUs()"
            alt="Contact Us"
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
  max-height: 350px;
  width: auto;
}
</style>
