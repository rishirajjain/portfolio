<template>
  <!-- Form field -->

  <div class="flex text-txt-pri w-full h-full justify-center bg-background-sec items-center">
    <div class="my-24 md:my-0 w-4/5 container flex flex-col md:flex-row">
      <div class="h-full w-full flex flex-col mr-6">
        <div class="mb-1 md:w-11/12">
          <!-- <img src="/contactme.svg" alt="contact me illustration" /> -->
          <h3 class=" text-3xl md:text-5xl font-bold">Grab a coffee with me?☕</h3>
          <p
            class=" text-sm md:text-xl mt-4 md:w-10/12 text-gray-300"
          >If you're looking for someone to help bring your ideas to life, drop me a message! I'm always up for a creative challenge</p>
        </div>

        <div class="flex my-8">
          <a
            href="https://www.linkedin.com/in/rishiraj-jain"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex gap-2 flex-col justify-center items-center mr-4 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/linkedin.svg" class=" h-12 rounded" alt="linkedIn profile" />
            <p class="text-xs">LinkedIn</p>
          </a>
          <a
            href="https://behance.com/rishirajjain98"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex gap-2  flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/behance.svg" class="w-64 h-12" alt="twitter profile" />
            <p class="text-xs">Behance</p>
          </a>
          <a
            href="https://www.instagram.com/rishirajjain.uix/"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex gap-2  flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/instagram.svg" class="w-64 h-12" alt="instagram profile" />
            <p class="text-xs">Instagram</p>
          </a>
          <a
            href="https://github.com/rishirajjain"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex gap-2  flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/github.svg" class="w-64 h-12" alt="github profile" />
            <p class="text-xs">Github</p>
          </a>

         
        </div>
      </div>
      <form
        class="w-full h-full p-12 self-center bg-background-ter text-txt-sec rounded-md shadow"
        name="contactForm"
        action="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contactForm" />
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/4">
            <label class="block font-bold mb-1" for="inline-full-name">Name</label>
          </div>
          <div class="md:w-4/5">
            <input
              class=" bg-gray-800 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-blue-700"
              id="inline-full-name"
              type="text"
              name="name"
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/4">
            <label class="block font-bold mb-1" for="inline-email">Email</label>
          </div>
          <div class="md:w-4/5">
            <input
              class="bg-gray-800 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none  focus:border-blue-700"
              id="inline-email"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/4">
            <label class="block font-bold mb-1" for="inline-message">Message</label>
          </div>
          <div class="md:w-4/5">
            <textarea
              class="bg-gray-800 appearance-none border-2 border-gray-500 rounded form-textarea mt-1 block w-full py-2 px-4 text-white leading-tight focus:outline-none  focus:border-blue-700"
              rows="3"
              name="message"
            ></textarea>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/4"></div>
          <div class="md:w-4/5">
            <button
              class="btncolor text-white focus:outline-none focus:shadow-outline w-full px-8 py-2 shadow rounded"
              type="submit"
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

