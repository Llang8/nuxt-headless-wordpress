<template>
    <section class="md:container mx-auto py-24 section-content-basic">
        <div v-html="acf.body"></div>
    </section>
</template>

<script>
export default {
    props: ['acf']
}
</script>

<style>
.section-content-basic h2 {
    @apply text-2xl font-bold mb-4;
}

.section-content-basic h1 {
    @apply text-3xl font-bold mb-4;
}

.section-content-basic p {
    @apply mb-4;
}
</style>