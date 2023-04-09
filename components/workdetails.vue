<template>
  <div class="mt-4">
    <div >
      <div ref="imageContainer" class="w-full mouse-event mb-8 bg-transparent scroll-image rounded-lg">
  <a v-if="img && img.length > 0" :href="img[0].source" target="_blank">
    <img v-if="img && img.length > 0" ref="scrollImage" :src="img[0].filename" alt="" class="rounded-md w-full object-cover h-full">
    <div class="overlay">
      <div class="button-container">
        <button class="button">View Full Project</button>
      </div>
    </div>
  </a>
</div>

    <div class="bg-transparent rounded-md p-7 md:p-16 glassmorphism">
      <h2 class="text-white text-3xl font-semibold mb-8">{{ title }} TL;DR</h2>

      <div
        class="flex flex-col md:flex-row justify-between mt-2 mb-8 space-y-4 md:space-y-0 text-xs text-gray-200"
      >
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-gray-200">Type</h4>
          <p>{{ type }}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-gray-200">Duration</h4>
          <p>{{ duration }}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-gray-200">My Role</h4>
          <p>{{ myrole }}</p>
        </div>
        <div class="flex flex-col space-y-4">
          <h4 class="font-bold text-sm text-gray-200">What I did</h4>
          <div>
            <p class="whitespace-pre-line">{{ whatidid }}</p>
          </div>
        </div>
      </div>
      <div class="mt-2 text-gray-200">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["title", "content", "type", "duration", "whatidid", "myrole","img"],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    }
  }
};
</script>
<style>
.glassmorphism {
  background-color: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(10px) !important;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.15) !important;
}
.scroll-image {
  position: relative;
  overflow: hidden;
  cursor: pointer; /* make the cursor change to a pointer on hover */
  transition: all 0.2s ease-in-out; /* add a smooth transition */
}

.scroll-image img {
  transition: all 0.2s ease-in-out; /* add a smooth transition to the image */
}

.scroll-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.2s ease-in-out; /* add a smooth transition */
}

.scroll-image:hover .overlay {
  opacity: 1; /* show the overlay on hover */
}

.scroll-image .button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-image .button {
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #333333;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease-in-out; /* add a smooth transition */
}

.scroll-image .button:hover {
  background-color: #333333;
  color: #ffffff;
  transform: scale(1.1); /* add a slight scale effect on hover */
}



</style>