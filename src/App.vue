<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"  class="primary lighten-2" dark app overlay-opacity="0.4">
      <v-img
        dark
        src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        class="pt-5 text-center"
      >
        <v-avatar color="primary" size="90">
          <v-icon size="40" dark> mdi-vuejs </v-icon>
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h4"> Vue.js </v-list-item-title>
            <v-list-item-subtitle class="text-h6 white--text"> Lista de tarefas </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      height='140'
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      
        <v-app-bar-title class="mt-8">
          <InputTarefa />
        </v-app-bar-title>
      
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from "./components/tarefas/InputTarefa.vue";
export default {
  components: { InputTarefa },
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-image", to: "/sobre" },
    ],
  }),
};
</script>