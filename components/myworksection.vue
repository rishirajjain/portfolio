<template>
  <nuxt-link :to="'/work/' + id">
    <div class="mx-auto py-8">
      <div
        :class="theme=='theme-light'?'cardEffLight':'cardEffDark'"
        class="relative transition duration-500 ease-in-out transform hover:-translate-y-1 overflow-hidden bg-background-pri rounded-lg mb-6 tracking-wide"
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
        <div class="md:flex-shrink-0">
          <img
            :src="img"
            alt="cover pictures"
            class="relative w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div class="p-8 rounded-b-lg">
          <h2 class="font-bold text-2xl text-txt-pri tracking-normal">{{ title }}</h2>
          <p class="text-sm text-txt-sec break-word">{{ description }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["title", "description", "img", "id"],
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
