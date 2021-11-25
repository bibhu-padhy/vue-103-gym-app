<template>
    <div class="header_container">
        <button>Add</button>
        <button @click="toggleMenu = !toggleMenu">
            Menu
            <transition name="menu">
                <div>
                    <ul
                        @click="checkClick"
                        ref="menuContainer"
                        v-if="toggleMenu"
                        class="menu_container"
                    >
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </transition>
        </button>
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        checkClick(e) {
            console.log(e.target);
            console.log(this.$refs.menuContainer);
            if (e.target === this.$refs.menuContainer) {

                // this.toggleMenu = false
            }
        }
    },
    data() {
        return {
            toggleMenu: false
        }
    },
}
</script>
<style scoped>
.header_container {
    height: 70px;
    width: 768px;
    display: flex;
    margin: auto;
    background-color: antiquewhite;
    justify-content: flex-end;
    align-items: center;
}

button {
    margin: 0 10px;
}

.menu_container {
    border-radius: 10px;
    width: 100px;
    background-color: wheat;
    z-index: 2;
    position: absolute;
}
.menu-enter-active,
.menu-leave-active {
    transition: 0.2s ease-in all;
}

.menu-enter-from,
.menu-leave-to {
    transform: translateY(+10px);
}
</style>