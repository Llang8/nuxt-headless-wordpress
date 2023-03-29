<!-- Default WordPress page content -->
<template>
    <dynamic :page="page" :template="page.acf.template" />
</template>

<script>
import dynamic from '~/components/page-templates/dynamic.vue'

export default {
    components: {
        dynamic
    },
    async asyncData({ params, $axios }) {
        const page = await $axios.$get(`/wp-json/headless/v1/frontpage`)

        const acfResult = await $axios.$get(`/wp-json/acf/v3/pages/${page.id}`)
        page.acf = acfResult.acf

        return { page }
    },
}
</script>