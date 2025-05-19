<template>
    <Card :key="id">
        <template #title>
            <!-- <v-container>
                <v-row class="chapter-edit-container">
                    <v-col class="chapter-text" style="width: calc(100% - 40px);">
                        <span>
                            Глава {{ chapter_number }}. {{ chapter_title }}. Quisque vulputate vulputate enim quis pretium. Nullam malesuada semper ornare. Etiam tincidunt massa sed turpis rutrum, vel eleifend lorem tincidunt
                        </span>
                    </v-col>

                    <v-col style="width: 40px;" class="delete-col" ><Button class="delete-chapter" icon="pi pi-trash" severity="secondary"/></v-col>
                </v-row>
            </v-container> -->
            <div class="chapter-edit-container">
                <RouterLink to="/editing/contents/chapter">
                <!-- <div class="chapter-text" @click="$router.push({ name: 'Editing Chapter' })"> -->
                <div class="chapter-text">
                    Глава {{ chapter_number }}. Quisque vulputate vulputate enim quis pretium. Nullam malesuada semper ornare. Etiam tincidunt massa sed turpis rutrum, vel eleifend lorem tincidunt
                </div>
                </RouterLink>

                <div class="delete-chapter">
                    <Button icon="pi pi-trash" severity="secondary"
                     @click="$router.push({ name: 'Editing Structure' })"/>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { Card, Button } from 'primevue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: Number,
    chapter_number: Number,
    chapter_title: String,
    published: Date,
    text: String,
})

</script>

<style scoped>
:deep(.p-card-body) {
    gap: 0;
    padding: 0;
}
.p-card {
    border: 2px solid var(--main-light-color);
}

.chapter-edit-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    --btn-width: 60px;
    --padding-size: 24px;
}
.chapter-text, a {
    /* width: calc(100% - 40px); */
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: var(--main-light-color);
    text-decoration: none;
}
.chapter-text {
    padding: var(--padding-size);
    padding-right: 8px;
}

.delete-chapter button {
    background-color: transparent;
    border: none;
    width: var(--btn-width);
    aspect-ratio: 1 / 1;
}

@media (max-width: 600px) {
    .chapter-text {
        font-size: 14px;
    }
    .chapter-text {
        padding: calc(var(--padding-size) - 10px);
        padding-right: 8px;;
    }
    .delete-chapter button {
        width: calc(var(--btn-width) - 20px);
        border-radius: 20px;
    }
}
</style>