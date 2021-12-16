<template>
  
    <div class="md:grid md:grid-cols-2 md:gap-12 mt-24">
      <div
        class="bg-background-sec rounded-md flex flex-col justify-center"
      > <img :src="img" alt=""> </div>
      <div class="flex flex-col justify-center">
        <div
          class=" font-bold mb-8"
        >
          <p class=" text-3xl md:text-5xl mt-12 md:mt-0 ">{{ title }}</p>
        </div>
        <div class=" mb-8  text-sm">{{description}}</div>
        <div>
<nuxt-link
              :to="'/work/' + id"
              class="border border-blue-600 text-txt-pri focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:text-white px-8 py-2 shadow rounded-full"
            >View Details</nuxt-link>
        </div>
        
      </div>
     
    </div>

</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["title", "description", "id", "img"],
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
<style >

</style>

