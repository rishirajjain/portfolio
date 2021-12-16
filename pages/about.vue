<template>
  <div class="flex justify-center items-center py-12 font-extralight">
    <div
      class="container flex flex-col-reverse md:flex-row w-full items-center justify-center md:items-start md:w-4/5"
    >
      <div class="flex flex-col w-3/4">
        <p class="text-4xl name mb-4 font-bold">Who is Rishi?</p>

        <p class="text-txt-sec text-base md:text-lg ">
          Rishi Raj Jain is a Product Designer who also does some
          FrontEnd development, runs two e-commerce businesses and is a graduate in Electronics and Communication.
          He is currently working with <a href="https://www.mindpeers.co" target="_blank" class="underline text-indigo-400">MindPeers</a> as Lead UX/UI Designer,
          helping make mental health affordable and accessible to all.
          <br />
          <br />He commands the cupid, makes users fall in love with the product.
          He strongly believes in providing value and simplifying people's lives.
        </p>
        <p class="text-4xl name mt-12 mb-4 font-bold">More about Rishi</p>
        <p class="text-txt-sec text-base md:text-lg self-start mb-12">
          Rishi is passionate about making sure that systems, interface, semantics, and graphics are human-friendly, aesthetically pleasing, emotive, clear, and usable. He has recently worked in a product company as a Frontend Developer. From workflow diagrams to detailed user interface mockups, Rishi loves crafting on-screen experiences.
          <br />
          <br />Photography, traveling, and reading are some of the things you'd often find him doing. Peep the resume or check out my LinkedIn page to take a closer look at my work history and whatnot.
        </p>
      </div>

      <div class="lg:ml-4 md:w-1/4 mb-8 md:mb-0 text-white">
      <div v-for="item in gallery.imageLink" :key="item.id">
        <img v-if="item.alt==='profilepic'" :src="item.filename" alt="Rishi Raj Jain" class="md:w-full w-64 rounded-full" /> 
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getImages();
  },
  computed: {
    ...mapState(["gallery"]),
  },
  methods: {
    ...mapActions(["setGallery"]),
    getImages() {
      this.setGallery();
    },
  head() {
    return {
      title: "About - Rishi Raj Jain",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A little bit of information about Rishi Raj Jain (UI/UX designer). Read on to find out more about me and what I can do for you.",
        },
      ],
    };
  },
},
}
</script>
