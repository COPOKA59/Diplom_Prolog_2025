<template>
    <div class="sidebar" id="sidebar-main">
            <ul>
                <li v-for="route in routes">
                    <RouterLink :to=" requiresParams ?
                        { name: route.name, params: { [paramName]: paramValue } } : { name: route.name } " 
                    active-class="active">
                    {{ route.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';
const props = defineProps({
    routes: Object,
    requiresParams: Boolean,
    paramName: String
});
const route = useRoute();
const paramValue = ref();

if (props.requiresParams) paramValue.value = route.params[props.paramName];
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
    background-color: var(--p-secondary-600);
}
#sidebar-main a:hover {
  background-color: var(--p-secondary-600);
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



.sidebar ul {
/* Удаляем дефолтные стили для спсика */
list-style-type: none;
padding: 0;
margin: 0;
}

.sidebar li {
/* Расстояние между элементами списка */
/* margin: 15px 0; */
}

.sidebar a {
display: flex;
align-items: center;
text-decoration: none;
color: var(--main-light-color);
padding: 15px;
border-radius: 4px;
transition: background-color 0.2s;
}

.sidebar a:hover {
background-color: var(--p-surface-600);
}
</style>