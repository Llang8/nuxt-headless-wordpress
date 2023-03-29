<template>
    <header>
        <nav class="md:container mx-auto flex justify-between items-center py-8">
            <div>
                <img src="https://via.placeholder.com/150x80" alt="">
            </div>
            <ul class="flex items-center gap-8" v-if="mainMenu.length">
                <NavLink v-for="item in mainMenu" :key="item.link?.ID" :item="item" />
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