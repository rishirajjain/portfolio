<template>
  <div class="content-wrapper bg-background-pri" :class="theme">
    <Nav />
    <Nuxt style="background-image:url('uiux.svg')" class="bg-no-repeat bg-left-top" />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "./partials/Footer";
export default {
  mounted() {
    this.getTheme();
  },
  data() {
    return {
      theme: String,
    };
  },
  components: {
    Nav,
    Footer,
  },
  methods: {
    getTheme() {
      this.theme = localStorage.getItem("theme") || "theme-light";
    },
    toggleTheme() {
      let curr = localStorage.getItem("theme") || "theme-light";
      this.theme = curr === "theme-black" ? "theme-light" : "theme-black";
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>
