<template>
    <h1>Member Details {{ $route.params.id }}</h1>
    <MemberCard :memberDetail="getMember" />
</template>

<script>
import MemberCard from '../components/MemberCard.vue'
export default {
    name: 'MemberDetails',
    props: ['id'],
    computed: {
        getMember() {
            const memberList = JSON.parse(localStorage.getItem('memberData'))
            return memberList.find(member => member.Name === this.$route.params.id)
        }
    },
    components: { MemberCard }
}
</script>