<template>
  <div ref="cursor" class="cursor">
    <div ref="follower" class="follower"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initCursor();
  },
  methods: {
    initCursor() {
      const cursor = this.$refs.cursor;
      const follower = this.$refs.follower;

      const updatePosition = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      };

      document.addEventListener('mousemove', updatePosition);

      document.addEventListener('mouseover', (e) => {
        if (e.target.matches('button,a,a *,.mouse-event, .mouse-event *')) {
          follower.classList.add('clickable');
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target.matches('button,a,a *,.mouse-event, .mouse-event *')) {
          follower.classList.remove('clickable');
        }
      });
    },
  },
};
</script>

<style>
.cursor {
  position: fixed;
  z-index: 10000;
  pointer-events: none;
  user-select: none;
}

.follower {
  position: fixed;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  margin-top: -12px;
  border-radius: 50%;
  border: 0.5px solid #7404f5;
  background-color: rgba(107, 32, 193, 0.102);
  transition: all 0.20s ease;
  will-change: width, height, background-color;
}

.follower.clickable {
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
  border: 1px solid #7404f5;
}
</style>
