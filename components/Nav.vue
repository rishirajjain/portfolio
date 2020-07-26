<template>
  <nav class="text-base text-txt-pri p-8 w-full">
    <div class="hidden md:block">
      <div class="flex justify-end">
        <div class="flex justify-end container w-4/5">
          <ul class="flex space-x-16 justify-center items-center px-10">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/work">Work</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </li>
            <li>
              <hireme />
            </li>
          </ul>
          <div class="self-start tooltip relative">
            <p class="tooltip-text">Change theme</p>
            <button @click.prevent="toggleTheme" class="focus:outline-none">
              <img
                v-if="themeBtn === 'theme-black'"
                src="/light.svg"
                alt="change theme"
                class="w-6"
              />
              <img v-else src="/black.svg" alt="change theme" class="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Nav -->
    <div class="block md:hidden">
      <div class="flex items-center justify-end">
        <div class="self-start tooltip relative">
          <p class="tooltip-text">Change theme</p>
          <button @click.prevent="toggleTheme" class="focus:outline-none">
            <img v-if="themeBtn === 'theme-black'" src="/light.svg" alt="change theme" class="w-6" />
            <img v-else src="/black.svg" alt="change theme" class="w-6" />
          </button>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="flex justify-center items-center fixed bottom-0 left-0 w-full bg-background-ter h-20 z-50"
      >
        <div
          class="absolute bottom-0 right-0 origin-bottom-left mb-24 w-56 z-30 rounded-md shadow-lg"
          v-if="showMenu"
        >
          <div class="rounded-md bg-white shadow-xs">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="mailto:rishirajjain98@gmail.com?subject=Regarding an offer at {Insert Company name}&body=Hey Rishi, "
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >Contact Me</a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >Download Resume</a>
            </div>
          </div>
        </div>
        <div class="w-full mx-8">
          <div class="flex justify-between items-center bg-text-ux text-base text-txt-pri">
            <div>
              <nuxt-link
                to="/"
                class="flex flex-col transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <img v-if="themeBtn === 'theme-black'" src="/home_l.svg" alt="home" />
                <img v-else src="/home_d.svg" alt="home " />
                <span>Home</span>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link
                to="work"
                class="flex flex-col transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <img v-if="themeBtn === 'theme-black'" src="/work_l.svg" alt="work" />
                <img v-else src="/work_b.svg" alt="work" />
                <span>work</span>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link
                to="about"
                class="flex flex-col transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <img v-if="themeBtn === 'theme-black'" src="/about_l.svg" alt="about" />
                <img v-else src="/about_b.svg" alt="about" />
                <span>about</span>
              </nuxt-link>
            </div>

            <div>
              <div
                @click="showMenu=!showMenu"
                class="flex flex-col transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <img v-if="themeBtn === 'theme-black'" src="/hireme_l.svg" alt="hire me" />
                <img v-else src="/hireme_d.svg" alt="hire me" />
                <span>Hire Me</span>
              </div>
              <button
                v-if="showMenu"
                @click="showMenu = false"
                tabindex="-1"
                class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import hireme from "./hireme.vue";
export default {
  components: {
    hireme
  },
  mounted() {
    this.getTheme();
  },
  data() {
    return {
      themeBtn: String,
      isOpen: false,
      showMenu: false
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleTheme() {
      this.themeBtn =
        this.themeBtn === "theme-black" ? "theme-light" : "theme-black";
      this.$parent.toggleTheme();
    },
    getTheme() {
      this.themeBtn = localStorage.getItem("theme") || "theme-light";
    },
    handleScroll() {
      var lastScrollTop = 0;
      var st = window.pageYOffset;
      if (st > lastScrollTop) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
  }
};
</script>
<style scoped>
.nuxt-link-active:hover {
  transition: 0.3s ease all 0.1s;
}
.nuxt-link-exact-active {
  border-bottom: 2px solid #ff4081;
}
</style>
