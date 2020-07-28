<template>
  <div class="mt-4 bg-white rounded-md shadow p-8">
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold mb-8">{{ title }}</h2>
      <p>{{publishDate}}</p>
      <div class="mt-2 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
      <div class="flex flex-col md:flex-row justify-between">
        <div v-for="item in hashtags" :key="item.id" class="flex mt-2">
          <p
            v-for="item in item.body"
            :key="item.id"
            class="bg-gray-400 rounded-full px-4 py-1 hover:bg-gray-500"
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
};
</script>
