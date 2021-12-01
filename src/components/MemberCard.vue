<template>
    <router-link
        class="router_link"
        :to="{ name: 'MemberDetails', params: { id: memberDetail.Name } }"
    >
        <div class="card_container">
            <div class="card_header">
                <h2>{{ memberDetail.Name }}</h2>
                <div>green</div>
            </div>
            <div>
                <div class="card_label">
                    Joining Date:
                    <span>{{ memberDetail.JoiningDate }}</span>
                </div>
                <div class="card_label">
                    Mobile Number:
                    <span>{{ memberDetail.MobileNumber }}</span>
                </div>
                <div class="card_label">
                    Joining Date:
                    <span>{{ memberDetail.AltMobileNumber }}</span>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'MemberCard',
    props: ['memberDetail'],
    created() {
        console.log(this.memberDetail);
    },
}
</script>

<style scoped>
.router_link {
    text-decoration: none !important;
}
.card_container {
    cursor: pointer;
}
</style>