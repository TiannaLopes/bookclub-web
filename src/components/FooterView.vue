<template>
  <footer class="bg-dark text-light mt-5 py-3">
    <div class="container text-center">
      <p>&copy; {{ currentYear }} Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
