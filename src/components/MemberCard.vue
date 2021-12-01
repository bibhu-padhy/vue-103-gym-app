<template>
    <router-link
        v-if="memberDetail"
        class="router_link"
        :to="{ name: 'MemberDetails', params: { id: memberDetail.id } }"
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
    created() { },
}
</script>

<style scoped>
.router_link {
    text-decoration: none !important;
    color: rgb(94, 94, 94);
}
.card_container {
    cursor: pointer;
    margin-top: 10px;
    border: 1px solid burlywood;
    padding: 10px;
    max-width: 400px;
    text-align: center;
}
</style>