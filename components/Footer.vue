<template>
    <footer class="bg-primary-dark">
        <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                <div class="px-5 py-2" v-for="item in mainMenu" :key="item.link?.ID" :item="item">
                    <nuxt-link :to="item.link?.post_name || '/'" class="text-base text-gray-300 hover:text-white">
                        {{ item.link.post_title }}
                    </nuxt-link>
                </div>
            </nav>
            <p class="mt-8 text-center text-base text-gray-600">
                &copy; 2023 Example LLC. All rights reserved.
            </p>
        </div>
    </footer>
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