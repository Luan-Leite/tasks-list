<template>
  <div>
    <v-list-item
      :class="{ 'blue light-blue lighten-3': tarefa.concluido }"
      @click="handleAtualizaTarefa"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
            >{{ tarefa.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <MenuTarefa :tarefa="tarefa"/>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import MenuTarefa from './MenuTarefa.vue';
export default {
  components: { MenuTarefa },
  props: ["tarefa"],

  methods: {
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)
    },
    handleAtualizaTarefa(){
      this.tarefa.concluido = !this.tarefa.concluido
      this.$store.dispatch('concluirTarefa', this.tarefa)
    }
  },
};
</script>

<style>
</style>

