<template>
    <div class="sidebar" id="sidebar-main">
            <ul>
                <li>
                    <RouterLink to="/editing">
                    <span>Шапка</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing">
                    <span>Структура</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing">
                    <span>Характеристики</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing">
                    <span>Миры</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing">
                    <span>Персонажи</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/editing">
                    <span>Содержание</span>
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
    width: 11.25em;
    float: left;
    padding: 0.5em;

    height: calc(100vh - var(--header-height));
    position: sticky;
    left: 0;
    top: var(--header-height);
    background-color: var(--main-dark-color);
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
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}
</style>