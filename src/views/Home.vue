<template>
    <h1>{{ $store.state.Name }}</h1>
    <MemberCard v-for="(item) in $store.state.membersList" :key="item.id" :memberDetail="item" />
</template>

<script>
import Header from '../components/Header.vue';
import MemberCard from '../components/MemberCard.vue';

import { useStore } from 'vuex'

export default {
    name: 'Home',
    data() {
        return {
            membersData: null
        }
    },
    components: {
        Header,
        MemberCard
    },
    async created() {
        useStore().commit('getMembersList');
    },
}
</script>

<style></style>