<template>
  <div class="mt-4 bg-white rounded-md shadow p-7">
    <div>
      <div class="flex flex-col flex-wrap justify-between">
        <h2 class="text-gray-800 text-3xl font-semibold">{{ head }}</h2>
        <p class="text-xs mt-2">Published on {{ formatDate(publishDate) }}</p>
      </div>

      <div class="text-base">
        <div
          class="w-full h-64 bg-contain mb-8 bg-center bg-no-repeat"
          :style="{ 'background-image': 'url(' + coverImg + ')' }"
        ></div>
        <div class="space-y-8" v-html="richtext"></div>
      </div>
      <hr class="mt-16 mb-4" />
      <div class="flex space-x-4 items-center">
        <img src="/rishi.jpg" alt="author" class="rounded-full w-12 h-12 self-start" />
        <div class="flex flex-col">
          <p class>Words by,</p>

          <p class="font-bold mt-2">Rishi Raj Jain</p>

          <div class="flex mt-8">
            <ShareNetwork
              class="cursor-pointer flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              network="twitter"
              :url="'https://rishirajjain.com' + fullPath"
              :title="titleForShare || 'Not Set'"
            >
              <img src="/social/twitter.svg" alt class="w-6 h-6" />
              <p class="self-center ml-1 text-xs">Tweet</p>
            </ShareNetwork>
            <ShareNetwork
              class="cursor-pointer ml-4 flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              network="facebook"
              :url="'https://rishirajjain.com' + fullPath"
              :title="titleForShare || 'Not Set'"
            >
              <img src="/social/fb.svg" alt class="w-6 h-6" />
              <p class="self-center ml-1 text-xs">Share on facebook</p>
            </ShareNetwork>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <client-only>
          <div>
            <div id="fb_thread" class="text-xs-center">
              <div
                class="fb-comments"
                :data-href="'https://rishirajjain.com' + +fullPath"
                data-numposts="5"
              ></div>
            </div>
            <div id="fb-root"></div>
          </div>
        </client-only>
      </div>
      <div class="flex flex-wrap justify-between md:justify-end">
        <div v-for="item in hashtags" :key="item.id" class="mt-8">
          <p
            v-for="item in item.body"
            :key="item.id"
            class="bg-gray-400 mt-2 md:ml-2 text-xs rounded-full px-4 py-1 hover:bg-gray-500"
          >{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPath: this.$route.path,
    };
  },
  props: [
    "head",
    "content",
    "type",
    "hashtags",
    "publishDate",
    "desc",
    "coverImg",
  ],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    },
    titleForShare() {
      var title = this.head;
      return title;
    },
  },
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({ cookie: true, xfbml: true, version: "v4.0" });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    setTimeout(() => {
      this.initCreationFacebookComments();
    }, 2000);
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    initCreationFacebookComments() {
      FB.XFBML.parse();
    },
  },
  head() {
    return {
      title: this.head,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.desc,
        },
      ],
    };
  },
};
</script>
