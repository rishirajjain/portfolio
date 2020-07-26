<template>
  <div class="mt-4 bg-white rounded-md shadow p-8">
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold mb-8">{{ title }}</h2>

      <div class="mt-2 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type"],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    }
  }
};
</script>
