<template>
    <CreateStoryLayout>
    <v-row>
        <v-col>
            <ChapterCardEdit :id="99" :chapter_number="1" :chapter_title="'Lfhrei Halt ei'" :published="new Date('2021-01-01')"/>
        </v-col>
    </v-row>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import ChapterCardEdit from '../components/ChapterCardEdit.vue';
</script>

<style scoped></style>