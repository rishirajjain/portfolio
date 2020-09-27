<template>
  <div class="md:grid md:grid-cols-4 md:gap-20 my-8">
    <div v-for="item in images" :key="item.id" class="flex flex-col items-center justify-center">
      <div
        @click="showFull=!showFull;filename=item.filename"
        :style="{ 'background-image': 'url(' + item.filename + ')' }"
        class="w-56 h-56 bg-contain bg-no-repeat bg-center cursor-pointer transform duration-500 hover:scale-125"
      ></div>
      <div class="uppercase text-xs mt-4 font-semibold">{{item.name}}</div>

      <div
        v-if="showFull"
        @click="showFull=false"
        class="flex z-50 items-center justify-center fixed left-0 bottom-0 w-full h-full opacity-75 bg-gray-800"
      >
        <div class="w-full md:w-1/2">
          <svg
            class="ml-auto fill-current text-white w-6 h-6 cursor-pointer self-end"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <div class="flex items-center justify-center p-4">
            <img :src="filename" alt="Work images" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["images"],
  data() {
    return {
      showFull: false,
      filename: "",
    };
  },
};
</script>
