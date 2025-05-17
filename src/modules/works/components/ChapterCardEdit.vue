<template>
    <Card :key="id">
        <template #title>
            <v-container>
                <v-row>
                    <v-col>
                        Глава {{ chapter_number }}. {{ chapter_title }}
                        <!-- <Button class="delete-chapter" icon="pi pi-trash" severity="secondary"/> -->
                    </v-col>

                    <v-col><Button class="delete-chapter" icon="pi pi-trash" severity="secondary"/></v-col>
                </v-row>
            </v-container>
        </template>
    </Card>
</template>

<script setup>
import { Card, Button } from 'primevue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';

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
}
:deep(.p-card-subtitle) {
    color: grey;
    text-decoration: none;
}
.p-card {
    cursor: pointer;

    border: 2px solid var(--main-light-color);
}
.chapter-link {
    text-decoration: none;
}

:deep(.p-card-body) {
    padding: 0;
}
.delete-chapter, .delete-chapter:hover {
    background-color: transparent;
    border: none;
}
</style>