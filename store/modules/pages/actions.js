import { FETCH_PAGES, FETCH_PAGE, SET_PAGES } from './types.js'

export default {
  [FETCH_PAGES]: async function({ commit }) {
    console.log('FETCH_PAGES action')
    
    try {
      const pages = await this.$axios.$get('/wp-json/wp/v2/pages')
      commit(SET_PAGES, pages)
    } catch(e) {
      console.log(e)
    }
  },
  [FETCH_PAGE]: async function({ commit, slug }) {
    console.log('FETCH_PAGE action')
    
    try {
      const page = await this.$axios.$get(`/wp-json/wp/v2/pages?slug=${slug}`)
      return page
    } catch(e) {
      console.log(e)
    }
  }
}