<template>
  <div>
    <HeaderView />
    <HomeView />
    <FooterView />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "App",
  components: {
    HomeView,
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
