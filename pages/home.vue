<template>
  <div class="flex flex-wrap justify-center height">
    <div class="container flex justify-between w-4/5">
      <!-- Name intro -->
      <div class="text-txt-pri flex flex-col self-start">
        <h1 class="text-5xl md:text-6xl font-bold mt-2">
          I create beautiful
          <br />experiences
        </h1>
        <p class="mt-2">
          Hi, I'm
          <span class="font-bold">Rishi Raj Jain</span>
          a
          <span class="name text-xl font-bold">Product designer</span>
        </p>
        <!-- End -->
        <!-- Work Section-->
        <p class="text-xs mt-10 font-bold">Featured Work</p>
        <div class="flex flex-wrap justify-between md:space-x-4">
          <div v-for="work in modifyData()" :key="work.id">
            <mywork
              :title="work.title"
              :shortdes="work.shortdes"
              :id="work.id"
              :img="work.img"
              :key="work.id"
            />
          </div>
        </div>

        <!-- End -->
        <div class="space-x-4 mt-8 mb-16 md:self-end">
          <nuxt-link
            to="work"
            class="btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full"
          >View More</nuxt-link>
        </div>
      </div>
      <div class="hidden self-center w-1/4 lg:block">
        <illustration />
      </div>
    </div>
    <contactme />
  </div>
</template>

<script>
import mywork from "@/components/mywork";
import contactme from "@/components/contactme";

import illustration from "@/components/illustration";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getWorkData();
  },
  components: {
    mywork,
    contactme,
  },
  computed: {
    ...mapState(["workData"]),
  },
  methods: {
    ...mapActions(["loadWorkData"]),
    getWorkData() {
      this.loadWorkData();
    },
    modifyData() {
      var items = this.workData;

      var result = Object.keys(items)
        .map((key) => items[key]) // turn an array of keys into array of items.
        .filter((item) => {
          return (
            item.id == "frrole" ||
            item.id == "micro-interactions" ||
            item.id == "portfolio-version-3"
          );
        });
      return result;
    },
  },
};
</script>
