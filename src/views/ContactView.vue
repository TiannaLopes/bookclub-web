<template>
  <div id="contact-view" class="container my-5 py-5">
    <div class="row mb-5 justify-content-center text-center">
      <div class="col-lg-8">
        <h2 class="display-4 fw-bold" style="color: #3d0814">Get in Touch</h2>
        <p class="lead text-secondary" style="color: #e7fa9a">
          Have questions? We would love to hear from you.
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <h3 style="color: #c6b38e">Contact Information</h3>
        <p class="text-muted" style="color: #a6ad73">You can reach us at:</p>
        <p style="color: #a6ad73">
          <strong>Email:</strong> met-at-bookclub@gmail.com<br />
          <strong>Phone:</strong> (123) 456-7890<br />
          <strong>Address:</strong> 123 Business Rd, Business City, BC 12345
        </p>
      </div>
      <div class="col-md-6">
        <h3 style="color: #c6b38e">Send us a message</h3>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label" style="color: #a6ad73"
              >Name</label
            >
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label" style="color: #a6ad73"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label" style="color: #a6ad73"
              >Message</label
            >
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn"
            style="background-color: #442f38; color: #e7fa9a"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>

<style scoped>
#contact-view .form-control {
  background-color: #c6b38e;
  border: none;
  color: #3d0814;
}

#contact-view .form-control::placeholder {
  color: #3d0814;
}

#contact-view .btn {
  border: none;
}
</style>
