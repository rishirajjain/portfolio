<template>
  <div class="my-12 mt-8">
    <p class="text-sm font-semibold mb-8">Latest Posts</p>
    <nuxt-link :to="'/blog/' + blogid">
      <div
        class="flex flex-col md:flex-row transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-6 tracking-wide"
      >
        <div
          class="flex justify-center bg-background-crd rounded-b-none rounded-t-lg md:rounded-r-none md:rounded-l-lg"
        >
          <img :src="img" alt="cover picture" class="w-64 h-64" />
        </div>
        <div class="p-8 bg-white rounded-t-none rounded-b-lg md:rounded-l-none md:rounded-r-lg">
          <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{{ title }}</h2>
          <p class="text-sm text-gray-700 mt-6 break-word font-medium">{{ description }}</p>

          <div class="flex mt-6 flex-wrap justify-between md:justify-start space-x-2">
            <div v-for="item in hashtags" :key="item.id" class="mt-2">
              <p
                v-for="item in item.body"
                :key="item.id"
                class="bg-gray-400 rounded-full px-4 py-1 text-xs"
              >{{ item.value }}</p>
            </div>
          </div>
          <div class="flex justify-end mt-4">
            <p class="text-xs text-gray-700 break-word">Published on {{formatDate(publishDate)}}</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "img", "blogid", "hashtags", "publishDate"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
