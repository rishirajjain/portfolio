const path = require("path");
const axios = require("axios");
export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  loading: "~/components/loading.vue",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Rishi Raj Jain - UI/UX designer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:description",
        name: "description",
        content:
          "Portfolio of Rishi Raj Jain, I also Blog about UI/UX and some things that I find interesting. "
      },
      {
        hid: "description",
        name: "description",
        content:
          "Portfolio of Rishi Raj Jain, I also Blog about UI/UX and some things that I find interesting. "
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Work+Sans"
      }
    ]
  },

  generate: {
    routes: function(callback) {
      const token = `LTOEkYkK1LmeCtIDvKEYJQtt`;
      const version = "published";
      let cache_version = 0;

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"]; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                routes.push("/" + res.data.links[key].slug);
              });

              callback(null, routes);
            });
        });
    }
  },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/google-analytics",
    "@nuxtjs/axios",

    "@nuxtjs/pwa",
    "vue-social-sharing/nuxt",
    "@nuxtjs/robots",

    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? "LTOEkYkK1LmeCtIDvKEYJQtt"
            : "4QK3DDvoBN5f1598c4ziTQtt",
        cacheProvider: "memory"
      }
    ],
    "@nuxtjs/sitemap"
  ],
  sitemap: {
    hostname: "https://rishirajjain.com",
    gzip: true
  },
  googleAnalytics: {
    id: "UA-173900177-1"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
/*   build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "postcss-nested": {}
      }
    }
  } */
};
