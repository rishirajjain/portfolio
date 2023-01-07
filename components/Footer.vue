<template>
  <div class="text-txt-sec h-full md:h-screen" id="contact">
    <contactme/>
    <div class="flex flex-col w-full items-center justify-center bg-background-ter">
      <div class="w-12 text-center text-sm text-txt-sec">
        <hr />
      </div>
      <p class="text-xs my-2">All rights reserved &copy; Rishi Raj Jain {{getYear()}}</p>
    </div>
  </div>
</template>

<script>
import contactme from "@/components/contactme";
export default {
  components: {
    contactme,
  },
  methods:{
    getYear(){
     return new Date().getFullYear();
    }
  }
  };
</script>

<style>
/* .footer {
  background-color: #263238;
} */
</style>
