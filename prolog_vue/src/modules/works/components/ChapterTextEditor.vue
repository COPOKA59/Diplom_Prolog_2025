<script setup lang="ts">
import Editor from 'primevue/editor';
</script>

<template>
<Editor editorStyle="height: 320px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
            <button v-tooltip.bottom="'Strikethrough'" class="ql-strike"></button>
            <button v-tooltip.bottom="'Ordered list'" class="ql-list" value="ordered"></button>
            <button v-tooltip.bottom="'Bullet list'" class="ql-list" value="bullet"></button>
            <select class="ql-align">
                <option value=""></option>
                <option value="center"></option>
                <option value="right"></option>
                <option value="justify"></option>
            </select>
            <button v-tooltip.bottom="'Remove Formatting'" class="ql-clean"></button>
        </span>
    </template>
</Editor>
</template>

<style>
.ql-editor ol li[data-list="bullet"]::before {
    content: '\2022';
}
</style>