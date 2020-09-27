<template>
  <nuxt-link :to="'/work/' + id">
    <div class="card flex flex-col justify-center items-center w-48 mt-3">
      <div
        :class="theme=='theme-light'?'cardEffLight':'cardEffDark'"
        :style="{ 'background-image': 'url(' + img + ')' }"
        class="h-40 w-full rounded bg-cover bg-center image"
      ></div>
      <div class="w-40 rounded middle overflow-hidden">
        <div
          class="p-1 text-center font-bold text-base tracking-wide border-b-2 border-pink-700 uppercase"
        >
          <p class="titleAn">{{ title }}</p>
        </div>
        <div class="p-1 titleLef text-center text-xs">{{shortdes}}</div>
      </div>
      <div class="w-40 md:hidden hide bg-white -mt-6 rounded overflow-hidden">
        <div class="p-1 text-center text-black font-bold text-sm tracking-wide">
          <p class="border-b-2 border-pink-700">{{ title }}</p>
        </div>
        <div class="p-1 text-center text-black text-xs">{{shortdes}}</div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["title", "shortdes", "id", "img"],
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
<style >
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  text-align: center;
}
.card:hover .image {
  opacity: 0.3;
}
.card:hover .middle {
  opacity: 1;
}
.card:hover .titleAn {
  animation: floatText 0.3s ease-in;
}
.card:hover .titleLef {
  animation: floatTextRight 0.3s ease-in;
}
.card:hover .hide {
  opacity: 0;
}
@keyframes floatText {
  from {
    transform: translateX(-60%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes floatTextRight {
  from {
    transform: translateX(60%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>

