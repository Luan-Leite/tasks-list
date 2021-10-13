<template>
  <div class="about">
    <v-list disabled>
      <v-subheader class="text-h6 black--text"
        >Ferramentas utilizadas:</v-subheader
      >
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" class="pl-10 pt-0 ">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-footer color="primary lighten-1 mt-5" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          © Feito por Luan Leite — {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Vue.js", icon: "mdi-vuejs"},
      { text: "Vuetify", icon: "mdi-vuetify"},
      { text: "VueRouter", icon: "mdi-vuejs"},
      { text: "Animate css", icon: "mdi-language-css3"},
      { text: "Drag and Drop", icon: "mdi-drag-variant"},
      { text: "Netilify", icon: "mdi-web"},
      { text: "Localbase DB", icon: "mdi-database-outline"},
      { text: "Git", icon: "mdi-git"},
      { text: "GitHub", icon: "mdi-github"},
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  display: flex;
  flex-direction: row;
}
</style>