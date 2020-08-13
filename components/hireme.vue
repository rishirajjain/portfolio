<template>
  <div>
    <div class="relative inline-block text-left">
      <div>
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            :class="theme=='theme-light'?'hireBtnlight':'hireBtndark'"
            class="pointer-events-auto text-base inline-flex justify-center w-full rounded-full px-6 py-2 bg-background-pri text-txt-pri leading-5 focus:outline-none transition ease-in-out duration-150"
            @click="showMenu=!showMenu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Hire Me
            <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            v-if="showMenu"
            @click="showMenu = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-gray opacity-25 cursor-default focus:outline-none"
          ></button>
        </span>
      </div>

      <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg" v-if="showMenu">
        <div class="rounded-md bg-background-crdLig shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="mailto:rishirajjain98@gmail.com?subject=Regarding an offer at {Insert Company name}&body=Hey Rishi, "
              class="block text-txt-pri px-4 py-2 text-sm leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >Contact Me</a>
            <a
              href="https://docs.google.com/document/d/1JcDdPgwZYYAt6B574EY3fc__xwqjt-Pz7LD29I_w72I/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              class="block px-4 text-txt-pri py-2 text-sm leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
.hireBtnlight {
  box-shadow: 6px 6px 12px #e6e6e6, -6px -6px 12px #ffffff;
}
.hireBtnlight:focus {
  box-shadow: 6px 6px 12px #e6e6e6 inset, -6px -6px 12px #ffffff inset;
}
.hireBtndark {
  box-shadow: 6px 6px 12px #000407, -6px -6px 12px #00101d;
}
.hireBtndark:focus {
  box-shadow: inset 6px 6px 12px #000407, inset -6px -6px 12px #00101d;
}
</style>>

