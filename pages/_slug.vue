<!-- Default WordPress page content -->
<template>
    <dynamic :page="page" :template="page.acf?.template" />
</template>

<script>
import dynamic from '~/components/page-templates/dynamic.vue'

export default {
    components: {
        dynamic
    },
    async asyncData({ params, $axios }) {
        const page = await $axios.$get(`/wp-json/wp/v2/pages?slug=${params.slug}`)

        if (page[0].type === 'post' || page[0].type === 'page') {
            const acf = await $axios.$get(`/wp-json/acf/v3/${page[0].type}s/${page[0].id}`)
            page[0].acf = acf
        }

        return { page: page[0] }
    },
}
</script>