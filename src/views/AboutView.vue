<template>
  <div id="about-us" class="container py-5 my-5">
    <!-- About Section -->
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color: #3D0814;">About Our Company</h1>
      <p class="lead" style="color: #A6AD73;">Dedicated to excellence and innovation in our field.</p>
    </section>

    <!-- Our Mission -->
    <section class="row mb-5">
      <div class="col-lg-6 mb-3">
        <img src="../assets/aboutUs.png" class="img-fluid rounded" alt="Our Mission" />
      </div>
      <div class="col-lg-6">
        <h2 style="color: #C6B38E;">Our Mission</h2>
        <p style="color: #A6AD73;">
          Our mission is to deliver top-notch solutions to our clients while fostering a culture of innovation and continuous improvement. We believe in creating value through excellence and dedication in all our endeavors.
        </p>
      </div>
    </section>

    <!-- Our Vision -->
    <section class="row mb-5">
      <div class="col-lg-6">
        <h2 style="color: #C6B38E;">Our Vision</h2>
        <p style="color: #A6AD73;">
          We aspire to be the industry leaders by setting standards that others aim to reach. Our vision is to empower businesses worldwide with cutting-edge services that drive growth and success.
        </p>
      </div>
      <div class="col-lg-6 mb-3">
        <img src="../assets/aboutUs.png" class="img-fluid rounded" alt="Our Vision" />
      </div>
    </section>

    <!-- Our Values -->
    <section class="mb-5">
      <h2 class="text-center mb-4" style="color: #C6B38E;">Our Core Values</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <h3 style="color: #442F38;">Integrity</h3>
          <p style="color: #A6AD73;">
            We conduct our business with the highest ethical standards and believe in creating honest relationships with our clients.
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <h3 style="color: #442F38;">Innovation</h3>
          <p style="color: #A6AD73;">
            Creativity and innovation are at the heart of our business. We continually push the boundaries to achieve excellence.
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <h3 style="color: #442F38;">Quality</h3>
          <p style="color: #A6AD73;">
            Quality is non-negotiable. We are committed to delivering the highest quality in everything we do.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="mb-5">
      <h2 class="text-center mb-4" style="color: #C6B38E;">Meet Our Team</h2>
      <div class="row">
        <!-- Team Member Card -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="../assets/aboutUs.png" class="card-img-top" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title" style="color: #442F38;">Jane Doe</h5>
              <p class="card-text" style="color: #A6AD73;">CEO & Founder</p>
            </div>
          </div>
        </div>
        <!-- Team Member Card -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="../assets/aboutUs.png" class="card-img-top" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title" style="color: #442F38;">John Smith</h5>
              <p class="card-text" style="color: #A6AD73;">CTO</p>
            </div>
          </div>
        </div>
        <!-- Team Member Card -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="../assets/aboutUs.png" class="card-img-top" alt="Team Member">
            <div class="card-body">
              <h5 class="card-title" style="color: #442F38;">Emily Johnson</h5>
              <p class="card-text" style="color: #A6AD73;">CFO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {},
};
</script>

<style scoped>
#about-us img {
  border-color: #C6B38E;
}

#about-us .card {
  background-color: #E7FA9A;
  border: none;
}

#about-us .card-body {
  color: #442F38;
}
</style>
