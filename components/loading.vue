<template>
  <div class="loading-page z-50 flex justify-center items-center" v-if="loading">
      <img src="/loading.gif" alt="Loading..." class="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.start();
  },
  mounted() {
    this.finish();
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,10,18);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
