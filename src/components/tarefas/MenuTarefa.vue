<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{on, attrs }">
        <v-btn color="primary" dark icon v-bind="attrs" v-on="on"> 
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item v-for="(item, index) in items" 
        :key="index" 
        @click="item.click()">
          <v-icon :color="item.color" left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>      
    </v-menu>
    <ModalEditar
      v-if="items[0].modal"
      @fecharModal='items[0].modal = false'
      :tarefa = 'tarefa'
    />
    <ModalDeletar
      v-if="items[1].modal"
      @fecharModal='items[1].modal = false'
      :tarefa = 'tarefa'
    />

  </div>
</template>


<script>
import ModalDeletar from '../modais/ModalDeletar.vue';
import ModalEditar from  '../modais/ModalEditar.vue'
export default {
  components: {
    ModalEditar,
    ModalDeletar,

  },
  props: [
    'tarefa'
  ],
  data: () => ({
    items: [
      {
        title: "Editar",
        icon: "mdi-pencil-outline",
        color: "light-blue accent-3",
        modal: false,
        click() {
          this.modal = true;
        },
      },
      {
        title: "Excluir",
        icon: "mdi-trash-can-outline",
        color: "red",
        modal: false,
        click() {
          this.modal = true
        },
      },
    ],
  }),
};
</script>
<style>
</style>