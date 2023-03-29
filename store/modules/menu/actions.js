import { FETCH_MAIN_MENU, SET_MAIN_MENU } from './types.js'

export default {
  [FETCH_MAIN_MENU]: async function({ commit }) {
    console.log('FETCH_MAIN_MENU Action')
    
    try {
      const mainMenu = await this.$axios.$get('/wp-json/acf/v3/options/main-nav')
      console.log(mainMenu)
      commit(SET_MAIN_MENU, mainMenu.acf.nav_items)
    } catch(e) {
      console.log(e)
    }
  },
}