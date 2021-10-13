import db from '../services/localbase'

export default {
    buscaTarefas(state) {
        db.collection('tarefas').get().then(tarefasDB => {
            state.tarefas = tarefasDB
        })
    },
}