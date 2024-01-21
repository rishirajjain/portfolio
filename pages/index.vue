<template >
  <div>
    <Loader ref="loader" />
    <div id="workSection" class="flex flex-wrap justify-center text-txt-pri min-h-screen">
      <div class="container mb-12 w-4/5">
        <div class="flex flex-col">
          <h1
            class="text-3xl md:text-6xl font-bold mt-10 text-center"> 
            <span class="title-landing">Creative</span>
            <span style="text-white">Design</span>
            <span class="title-landing">folio</span>

          </h1>
          <div class="mb-24">
            <div class="md:grid md:grid-cols-2 md:gap-12 mt-24">
              <div v-for="work in displayedCards()" :key="work.id">
              <mywork
                :title="work.title"
                :description="work.description"
                :id="work.id"
                :img="work.img"
                :key="work.id"
              />
            </div>
            </div>
           
          </div>
            
         
          <!-- <div v-for="item in gallery" :key="item.id">
            <gallery :images="item" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center min-h-screen">
      <div class="container flex justify-center w-4/5 ">
        <!-- Hero section -->
        <div class="text-txt-pri self-center -mt-40">
          <h1 class="text-3xl md:text-5xl font-bold mt-2 text-center">
            <span class="name">Product design</span> wizardry that'll leave you spellbound
          </h1>

          <p class="text-2xl mt-8 text-txt-sec text-center">
            Hi I'm the Wizard
            <!-- <span class="font-bold">Rishi Raj Jain</span>
            , a Product designer. Currently working with MindPeers as Lead UX/UI Designer. -->
          </p>
          <!-- End -->
          <div class="flex flex-wrap justify-center mt-2"><img src="/line.svg" alt=""></div>
          <p class="text-2xl mt-2 text-txt-sec text-center">
            Just kidding, I'm  <span class="name">Rishi Raj Jain</span>
          </p>
          <!-- <div class="flex flex-wrap flex-col justify-center mt-2">
            <div class="space-x-4 mt-4 self-center">
             <div id="btncol" class="btncol">
              <div id="spin"></div>
            <a
              href="#workSection"
              class="text-txt-pri"
            >View my work</a>
             </div>
              
          </div>
          <img src="/stars.svg" alt=""></div> -->
          
        </div>
        <!--<div class="hidden self-center w-1/4 lg:block -mt-40">
          <illustration />
        </div>
        <div class="scroll-down"></div>-->
      </div>
    </div>

    
  </div>
</template>

<script>
import mywork from "@/components/mywork";
import contactme from "@/components/contactme";
import Loader  from "@/components/loading.vue";
/* import gallery from "@/components/gallery"; */
import illustration from "@/components/illustration";
import { mapActions, mapState } from "vuex";
export default {
  data() {
  return {
    isLoading: true,
  };
},
  mounted() {
    this.$refs.loader.start();
    this.getWorkData();
  },
  components: {
    mywork,
    contactme,
    Loader,
    /* gallery, */
    illustration,
  },
  computed: {
    ...mapState(["workData"]),

  },
  methods: {
    ...mapActions(["loadWorkData"]),
    displayedCards() {
      const workDataArray = Object.values(this.workData);
      return workDataArray.slice(0, 4);
    },
    getWorkData() {
    this.loadWorkData().then(() => {
      this.$refs.loader.finish();
    });
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
