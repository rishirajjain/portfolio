<template>
  <!-- Form field -->

  <div class="flex text-txt-pri w-full h-screen justify-center bg-background-ter items-center">
    <div class="w-4/5 container flex flex-col md:flex-row">
      <div class="h-full w-full flex flex-col mr-6">
        <div class="mb-1">
          <!-- <img src="/contactme.svg" alt="contact me illustration" /> -->
          <h3 class="text-5xl font-bold">Grab a coffee with me?☕</h3>
          <p
            class="text-xl mt-4"
          >Have no hesitation in reaching out to me. I'm up for discussions, ideas anytime of the day :)</p>
        </div>

        <div class="flex my-8">
          <a
            href="https://www.linkedin.com/in/rishiraj-jain"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/linkedin.svg" class="w-64 h-6" alt="linkedIn profile" />
            <p class="text-xs">LinkedIn</p>
          </a>
          <a
            href="https://twitter.com/rishirajjain98"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/twitter.svg" class="w-64 h-6" alt="twitter profile" />
            <p class="text-xs">Twitter</p>
          </a>

          <a
            href="https://github.com/rishirajjain"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/github.svg" class="w-64 h-6" alt="github profile" />
            <p class="text-xs">Github</p>
          </a>

          <a
            href="https://www.instagram.com/rish._/"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center w-24 p-2"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/instagram.svg" class="w-64 h-6" alt="instagram profile" />
            <p class="text-xs">Instagram</p>
          </a>
        </div>
      </div>
      <form
        class="w-full h-full p-8 self-center bg-white text-black rounded-sm shadow"
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
              class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              class="bg-gray-100 appearance-none border-2 border-gray-200 rounded form-textarea mt-1 block w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              rows="3"
              name="message"
            ></textarea>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/4"></div>
          <div class="md:w-4/5">
            <button
              class="btncol text-white focus:outline-none focus:shadow-outline w-full px-8 py-2 shadow rounded"
              type="submit"
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

