<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <form class="mt-8 space-y-6" @submit="login">
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
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    methods: {
        login(e) {
            e.preventDefault();
            if (this.email.length > 5 && this.password.length > 5) {
                localStorage.setItem('credentials', JSON.stringify({ email: this.email, password: this.password }))
                this.$router.push({ name: 'Home', })
            } else {
                alert('Provide a proper credentials')
            }
        }
    },
    data() {
        return {
            email: null,
            password: null
        }
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