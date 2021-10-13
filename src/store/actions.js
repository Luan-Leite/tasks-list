import db from '../services/localbase'

export default {
    adicionarTarefa({ commit }, title) {
        db.collection('tarefas').add({
            id: new Date().getTime(),
            title,
            concluido: false
        }).then(() => {
            commit('buscaTarefas')
        })
    },

    atualizarTarefa({ commit }, upTarefa) {
        db.collection('tarefas').doc({ id: upTarefa.id }).update({
            title: upTarefa.title,
        }).then(() => {
            commit('buscaTarefas')
        })
    },

    concluirTarefa({ commit }, upTarefa) {
        db.collection('tarefas').doc({ id: upTarefa.id }).update({
            concluido: upTarefa.concluido
        }).then(() => {
            commit('buscaTarefas')
        })
    },

    removeTarefa({ commit }, idTarefa) {
        db.collection('tarefas').doc({ id: idTarefa }).delete()
            .then(() => {
                commit('buscaTarefas')
            })
    }
}