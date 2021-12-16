export const state = () => ({
  workData: {},
  workDataIndi: {},
  blogData: {},
  blogDataIndi: {},
  gallery: {},
  theme: {}
});
export const mutations = {
  SET_DATA_WORK: (state, data) => {
    state.workData = data;
  },
  SET_DATA_W_INDI: (state, data) => {
    state.workDataIndi = data;
  },
  SET_DATA_BLOG: (state, data) => {
    state.blogData = data;
  },
  SET_DATA_B_INDI: (state, data) => {
    state.blogDataIndi = data;
  },
  SET_THEME: (state, currTheme) => {
    state.theme = currTheme;
  },
  SET_GALLERY: (state, data) => {
    state.gallery = data;
  }
};

export const actions = {
  loadWorkData({ commit }) {
    return this.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "work/"
      })
      .then(res => {
        commit(
          "SET_DATA_WORK",
          res.data.stories.map(wp => {
            return {
              id: wp.slug,
              title: wp.content.title,
              description: wp.content.description,
              img: wp.content.displayImage,
              shortdes: wp.content.shortdes
            };
          })
        );
      });
  },
  loadBlogData({ commit }) {
    return this.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "blog/"
      })
      .then(res => {
        commit(
          "SET_DATA_BLOG",
          res.data.stories.map(wp => {
            return {
              id: wp.slug,
              title: wp.content.title,
              description: wp.content.description,
              img: wp.content.displayImage,
              shortdes: wp.content.shortdes,
              tags: wp.content.hashtags.tbody,
              datePub: wp.content.datePub
            };
          })
        );
      });
  },

  loadWorkIndi({ commit }, params) {
    return this.$storyapi
      .get("cdn/stories" + params, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        commit("SET_DATA_W_INDI", {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          type: res.data.story.content.type,
          duration: res.data.story.content.duration,
          myrole: res.data.story.content.myrole,
          whatidid: res.data.story.content.whatidid
        });
      });
  },
  loadBlogIndi({ commit }, params) {
    return this.$storyapi
      .get("cdn/stories" + params, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        commit("SET_DATA_B_INDI", {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          type: res.data.story.content.type,
          tags: res.data.story.content.hashtags.tbody,
          datePub: res.data.story.content.datePub,
          coverImage: res.data.story.content.coverImage.filename
        });
      });
  },
  setTheme({ commit }, currTheme) {
    commit("SET_THEME", currTheme);
  },
  setGallery({ commit }) {
    return this.$storyapi
      .get("cdn/stories/workgallery/", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        // console.log(res);
       console.log(res.data.story.content.images);
        commit("SET_GALLERY", {
          imageLink: res.data.story.content.images
        });
      });
  }
};
