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
        const page = await $axios.$get(`/wp-json/headless/v1/frontpage`)

        return { page }
    },
}
</script>