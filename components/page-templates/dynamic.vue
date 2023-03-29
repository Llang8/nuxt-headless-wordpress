<template>
    <main>
        <component v-for="section in page.acf?.content" :key="section._key" :acf="section" :is="section.acf_fc_layout" />
    </main>
</template>

<script>


export default {
    props: ['page'],
    created() {
        console.log(this.page)
    }
}
</script>