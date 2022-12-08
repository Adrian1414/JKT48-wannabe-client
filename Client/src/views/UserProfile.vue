<script>
import { mapActions, mapState } from "pinia";
import { useMemberStore } from "../stores/member";

export default {
  name: "UserProfile",
  computed: {
    ...mapState(useMemberStore, ["userData", 'official']),
  },
  methods: {
    ...mapActions(useMemberStore, ["userProfile", 'upgradeOfficialFans']),
  },
  created() {
    this.userProfile();

  },
};
</script>

<template>
 <div class=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
  <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
    <div class="h-2/4 sm:h-64 overflow-hidden">
      <img class="w-full rounded-t"
      src="https://upload.wikimedia.org/wikipedia/commons/a/ad/JKT48_Vector_Logo.png"
        alt="" />
    </div>
    <div class="flex justify-start px-5 -mt-12 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="" 
        :src=userData.profilePicture
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">{{userData.username}}</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">{{userData.email}}</p>
        <div class="flex justify-center text-bold text-4xl text-red-500 mb-4">
            Oshi
            
        </div>
        <span clspanss="block relative h-32 w-32">
        <img alt="" 
        :src=userData.Oshi.Member.imageUrl
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
        <div
        
          class="justify-center px-4 py-2 cursor-pointer bg-pink-700 max-w-min mx-auto mt-4 rounded-lg text-gray-300 hover:bg-yellow-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
         <button  @click.prevent="$router.push('/members/' + userData.Oshi.Member.nickName)">

             {{userData.Oshi.Member.nickName}}
         </button>
        </div>  
    </div>
    <div id="userStatus" class="flex justify-center text-5xl mt-6 text-yellow-300 ">
        {{userData.status}}
      </div>
      <button type='button'
      @click="upgradeOfficialFans"
      v-if="!official"
      class='flex break-inside justify-center bg-black rounded-3xl px-8 py-4 mb-4  dark:bg-slate-800 dark:text-white'>
      <div class='flex items-center justify-center flex-1'>
        <span class='text-lg font-medium text-white'>Get Official Fans? </span>
        <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' clipRule='evenodd'
            d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
            fill='white' />
        </svg>
      </div>
    </button>

    </div>
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

#userStatus {
    font-family: 'Secular One', sans-serif;
}
</style>