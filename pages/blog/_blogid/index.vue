<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <div class="container flex flex-col w-4/5 space-y-12 mb-8 z-30">
      <div class="self-start underline text-xl">
        <nuxt-link to="/blog" class="text-txt-pri">Back</nuxt-link>
      </div>
      <blogPosts
        :title="blogDataIndi.title"
        :content="blogDataIndi.content"
        :type="blogDataIndi.type"
        :hashtags="blogDataIndi.tags"
        :publishDate="blogDataIndi.datePub"
        :desc="blogDataIndi.description"
      />
    </div>
  </div>
</template>

<script>
import blogPosts from "@/components/blogPosts";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getBlogData(this.$route.fullPath);
  },
  components: {
    blogPosts,
  },
  computed: {
    ...mapState(["blogDataIndi"]),
  },
  methods: {
    ...mapActions(["loadBlogIndi"]),
    getBlogData(params) {
      this.loadBlogIndi(params);
    },
  },
  // head() {
  //   return {
  //     title: this.blogDataIndi.title,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.blogDataIndi.description,
  //       },
  //     ],
  //   };
  // },
};
</script>

<style></style>
