<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useMemberStore } from "../stores/member";

export default {
  name: "MemberCard",
  props: ["member"],
  components: { RouterLink },
  computed: {
    ...mapState(useMemberStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useMemberStore, ['addOshi'])
  }
};
</script>

<template>


  <div
    class=" justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg bg-white  dark:bg-gray-900 dark:text-gray-100"
  >
    <img
      class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg cursor-pointer"
      @click.prevent="$router.push('/members/' + member.nickName)"  
      :src="member.imageUrl"
    />
    <div class=" space-y-4 text-center divide-y divide-gray-700">
      <div class="my-2 space-y-1">
        <h2 class="text-xl font-semibold  sm:text-3xl" style="color: pink;">{{ member.nickName }}</h2>
        <p class="px-5 text-xs sm:text-base dark:text-gray-400" style="color: pink;">
          {{ member.Generasi }}
        </p>
      </div>
      
      <div class="flex justify-center pt-2 space-x-4 align-center">
       <div>

        <button
         @click.prevent="addOshi(member.id)"
          v-if="isLogin"
            class="bg-transparent hover:bg-pink-500 text-red-400 font-semibold hover:text-white py-2 px-4 border mb-4 border-pink-500 hover:border-transparent rounded"
          >
           Oshikuu!
          </button>

          <button
          @click="$router.push('/members/' + member.nickName)"
            class="bg-transparent hover:bg-pink-500 text-red-400 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
          >
            Visit Profile
          </button>
       
       </div>
      </div>
    </div>
  </div>
</template>
