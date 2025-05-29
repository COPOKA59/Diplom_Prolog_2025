<template>
    <div class="sidebar" id="sidebar-main">
            <ul>
                <li v-for="route in routes">
                    <RouterLink :to="route.path" active-class="active"
                    :class="{ active: route.extended && $route.path.startsWith(route.path) }">
                    {{ route.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    routes: Object
});
</script>

<style scoped>
#sidebar-main {
    float: left;
    padding: 0;

    height: calc(100vh - var(--header-height));
    position: sticky;
    left: 0;
    top: var(--header-height);
    background-color: var(--main-dark-color);
    }
#sidebar-main a {
    border-radius: 0;
    padding: 20px 25px;
}
#sidebar-main .active {
    background-color: var(--p-surface-600);
}
@media (max-width: 600px) {
    #sidebar-main {
        position: static;
        width: 100%;
        height: auto;

        clear: both;
        float: none;
    }
    #sidebar-main ul {
        display: flex;
        /* flex-direction: row;
        justify-content: flex-start; */
        flex-wrap: wrap;
    }
    #sidebar-main a {
        padding: 15px 10px;
        justify-content: center;
    }
    #sidebar-main li {
        flex: 1 1 auto; /* Элементы будут расти и сжиматься */
    }

}
</style>