<script>
import { mapActions, mapState } from "pinia";
import { useMemberStore } from "../stores/member";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useMemberStore, ["isLogin", 'userData']),
  },
  methods: {
    ...mapActions(useMemberStore, ["logout", 'userProfile']),
  },
};
</script>

<template>
  <nav  
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-cente r justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap uppercase text-white"
          href=""
        >
        <P class="text-2xl text-red-200">JKT48</P>
          <img src="" alt="" />
        </a>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none ml-auto items-center">
          <li class="nav-item">
            <RouterLink to="/"
              ><a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Home
              </a></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/members">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Members
              </a></RouterLink
            >
          </li>

          <li class="nav-item" v-if="isLogin">
            <RouterLink to="/oshi">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Oshi
              </a></RouterLink
            >
          </li>
          <p class="text-2xl"><strong>|</strong></p>

          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/login"
              ><a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Login
              </a></RouterLink
            >
          </li>

          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/register">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
              >
                Register
              </a></RouterLink
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <RouterLink to="/"
              ><a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#"
                @click.prevent="logout"
              >
                Logout
              </a></RouterLink
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            
            
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#"
                    @click.prevent="$router.push('/users/' + userData.username)"
                  >
              
                    <span class="material-symbols-outlined"> person </span>
                    Profile
                  </a>
                
          </li>
  
        </ul>
      </div>
    </div>
  </nav>

 
</template>
