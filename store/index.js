import Vue from "vue"
import Vuex from "vuex"

import pagesModule from "./modules/pages"
import menuModule from "./modules/menu"

import { FETCH_MAIN_MENU } from "./modules/menu/types"

Vue.use(Vuex)

const modules = {
  pages: pagesModule,
  menu: menuModule,
}

export default () => new Vuex.Store({
  state: function() {},
  actions: {
    async nuxtServerInit({commit, dispatch}) {
      console.log("SERVER INIT")

      /* Pull in main menu on server init */
      await dispatch(`menu/${FETCH_MAIN_MENU}`)
    }  
  },
  mutations: {},
  getters: {},
  modules,
})
