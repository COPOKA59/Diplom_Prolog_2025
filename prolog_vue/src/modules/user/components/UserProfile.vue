<template>
    <Card class="user-profile">
        <template #content>
            <v-container>
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="12">
                        <div style="text-align: center;">
                            <img class="user-profile-img" src="../../../assets/img/user_default.jpg"/>
                            <!-- <img class="user-profile-img" src="https://images.unsplash.com/photo-1543270122-f7a11ad44f3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> -->
                            <h1>{{ user?.username }}</h1>
                        </div>
                    </v-col>
                    <v-col class="user-stats" cols="12" lg="9" md="9" sm="12">
                        <div>
                            <img src="../../../assets/icons/user_profile/calendar.svg"/>
                            <p> Дата создания: 22.05.2018 </p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/user_profile/feather.svg"/>
                            <p> Количество работ: 23 </p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/user_profile/book.svg"/>
                            <p> Количество сборников: 19 </p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/user_profile/globe.svg"/>
                            <p> Количество миров: 3 </p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/user_profile/user_octagon.svg"/>
                            <p> Количество персонажей: 59 </p>
                        </div>
                    </v-col>
                </v-row>
                <Divider/>
                <v-row>
                    <v-col>
                        <!-- <p>
                            Описание.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, interdum libero in, fringilla purus. Fusce porta molestie porttitor. In interdum convallis imperdiet.
                            Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, interdum libero in, fringilla purus.
                        </p> -->
                        <p>
                            {{ user?.description }}
                        </p>
                    </v-col>
                    
                </v-row>
            </v-container>
        </template>
    </Card>
</template>

<script setup>
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Card, Divider } from 'primevue';
/* import { useUserStore } from '@/stores/user';

const userStore = useUserStore(); */
const props = defineProps({
    user: Object
});
</script>

<style scoped>
.user-profile-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
.user-stats {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.user-stats div {
    display: flex;
    gap: 10px;
}
@media (min-width: 960px) {
  .user-stats {
    padding-left: 30px;
    padding-bottom: 30px;
  }
}
</style>