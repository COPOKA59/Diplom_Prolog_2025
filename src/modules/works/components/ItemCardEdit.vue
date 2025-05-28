<template>
    <Card :key="id">
        <template #title>
            <div class="item-edit-container">
                <RouterLink :to="{ name: pageName, params: { id: id } }">
                <div class="item-text">
                    {{ name }} Quisque vulputate vulputate enim quis pretium. Nullam malesuada semper ornare. Etiam tincidunt massa sed turpis rutrum, vel eleifend lorem tincidunt
                </div>
                </RouterLink>

                <div class="delete-item">
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
    name: String,
    pageName: String
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

.item-edit-container {
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
    padding-right: 8px;
}

.delete-item button {
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
        padding-right: 8px;;
    }
    .delete-item button {
        width: calc(var(--btn-width) - 20px);
        border-radius: 20px;
    }
}
</style>