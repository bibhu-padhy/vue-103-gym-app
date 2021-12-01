<template>
    <h1>Member Details {{ $route.params.id }}</h1>
    <MemberCard :memberDetail="$store.state.memberDetail" />
</template>

<script>
import MemberCard from '../components/MemberCard.vue'
import { useStore } from 'vuex';
export default {
    name: 'MemberDetails',
    props: ['id'],
    created() {
        useStore().commit('getMemberDetail', this.id);
    },
    components: { MemberCard }
}
</script>