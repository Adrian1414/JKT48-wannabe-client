<script>
import { mapActions, mapState } from 'pinia';
import { useMemberStore } from '../stores/member';



export default {
    name: "HomeView",  computed: {
    ...mapState(useMemberStore, ['userData'])
  },
  methods: {
    ...mapActions(useMemberStore, ['userProfile'])
  }
 
}
</script>

<template>

  <div class="bg-pink-200" >

    <section
      class="relative bg-[url(https://media.hitekno.com/thumbs/2022/02/22/31129-marsha-jkt48-valkyrie48/730x480-img-31129-marsha-jkt48-valkyrie48.jpg)] bg-cover bg-center bg-no-repeat"
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
            <RouterLink to="/members" >
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
        <h1 class="text-bold flex justify-center text-2xl text-red-600"><strong>Visit Our Youtube Channel</strong></h1>
        <div class="bg-pink-300 flex justify-center">
          <div class="grid grid-cols-2 gap-20 p-5 ">
         
            <iframe width="500" height="280" src="https://www.youtube.com/embed/eq0s1atl_K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="ml-5"  width="500" height="280" src="https://www.youtube.com/embed/fEQbUktWRLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
       
        </div>
    
      </section>
  </div>

 
 

</template>
