<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <div class="container flex justify-between w-4/5">
        <!-- Name intro -->
        <div class="text-txt-pri flex flex-col self-start">
          <h1 class="text-5xl md:text-6xl font-bold mt-2">
            I create meaningful
            <br />experiences
          </h1>

          <p class="mt-2">
            Hi, I'm
            <span class="font-bold">Rishi Raj Jain</span>
            , a
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
              to="/work"
              class="btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full"
            >View More</nuxt-link>
          </div>
        </div>
        <div class="hidden self-center w-1/4 lg:block">
          <illustration />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center bg-gray-100 text-black">
      <div class="container mb-12 w-4/5">
        <div class="flex flex-col self-start">
          <h1
            class="text-3xl md:text-4xl font-bold mt-10"
          >An empathetic UX design based problem solver. I boost engagement using magic.</h1>
          <div v-for="item in gallery" :key="item.id">
            <gallery :images="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mywork from "@/components/mywork";
import contactme from "@/components/contactme";
import gallery from "@/components/gallery";
import illustration from "@/components/illustration";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getWorkData();
  },
  components: {
    mywork,
    contactme,
    gallery,
  },
  computed: {
    ...mapState(["workData", "gallery"]),
  },
  methods: {
    ...mapActions(["loadWorkData", "setGallery"]),
    getWorkData() {
      this.loadWorkData();
      this.setGallery();
    },
    modifyData() {
      var items = this.workData;

      var result = Object.keys(items)
        .map((key) => items[key]) // turn an array of keys into array of items.
        .filter((item) => {
          return (
            item.id == "frrole" ||
            item.id == "animall-groupbuy-app" ||
            item.id == "bharatexotics"
          );
        });
      return result;
    },
  },
};
</script>
