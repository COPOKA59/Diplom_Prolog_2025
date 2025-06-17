<template>
    <Card class="story-card-v2" :key="work.id">
        <template #title>
            <v-container>
                <v-row>
                    <v-col class="story-name" cols="12">
                        <RouterLink :to="{ name: 'StoryPage', params: { id: work.id } }">
                            {{ work.name }}
                        </RouterLink>
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template #content>
          <v-container>
            <v-row>
                <v-col class="img-col" cols="12" lg="3" md="3" sm="12">
                    <img :src="img_url ? img_url : '/src/assets/img/default_cover.svg'"/>
                </v-col>
                
                <v-col class="col-1">
                    <p>
                        <b>Автор:</b> <u> {{ work.author }}</u>
                    </p>
                    <p class="comma-sep"> 
                        <b>Фандом:</b> <span v-for="fd in work.fandom_details.map(fandom => fandom.name)"> {{ fd }} </span> 
                    </p>
                    <p> <b>Обновлено:</b> {{ (new Date(work.date_of_editing)).toLocaleDateString('ru-RU') }} </p>
                    <p> <b>Рейтинг:</b> {{ work.rating_details.name }} </p>
                    <p> <b>Направленность:</b> {{ work.orientation_details.name }} </p>
                    <p> <b>Размер:</b> {{ work.size_details.name }} </p>
                </v-col>

                <!-- <v-col class="col-2">
                    <div class="row-1" v-if="read && !isAuthor">
                        <Chip class="read-work-label" label="Прочитано">
                        <template #icon>
                        <img src="@/assets/icons/task_alt_24dp_D9D9D9.svg"/>
                        </template>
                        </Chip>
                    </div>

                </v-col> -->
            </v-row>
            

            <v-row>
                <v-col>
                
                <p class="tag-list">
                    <span class="tags">
                        <b>Жанры: </b>
                        <Tag severity="secondary"
                            v-for="genre in work.genres_details" :value="genre.name"/>
                    </span>
                </p>
                <Divider class="inner-card-divider"/>
                <p>
                    {{ work.description }}
                </p>
                </v-col>
            </v-row>

            <v-row v-if="isAuthor">
                <v-col class="edit-button">
                    <Button severity="primary" @click="$router.push({ name: 'Editing Header', params: { workId: work.id } })">  
                        <i class="pi pi-pencil"></i>
                        <span>Изменить</span>
                    </Button>
                    <Button severity="danger" @click="async () => { await deleteWork(work.id); reloadRouter(); }">
                        <i class="pi pi-trash"></i>
                        <span>Удалить</span>
                    </Button>
                </v-col>
            </v-row>
                
        </v-container>
        </template>
        
    </Card>
</template>

<script setup>
import { Card, Divider, Tag, Chip, Button} from 'primevue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { ref } from 'vue';
import { deleteWork } from '@/services/works/works';
import { useRouter } from 'vue-router';
const router = useRouter();

function reloadRouter() {
  // 0 means “reload the current URL”
  router.go(0);
}

const props = defineProps({
    work: Object,
    isAuthor: { type: Boolean, default: false }
})
// const isAuthor = true;
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
/* .story-card-v2 :deep(.p-card-title) {
    text-align: left;
    font-size: 32px;
    text-decoration: underline;
} */
.story-card-v2 .story-name {
    text-align: left;
    font-size: 32px;
    text-decoration: underline;
}
.story-card-v2 :deep(.p-card-title) a {
    color: var(--main-light-color);
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
/* .img-col {
    background: linear-gradient(135deg, rgba(65, 75, 91, 0.5) 31%, rgba(0, 0, 0, 0.5) 100%);
    padding: 0;
    padding-left: 0;
} */

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
.edit-button span {
  @media (max-width: 480px) {
    display: none;
  }
}
/* .edit-button {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: flex-end;
} */
/* .edit-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
} */
.edit-button {
    display: flex;
    justify-content: end;
    gap: 20px;
    padding: 0;
}
@media (max-width: 600px) {
    .story-card-v2, :deep(.p-tag-label) {
        font-size: 14px;
    }
    :deep(.p-card-title) a {
        font-size: 26px;
    }
    .story-card-v2 :deep(.p-card-body) {
        padding: 10px;
    }
  }
@media (min-width: 1200px) {
  .story-card-v2 {
    width: 920px;
  }
}
</style>