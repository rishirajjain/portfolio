<template>
  <nuxt-link :to="'/work/' + id">
    <div
      :class="theme=='theme-light'?'cardEffLight':'cardEffDark'"
      class="flex-shrink-0 w-48 mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 relative overflow-hidden bg-background-pri rounded-lg max-w-xs"
    >
      <svg
        class="absolute bottom-0 left-0"
        viewBox="0 0 375 283"
        fill="none"
        style="transform: scale(1.5); opacity: 0.02;"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div class="relative flex items-center justify-center">
        <img class="relative w-24 h-16" :src="img" alt="Loading" />
      </div>
      <div class="relative px-4 pb-4">
        <span class="block opacity-75 -mb-1 text-xs">{{shortdes}}</span>
        <div class="flex flex-col justify-between">
          <h2 class="text-base mt-2 font-semibold">{{ title }}</h2>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title", "shortdes", "id", "img"],
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
