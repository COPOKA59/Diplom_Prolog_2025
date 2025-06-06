<template>
    <Card style="width: 14rem; overflow: hidden;" 
          class="small-story-card"
          :key="id">
        <template #content>
            <RouterLink v-if="id" :to="{ name: 'StoryPage', params: { id: id } }">
                <img :src="img_url ? img_url : '/src/assets/img/default_cover.svg'" />
                <div class="story-name">
                    <span>{{ title }}</span>
                </div>
            </RouterLink>
        </template>
    </Card>
</template>

<script setup>
import { Card } from 'primevue';

const props = defineProps({
    id: Number,
    title: String,
    img_url: String,
})
</script>

<style scoped>
.small-story-card :deep(.p-card-body) {
    padding: 8px;
    background-color: var(--main-blue-color);
}
.small-story-card :deep(.p-card-content) {
    position: relative;
}
.small-story-card :deep(.p-card-content) a {
    color: var(--main-light-color);
}
.small-story-card img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;

    border-radius: 10px;
}
.story-name {
    position: absolute;
    bottom: 1px;

    width: calc(100% - 16px);
    border-radius: 10px;
    margin: 8px;
    padding: 8px;

    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.282);

    /* многоточие */
    /* display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: normal;
    
    line-height: 1.4em;
    max-height: 5.6em;  */

    /* версия 1 (без многоточия) */
    /* max-height: 4em;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap; */

    /* версия 2 */
    /* display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    max-height: 4em;
    line-height: 1.4em; */
}
.story-name span {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}


/* .story-name {
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(2px);
    border-radius: 10px;

    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: normal;
    
    line-height: 1.8em;
    max-height: 10.6em; 
} */
</style>