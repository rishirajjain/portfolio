<template>
 <div>
  <Loader ref="loader" />
    <div  class="flex flex-wrap justify-center text-txt-pri min-h-screen">
      <div class="container mb-12 w-4/5">
        <div class="flex flex-col">
          <h1
            class="text-3xl md:text-6xl font-bold mt-10 text-center"> 
            <span class="title-landing">Creative</span>
            <span style="-webkit-text-fill-color: transparent; -webkit-text-stroke: 1px;">Design</span>
            <span class="title-landing">Work</span>

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
    </div>
</template>

<script>
import mywork from "@/components/mywork";
import Loader  from "@/components/loading.vue";
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.$refs.loader.start();
    this.getWorkData();
  },
  computed: {
    ...mapState(["workData"]),
  },
  components: {
    mywork,
    Loader
  },
  methods: {
    ...mapActions(["loadWorkData"]),
    displayedCards() {
      const workDataArray = Object.values(this.workData);
      return workDataArray;
    },
    getWorkData() {
    this.loadWorkData().then(() => {
      this.$refs.loader.finish();
    });
  },
  
  head() {
    return {
      title: "Work",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "My work portfolio",
        },
      ],
    };
  },
},
}
</script>
