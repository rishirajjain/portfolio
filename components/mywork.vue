<template>
  <nuxt-link :to="'/work/' + id" class="group mouse-event">
    <div class="flex flex-col items-center">
      <div ref="imageContainer" class="w-full overflow-hidden relative">
        <img ref="scrollImage" :src="img" alt="" class="scroll-image w-full object-cover h-full">
      </div>
      <div class="mt-6">
        <p class="font-bold text-2xl md:text-3xl mt-4 md:mt-0">{{ title }}</p>
        <div class="mb-12 text-sm mt-4">{{ description }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title", "description", "id", "img"],
  computed: {
    ...mapState(["theme"]),
  },
  mounted() {
    this.initIntersectionObserver();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.observer.disconnect();
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };

      this.observer = new IntersectionObserver(this.handleIntersection, options);
      this.observer.observe(this.$refs.imageContainer);
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.handleScroll();
        } else {
          this.$refs.scrollImage.style.transform = "translateY(0)";
        }
      });
    },
    handleScroll() {
      const container = this.$refs.imageContainer;
      const rect = container.getBoundingClientRect();
      const parallaxFactor = 0.05;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerOffsetTop = rect.top + scrollTop;
      const translateY = (scrollTop - containerOffsetTop) * parallaxFactor;

      requestAnimationFrame(() => {
        this.$refs.scrollImage.style.transform = `translateY(${translateY}px)`;
      });
    },
  },
};
</script>

<style scoped>
.scroll-image {
  will-change: transform;
}
</style>
