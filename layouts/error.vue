<template>
  <div class="flex justify-center">
    <div class="container flex flex-col w-4/5">
      <nuxt-link to="/home">
        <span class="underline text-txt-sec">Go back</span>
      </nuxt-link>
      <div v-if="error.statusCode === 404" class="flex justify-center">
        <img src="/404illus.svg" alt="404 not found" class="w-4/5" />
      </div>
      <div v-else class="flex justify-center">
        <p>An error occurred</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>