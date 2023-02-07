<script>
import { mapActions, mapState } from "pinia";
import Loading from "../components/Loading.vue";
import { useMemberStore } from "../stores/member";

export default {
  name: "HomeView",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Development"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 100,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  computed: {
    ...mapState(useMemberStore, ["userData"]),
  },
  methods: {
    ...mapActions(useMemberStore, ["userProfile"]),
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 50);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 300);
  },
  
};


</script>

<template>
  <div class="bg-pink-200">
    <section
      class="relative bg-[url(https://i.ytimg.com/vi/eq0s1atl_K0/maxresdefault.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Welcome to

            <strong class="block font-extrabold text-rose-700">
              JKT48 Fanpage
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            JKT48 is AKB48's first overseas sister group
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <RouterLink to="/members">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </RouterLink>

            <a
              href="https://jkt48.com/news/list?lang=id"
              target="_blank"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="Youtube-section">
      <div class="bg-pink-300 flex justify-center">
        <h1 class="text-bold flex justify-center text-2xl mt-6 text-red-600">
          <strong>Watch Our Latest Video!</strong>
        </h1>
      </div>
      <div class="bg-pink-300 flex justify-center">
        <div class="grid grid-cols-2 gap-20 p-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AMB_D3V_F1w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KfH37Ac3V0g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="Youtube-section">
      <div class="bg-pink-400 flex justify-center">
        <h1 class="text-bold flex justify-center text-2xl mt-6 text-red-600">
          <strong>Events</strong>
        </h1>
      </div>
      <div class="bg-pink-400 flex justify-center">
        <div class="">
            <!-- <div class=" w-96 h-96 bg-white"> <img src="https://cdn-image.hipwee.com/wp-content/uploads/2022/03/hipwee-pic.jkt48.jpg" alt="">  </div>
            <div class=" w-96 h-96 bg-white"> tes </div>
            <div class=" w-96 h-96 bg-white"> tes </div> -->
      
            <div class="container">
    <h1 class="font-bold" >
     This Section's under
      <span class="typed-text font-extrabold ">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
        </div>
      </div>
    </section>

  </div>
</template>
