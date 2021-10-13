<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar tarefa </v-card-title>

        <v-text-field
          class="px-4"
          label="Informe o novo nome da tarefa"
          v-model="newTitle"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="$emit('fecharModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleUpTarefa"> Salvar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:[
      'tarefa'
    ],
    data () {
      return {
        dialog: true,
        newTitle: null
      }
    },
    created() {
      this.newTitle = this.tarefa.title
    },

    methods: {
      handleUpTarefa(){
        let upTarefa={
          title: this.newTitle,
          id: this.tarefa.id
        }
        this.$store.dispatch('atualizarTarefa', upTarefa)
        this.$emit('fecharModal')
      }
    },
  }
</script>

<style>
</style>