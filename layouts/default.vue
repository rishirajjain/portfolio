<template>
  <div class="content-wrapper bg-background-pri" :class="theme">
    <Nav />
    <Nuxt />
    <Footer />
    <AnimatedCursor />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import AnimatedCursor from "@/components/AnimatedCursor.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["theme"]),
  },
  components: {
    Nav,
    Footer,
    AnimatedCursor,
  },
};
</script>
