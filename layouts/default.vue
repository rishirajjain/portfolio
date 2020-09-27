<template >
  <div class="content-wrapper bg-background-pri" :class="theme">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["theme"]),
  },
  components: {
    Nav,
    Footer,
  },
};
</script>
