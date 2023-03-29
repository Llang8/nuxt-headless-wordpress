import { SET_PAGES } from './types.js'

export default {
    [SET_PAGES]: function(state, pages) {
        console.log('SET_PAGES mutation')
        state.pages = pages
    }
}