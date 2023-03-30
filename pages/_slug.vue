<!-- Default WordPress page content -->
<template>
    <main>
        <component v-for="section in page.acf?.content" :key="section._key" :acf="section" :is="section.acf_fc_layout" />
    </main>
</template>

<script>
export default {
    async asyncData({ params, $axios }) {
        const page = await $axios.$get(`/wp-json/wp/v2/pages?slug=${params.slug}`)

        return { page: page[0] }
    },
}
</script>