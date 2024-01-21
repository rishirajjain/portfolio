<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <Loader ref="loader" />
    <div class="container flex flex-col w-4/5 space-y-12 mb-8 z-30">
      <div class="self-start underline text-xl">
        <nuxt-link to="/" class="text-txt-pri">Back</nuxt-link>
      </div>
      <workdetails
        :title="workDataIndi.title"
        :content="workDataIndi.content"
        :type="workDataIndi.type"
        :duration="workDataIndi.duration"
        :myrole="workDataIndi.myrole"
        :whatidid="workDataIndi.whatidid"
        :img="workDataIndi.img"
      />
    </div>
  </div>
</template>

<script>
import workdetails from "@/components/workdetails";
import Loader  from "@/components/loading.vue";

import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.$refs.loader.start();
    this.getWorkData(this.$route.fullPath);
  },
  components: {
    workdetails,
    Loader
  },
  computed: {
    ...mapState(["workDataIndi"])
  },
  methods: {
    ...mapActions(["loadWorkIndi"]),
    getWorkData(params) {
      this.loadWorkIndi(params).then(() => {
      this.$refs.loader.finish();
    });;
    }
  },
  head() {
    return {
      title: "Work -" + this.workDataIndi.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.workDataIndi.description
        }
      ]
    };
  }
};
</script>

<style></style>
