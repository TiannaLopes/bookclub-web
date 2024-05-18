<template>
  <div id="app-detail" class="container py-5">
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold">{{ app?.name }}</h1>
      <img
        :src="require('@/assets/bookclub/icon.png')"
        alt="App image"
        class="img-thumbnail mb-3 mx-auto d-block"
        style="width: 200px"
      />
      <p class="lead">{{ app?.description }}</p>
      <a
        :href="app?.availability?.webUrl"
        target="_blank"
        class="btn btn-secondary my-2"
        >Visit Website</a
      >
      <div v-if="app?.name === 'Met At Bookclub'">
        <router-link to="/privacy-policy" class="btn btn-outline-primary my-2"
          >View Privacy Policy</router-link
        >
      </div>
    </section>
    <section class="features mt-5">
      <h2 class="fw-bold text-center mb-4">Features</h2>
      <ul class="list-group list-group-flush">
        <li
          v-for="feature in app?.features"
          :key="feature"
          class="list-group-item"
        >
          {{ feature }}
        </li>
      </ul>
    </section>
    <section class="screenshots mt-5">
      <h2 class="fw-bold text-center mb-4">Screenshots</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="screenshot in app?.screenshots"
          :key="screenshot"
        >
          <img
            :src="screenshot"
            :alt="`Screenshot of ${app?.name}`"
            class="img-fluid mb-3"
          />
        </div>
      </div>
    </section>
    <section class="reviews mt-5">
      <h2 class="fw-bold text-center mb-4">Reviews</h2>
      <p class="text-center">
        <strong>Average Rating:</strong> {{ app?.reviews?.averageRating }} ({{
          app?.reviews?.totalReviews
        }}
        reviews)
      </p>
      <div class="text-center">
        <strong>Featured Review:</strong>
        <blockquote class="blockquote">
          <p class="mb-0">{{ app?.reviews?.highlightedReview?.comment }}</p>
          <footer class="blockquote-footer mt-2">
            {{ app?.reviews?.highlightedReview?.author }}
          </footer>
        </blockquote>
      </div>
    </section>
    <section class="social-media mt-5">
      <h2 class="fw-bold text-center mb-4">Follow Us</h2>
      <div class="text-center">
        <p v-for="media in app?.socialMedia" :key="media.platform">
          <a
            :href="media?.link"
            target="_blank"
            class="btn btn-outline-dark btn-sm mx-1"
            >{{ media?.platform }}</a
          >
        </p>
      </div>
    </section>
    <section class="contact mt-5">
      <h2 class="fw-bold text-center mb-4">Contact</h2>
      <div class="text-center">
        <p>
          Email:
          <a :href="`mailto:${app?.contact?.supportEmail}`">{{
            app?.contact?.supportEmail
          }}</a>
        </p>
        <p>Phone: {{ app?.contact?.phone }}</p>
      </div>
    </section>
    <div>
      <router-link to="/apps" class="btn btn-primary mt-3"
        >Back to Apps</router-link
      >
    </div>
  </div>
</template>

<script>
import appsData from '@/data/apps.json';

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
      const app = appsData.apps.find(({ name }) => name === appId);
      if (app) {
        this.app = app;
      }
    },
  },
};
</script>
<style scoped>
.app-image {
  width: 100%;
  max-width: 300px;
  height: auto;
}
h2 {
  color: #333;
}
ul {
  list-style-type: none;
}
blockquote {
  font-style: italic;
}
</style>
