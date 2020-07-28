<template>
  <div class="mt-4 bg-white rounded-md shadow p-6 md:p-16">
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold mb-8">{{ title }}</h2>

      <div
        class="flex flex-col md:flex-row justify-between mt-2 mb-8 space-y-4 md:space-y-0 text-xs text-gray-700"
      >
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-black">Type</h4>
          <p>{{type}}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-black">Duration</h4>
          <p>{{duration}}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-black">My Role</h4>
          <p>{{myrole}}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-black">What I did</h4>
          <div>
            <p class="whitespace-pre-line">{{whatidid}}</p>
          </div>
        </div>
      </div>
      <div class="mt-2 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type", "duration", "whatidid", "myrole"],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    },
  },
};
</script>
