<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <div class="container flex flex-col w-4/5 space-y-12 mb-8 z-30">
      <div class="self-start underline text-xl">
        <nuxt-link to="/work" class="text-txt-pri">Back</nuxt-link>
      </div>
      <workdetails
        :title="workDataIndi.title"
        :content="workDataIndi.content"
        :type="workDataIndi.type"
        :duration="workDataIndi.duration"
        :myrole="workDataIndi.myrole"
        :whatidid="workDataIndi.whatidid"
      />
    </div>
  </div>
</template>

<script>
import workdetails from "@/components/workdetails";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getWorkData(this.$route.fullPath);
  },
  components: {
    workdetails,
  },
  computed: {
    ...mapState(["workDataIndi"]),
  },
  methods: {
    ...mapActions(["loadWorkIndi"]),
    getWorkData(params) {
      this.loadWorkIndi(params);
    },
  },
  head() {
    return {
      title: "Work -" + this.workDataIndi.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.workDataIndi.description,
        },
      ],
    };
  },
};
</script>

<style></style>
