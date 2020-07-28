<template>
  <nuxt-link :to="'/blog/' + blogid">
    <div class="my-12">
      <div
        class="flex flex-col md:flex-row transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-6 tracking-wide"
      >
        <div class="bg-background-crd rounded-lg rounded-r-none">
          <img :src="img" alt="cover picture" class="w-64 h-64" />
        </div>
        <div class="p-8 bg-white rounded-lg rounded-l-none">
          <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{{ title }}</h2>
          <p class="text-sm text-gray-700 mt-6 break-word">{{ description }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "description", "img", "blogid"],
};
</script>
