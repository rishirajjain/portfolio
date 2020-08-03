<template>
  <div class="flex flex-wrap justify-center items-center">
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
          <span class="name text-xl font-bold">UI/UX designer</span>
        </p>
        <!-- End -->
        <!-- Work Section-->
        <p class="text-xs mt-10 font-bold">Featured Work</p>
        <div class="grid lg:grid-cols-3 lg:gap-4">
          <div v-for="(work) in workData" :key="work.id">
            <mywork
              v-if="
                work.id == 'frrole' ||
                  work.id == 'micro-interactions' ||
                  work.id == 'portfolio-version-3'
              "
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
          <nuxt-link to="work" class="hover:underline text-txt-sec">See more work</nuxt-link>
          <a
            href="mailto:rishirajjain98@gmail.com?subject=Regarding an offer at {Insert Company name}&body=Hey Rishi, "
            class="btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full"
          >Hire Me</a>
        </div>
      </div>
      <div class="hidden self-center w-1/4 lg:block md:opacity-75">
        <illustration />
      </div>
    </div>
  </div>
</template>

<script>
import mywork from "@/components/mywork";
import illustration from "@/components/illustration";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getWorkData();
  },
  components: {
    mywork,
  },
  computed: {
    ...mapState(["workData"]),
  },
  methods: {
    ...mapActions(["loadWorkData"]),
    getWorkData() {
      this.loadWorkData();
    },
  },
};
</script>
