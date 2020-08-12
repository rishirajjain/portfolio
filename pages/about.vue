<template>
  <div class="flex justify-center items-center py-12">
    <div
      class="container flex flex-col-reverse md:flex-row w-full items-center justify-center md:items-start md:w-4/5"
    >
      <div class="flex flex-col w-3/4">
        <h1 class="text-txt-sec font-semibold text-xl md:text-3xl">
          Rishi Raj Jain is a Product Designer who also does some
          FrontEnd development and runs two e-commerce businesses and is a graduate in Electronics and Communication.
          <br />
          <br />He commands the cupid, makes users fall in love with the product.
          He strongly believes in providing value and simplifying people's lives.
        </h1>
        <p class="text-txt-sec text-base md:text-xl font-semibold self-start my-12">
          Rishi is passionate about making sure that systems, interface, semantics, and graphics are human-friendly, aesthetically pleasing, emotive, clear, and usable. He has recently worked in a product company as a Frontend Developer. From workflow diagrams to detailed user interface mockups, Rishi loves crafting on-screen experiences.
          <br />
          <br />Photography, traveling, and reading are some of the things you'd often find him doing. Peep the resume or check out my LinkedIn page to take a closer look at my work history and whatnot.
        </p>
      </div>

      <div class="lg:ml-4 md:w-1/4 mb-8 md:mb-0">
        <img src="/rish.svg" alt="Rishi Raj Jain" class="md:w-full w-64" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About - Rishi Raj Jain",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A little bit of information about Rishi Raj Jain (UI/UX designer). Read on to find out more about me and what I can do for you.",
        },
      ],
    };
  },
};
</script>
