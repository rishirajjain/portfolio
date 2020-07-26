<template>
  <nuxt-link :to="'/work/' + id">
    <div
      class="flex-shrink-0 w-56 mt-4 relative overflow-hidden bg-background-crd rounded-lg max-w-xs shadow-lg"
    >
      <svg
        class="absolute bottom-0 left-0"
        viewBox="0 0 375 283"
        fill="none"
        style="transform: scale(1.5); opacity: 0.1;"
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
        <img class="relative w-24 h-16" :src="img" alt />
      </div>
      <div class="relative text-white px-4 pb-4">
        <span class="block opacity-75 -mb-1">{{shortdes}}</span>
        <div class="flex flex-col justify-between">
          <h2 class="text-white text-xl font-semibold">{{ title }}</h2>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "shortdes", "id", "img"]
};
</script>
