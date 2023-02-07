<script>
import { mapActions, mapState } from 'pinia';
import Loading from '../components/Loading.vue';
import MemberCard from '../components/MemberCard.vue';
import { useMemberStore } from '../stores/member';

export default {
  name: "MembersView",
  components: { MemberCard, Loading },
  computed: {
    ...mapState(useMemberStore, ["members", 'isLoading']),
  },
  methods: {
    ...mapActions(useMemberStore, ["fetchMember"]),
  },
  created() {
    this.fetchMember();
  },
};
</script>

<template>
  <div class="bg-pink-100" >
    <Loading v-if="isLoading === true" />

    <div class="grid grid-cols-5 gap-10 p-10 ">
     
          <MemberCard v-for="member in members" 
          :key="member.id"
          :member="member"
          />
  </div>
  </div>
</template>
