<template>
  <div class="loading-page z-50 flex justify-center items-center" v-if="loading">
    <div class="loader-container">
      <div class="loader">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
      </div>
      <div class="text-white bold">Good things take time 😊</div>
    </div>
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
  background: rgba(48, 48, 48, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
}

.loader .circle {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: bounce 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

.circle-1 {
  background: linear-gradient(135deg, #ff4a4a, #ffad4a);
  animation-delay: -0.3s;
}

.circle-2 {
  background: linear-gradient(135deg, #ffad4a, #4aff82);
  animation-delay: -0.15s;
}

.circle-3 {
  background: linear-gradient(135deg, #4aff82, #4a6aff);
}

.circle-4 {
  background: linear-gradient(135deg, #4a6aff, #ff4a4a);
  animation-delay: 0.15s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

</style>
