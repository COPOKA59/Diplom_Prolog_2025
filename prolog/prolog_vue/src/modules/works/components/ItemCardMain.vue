<template>
    <Card :key="id">
        <template #title>
            <div class="item-container">
                <RouterLink :to="{ name: pageName, params: { [paramName]: id } }">
                <div class="item-text">
                    {{ title }}
                </div>
                </RouterLink>

                <div v-if="canDelete" class="item-chapter">
                    <Button icon="pi pi-trash" severity="secondary"
                     @click="$emit('delete-item')"/>
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
    title: String,
    isChapter: { type: Boolean, default: false },
    number: Number,
    canDelete: { type: Boolean, default: false },
    pageName: String,
    paramName: { type: String, default: 'itemId' }
});

</script>

<style scoped>
:deep(.p-card-body) {
    gap: 0;
    padding: 0;
}
.p-card {
    border: 2px solid var(--main-light-color);
}

.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    --btn-width: 60px;
    --padding-size: 24px;
}
.item-text, a {
    /* width: calc(100% - 40px); */
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: var(--main-light-color);
    text-decoration: none;
}
.item-text {
    padding: var(--padding-size);
    /* padding-right: 8px; */
}

.item-chapter button {
    background-color: transparent;
    border: none;
    width: var(--btn-width);
    aspect-ratio: 1 / 1;
}

@media (max-width: 600px) {
    .item-text {
        font-size: 14px;
    }
    .item-text {
        padding: calc(var(--padding-size) - 10px);
        padding-right: 8px;
    }
    .item-chapter button {
        width: calc(var(--btn-width) - 20px);
        border-radius: 20px;
    }
}
</style>