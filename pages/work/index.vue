<template>
  <div class="space-y-4 flex flex-col justify-center items-center">
    <div class="container flex flex-col w-4/5 mb-8">
      <div class="self-start font-bold text-3xl text-txt-pri">Work</div>
      <div class="md:grid md:grid-cols-2 md:gap-12 mt-8">
        <myworksection
          v-for="work in workData"
          :key="work.id"
          :title="work.title"
          :description="work.description"
          :id="work.id"
          :img="work.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import myworksection from "@/components/myworksection";
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.getWorkData();
  },
  computed: {
    ...mapState(["workData"])
  },
  components: {
    myworksection
  },
  methods: {
    ...mapActions(["loadWorkData"]),
    getWorkData() {
      this.loadWorkData();
    }
  }
};
</script>
