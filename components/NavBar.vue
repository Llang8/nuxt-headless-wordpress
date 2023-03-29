<template>
    <header>
        <nav class="main-nav">
            <ul v-if="mainMenu.length">
                <li v-for="item in mainMenu" :key="item.link?.ID">
                    <nuxt-link :to="item.link.post_name">
                        {{ item.link.post_title }}
                    </nuxt-link>
                    <!-- If post has children, render child list -->
                    <ul v-if="item.children">
                        <li v-for="child in item.children" :key="child.nav_item?.ID">
                            <nuxt-link :to="child.nav_item.post_name">
                                {{ child.nav_item.post_title }}
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { FETCH_MAIN_MENU, GET_MAIN_MENU } from '~/store/modules/menu/types'

export default {
    methods: {
        ...mapActions('menu', {
            fetchMainMenu: FETCH_MAIN_MENU,
        })
    },
    computed: {
        ...mapState('menu', [
            'mainMenu'
        ])
    }
}

</script>