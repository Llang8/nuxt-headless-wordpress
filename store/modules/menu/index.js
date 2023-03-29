import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import types from './types'
console.log(getters)
const state = function() {
    return {
        mainMenu: []
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