<template>
    <h1>Структура 1</h1>
    <Panel class="default-form">

    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <h2>Основная информация</h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" lg="2" md="2" sm="12"> 
                    <label>Описание</label>
                </v-col>
                <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                    <Textarea rows="8" />
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12" lg="2" md="2" sm="12"> 
                    <label>Краткий синопсис</label>
                </v-col>
                <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                    <Textarea rows="4" />
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" lg="2" md="2" sm="12"> 
                    <label>Расширенный синопсис</label>
                </v-col>
                <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                    <Textarea rows="8" />
                </v-col>
            </v-row>

            <v-row >
                <v-col class="save-button">
                    <Button severity="primary"> Сохранить </Button>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
    
    </Panel>
</template>

<script setup>
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Divider, Textarea, Button } from 'primevue';
</script>

<style scoped>
</style>