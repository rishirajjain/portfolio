<template>
  <div>
    <div class="flex flex-wrap justify-center min-h-screen">
      <div class="container flex justify-between w-4/5">
        <!-- Hero section -->
        <div class="text-txt-pri self-center -mt-40">
          <h1 class="text-5xl md:text-7xl font-bold mt-2">
            I create meaningful
            <br /><span class="name">experiences</span> 
          </h1>

          <p class="mt-8 text-txt-sec w-3/4">
            Hi, I'm
            <span class="font-bold">Rishi Raj Jain</span>
            , a Product designer. Currently working with MindPeers as Lead UX/UI Designer.
          </p>
          <!-- End -->

          <div class="space-x-4 mt-8 mb-16 md:self-end">
            <a
              href="#workSection"
              class="btncol text-white focus:outline-none focus:shadow-outline px-8 py-2 shadow rounded-full"
            >Recent Work</a>
          </div>
        </div>
        <div class="hidden self-center w-1/4 lg:block -mt-40">
          <illustration />
        </div>
        <div class="scroll-down"></div>
      </div>
    </div>

    <div id="workSection" class="flex flex-wrap justify-center text-txt-pri">
      <div class="container mb-12 w-4/5">
        <div class="flex flex-col self-start">
          <h3
            class="text-3xl md:text-5xl font-bold mt-10"
          >Here is some of my <span class="name">work</span></h3>
          <div class="mb-24">
           <div v-for="work in workData" :key="work.id">
              <mywork
                :title="work.title"
                :description="work.description"
                :id="work.id"
                :img="work.img"
                :key="work.id"
              />
            </div>
          </div>
            
         
          <!-- <div v-for="item in gallery" :key="item.id">
            <gallery :images="item" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mywork from "@/components/mywork";
import contactme from "@/components/contactme";
/* import gallery from "@/components/gallery"; */
import illustration from "@/components/illustration";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getWorkData();
  },
  components: {
    mywork,
    contactme,
    /* gallery, */
    illustration,
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
  
    /* modifyData() {
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
    }, */
  },
};
</script>
