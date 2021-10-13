<template>
  <div>
    <ListaDeTarefas />
    <div
    class="mt-16 animate__animated animate__slideInDown"
    v-if="$store.state.tarefas.length == 0"
    >
      <center>
        <v-icon 
        size="130" 
        color="primary"
        > mdi-check </v-icon>
        <div
        class="text-h5 primary--text "
        >
          Nenhuma tarefa
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from "../components/tarefas/ListaDeTarefas.vue";
export default {
  components: {
    ListaDeTarefas,
  },
};
</script>