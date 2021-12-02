<template>
    <h1>{{ $store.state.Name }}</h1>
    <MemberCard v-for="(item) in $store.state.membersList" :key="item.id" :memberDetail="item" />
</template>

<script>
import Header from '../components/Header.vue';
import MemberCard from '../components/MemberCard.vue';

import { mapActions } from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            membersList: null
        }
    },
    components: {
        Header,
        MemberCard
    },
    methods: {
        ...mapActions(['getMembersList']),
    },
    mounted() {
        this.getMembersList()
    },

}
</script>

<style></style>