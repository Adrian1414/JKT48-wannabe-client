<script>
import { mapActions } from "pinia";
import { useMemberStore } from "../stores/member";

export default {
  name: "RegisterView",
  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
        profilePicture: "",
      },
    };
  },
  methods: {
    ...mapActions(useMemberStore, ["register"]),
    changeFile() {
      this.input.profilePicture = this.$refs.file.files[0];
    },
  },
};
</script>

<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center mb-5">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl text-red-500">
          Register 
        </h1>

        <p class="mt-4 text-gray-500">
          Bergabunglah menjadi anggota JKT48 Official Fans Club (OFC)! Pada
          program JKT48 OFC Renewal 2021 ini, banyak benefit yang bisa kamu
          dapatkan! Kamu bisa menghadiri event khusus OFC, melakukan pemesanan
          tiket lebih awal dari non-OFC, dan banyak benefit lainnya.
        </p>
      </div>

      <form
        action=""
        @submit.prevent="register(input)"
        class="mx-auto mt-8 mb-0 max-w-md space-y-4"
        enctype="multipart/form-data"
      >
        <div>
          <label for="username" class="sr-only">Username</label>
          <div class="relative">
            <input
              type="text"
              v-model="input.username"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter username"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative">
            <input
              type="email"
              v-model="input.email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              type="password"
              v-model="input.password"
              id="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

     
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="file_input"
          >Profile Picture</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          ref="file"
          type="file"
          @change="changeFile"
        />
        <p
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Already Have account?
            <RouterLink to="/login"
              ><a href="#" class="underline">Sign in</a></RouterLink
            >
          </p>

          <button
            type="submit"
            class="ml-3 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-500 shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://jkt48.com/images/oglogo.png "
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>
