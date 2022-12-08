<script>
import { mapActions, mapState } from "pinia";
import { useMemberStore } from "../stores/member";

export default {
  name: "OshiPage",
  computed: {
    ...mapState(useMemberStore, ["oshi"]),
  },
  methods: {
    ...mapActions(useMemberStore, ["getOshi"]),
  },
  created() {
    this.getOshi();
  },
};
</script>

<template>
  <!-- <pre>
        {{ oshi }}
    </pre
  > -->
  <section class="relative block h-500-px bg-pink-300 ">
    <div class="flex justify-center text-7xl font-bold text-yellow-100 ">

        <h1>My Oshi</h1>

    </div>
  </section>
  <section class="relative py-16 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img
                  alt="..."
                  :src=oshi.Oshi.Member.imageUrl
                  class="shadow-xl rounded-full h-auto align-middle border-none relative -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  style="aspect-ratio: 1/1; object-fit: cover"
                />
              </div>
            </div>
            <div
              class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
            >
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <RouterLink to="/members">
                  <button
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Back
                  </button>
                </RouterLink>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                    >{{ oshi.Oshi.Member.totalShow }}</span
                  ><span class="text-sm text-blueGray-400">Total Show</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                    >{{ oshi.Oshi.Member.bloodType }}</span
                  ><span class="text-sm text-blueGray-400">Gol.Darah</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                    >{{ oshi.Oshi.Member.height }}</span
                  ><span class="text-sm text-blueGray-400">Tinggi</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-14">
            <h3
              class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2"
            >
              {{ oshi.Oshi.Member.nickName }}
            </h3>
            <div
              class="text-sm leading-normal mt-0 mb-2 text-pink-400 font-bold uppercase"
            >
              {{ oshi.Oshi.Member.fullName }}
            </div>
            <div class="mb-2 text-blueGray-600 mt-10">
              <i class="fab fa-instagram"></i>
              <a class="ml-2" href="">{{ oshi.Oshi.Member.instagram }}</a>
            </div>
            <div class="mb-2 text-blueGray-600">
              <i class="fab fa-twitter"></i>
              <a class="ml-1" href="">{{ oshi.Oshi.Member.twitter }}</a>
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Kalo mau Video call bayar bro, ada eventnya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
      <div class="container mx-auto px-4">
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-6/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Oshinya
              <a
                href="https://github.com/Adrian1414"
                class="text-blueGray-500 hover:text-gray-800"
                target="blank"
                >{{ oshi.username }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
