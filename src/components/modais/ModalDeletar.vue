<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Excluir tarefa </v-card-title>
        <v-card-text
          >Você tem certeza que quer excluir essa tarefa?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="$emit('fecharModal')"> Cancelar </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="handleDelTarefa(tarefa.id)"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    handleDelTarefa(id) {
      this.$store.dispatch("removeTarefa", id);
      this.$emit("fecharModal");
    },
  },
};
</script>

<style>
</style>