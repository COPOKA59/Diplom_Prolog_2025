<template>
    <Card class="story-card-v2" :key="id">
        <template #content>
          <p-grid class="main-card-grid">
            <p-row>
                <Card class="top-inner-card-v2">
                    <template #content>
                        <p-grid class="top-inner-card-grid">
                            <p-col class="img-col">
                                <img :src="img_url"/>
                            </p-col>
                            
                            <p-col>
                            <p-grid class="top-right-grid">
                                <p-col class="col-1">
                                        <p>
                                          <b>Автор:</b> <u> {{ author }}</u>
                                        </p>
                                        <p> <b>Фандом:</b> оригинальная работа </p>
                                        <p> <b>Обновлено:</b> {{ last_update }} </p>
                                        <p> <b>Рейтинг:</b> {{ rating }} </p>
                                        <p> <b>Направленность:</b> {{ direction }} </p>
                                        <p> <b>Размер:</b> {{ size }} </p>
                                </p-col>
                                
                            </p-grid>
                            
                            </p-col>
                        </p-grid>
                    </template>
                </Card>
            </p-row>

            <p-row>
                <Card class="bottom-inner-card-v2">
                    <template #content>
                        <p class="comma-sep">
                            <b>Жанры:</b> <span v-for="genre in genres"> {{ genre }}</span>
                        </p>
                        <p class="comma-sep">
                            <b>Отношения:</b> <span v-for="ship in relationships"> {{ ship }}</span>
                        </p>
                        <p>
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
                    </template>
                    <template #footer>
                        <Button label="Сохранить" rounded severity="secondary">
                            <template #icon>
                            <img src="@/assets/icons/bookmark_24px_weight_2.5.svg"/>
                            </template>
                        </Button>
                        <Button label="Нравится" rounded severity="secondary">
                            <template #icon>
                            <img src="@/assets/icons/thumbs-up_24px_weight_2.5.svg"/>
                            </template>
                        </Button>
                        <Button label="Комментарии" rounded severity="secondary">
                            <template #icon>
                            <img src="@/assets/icons/message-circle_24px_weight_2.5.svg"/>
                            </template>
                        </Button>
                        <Button label="Прочитано" rounded severity="secondary">
                            <template #icon>
                            <img src="@/assets/icons/task_alt_24dp_D9D9D9.svg"/>
                            </template>
                        </Button>
                    </template>
                </Card>
            </p-row>
                
          </p-grid>
        </template>
        
    </Card>
</template>

<script setup>
import { Card, Divider, Tag, Chip, Button} from 'primevue';

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
    row-gap: 35px;
    padding: 45px; 
}
.story-card-v2 :deep(.p-card-title) {
    text-align: left;
    font-size: 32px;
    text-decoration: underline;
}
.story-card-v2 :deep(.p-card-title) a {
    color: var(--main-light-color);
}
.story-card-v2 :deep(.p-card-footer) {
    display: flex;
    gap: 20px;
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
 /* .top-right-grid > div:nth-child(2) */
.top-right-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.top-right-grid .col-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-self: end;
    align-items: flex-end;
}
.top-right-grid .col-2 .row-2 {
    display: grid;
    gap: 20px;
}
.top-right-grid .col-2 .row-2 div {
    display: flex;
    align-items: center;
}

.top-inner-card-v2, .bottom-inner-card-v2 {
    border-radius: 0;
}
.top-inner-card-v2 :deep(.p-card-body), 
.bottom-inner-card-v2 :deep(.p-card-body) {
    padding: 0;
}

.img-col img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
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
.bottom-inner-card-v2 {
    text-align: left;
    line-height: 1.2;
}
.bottom-inner-card-v2 p {
    margin-top: auto;
}
.bottom-inner-card-v2 .comma-sep span:not(:last-child)::after {
    content: ", ";
}
.tags {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}

</style>