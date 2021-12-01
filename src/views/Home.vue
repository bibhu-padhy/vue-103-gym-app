<template>
    <MemberCard v-for="(item,index) in membersData" :key="index" :memberDetail="item" />
</template>

<script>
import Header from '../components/Header.vue'
import MemberCard from '../components/MemberCard.vue'
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
    created() {
        this.membersData = JSON.parse(localStorage.getItem('memberData'));
        console.log(this.membersData);
    },
}
</script>

<style></style>