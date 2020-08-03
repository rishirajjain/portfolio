<template>
  <div class="mt-4 bg-white rounded-md shadow p-8">
    <div>
      <div class="flex flex-wrap justify-between items-center">
        <h2 class="text-gray-800 text-3xl font-semibold">{{ title }}</h2>
      </div>

      <div class="mt-8 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
      <hr class="mt-16 mb-4" />
      <div class="flex space-x-4 items-center">
        <img src="/rishi.jpg" alt="author" class="rounded-full w-12 h-12 self-start" />
        <div class="flex flex-col">
          <p class="font-bold text-base">
            Words by,
            <br />Rishi Raj Jain
          </p>
          <p class="text-xs">Published on {{formatDate(publishDate)}}</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between md:justify-end">
        <div v-for="item in hashtags" :key="item.id" class="mt-8">
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
  props: ["title", "content", "type", "hashtags", "publishDate", "desc"],
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
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.desc,
        },
      ],
    };
  },
};
</script>
