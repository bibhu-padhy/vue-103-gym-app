<template>
  <div class="main_container">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header },
  methods: {
    isUserLoggedIn() {
      if (localStorage.getItem('credentials')) {
        this.$router.push('/home')
      } else {
        this.$router.push('/login')
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
* {
  margin: 0;
  padding: 0;
}

label {
  display: block;
  margin: 5px 0;
}

input,
textarea {
  padding: 0.375rem 0.75rem;
  outline: none;
}

.main_container {
  margin: auto;
  max-width: 768px;
}
</style>
