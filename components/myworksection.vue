<template>
  <nuxt-link :to="'/work/' + id">
    <div class="mx-auto py-8 max-w-xl">
      <div
        class="relative overflow-hidden hover:shadow-xl hover:transition ease-in-out duration-500 rounded-lg mb-6 tracking-wide"
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
        <div class="md:flex-shrink-0 bg-background-crd">
          <img
            :src="img"
            alt="cover pictures"
            class="relative w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div class="p-8 bg-white rounded-b-lg">
          <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{{ title }}</h2>
          <p class="text-sm text-gray-700 break-word">{{ description }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "description", "img", "id"]
};
</script>

