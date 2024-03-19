<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-tan">
    <div class="container">
      <router-link class="navbar-brand p-0" to="/">Met At Bookclub</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name === 'Home' }"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name === 'About' }"
              to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name === 'Apps' }"
              to="/apps"
              >Apps</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name === 'Shop' }"
              to="/shop"
              >Shop</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: $route.name === 'Contact' }"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderView',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.bg-tan {
  background-color: #c6b38eff;
}
.navbar-brand {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2rem;
  color: #442f38;
}
</style>
