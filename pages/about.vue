<template>
  <div class="flex justify-center items-center py-12 font-extralight">
    <div
      class="container flex flex-col-reverse md:flex-row w-full items-center justify-center md:items-start md:w-4/5"
    >
      <div class="flex flex-col w-3/4">
        <p class="text-3xl md:text-4xl title-landing mb-4 font-bold">Unleashing Creativity, One Pixel at a Time</p>

        <p class="text-txt-sec text-base md:text-lg ">
          Hey there! I'm Rishi, the wizard of the design world where imagination meets pixels. My journey in design isn't just a career path; it's a rollercoaster ride through a universe of creativity. With a rich background in Product Design and a degree in Electronics and Communication, I've been weaving magic into every project I touch.
        </p>
        <p class="text-3xl md:text-4xl title-landing mt-12 mb-4 font-bold">The Design Dynamo</p>
        <p class="text-txt-sec text-base md:text-lg self-start">
          Just like a chef experiments with flavors, I play with design elements to create experiences that are not just visually stunning but also intuitively user-friendly. At Bharatexotics, my entrepreneurial venture, I apply this recipe to spice up the e-commerce scene.
        </p>
          <p class="text-3xl md:text-4xl title-landing mt-12 mb-4 font-bold">The Art of Design and the Science of Fun</p>
        <p class="text-txt-sec text-base md:text-lg self-start">
          My philosophy? Design should be like a good joke - it doesn't need explaining. I strive to create designs that speak for themselves, clear, engaging, and sometimes with a hint of mischief. It’s like being a digital storyteller, but instead of words, I use layouts, colors, and typography.
        </p>      
        <p class="text-3xl md:text-4xl title-landing mt-12 mb-4 font-bold">Rishi: The Explorer</p>
        <p class="text-txt-sec text-base md:text-lg self-start mb-12">
          When I'm not orchestrating symphonies of design, you’ll find me with a camera in hand, capturing life’s unrehearsed moments, traversing unknown paths in far-off lands, or lost in the world of books. My life outside design is an open book, filled with chapters of adventure, learning, and exploration.

Curious for more? Dive into my journey beyond the pixels. My resume and LinkedIn page are your tickets to this adventure – no baggage required, just bring your curiosity!        </p>   
      
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
