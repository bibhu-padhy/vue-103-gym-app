<template>
    <div class>
        <form @submit.prevent="createMember">
            <div class="form-control">
                <label for="name">Name</label>
                <input v-model="Name" type="text" />
            </div>
            <div class="form-control">
                <label for="mobile">Mobile</label>
                <input v-model="MobileNumber" type="number" />
            </div>
            <div class="form-control">
                <label for="altMobileNumber">Alt Mobile Number</label>
                <input v-model="AltMobileNumber" type="number" />
            </div>
            <div class="form-control">
                <label for="joiningDate">Joining Date</label>
                <input v-model="JoiningDate" type="date" />
            </div>
            <div class="form-control">
                <label for="address">Address</label>
                <textarea v-model="Address" cols="30" rows="5"></textarea>
            </div>
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import MemberListService from '../services/memberList';

export default {
    data() {
        return {
            filteredText: '',
            Name: '',
            MobileNumber: '',
            AltMobileNumber: '',
            JoiningDate: '',
            Address: '',
        }
    },
    methods: {
        async createMember(e) {
            const currentMember = {
                Name: this.Name,
                MobileNumber: this.MobileNumber,
                AltMobileNumber: this.AltMobileNumber,
                Address: this.Address,
                DueDate: '',
                JoiningDate: this.JoiningDate,
                status: 1,
                Active: true
            }
            const memberId = await MemberListService.addMember(currentMember)
            if (memberId) {
                this.clearForm()
                alert('Member created successfully')
            }
        },
        clearForm() {
            this.Name = '';
            this.MobileNumber = '';
            this.AltMobileNumber = '';
            this.Address = '';
            this.DueDate = '';
            this.JoiningDate = '';
            this.$router.push('/home')
        }
    },
    mounted() {

    },
};
</script>

<style>
</style>
