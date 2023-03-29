import { SET_MAIN_MENU } from './types.js'

export default {
    [SET_MAIN_MENU]: function(state, menu) {
        console.log('SET_MAIN_MENU mutation')
        state.mainMenu = menu
    }
}