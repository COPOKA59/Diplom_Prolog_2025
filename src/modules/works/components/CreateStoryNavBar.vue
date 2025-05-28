<template>
    <div class="sidebar" id="sidebar-main">
            <ul>
                <li>
                    <RouterLink to="/editing/header" active-class="active">
                    Шапка
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing/structure" active-class="active">
                    Структура
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing/characteristics" active-class="active">
                    Характеристики
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing/world" active-class="active">
                    Миры
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing/characters" active-class="active">
                    Персонажи
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing/contents" :class="{ active: $route.path.startsWith('/editing/contents') }">
                    Содержание
                    </RouterLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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