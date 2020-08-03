<template>
  <div class="mt-4 bg-white rounded-md shadow p-8">
    <div>
      <div class="flex flex-wrap justify-between items-center">
        <h2 class="text-gray-800 text-3xl font-semibold">{{ title }}</h2>
        <p class="self-start text-xs">Published on :{{formatDate(publishDate)}}</p>
      </div>

      <div class="mt-8 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
      <div class="flex flex-wrap justify-between md:justify-end">
        <div v-for="item in hashtags" :key="item.id">
          <p
            v-for="item in item.body"
            :key="item.id"
            class="bg-gray-400 mt-2 md:ml-2 text-xs rounded-full px-4 py-1 hover:bg-gray-500"
          >{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type", "hashtags", "publishDate"],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    },
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
