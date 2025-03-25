<template>
    <MainLayout>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>AAAAAAAAAA</h1>
            <p>aaaaaaa.</p>
          </v-col>
        </v-row>
      </v-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";

const works = [
  { title: "Возвращение в Оксфорд",
    author: "Дороти Ли Сэйерс",
    fandom: "оригинальная работа",
    last_update: "21.03.2025",
    rating: "NC-17",
    direction: "слэш",
    size: "миди",
    genres: "Детектив, Драма, Повседневность",
    relationships: "персонаж 1 / персонаж 2, персонаж 3 / персонаж 4",
    tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                    Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                    interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
    img_url: "https://images.unsplash.com/photo-1709566967168-42d00259a413?q=80&w=1974&auto=format&fit=crop&ixlib=\
              rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    read: true
    },

  { title: "Тайная история",
    author: "Донна Тартт",
    fandom: "оригинальная работа",
    last_update: "21.03.2025",
    rating: "NC-17",
    direction: "слэш",
    size: "миди",
    genres: "Детектив, Драма, Повседневность",
    relationships: "персонаж 1 / персонаж 2, персонаж 3 / персонаж 4",
    tags: ["Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                    Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                    interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
    img_url: "https://cdn1.ozone.ru/s3/multimedia-k/6146737028.jpg",
    read: false
  },

  { title: "Название произведения ааааааа ааа аа а а аааааааа ааа а а аааааааа аааааа",
    author: "eclipsa2001",
    fandom: "оригинальная работа",
    last_update: "21.03.2025",
    rating: "NC-17",
    direction: "слэш",
    size: "миди",
    genres: "Детектив, Драма, Повседневность",
    relationships: "персонаж 1 / персонаж 2, персонаж 3 / персонаж 4",
    tags: ["AU - кофейня", "Попаданчество", "Путешествия", "Студенты", "Амнезия", "Повествование от первого лица", "Счастливый конец"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elit ut risus luctus hendrerit. \
                    Cras sed feugiat mi. Mauris dictum libero sit amet condimentum luctus. Nulla accumsan leo efficitur, \
                    interdum libero in, fringilla purus. Fusce porta molestie porttitor.",
    img_url: "https://images.unsplash.com/photo-1627551445215-913b7e45c60b?q=80&w=2030&auto=format&fit=crop&ixlib=\
              rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    read: true
  },
  { title: "",
    author: "",
    fandom: "",
    last_update: "",
    rating: "",
    direction: "",
    size: "",
    genres: "",
    relationships: "",
    tags: [],
    description: "",
    img_url: "",
    read: false
  },
]
</script>