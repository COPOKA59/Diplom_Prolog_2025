<template>
    <Card class="story-card-v2" :key="id">
        <template #title>
            <v-col>
            <RouterLink :to="{ name: 'StoryPage', params: { id: id } }">
                {{ title }}
            </RouterLink>
            </v-col>
        </template>
        <template #content>
          <v-container>
            <v-row>
                <!-- class="img-col" cols="12" lg="3" md="3" -->
                <v-col class="img-col" lg="3" md="3">
                    <img :src="img_url"/>
                </v-col>
                
                <v-col class="col-1">
                    <p>
                        <b>Автор:</b> <u> {{ author }}</u>
                    </p>
                    <p> <b>Фандом:</b> оригинальная работа </p>
                    <p> <b>Обновлено:</b> {{ last_update }} </p>
                    <p> <b>Рейтинг:</b> {{ rating }} </p>
                    <p> <b>Направленность:</b> {{ direction }} </p>
                    <p> <b>Размер:</b> {{ size }} </p>
                </v-col>

                <v-col class="col-2">
                    <div class="row-1" v-if="read">
                        <Chip class="read-work-label" label="Прочитано">
                        <template #icon>
                        <img src="@/assets/icons/task_alt_24dp_D9D9D9.svg"/>
                        </template>
                        </Chip>
                    </div>

                    <div class="row-2">
                        <div>
                            0 <Divider class="counter-divider" layout="vertical"/>
                            <img src="@/assets/icons/bookmark_24px_weight_2.5.svg"/>
                        </div>
                        <div>
                            0 <Divider class="counter-divider" layout="vertical"/>
                            <img src="@/assets/icons/thumbs-up_24px_weight_2.5.svg"/>
                        </div>
                        <div>
                            0 <Divider class="counter-divider" layout="vertical"/>
                            <img src="@/assets/icons/message-circle_24px_weight_2.5.svg"/>
                        </div>
                    </div>
                </v-col>
            </v-row>
            

            <v-row>
                <v-col>
                <p class="comma-sep">
                    <b>Жанры:</b> <span v-for="genre in genres"> {{ genre }}</span>
                </p>
                <p class="comma-sep">
                    <b>Отношения:</b> <span v-for="ship in relationships"> {{ ship }}</span>
                </p>
                <p class="tag-list">
                    <span class="tags">
                        <b>Теги: </b>
                        <Tag severity="secondary"
                            v-for="tag in tags" :value="tag"/>
                    </span>
                </p>
                <Divider class="inner-card-divider"/>
                <p>
                    {{ description }}
                </p>
                </v-col>
            </v-row>
                
        </v-container>
        </template>
        
    </Card>
</template>

<script setup>
import { Card, Divider, Tag, Chip} from 'primevue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';

const props = defineProps({
    id: Number,
    title: String,
    author: String,
    fandom: String,
    last_update: String,
    rating: String,
    direction: String,
    size: String,
    genres: String,
    relationships: String,
    tags: String,
    description: String,
    img_url: String,
    read: Boolean
})
</script>

<style scoped>
.story-card-v2, .top-inner-card-v2, .bottom-inner-card-v2 {
    background-color: var(--main-dark-color);
    color: var(--main-light-color);
    box-shadow: none;
}
.story-card-v2 {
    /* max-width: 960px; */
    width: 100%;
    border-radius: 10px;
    font-size: 17px;
}
.story-card-v2 :deep(.p-card-body) {
    display: grid;
    grid-template-columns: auto;
    /* row-gap: 35px; */
    /* padding: 45px; */
    padding: 33px;
}
.story-card-v2 :deep(.p-card-title) {
    text-align: left;
    font-size: 32px;
    text-decoration: underline;
}
.story-card-v2 :deep(.p-card-title) a {
    color: var(--main-light-color);
}

/* Grids */
.main-card-grid {
    display: grid;
    flex-direction: row;
    row-gap: 35px;
}
.top-inner-card-grid {
    display: inline-grid;
    grid-template-columns: 1fr 3fr; 
    column-gap: 35px;
    height: 100%;
    width: 100%;

    text-align: left;
    line-height: 1.2;
}
.col-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-self: end;
    align-items: flex-end;
}
.col-2 .row-2 {
    display: grid;
    gap: 20px;
}
.col-2 .row-2 div {
    display: flex;
    align-items: center;
}

.img-col img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
}
.img-col {
    /* background: linear-gradient(135deg, rgba(65, 75, 91, 0.5) 31%, rgba(0, 0, 0, 0.5) 100%);
    padding: 0; */
    /* padding-left: 0; */
}

.read-work-label {
    background-color: var(--main-blue-color);
}
.read-work-label :deep(.p-chip-label) {
    font-weight: 700;
    color: var(--main-light-color);
}
.read-work-label img {
    width: 24px; 
    height: 24px;
}
.counter-divider {
    height: 32px; 
    margin: 0 10px;
    border-inline-start: 2px solid var(--main-light-color);
}

/* Bottom card */
.bottom-inner-card-v2 :deep(.p-divider) {
    margin-top: 35px;
    margin-bottom: 35px;
}
.inner-card-divider {
    border-top: 1px solid var(--main-light-color);
}

/* .comma-sep:not(:first-child), .tag-list {
    margin-top: auto;
} */
.comma-sep, .tag-list {
    margin-top: auto;
}
.comma-sep {
    text-align: left;
    line-height: 1.2;
}
.comma-sep span:not(:last-child)::after {
    content: ", ";
}
.tags {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

</style>