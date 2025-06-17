<template>
    <Card>
        <template #title>
            <div class="item-container">
                <div class="item-name">
                    <!-- {{ name }}. Quisque vulputate vulputate enim quis pretium. Nullam malesuada semper ornare. Etiam tincidunt massa sed turpis rutrum, vel eleifend lorem tincidunt -->
                    {{ name }}
                </div>

                <div class="delete-item">
                    <Button icon="pi pi-times" severity="secondary"
                     @click="$emit('delete-item')"/>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { Card, Button } from 'primevue';

const props = defineProps({
    name: String
});
</script>

<style scoped>
:deep(.p-card-body) {
    gap: 0;
    padding: 10px;
}
.p-card {
    box-shadow: none;
    border-radius: 0;
}
.p-card:hover {
    background-color: var(--p-primary-500);
}
.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-name {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
}

.delete-item button {
    background-color: transparent;
    border: none;
    aspect-ratio: 1 / 1;
}
@media (max-width: 600px) {
    .item-name {
        font-size: 14px;
    }
    :deep(.p-card-body) {
        padding: 5px;
    }
}
</style>