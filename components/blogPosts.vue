<template>
  <div class="mt-4 bg-white rounded-md shadow p-8">
    <div>
      <div class="flex flex-wrap justify-between items-center">
        <h2 class="text-gray-800 text-3xl font-semibold">{{ head }}</h2>
      </div>

      <div class="mt-8 text-base">
        <div class="space-y-8" v-html="richtext"></div>
      </div>
      <hr class="mt-16 mb-4" />
      <div class="flex space-x-4 items-center">
        <img
          src="/rishi.jpg"
          alt="author"
          class="rounded-full w-12 h-12 self-start"
        />
        <div class="flex flex-col">
          <p class="font-bold text-base">
            Words by,
            <br />Rishi Raj Jain
          </p>
          <p class="text-xs">Published on {{ formatDate(publishDate) }}</p>
          <div class="flex mt-8">
            <ShareNetwork
              class=" cursor-pointer flex"
              network="twitter"
              :url="'https://rishirajjain.com' + fullPath"
              :title="titleForShare || 'Not Set'"
            >
              <img src="/social/twitter.svg" alt="" class=" w-6 h-6" />
              <p class=" self-center ml-1 text-xs">Share on Twitter</p>
            </ShareNetwork>
            <ShareNetwork
              class=" cursor-pointer ml-2 flex"
              network="facebook"
              :url="'https://rishirajjain.com' + fullPath"
              :title="titleForShare || 'Not Set'"
            >
              <img src="/social/fb.svg" alt="" class=" w-6 h-6" />
              <p class=" self-center ml-1 text-xs">Share on facebook</p>
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
          >
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPath: this.$route.path
    };
  },
  props: ["head", "content", "type", "hashtags", "publishDate", "desc"],
  computed: {
    richtext() {
      return this.content
        ? this.$storyapi.richTextResolver.render(this.content)
        : "";
    },
    titleForShare() {
      var title = this.head;
      return title;
    }
  },
  mounted() {
    window.fbAsyncInit = function() {
      FB.init({ cookie: true, xfbml: true, version: "v4.0" });
    };
    (function(d, s, id) {
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
    }
  },
  head() {
    return {
      title: this.head,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.desc
        }
      ]
    };
  }
};
</script>
