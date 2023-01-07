<template>
  <nav class="text-base text-txt-pri py-8 w-full">
    <div class="hidden md:flex justify-center">
      <div class="container flex justify-between w-4/5">
        <nuxt-link to="/home" class="logoStyle">
          <img
            v-if="themeBtn === 'theme-black'"
            src="/logoMain_l.svg"
            alt="Tracoph Logo"
            class="w-8"
          />
          <img v-else src="/logoMain_d.svg" alt="Tracoph Logo" class="w-8" />
        </nuxt-link>

        <div class="flex justify-center">
          <div class="flex space-x-12 justify-center items-center px-10">
            <nuxt-link to="/home" >Home</nuxt-link>

            <!-- <nuxt-link to="/work">Work</nuxt-link> -->

            <nuxt-link to="/blog" >Blog</nuxt-link>

            <nuxt-link to="/about" >About</nuxt-link>

            <!-- <hireme :theme="themeBtn" /> -->
          </div>
          
        </div>
        <div class="flex" >
            <!-- <p class="tooltip-text">Change theme</p> -->
            <button @click.prevent="toggleTheme" >
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
    <!-- Mobile Nav -->
    <div class="flex justify-center md:hidden">
      <div class="container flex justify-between w-4/5">
        <nuxt-link to="/home" class="logoStyle">
          <img
            v-if="themeBtn === 'theme-black'"
            src="/logoMain_l.svg"
            alt="Tracoph Logo"
            class="w-8"
          />
          <img v-else src="/logoMain_d.svg" alt="Tracoph Logo" class="w-8" />
        </nuxt-link>
        <div class="self-start tooltip relative">
          <!-- <p class="tooltip-text">Change theme</p> -->
          <button @click.prevent="toggleTheme" class>
            <img v-if="themeBtn === 'theme-black'" src="/light.svg" alt="change theme" class="w-6" />
            <img v-else src="/black.svg" alt="change theme" class="w-6" />
          </button>
        </div>
      </div>
      <div
        v-if="isOpen"
        class="flex justify-center items-center fixed bottom-0 left-0 w-full bg-background-ter h-24 z-50"
      >
        <div
          class="absolute bottom-0 right-0 origin-bottom-left mb-24 w-56 z-30 rounded-md shadow-lg"
          v-if="showMenu"
        >
          <div class="rounded-md bg-background-crdLig shadow-xs">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="mailto:rishirajjain98@gmail.com?subject=Regarding an offer at {Insert Company name}&body=Hey Rishi, "
                class="block text-txt-pri px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >Contact Me</a>

              <a
                href="https://docs.google.com/document/d/1JcDdPgwZYYAt6B574EY3fc__xwqjt-Pz7LD29I_w72I/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                class="block text-txt-pri px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >Download Resume</a>
            </div>
          </div>
        </div>
        <div class="w-full mx-8">
          <div class="flex justify-between items-center bg-text-ux text-base text-txt-pri">
            <div>
              <nuxt-link
                to="/home"
                class="flex flex-col transition duration-200 p-2 justify-center items-center ease-in-out transform hover:-translate-y-1"
              >
                <img
                  v-if="themeBtn === 'theme-black'"
                  src="/home_l.svg"
                  alt="home"
                  class="w-10 h-10 mb-2"
                />
                <img v-else src="/home_d.svg" alt="home " class="w-10 h-10 mb-2" />
                <span class="text-xs">Home</span>
              </nuxt-link>
            </div>
            <!-- <div>
              <nuxt-link
                to="/work"
                class="flex flex-col transition duration-200 p-2 justify-center items-center ease-in-out transform hover:-translate-y-1"
              >
                <img
                  v-if="themeBtn === 'theme-black'"
                  src="/work_l.svg"
                  alt="work"
                  class="w-10 h-10 mb-2"
                />
                <img v-else src="/work_d.svg" alt="work" class="w-10 h-10 mb-2" />
                <span class="text-xs">Work</span>
              </nuxt-link>
            </div> -->

            <div>
              <nuxt-link
                to="/blog"
                class="flex flex-col transition duration-200 p-2 justify-center items-center ease-in-out transform hover:-translate-y-1"
              >
                <img
                  v-if="themeBtn === 'theme-black'"
                  src="/blog_l.svg"
                  alt="blog"
                  class="w-10 h-10 mb-2"
                />
                <img v-else src="/blog_d.svg" alt="blog" class="w-10 h-10 mb-2" />
                <span class="text-xs">Blog</span>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link
                to="/about"
                class="flex flex-col transition duration-200 p-2 justify-center items-center ease-in-out transform hover:-translate-y-1"
              >
                <img
                  v-if="themeBtn === 'theme-black'"
                  src="/about_l.svg"
                  alt="about"
                  class="w-10 h-10 mb-2"
                />
                <img v-else src="/about_d.svg" alt="about" class="w-10 h-10 mb-2" />
                <span class="text-xs">About</span>
              </nuxt-link>
            </div>
            <div>
              <div
                @click="showMenu=!showMenu"
                class="flex flex-col transition duration-200 p-2 justify-center items-center ease-in-out transform hover:-translate-y-1"
              >
                <img
                  v-if="themeBtn === 'theme-black'"
                  src="/hireme_l.svg"
                  alt="hire me"
                  class="w-10 h-10 mb-2"
                />
                <img v-else src="/hireme_d.svg" alt="hire me" class="w-10 h-10 mb-2" />
                <span class="text-xs">Hire Me</span>
              </div>
              <button
                v-if="showMenu"
                @click="showMenu = false"
                tabindex="-1"
                class="fixed z-20 inset-0 h-full w-full cursor-default"
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
import { mapActions, mapState } from "vuex";

export default {
  components: {
    hireme,
  },
  mounted() {
    this.getTheme();
  },
  computed: {
    ...mapState(["theme"]),
  },
  data() {
    return {
      themeBtn: String,
      isOpen: false,
      showMenu: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(["setTheme"]),
    storeTheme(currTheme) {
      this.setTheme(currTheme);
    },
    toggleTheme() {
      this.themeBtn =
        this.themeBtn === "theme-black" ? "theme-light" : "theme-black";
      localStorage.setItem("theme", this.themeBtn);
      this.storeTheme(this.themeBtn);
    },
    getTheme() {
      this.themeBtn = localStorage.getItem("theme");
      // console.log(localStorage.getItem("theme"));
      if (this.themeBtn == undefined) {
        localStorage.setItem("theme", "theme-black");
        this.themeBtn = localStorage.getItem("theme");
        this.storeTheme(this.themeBtn);
        console.log("undef");
      }
      this.storeTheme(this.themeBtn);
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
    },
  },
};
</script>
<style scoped>
.nuxt-link-active {
  border-bottom: 2px solid #ff4081;
  color: #ff4081;
}
.logoStyle {
  border-bottom: none;
}
</style>
