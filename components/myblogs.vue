<template>
  <div class="py-8 text-txt-pri">
    <nuxt-link :to="'/blog/' + blogid">
      <div class="container mx-auto mb-8">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            v-if="img"
            class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-no-repeat bg-center"
            :style="{ 'background-image': 'url(' + img + ')' }"
          ></div>
          <div
            v-if="img == ''"
            class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-no-repeat bg-center"
            style="background-image: url('/logomain_d.svg')"
          ></div>
          <div
            class="md:mb-0 flex flex-col justify-center items-center mx-auto"
          >
            <div
              class="w-11/12 transform hover:-translate-y-6 delay-100 duration-300 bg-background-crd -mt-10 shadow-lg rounded-lg overflow-hidden p-5"
            >
              <div class="title-post font-bold text-xl">
                {{ title }}
              </div>

              <div class="text-sm mt-2">
                {{ description }}
                <div
                  class="flex mt-2 flex-wrap justify-between md:justify-start space-x-1 text-black"
                >
                  <div v-for="item in hashtags" :key="item.id" class="mt-2">
                    <p
                      v-for="item in item.body"
                      :key="item.id"
                      class="bg-blue-100 border-blue-300 border rounded-full px-2 py-1 text-xs"
                    >
                      {{ item.value }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-4">
                <p class="text-xs text-txt-sec break-word">
                  Published on {{ formatDate(publishDate) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "img", "blogid", "hashtags", "publishDate"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
