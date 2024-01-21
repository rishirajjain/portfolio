<template>
  <div>
    <div class="relative inline-block text-left">
      <div>
        <span class="rounded-md shadow-sm">
          <div class="btn-dance w-full rounded-md px-6 py-2 hover:bg-gray-800">
            <button
            type="button"
            class="pointer-events-auto text-base inline-flex justify-center w-full rounded-md  text-txt-pri leading-5 focus:outline-none "
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
          </div>
          <button
            v-if="showMenu"
            @click="showMenu = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full bg-gray z-30 opacity-25 cursor-default focus:outline-none"
          ></button>
        </span>
      </div>

      <div
        class="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg"
        v-if="showMenu"
      >
        <div class="rounded-md bg-background-crdLig shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              class="block text-txt-pri px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              href="#contact"
            >Contact Me</a>
            <a
              href="https://drive.google.com/file/d/11HEywCl2B-2jiuuWZ2FL8E_MAEdeybIB/view?usp=sharing"
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
@keyframes border-dance {
  from {
        transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
    }

    to {
        transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
    }
}

.btn-dance {
  --offset: 1px;
  position: relative;
  overflow: hidden;
  background: rgb(0, 19, 34)
}
.btn-dance button{
    background: transparent;
    color: white;
    position: relative;
    inset: 0;
    z-index: 10;
}
.btn-dance::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1;
  width: 100%;
  background: conic-gradient(transparent 270deg, white, transparent);
  animation: border-dance 2s linear infinite;
}

.btn-dance::after {
  content: '';
  background: inherit;
  border-radius: inherit;
  position: absolute;
  inset: var(--offset);
  height: calc(100% - 2 * var(--offset));
  width: calc(100% - 2 * var(--offset));
}


</style>

