<template>
  <div>
    <HeaderView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
