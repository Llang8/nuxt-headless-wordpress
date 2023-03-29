<!-- Default WordPress page content -->
<template>
    <dynamic :page="page" />
</template>

<script>
import dynamic from '~/components/page-templates/dynamic.vue'

export default {
    components: {
        dynamic
    },
    async asyncData({ params, $axios }) {
        const page = await $axios.$get(`/wp-json/wp/v2/pages?slug=${params.slug}`)

        return { page: page[0] }
    },
}
</script>