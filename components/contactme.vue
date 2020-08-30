<template>
  <!-- Form field -->

  <div
    class="flex w-full h-screen justify-center bg-background-ter items-center py-12 bg-no-repeat bg-center bg-contain"
    style="background-image:url('/bgdesign.svg')"
  >
    <div class="w-4/5 container flex flex-col md:flex-row">
      <div class="h-full w-full flex flex-col">
        <div class="mb-1">
          <h3 class="text-5xl font-bold text-txt-pri">Contact</h3>
        </div>
        <img src="/contactme.svg" alt="contact me illustration" />
      </div>
      <form
        class="w-full h-full p-8 bg-white rounded shadow"
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

