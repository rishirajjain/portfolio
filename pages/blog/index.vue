<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <div class="container flex flex-col w-4/5 mb-8">
      <div class="self-start font-bold text-3xl text-txt-pri title-landing">Blog</div>
      <p class="text-sm font-semibold mt-8 text-txt-pri">Latest posts about Travel, Code, Photography, Design, Entrepreneurship</p>
      <div class="md:grid md:grid-cols-2 md:gap-24 my-8">
        <myblogs
          v-for="blog in blogData"
          :key="blog.id"
          :title="blog.title"
          :description="blog.description"
          :blogid="blog.id"
          :img="blog.img"
          :hashtags="blog.tags"
          :publishDate="blog.datePub"
        />
      </div>
    </div>
  </div>
</template>

<script>
import myblogs from "@/components/myblogs";
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.getBlogData();
  },
  computed: {
    ...mapState(["blogData"]),
  },
  components: {
    myblogs,
  },
  methods: {
    ...mapActions(["loadBlogData"]),
    getBlogData() {
      this.loadBlogData();
    },
  },
  head() {
    return {
      title: "Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Blog on design, photography, travel, art, entrepreneurship, coding.",
        },
      ],
    };
  },
};
</script>
