<template>
    <CreateStoryLayout>
        <Panel class="default-form">

        <v-container>
            <v-form>
                <v-row class="questions-row" v-for="q in questions">
                    <v-col cols="12"> 
                        <label>{{ q }}</label>
                    </v-col>
                    <v-col cols="12" class="default-form-input"> 
                        <Textarea rows="4" />
                    </v-col>
                </v-row>

                <!-- <v-row>
                    <v-col>
                        <ChapterCardEdit :id="99" :chapter_number="1" :chapter_title="'Lfhrei Halt ei'" :published="new Date('2021-01-01')"/>
                    </v-col>
                </v-row> -->

                <v-row >
                    <v-col class="save-button">
                        <Button severity="primary"> Сохранить </Button>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>

        </Panel>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Button, Textarea } from 'primevue';

const questions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Nulla at massa dignissim, pretium eros eu, volutpat orci. Etiam sit amet augue egestas, molestie metus nec, euismod felis?",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam dictum tincidunt. \
    Pellentesque ultrices, sapien ut tincidunt mollis, purus lectus faucibus mauris, ac venenatis lorem dolor vel velit?",
    "Sed pulvinar nisl id lorem egestas dignissim?",
    ]
</script>

<style scoped>
.questions-row {
    margin-bottom: 20px;
}
</style>