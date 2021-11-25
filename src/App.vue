<template>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  methods: {
    isUserLoggedIn() {
      if (localStorage.getItem('credentials')) {
        this.$router.push('Home')
      } else {
        this.$router.push('Login')
      }
    }
  },
  beforeMount() {
    this.isUserLoggedIn()
  },
  data() {
    return {

    }
  },
}
</script>
<style>
</style>
