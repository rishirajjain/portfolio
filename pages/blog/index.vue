<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <div class="container flex flex-col w-4/5 mb-8">
      <div class="self-start font-bold text-3xl text-txt-pri">Blog</div>
      <div class="md:grid md:grid-cols-2 md:gap-12 mt-8">
        <myblogs
          v-for="blog in blogData"
          :key="blog.id"
          :title="blog.title"
          :description="blog.description"
          :blogid="blog.id"
          :img="blog.img"
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
    ...mapState(["blogData"])
  },
  components: {
    myblogs
  },
  methods: {
    ...mapActions(["loadBlogData"]),
    getBlogData() {
      this.loadBlogData();
    }
  }
};
</script>
