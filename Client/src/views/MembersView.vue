<script>
import { mapActions, mapState } from 'pinia';
import MemberCard from '../components/MemberCard.vue';
import { useMemberStore } from '../stores/member';

export default {
  name: "MembersView",
  components: { MemberCard },
  computed: {
    ...mapState(useMemberStore, ["members"]),
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

  <div class="grid grid-cols-5 gap-10 p-10 bg-pink-100">
   
        <MemberCard v-for="member in members" 
        :key="member.id"
        :member="member"
        />
        


</div>
</template>
