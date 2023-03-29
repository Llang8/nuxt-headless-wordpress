import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import types from './types'

const state = function() {
    return {
        pages: []
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    types
}