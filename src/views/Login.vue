<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <form class="mt-8 space-y-6" @submit.prevent="login">
                <h2>Please {{ btnText }}</h2>

                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                            v-model="email"
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            v-model="password"
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button type="submit">{{ btnText }}</button>
                    <button type="button" @click="btnText = 'Signup'">New User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import authService from "../services/auth.service"
export default {
    name: "Login",
    methods: {
        async login() {
            if (this.email.length > 5 && this.password.length > 5) {
                const user = await authService.logIn(this.email, this.password)
                if (user.user.uid) {
                    console.log(user);
                }
                // this.$router.push({ name: 'Home', })
            } else {
                alert('Provide a proper credentials')
            }
        }
    },
    data() {
        return {
            email: null,
            password: null,
            btnText: 'Signin'
        }
    },
    mounted() {
        authService.getLogedInUser().then(res => {
            console.log(res.email);
        })
    },
}

</script>
<style scoped>
.login_container {
    display: grid;
    place-items: center;
    height: 100vh;
}
</style>