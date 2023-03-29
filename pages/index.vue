<template>
  <div class="container">
    <div>
      <h1 class="title">
        headless-wordpress-starter
      </h1>
      <h2 class="subtitle">
        Starter project for headless WordPress instances
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FETCH_PAGES } from '~/store/modules/pages/types'
import { GET_MAIN_MENU } from '~/store/modules/menu/types'

export default {
  components: {
  },
  methods: {
    ...mapActions('pages', {
      getPages: FETCH_PAGES,
    })
  },
  mounted() {
    this.getPages()
  }
}
</script>
